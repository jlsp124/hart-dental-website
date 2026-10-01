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
        src: `${base}icon-192.png`,
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: `${base}icon-512.png`,
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ]
  });

  return new Response(body, {
    headers: { "Content-Type": "application/manifest+json; charset=utf-8" }
  });
};
