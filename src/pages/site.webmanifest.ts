import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const base = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/`;
  const body = JSON.stringify({
    name: "Hart Dental",
    short_name: "Hart Dental",
    description: "Family dental care in Prince George, British Columbia.",
    start_url: base,
    display: "standalone",
    background_color: "#f4efe6",
    theme_color: "#18332d",
    icons: [
      {
        src: `${base}favicon.svg`,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ]
  });

  return new Response(body, {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8" }
  });
};
