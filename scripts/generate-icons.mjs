import sharp from "sharp";
import { fileURLToPath } from "node:url";

// The original Hart Dental favicon, with its full rounded tile pattern.
const source = fileURLToPath(new URL("../src/assets/hart-dental-mark.png", import.meta.url));
for (const [name, size] of [["favicon", 96], ["apple-touch-icon", 180], ["icon-192", 192], ["icon-512", 512]]) {
  await sharp(source).resize(size, size).png().toFile(fileURLToPath(new URL(`../public/${name}.png`, import.meta.url)));
}
