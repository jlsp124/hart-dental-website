import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const preview = (import.meta.env.PUBLIC_SITE_MODE || "preview") !== "production";
  const body = preview
    ? "User-agent: *\nDisallow: /\n"
    : "User-agent: *\nAllow: /\n\nSitemap: https://www.hartdental.ca/sitemap.xml\n";

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};

