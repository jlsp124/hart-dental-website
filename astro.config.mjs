import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.hartdental.ca",
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
