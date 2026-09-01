# Hart Dental SERP Baseline

Snapshot date: 2026-09-01  
Location context: Canada; the Google browser result explicitly reported that results were not personalized.  
Purpose: record the current search footprint before any migration. This is a point-in-time observation, not a ranking guarantee.

## Important limitations

- Search results vary by location, device, language, history, experiments, and time.
- Google, Bing, and DuckDuckGo choose sitelinks and local panels algorithmically.
- Exact rankings were not treated as durable facts.
- No Search Console, Bing Webmaster Tools, analytics, business profile, or local listing was accessed or changed.
- The observations below come from visible result pages and a separate web-search snapshot. They do not substitute for owner-authorized Search Console export data before launch.

## Branded query snapshot

Query used in all three visible engines: `Hart Dental Prince George`.

### Google

Observed a large organic result with sitelinks:

- Organic title: `Hart Dental: Prince George Dentist`
- Destination: `https://www.hartdental.ca/`
- Visible sitelinks: `Our Team`, `Contact Us`, `Dental Services`, `Dental Emergencies`, `Prince George Periodontics`
- A `More results from hartdental.ca` link was present.
- A local/knowledge panel was present for `Hart Dental - Dr. Jas Pahal & Dr. Gary Sidhu`.
- The panel displayed the same address and phone as the website.
- The panel displayed a 4.9 rating and 322 Google reviews at capture time. This count is documented only as a volatile baseline and is not embedded as website schema.

This confirms the high-value baseline described in the project brief: Hart currently receives an expanded branded presentation rather than only a single compact organic line.

### Bing

Observed:

- A prominent local business card for `Hart Dental - Dr. Jas Pahal & Dr. Gary Sidhu` with address, phone, hours, website, directions, and contact actions.
- An organic homepage result titled `Prince George Dentist | Hart Dental`.
- Visible organic sitelinks including `Become a Patient`, `Videos`, `Contact Us`, `Our Team`, `Services`, `Reviews`, `About Us`, and `Children's Dentistry`.

The obsolete `Videos` sitelink is still prominent in Bing's snapshot, supporting a careful direct redirect and stronger replacement hierarchy rather than a blanket removal/404.

### DuckDuckGo

Observed:

- Organic title: `Prince George Dentist | Hart Dental`
- Destination: `https://www.hartdental.ca`
- Visible sitelinks: `Become a Patient`, `Services`, `Videos`, `Reviews`, `Contact Us`, `About Us`
- A business panel with Hart's address, phone, website, directions, and hours.

DuckDuckGo's sitelink set also includes the vendor video page today. The migration should let that URL resolve permanently to `/services` while reinforcing useful top-level destinations.

## Requested brand-query coverage

| Query | Observation | Confidence |
| --- | --- | --- |
| `Hart Dental` | Hart's homepage and business entity are readily discoverable; expanded presentation was captured with the Prince George modifier | Confirmed brand strength; exact unmodified rank not frozen |
| `Hart Dental Prince George` | Expanded Google result, Bing local/organic result, and DuckDuckGo result captured | Confirmed |
| `Hart Dental Centre` | Current homepage H1 uses `Hart Dental Centre`; historic/entity references support the alternate wording | Confirmed content signal; exact live rank not frozen |
| `Dr Jas Pahal Hart Dental` | Current team page prominently contains Dr. Pahal's full bio and is indexed in web search | Confirmed page/entity signal; exact engine rank not frozen |
| `Dr Gary Sidhu Hart Dental` | Current team page prominently contains Dr. Sidhu's full bio and is indexed in web search | Confirmed page/entity signal; exact engine rank not frozen |

## Local-intent snapshot

Visible Google result pages were checked for the requested queries. Hart was observed in the visible result content for all five; no stable numeric position is asserted.

| Query | Hart observation | Landing page signal |
| --- | --- | --- |
| `dentist Prince George` | Hart homepage observed in visible results | `/` |
| `Prince George dentist` | Hart homepage observed in visible results | `/` |
| `family dentist Prince George` | Hart homepage observed in visible results | `/` |
| `emergency dentist Prince George` | Exact Hart emergency result observed | `/services/dental-emergencies-prince-george` |
| `dental implants Prince George` | Exact Hart implant result observed | `/services/dental-implants-prince-george` |

This supports keeping the homepage and exact service paths rather than introducing prettier but unproven slugs.

## Indexed footprint

The current XML sitemap contains 23 URLs. The live `/services` hub and `/sitemap` route bring the known public migration inventory to 25 paths. A `site:hartdental.ca` search also surfaced the homepage, top-level pages, and service pages. Search Console data is still required before launch to identify:

- all indexed URLs, including historical/parameter URLs;
- top landing pages and queries;
- backlinks and linked destinations;
- indexing/canonical exclusions;
- any URLs absent from the public sitemap;
- image/video indexing associated with the vendor site.

## Competitor/presentation notes

- Local-intent results contain map/local packs and multiple Prince George practices; website rankings alone are not the full local-search surface.
- Competing practices often use clear location/service titles and direct appointment actions.
- Hart's differentiator in the current search footprint is strong entity continuity: domain, NAP, doctors, local panel, social profiles, and deep service pages agree.
- The replacement should improve experience and performance without introducing a new name, domain, or large slug rewrite.

## Preservation strategy derived from this baseline

1. Keep the production domain and `www` canonical strategy.
2. Keep all useful indexed route paths exactly.
3. Preserve page purpose, local terminology, and clear H1s.
4. Keep crawlable top-level navigation and a descriptive footer.
5. Make `Services`, `New Patients`, `Our Team`, `Reviews`, and `Contact` unambiguously important.
6. Redirect `/dental-videos` directly to `/services` and never to the homepage.
7. Link doctors, services, new-patient information, and contact actions contextually.
8. Publish accurate `Dentist`, `Organization`, `WebSite`, `WebPage`, `Person`, and breadcrumb data without ratings or invented claims.
9. Retain existing Search Console/Bing history and business listings at production migration.
10. Monitor the obsolete Videos sitelink after launch; do not attempt to manipulate sitelinks.

## Evidence to refresh immediately before migration

- Repeat the three branded screenshots from a clean, location-appropriate browser.
- Export 16 months of Search Console page/query data where available.
- Export Bing Webmaster Tools page/query/index data.
- Crawl current production one final time and diff every URL.
- Export top backlinks and validate each destination against the redirect map.
- Record local-panel name, category, NAP, hours, website URL, appointment URL, and review count without editing the profile.

