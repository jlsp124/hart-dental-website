# Hart Dental website

A new website concept for Hart Dental in Prince George, BC. I built it as a faster, cleaner replacement for the current site while keeping the existing service pages and search URLs in mind.

The GitHub Pages version is only a preview. It is set to `noindex`, does not replace the live Hart Dental website, and does not send appointment requests.

## Included

- 23 content routes, including the existing service URLs
- responsive desktop and mobile layouts
- Hart Dental team and office photography
- accessible navigation and reduced-motion support
- page metadata, sitemaps, breadcrumbs, and structured data
- appointment-request form code for a future Cloudflare Pages deployment
- automated route, SEO, responsive, accessibility, and form tests

## Run locally

Requires Node.js 24+ and npm.

```powershell
npm install
npm run dev
```

Run the full local checks with:

```powershell
npm run qa
```

Preview the built site with:

```powershell
npm run preview
```

## Preview vs production

The public GitHub Pages build is intentionally separate from the real Hart Dental site. It does not change the production domain, DNS, email, analytics, Search Console, or business listings.

GitHub Pages also cannot run the appointment-request function, so the preview validates the form but does not send anything. The production version is designed for Cloudflare Pages, where the form can use Turnstile and email delivery once the required configuration is added.

Before any real launch, see:

- [Production migration checklist](docs/PRODUCTION_MIGRATION_CHECKLIST.md)
- [URL migration map](docs/URL_MIGRATION_MAP.md)
- [Contact form setup](docs/CONTACT_FORM_SETUP.md)
- [SEO regression checklist](docs/SEO_REGRESSION_CHECKLIST.md)

## Notes

The project keeps the current site's established URLs where possible so a future migration does not unnecessarily throw away existing search value. Research, design notes, and asset/source records are kept under `docs/` for reference.

The old site mirror is excluded from Git and is not shipped with this project.
