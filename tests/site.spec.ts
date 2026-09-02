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
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Dentistry with heart.");
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
  const menu = page.getByRole("button", { name: "Menu" });
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
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
  await form.locator("input[name=consent]").check();
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
