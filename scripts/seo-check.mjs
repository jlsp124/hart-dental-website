import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const origin = "https://www.hartdental.ca";
const serviceSlugs = [
  "childrens-dentistry-prince-george",
  "cosmetic-dentistry-prince-george",
  "dental-emergencies-prince-george",
  "dental-implants-prince-george",
  "dental-restoration-prince-george",
  "endodontics-prince-george",
  "oral-hygienecleaning-prince-george",
  "orthodontics-invisalign-prince-george",
  "periodontics-prince-george",
  "sedation-dentistry-prince-george",
  "sports-guards-prince-george",
  "teeth-whitening-prince-george",
  "tmj-prince-george",
  "wisdom-teeth-removal-prince-george"
];
const routes = [
  "/", "/about-us", "/become-patient", "/contact-us", "/hart-dental-reviews", "/our-team",
  "/privacy-policy", "/services", "/sitemap", ...serviceSlugs.map((slug) => `/services/${slug}`)
];
const failures = [];
const titles = new Map();
const descriptions = new Map();

const fail = (message) => failures.push(message);
const routeFile = (route) => route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html");
const exists = async (file) => { try { return (await stat(file)).isFile(); } catch { return false; } };
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');
const tagText = (html, tag) => decode(html.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"))?.[1]?.replace(/<[^>]+>/g, "").trim() || "");
const attr = (tag, name) => decode(tag.match(new RegExp(`\\s${name}=["']([^"']+)["']`, "i"))?.[1] || "");

for (const route of routes) {
  const file = routeFile(route);
  if (!(await exists(file))) { fail(`${route}: missing built HTML`); continue; }
  const html = await readFile(file, "utf8");
  const title = tagText(html, "title");
  const descriptionTag = html.match(/<meta\s+[^>]*name=["']description["'][^>]*>/i)?.[0] || "";
  const description = attr(descriptionTag, "content");
  const canonicalTag = html.match(/<link\s+[^>]*rel=["']canonical["'][^>]*>/i)?.[0] || "";
  const canonical = attr(canonicalTag, "href");
  const robotsTag = html.match(/<meta\s+[^>]*name=["']robots["'][^>]*>/i)?.[0] || "";
  const robots = attr(robotsTag, "content");
  const expectedCanonical = route === "/" ? `${origin}/` : `${origin}${route}`;
  const h1Count = (html.match(/<h1(?:\s|>)/gi) || []).length;

  if (!title || title.length < 15 || title.length > 70) fail(`${route}: title length is ${title.length}`);
  if (!description || description.length < 70 || description.length > 175) fail(`${route}: meta description length is ${description.length}`);
  if (canonical !== expectedCanonical) fail(`${route}: canonical is ${canonical || "missing"}; expected ${expectedCanonical}`);
  if (h1Count !== 1) fail(`${route}: expected one H1, found ${h1Count}`);
  if (process.env.EXPECT_INDEXABLE === "1") {
    if (!robots.includes("index, follow") || robots.includes("noindex")) fail(`${route}: production build is not indexable`);
  } else if (!robots.includes("noindex")) fail(`${route}: preview build is missing noindex`);

  if (titles.has(title)) fail(`${route}: duplicate title also used by ${titles.get(title)}`); else titles.set(title, route);
  if (descriptions.has(description)) fail(`${route}: duplicate description also used by ${descriptions.get(description)}`); else descriptions.set(description, route);

  for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\salt=["'][^"']*["']/i.test(image[0])) fail(`${route}: image missing alt attribute`);
  }

  for (const script of html.matchAll(/<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(script[1]);
      const serialized = JSON.stringify(data);
      if (/"aggregateRating"|"review"|"priceCurrency"/.test(serialized)) fail(`${route}: unsupported review or pricing schema found`);
      if (!serialized.includes('"@context":"https://schema.org"')) fail(`${route}: schema context is missing or incorrect`);
    } catch { fail(`${route}: invalid JSON-LD`); }
  }

  const links = [...html.matchAll(/<(?:a|link)\b[^>]*\shref=["']([^"']+)["']/gi), ...html.matchAll(/<(?:img|script)\b[^>]*\ssrc=["']([^"']+)["']/gi)];
  for (const match of links) {
    const reference = decode(match[1]).split("#")[0].split("?")[0];
    if (!reference || reference.startsWith("http") || reference.startsWith("mailto:") || reference.startsWith("tel:") || reference.startsWith("data:")) continue;
    const normalized = reference.startsWith("/") ? reference : new URL(reference, `${origin}${route.endsWith("/") ? route : `${route}/`}`).pathname;
    if (normalized.startsWith("/api/")) continue;
    const target = path.extname(normalized)
      ? path.join(dist, normalized.slice(1))
      : normalized === "/" ? path.join(dist, "index.html") : path.join(dist, normalized.slice(1), "index.html");
    if (!(await exists(target))) fail(`${route}: broken internal reference ${reference}`);
  }

  if (/href=["']\/(?:node\/1|dental-videos)/i.test(html)) fail(`${route}: internal link points at a redirecting URL`);
}

const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== routes.length) fail(`sitemap: expected ${routes.length} URLs, found ${sitemapUrls.length}`);
for (const route of routes) {
  const expected = route === "/" ? `${origin}/` : `${origin}${route}`;
  if (!sitemapUrls.includes(expected)) fail(`sitemap: missing ${expected}`);
}

const robots = await readFile(path.join(dist, "robots.txt"), "utf8");
if (process.env.EXPECT_INDEXABLE === "1") {
  if (!robots.includes("Allow: /") || !robots.includes(`${origin}/sitemap.xml`)) fail("robots.txt: production directives are incomplete");
} else if (!robots.includes("Disallow: /")) fail("robots.txt: preview is not blocked");

const redirects = await readFile(path.join(dist, "_redirects"), "utf8");
for (const expected of ["/node/1 / 301", "/dental-videos /services 301", "/dental-videos/* /services 301"]) {
  if (!redirects.split(/\r?\n/).includes(expected)) fail(`redirects: missing ${expected}`);
}

if (failures.length) {
  console.error(`SEO regression check failed (${failures.length}):\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`SEO regression check passed: ${routes.length} preserved routes, unique metadata, canonicals, H1s, schema, links, sitemap, robots and redirects.`);

