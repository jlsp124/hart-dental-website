import type { APIRoute } from "astro";
import { CORE_ROUTES, absoluteUrl } from "../data/site";
import { services, servicePath } from "../data/services";

export const GET: APIRoute = () => {
  const routes = [...CORE_ROUTES, ...services.map(servicePath)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${absoluteUrl(route)}</loc></url>`).join("\n")}\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};

