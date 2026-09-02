export const SITE = {
  name: "Hart Dental",
  alternateName: "Hart Dental Centre",
  origin: "https://www.hartdental.ca",
  phoneDisplay: "250-962-5351",
  phoneHref: "tel:+12509625351",
  email: "info@hartdental.ca",
  address: {
    street: "3644 Austin Road W",
    locality: "Prince George",
    region: "BC",
    postalCode: "V2K 2H6",
    country: "Canada"
  },
  geo: {
    latitude: 53.9896046,
    longitude: -122.7879965
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Hart+Dental%2C+3644+Austin+Road+W%2C+Prince+George%2C+BC+V2K+2H6",
  googleReviewUrl:
    "https://www.google.ca/maps/place/Hart+Dental+-+Dr.+Jas+Pahal+%26+Dr.+Gary+Sidhu/@53.989522,-122.7871321,15z/data=!4m7!3m6!1s0x0:0xce9c2c978fd561e8!8m2!3d53.9896046!4d-122.7879965!9m1!1b1",
  facebookUrl: "https://www.facebook.com/HartDental/",
  instagramUrl: "https://www.instagram.com/hart_dental/"
} as const;

export const HOURS = [
  { day: "Monday", shortDay: "Mon", opens: "09:00", closes: "17:00", display: "9:00 a.m.–5:00 p.m." },
  { day: "Tuesday", shortDay: "Tue", opens: "09:00", closes: "17:00", display: "9:00 a.m.–5:00 p.m." },
  { day: "Wednesday", shortDay: "Wed", opens: "08:00", closes: "18:00", display: "8:00 a.m.–6:00 p.m." },
  { day: "Thursday", shortDay: "Thu", opens: "08:00", closes: "18:00", display: "8:00 a.m.–6:00 p.m." },
  { day: "Friday", shortDay: "Fri", opens: "09:00", closes: "16:00", display: "9:00 a.m.–4:00 p.m." },
  { day: "Saturday", shortDay: "Sat", opens: "09:00", closes: "15:00", display: "9:00 a.m.–3:00 p.m." },
  { day: "Sunday", shortDay: "Sun", opens: null, closes: null, display: "Closed" }
] as const;

export const PRIMARY_NAV = [
  { href: "/services", label: "Services" },
  { href: "/become-patient", label: "New Patients" },
  { href: "/about-us", label: "About" },
  { href: "/our-team", label: "Our Team" },
  { href: "/hart-dental-reviews", label: "Reviews" },
  { href: "/contact-us", label: "Contact" }
] as const;

export const CORE_ROUTES = [
  "/",
  "/services",
  "/become-patient",
  "/about-us",
  "/our-team",
  "/hart-dental-reviews",
  "/contact-us",
  "/privacy-policy",
  "/sitemap"
] as const;

export function absoluteUrl(path = "/") {
  const normalized = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return new URL(normalized, SITE.origin).toString().replace(/\/$/, normalized === "/" ? "/" : "");
}

export function sitePath(path = "/") {
  if (!path.startsWith("/")) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}` || "/";
}

export function addressInline() {
  const { street, locality, region, postalCode } = SITE.address;
  return `${street}, ${locality}, ${region} ${postalCode}`;
}
