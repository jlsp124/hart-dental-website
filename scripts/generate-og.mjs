import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const hero = path.join(root, "src", "assets", "hart-team-hero.webp");
const output = path.join(root, "public", "og-hart-dental.jpg");
const logo = await sharp(path.join(root, "public", "hart-dental-logo.png"))
  .resize({ width: 155, height: 100, fit: "contain" })
  .png()
  .toBuffer();

const overlay = Buffer.from(`
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" x2="1">
        <stop offset="0" stop-color="#101916" stop-opacity=".98"/>
        <stop offset=".48" stop-color="#101916" stop-opacity=".88"/>
        <stop offset=".78" stop-color="#101916" stop-opacity=".15"/>
        <stop offset="1" stop-color="#101916" stop-opacity=".04"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#shade)"/>
    <path d="M111 443c49-24 116-12 146 41 37 65-5 137-25 188" fill="none" stroke="#f28a25" stroke-width="3" opacity=".9"/>
    <text x="82" y="250" fill="#fffdf8" font-family="Georgia, serif" font-size="78" letter-spacing="-3">Dentistry</text>
    <text x="82" y="327" fill="#fffdf8" font-family="Georgia, serif" font-size="78" letter-spacing="-3">with heart.</text>
    <text x="86" y="384" fill="#f9b66f" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="4">HART DENTAL · PRINCE GEORGE, BC</text>
  </svg>
`);

await sharp(hero)
  .resize(1200, 630, { fit: "cover", position: "center" })
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logo, top: 54, left: 77 }
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(output);

const result = await sharp(output).metadata();
console.log(`Generated ${path.relative(root, output)} (${result.width}x${result.height})`);
