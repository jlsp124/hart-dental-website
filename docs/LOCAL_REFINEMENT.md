# Local design and SEO refinement

Reviewed September 30, 2026. These refinements are for the isolated GitHub Pages preview. No production-domain cutover or DNS change is included.

## Patient experience

- Fix the mobile menu's containing block: remove the header blur that confined its fixed drawer to the header height. The drawer uses the available viewport height and scrolls on short screens.
- Keep keyboard focus inside the open menu, close on Escape, restore scroll position, and reset the drawer when resizing to desktop. Navigation also works without JavaScript.
- Use smaller headings, clearer patient links and more space for the practice photograph. Remove repeated audit commentary and the outdated exterior photograph with Austin Dental signage.
- Remove Gary Sidhu from the dentist data, homepage, team page, structured data and imported portraits, using the user's current roster correction. The neutral Google Maps link retains the old profile's exact numeric identifier.
- Remove the appointment consent checkbox and its server requirement. Keep the appointment confirmation explanation above the form, required contact validation and non-delivering preview mode.

## Search continuity

Live checks confirmed the old homepage title is `Prince George Dentist | Hart Dental`, its canonical is `https://www.hartdental.ca/`, and its favicon is `/sites/www.hartdental.ca/files/favicon_7.png`. The checked-in mark matches that live PNG byte-for-byte. Browser, Apple and manifest icons are resized from this original, without redrawing the logo.

The XML sitemap contains all 23 retained content routes, including the services hub and HTML sitemap. All 14 established service paths are retained. `/node/1` redirects directly to `/`; `/dental-videos` redirects directly to `/services`. Those redirecting paths are excluded from the XML sitemap. Page metadata, production canonicals, local-business data and linked navigation remain in place.

Useful patient links are exposed as ordinary HTML links. Search sitelinks, favicons, snippets and rankings remain search-engine decisions; this work does not guarantee a particular result layout. See [Google's sitelinks guidance](https://developers.google.com/search/docs/appearance/sitelinks) and [favicon guidance](https://developers.google.com/search/docs/appearance/favicon-in-search).

For the eventual launch, keep the existing domain and URL structure and follow [the production migration checklist](PRODUCTION_MIGRATION_CHECKLIST.md) and [Google's hosting-change guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes). Production indexing and appointment delivery must be enabled on the selected production host as part of that launch. Local and public previews stay `noindex` and do not deliver requests.

## Validation commands

```powershell
npm run qa
node scripts/generate-icons.mjs
```

The browser suite covers the homepage, accessibility, keyboard focus, narrow and short menus, desktop resizing, no-JavaScript navigation, retained routes, legacy redirects, and the simplified preview form and endpoint. The SEO check verifies canonical URLs, metadata, sitemap membership, icon references and removal of the departed dentist from rendered content and structured data.

No new environment variables, database migrations or dependencies are required.

Validation passed: `npm run qa` (18 browser tests passed; 12 intentional duplicate-device skips), production-mode SEO checks, `/hart-dental-website` preview-prefix SEO checks, and the restored root-path preview SEO checks. Automated accessibility checks passed at the three configured viewports. Original favicon equality and the 96, 180, 192 and 512 pixel output sizes were checked separately. The local Astro developer toolbar is hidden so the preview shows only the site's interface.
