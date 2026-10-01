import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdir } from "node:fs/promises";

const routes = [
  "/", "/about-us", "/become-patient", "/contact-us", "/hart-dental-reviews", "/our-team", "/privacy-policy", "/services", "/sitemap",
  "/services/childrens-dentistry-prince-george", "/services/cosmetic-dentistry-prince-george", "/services/dental-emergencies-prince-george",
  "/services/dental-implants-prince-george", "/services/dental-restoration-prince-george", "/services/endodontics-prince-george",
  "/services/oral-hygienecleaning-prince-george", "/services/orthodontics-invisalign-prince-george", "/services/periodontics-prince-george",
  "/services/sedation-dentistry-prince-george", "/services/sports-guards-prince-george", "/services/teeth-whitening-prince-george",
  "/services/tmj-prince-george", "/services/wisdom-teeth-removal-prince-george"
];

test("homepage renders without overflow or client errors", async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.emulateMedia({ reducedMotion: "reduce" });
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/Family dental care\s*in Prince George\./);
  await expect(page.locator(".home-hero img")).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);

  await page.evaluate(async () => {
    for (let top = 0; top < document.documentElement.scrollHeight; top += Math.max(400, window.innerHeight * 0.8)) {
      window.scrollTo(0, top);
      await new Promise((resolve) => window.setTimeout(resolve, 35));
    }
    window.scrollTo(0, 0);
  });
  const images = page.locator("img");
  for (let index = 0; index < await images.count(); index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate((item) => (item as HTMLImageElement).naturalWidth), { timeout: 10_000 }).toBeGreaterThan(0);
  }
  await mkdir("artifacts/qa", { recursive: true });
  await page.screenshot({ path: `artifacts/qa/home-${testInfo.project.name}.png`, fullPage: true });
});

test("responsive navigation is keyboard-operable", async ({ page }, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "desktop-1440") {
    await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Services", exact: true }).first()).toBeVisible();
    return;
  }
  const menu = page.locator("[data-nav-toggle]");
  const nav = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(nav).toBeHidden();
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(nav).toBeVisible();
  const bounds = await nav.boundingBox();
  // A blurred ancestor previously confined the drawer to a 79px strip.
  expect(bounds?.height).toBeGreaterThan(page.viewportSize()!.height - 100);
  await expect(nav.getByRole("link", { name: "Services", exact: true })).toBeFocused();
  await expect(page.locator("main")).toHaveAttribute("inert", "");
  await page.keyboard.press("Shift+Tab");
  await expect(menu).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(nav.getByRole("link", { name: "Request an appointment" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(menu).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
  await expect(nav).toBeHidden();
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
});

test("core pages pass automated accessibility checks", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of ["/", "/services", "/contact-us", "/our-team"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, `${route}: ${results.violations.map((item) => item.id).join(", ")}`).toEqual([]);
  }
});

test("appointment request is safe and non-delivering in preview", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-1440", "Run the form flow once.");
  let appointmentRequests = 0;
  page.on("request", (request) => {
    if (request.url().endsWith("/api/appointment")) appointmentRequests += 1;
  });
  await page.goto("/contact-us#request");
  const form = page.locator("[data-appointment-form]");
  await form.locator("input[name=name]").fill("Preview Test");
  await form.locator("input[name=phone]").fill("250-555-0100");
  await form.locator("input[name=email]").fill("preview@example.com");
  await form.locator("select[name=reason]").selectOption({ label: "New patient visit" });
  await expect(form.locator("input[type=checkbox]")).toHaveCount(0);
  await form.getByRole("button", { name: /send request/i }).click();
  await expect(form.locator("[data-form-status]")).toContainText(/no message was sent/i);
  expect(appointmentRequests).toBe(0);
});

test("all preserved routes return content", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-1440", "Run the route matrix once.");
  for (const route of routes) {
    const response = await request.get(route);
    expect(response.status(), route).toBe(200);
    expect(await response.text(), route).toContain("<h1");
  }
});

test("known legacy routes redirect in one hop", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-1440", "Run redirects once.");
  for (const [from, to] of [["/node/1", "/"], ["/dental-videos", "/services"]]) {
    const response = await request.get(from, { maxRedirects: 0 });
    expect(response.status(), from).toBe(301);
    expect(response.headers().location, from).toBe(to);
  }
});

test("reduced motion keeps content readable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("[data-reveal]").first()).toBeVisible();
});

test("navigation works on narrow, landscape and intermediate screens", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-1440", "Run the additional viewport matrix once.");
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const viewport of [{ width: 320, height: 568 }, { width: 667, height: 375 }, { width: 1024, height: 768 }]) {
    await page.setViewportSize(viewport);
    await page.goto("/");
    await page.evaluate(() => window.scrollTo(0, 350));
    const menu = page.locator("[data-nav-toggle]");
    const nav = page.locator("[data-nav]");
    await menu.click();
    await expect(nav).toBeVisible();
    const bounds = await nav.boundingBox();
    expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(viewport.height);
    const appointment = nav.getByRole("link", { name: "Request an appointment" });
    await appointment.scrollIntoViewIfNeeded();
    const buttonBounds = await appointment.boundingBox();
    expect(buttonBounds!.y + buttonBounds!.height).toBeLessThanOrEqual(viewport.height);
    await page.keyboard.press("Escape");
    expect(await page.evaluate(() => window.scrollY)).toBe(350);
    await menu.click();
    await nav.getByRole("link", { name: "Contact", exact: true }).click();
    await expect(page).toHaveURL(/\/contact-us\/?$/);
    await expect(page.locator("body")).not.toHaveClass(/nav-open/);
  }

  await page.goto("/");
  await page.locator("[data-nav-toggle]").click();
  for (const width of [1121, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await expect(page.locator("body")).not.toHaveClass(/nav-open/);
    await expect(page.locator("main")).not.toHaveAttribute("inert", "");
    await expect(page.locator("[data-nav-toggle]")).toBeHidden();
    const navBounds = await page.locator("[data-nav]").boundingBox();
    const logoBounds = await page.locator(".wordmark").boundingBox();
    expect(navBounds!.x).toBeGreaterThan(logoBounds!.x + logoBounds!.width);
    expect(navBounds!.x + navBounds!.width).toBeLessThanOrEqual(width);
  }
});

test("mobile navigation remains usable without JavaScript", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-1440", "Run the no-JavaScript fallback once.");
  const page = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  await page.goto("http://127.0.0.1:4322/");
  const nav = page.getByRole("navigation", { name: "Primary navigation" });
  await expect(nav).toBeVisible();
  await nav.getByRole("link", { name: "Services", exact: true }).click();
  await expect(page).toHaveURL(/\/services\/?$/);
  await page.close();
});

test("appointment endpoint accepts the simplified form and rejects missing fields", async ({ request }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop-1440", "Run the endpoint validation once.");
  const fields = { name: "Preview Test", phone: "250-555-0100", email: "preview@example.com", contactPreference: "phone", reason: "New patient visit" };
  const valid = await request.post("/api/appointment", { form: fields });
  expect(valid.status()).toBe(200);
  expect(await valid.json()).toMatchObject({ ok: true, delivered: false, mode: "preview" });
  const invalid = await request.post("/api/appointment", { form: { ...fields, name: "" } });
  expect(invalid.status()).toBe(400);
});
