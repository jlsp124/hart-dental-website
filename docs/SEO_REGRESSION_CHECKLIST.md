# SEO regression checklist

Use this checklist for every release candidate. Passing code checks is necessary but does not prove search-engine propagation or ranking outcomes.

## Automated preview checks

```powershell
npm run build
npm run test:static
npm run test:e2e
```

`test:static` currently fails on:

- any missing preserved route;
- missing, duplicate or unreasonable title/description;
- wrong production canonical;
- missing or multiple H1s;
- wrong preview/production robots state;
- invalid JSON-LD or unsupported review/pricing markup;
- missing image `alt` attributes;
- broken internal page/asset references;
- internal links to redirecting URLs;
- missing XML sitemap URLs; or
- missing redirect rules.

`test:e2e` exercises three viewports, keyboard navigation, overflow, console errors, representative accessibility scans, reduced-motion behaviour, all 23 routes, one-hop redirects and the non-delivering preview form.

## Production-mode build check

Run this only as a temporary local verification. It does not authorize production deployment.

```powershell
$env:PUBLIC_SITE_MODE = "production"
npm run build
$env:EXPECT_INDEXABLE = "1"
npm run test:static
Remove-Item Env:EXPECT_INDEXABLE
Remove-Item Env:PUBLIC_SITE_MODE
npm run build
npm run test:static
```

The final two commands restore and verify the safe preview build.

## Manual pre-launch checks

- Confirm the canonical origin is exactly `https://www.hartdental.ca` and the preferred hostname policy is unchanged.
- Confirm each of the 23 kept routes returns `200` and both legacy routes perform one direct `301`.
- Compare titles, H1 intent and page purpose with `CURRENT_SITE_AUDIT.md`.
- Validate the XML sitemap and a sample of JSON-LD with current Google tools.
- Ensure preview hosts remain `noindex`; do not submit a `.pages.dev` sitemap.
- Export current Google Search Console pages, queries, links, sitemap and coverage data. Export equivalent Bing data. Store dated raw exports outside the public repository.
- Re-crawl production and compare status, canonical, indexability, title, description, H1, structured data and internal-link counts by URL.
- Check mobile rendering, phone links, directions, forms and the custom 404 on the release candidate.
- Confirm no analytics tag or consent requirement was accidentally added or removed.

## Post-launch evidence windows

Treat deployment, crawl, indexing and ranking as separate states:

- Immediately: verify DNS/HTTPS, redirects, core pages, form delivery and server errors.
- 24–72 hours: inspect Search Console/Bing crawl and sitemap processing. Changes may not be reflected yet.
- 1–2 weeks: compare indexed pages, canonical selection, branded queries and top local-intent landing pages with the dated baseline.
- 4–6 weeks: evaluate trends using comparable date ranges; account for seasonality, algorithm changes and listing changes.

Never report sitelinks, indexing or rankings as preserved solely because the deployment succeeded. Label outcomes `CONFIRMED`, `LIKELY`, `UNVERIFIED` or `PROPAGATION PENDING` with dated evidence.

