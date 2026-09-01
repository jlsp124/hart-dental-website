# Hart Dental website

Independent Astro website for Hart Dental in Prince George, BC. This repository replaces vendor-bound implementation code with a fast static site, a narrowly scoped Cloudflare Pages Function for appointment requests, and an evidence-backed SEO migration plan.

The deployed `.pages.dev` build is an isolated preview. It is deliberately `noindex`, blocks crawlers in `robots.txt`, and does not deliver form submissions. The production domain has not been connected or changed.

## What is included

- 23 preserved content routes, including all 14 established service URLs.
- Direct single-hop redirects from `/node/1` to `/` and `/dental-videos` to `/services`.
- Responsive editorial design using Hart-specific team and office photography.
- Semantic HTML, keyboard navigation, reduced-motion support, responsive images and local variable fonts.
- Unique metadata, production canonicals, Open Graph image, XML and HTML sitemaps, breadcrumbs, and linked `Dentist`, `WebSite`, `WebPage`, `Person`, `Service` and FAQ structured data.
- A privacy-conscious appointment-request function with validation, same-origin checking, a honeypot, basic per-isolate throttling, optional Turnstile verification and fail-closed production delivery.
- Automated static SEO, route, redirect, responsive, accessibility and preview-form tests.

## Local development

Requirements: Node.js 24+ and npm.

```powershell
npm install
npm run dev
```

Build and run the complete local QA suite:

```powershell
npm run qa
```

Run the built site with its Pages Function:

```powershell
npm run preview
```

## Environment and deployment modes

`PUBLIC_SITE_MODE` is evaluated at build time:

- unset or `preview`: pages emit `noindex, nofollow, noarchive`; `robots.txt` disallows crawling.
- `production`: pages become indexable and `robots.txt` publishes the production sitemap.

`FORM_MODE` is evaluated by the Pages Function:

- `preview`: requests are validated, then explicitly returned as `delivered: false`; no outbound email call occurs.
- `production`: the function requires Turnstile and all delivery secrets. Missing configuration fails closed and tells the visitor to call.

See [docs/CONTACT_FORM_SETUP.md](docs/CONTACT_FORM_SETUP.md) before enabling delivery. Do not store secrets in `.env`, `.dev.vars`, Wrangler configuration, GitHub, or this repository.

## Quality commands

```powershell
npm run check
npm run build
npm run test:static
npm run test:e2e
```

The production-indexability regression sequence is documented in [docs/SEO_REGRESSION_CHECKLIST.md](docs/SEO_REGRESSION_CHECKLIST.md).

## Deployment boundary

The preview uses Cloudflare Pages Direct Upload. Direct Upload is intentionally independent of Hart Dental’s current hosting. It does not attach `hartdental.ca`, change DNS, copy analytics, configure email, alter Search Console or Bing, or edit business listings.

Cloudflare does not convert an existing Direct Upload project to Git integration in place. If automated Git builds are later preferred, create and verify a separate Git-integrated project before production migration.

Production launch is a separate, owner-approved operation. Follow [docs/PRODUCTION_MIGRATION_CHECKLIST.md](docs/PRODUCTION_MIGRATION_CHECKLIST.md) and [docs/URL_MIGRATION_MAP.md](docs/URL_MIGRATION_MAP.md).

## Evidence and asset boundaries

- Research and migration inventory: [docs/CURRENT_SITE_AUDIT.md](docs/CURRENT_SITE_AUDIT.md)
- Search baseline: [docs/SERP_BASELINE.md](docs/SERP_BASELINE.md)
- Design decisions: [docs/DESIGN_RESEARCH.md](docs/DESIGN_RESEARCH.md) and [docs/VISUAL_SYSTEM.md](docs/VISUAL_SYSTEM.md)
- Asset provenance and required rights confirmation: [docs/ASSET_PROVENANCE.md](docs/ASSET_PROVENANCE.md)

The `Old site mirror/` directory is excluded from Git and is not part of the new repository. No vendor CSS, JavaScript, templates, Optio education library, map implementation or unverified stock treatment imagery is shipped.

