import { defineConfig } from "astro/config";

const base = process.env.PUBLIC_BASE_PATH || "/";

export default defineConfig({
  site: "https://www.hartdental.ca",
  base,
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "directory"
  },
  image: {
    responsiveStyles: true
  },
  vite: {
    build: {
      cssMinify: true
    }
  }
});
