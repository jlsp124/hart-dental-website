# Current Hart Dental Site Audit

Audit date: 2026-09-01  
Production site: <https://www.hartdental.ca/>  
Scope: read-only research. No production property, DNS record, analytics property, local listing, or vendor account was changed.

## Method and evidence boundaries

- Crawled the current XML sitemap and all listed pages with a descriptive audit user agent.
- Rechecked the live homepage, team page, contact page, service pages, `robots.txt`, and `sitemap.xml`.
- Compared the live site with the preserved April 2026 mirror in `Old site mirror/`.
- Visually inspected the live homepage and representative pages in a browser.
- Inspected titles, descriptions, canonicals, H1/H2 structure, crawlable navigation, internal links, forms, images, structured data, and vendor dependencies.
- The live site is the factual authority where it differs from the mirror. The most material drift is the current team roster: the live page includes Dr. Edward Walker and newer staff not present in the April mirror.

This is a migration inventory, not a claim that every current statement is permanently correct. Office hours, staff roster, services, social profiles, and image ownership must receive a final owner sign-off immediately before production launch.

## Summary

- 23 URLs are present in the current XML sitemap.
- `/services` is a live, crawlable hub but is not currently listed in the XML sitemap.
- `/sitemap` is a live human-readable route but is not currently listed in the XML sitemap.
- 25 distinct public paths are therefore tracked for migration.
- 24 current content pages return `200`; `/node/1` resolves to the homepage.
- 23 routes should be kept at the same path.
- `/dental-videos` should move directly to `/services` with a single-hop `301`.
- `/node/1` should move directly to `/` with a single-hop `301`.
- Current canonicals use `https://www.hartdental.ca` and generally omit a trailing slash.
- The current primary navigation is crawlable HTML and exposes the service hierarchy.
- The existing form posts to the vendor's Drupal backend and cannot be reused.
- The current site loads vendor CSS/JavaScript, Google Maps, Google Analytics, and Optio Publishing assets. None of that implementation is reused in the replacement.

## Page inventory

| Existing URL | Current title | Current H1 | Purpose and useful intent | Reusable Hart material | Vendor/rights caution | SEO importance | Migration decision |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | Prince George Dentist \| Hart Dental | Welcome to Hart Dental Centre! Family Dental Care in Prince George | Branded/local homepage; family care, dentists, community, contact | Name, NAP, doctors, community references, Hart-owned photography subject to confirmation | Do not reuse vendor layout, CSS, scripts, icons, or stock imagery | Critical | KEEP |
| `/about-us` | About Us \| Hart Dental | About Us | Practice story, technology, financial policy, insurance | Practice facts and policy intent | Verify technologies and policies immediately before launch | High | KEEP |
| `/become-patient` | Become a Patient \| Hart Dental | Become a Patient | New-patient expectations and conversion | New-patient status, languages, community facts, appointment intent | Reconfirm accepting-new-patients status and languages | Critical sitelink candidate | KEEP |
| `/contact-us` | Contact Us \| Hart Dental | Contact Us | NAP, hours, directions, appointment request | Address, phone, email, hours, map destination | Hours differ on third-party listings; owner must confirm | Critical | KEEP |
| `/dental-videos` | Dental Videos \| Hart Dental | Dental Videos | Vendor patient-education library | No essential unique Hart content | Optio Publishing library is proprietary and intentionally excluded | Medium current sitelink; low future value | 301 to `/services` |
| `/hart-dental-reviews` | Hart Dental Reviews \| Hart Dental | Our Reviews | Review discovery and outbound review links | Existing attributed excerpts and verified platform links | Do not create aggregate rating schema or unverified counts | Critical sitelink candidate | KEEP |
| `/node/1` | Homepage alias | Homepage H1 | Drupal alias for the homepage | None beyond homepage | Vendor CMS artifact | Medium backlink/alias risk | 301 to `/` |
| `/our-team` | Our Team \| Hart Dental | Our Team | Dentists and current team | Current names, roles, bios, portraits | Staff roster and portrait reuse require owner confirmation | Critical sitelink/entity page | KEEP |
| `/privacy-policy` | Privacy Policy \| Hart Dental | Privacy Policy | Website privacy disclosure | General contact/privacy intent | Must be reviewed for the new form, providers, and analytics | High legal/quality | KEEP |
| `/services` | Dental Services \| Hart Dental | Dental Services | Crawlable treatment hub | Current service list and page relationships | Do not reuse stock treatment images without licence evidence | Critical sitelink/topic hub | KEEP and add to XML sitemap |
| `/services/childrens-dentistry-prince-george` | Children’s Dentistry in Prince George \| Hart Dental | Prince George Children’s Dentistry | Children’s care, prevention, first visits | Confirmed service and patient questions | Rewrite; avoid individualized advice | High local intent | KEEP |
| `/services/cosmetic-dentistry-prince-george` | Cosmetic Dentistry in Prince George \| Hart Dental | Prince George Cosmetic Dentistry | Veneers, bonding, crowns and cosmetic consultation | Confirmed topic and subtopics | Do not promise outcomes | High local intent | KEEP |
| `/services/dental-emergencies-prince-george` | Dental Emergencies in Prince George \| Hart Dental | Prince George Dental Emergencies | Urgent dental contact and same-day policy | Current same-day emergency statement | Reconfirm same-day/new-patient policy; include emergency-care boundary | Critical local intent | KEEP |
| `/services/dental-implants-prince-george` | Dental Implants in Prince George \| Hart Dental | Prince George Dental Implants | Missing-tooth replacement and consultation | Confirmed service and assessment intent | Avoid candidacy or outcome guarantees | Critical local intent | KEEP |
| `/services/dental-restoration-prince-george` | Dental Restoration in Prince George \| Hart Dental | Prince George Dental Restoration | Fillings, crowns, inlays/onlays, bridges | Confirmed service categories | Rewrite and avoid guarantees | High local intent | KEEP |
| `/services/endodontics-prince-george` | Endodontics in Prince George \| Hart Dental | Prince George Endodontics | Root canal treatment | Confirmed service and procedure overview | Avoid diagnosis; note assessment/referral may be needed | High local intent | KEEP |
| `/services/oral-hygienecleaning-prince-george` | Oral Hygiene/Cleaning in Prince George \| Hart Dental | Prince George Oral Hygiene/Cleaning | Prevention, exams, hygiene, oral cancer screening | Confirmed service categories | Reconfirm screening wording | High local intent | KEEP |
| `/services/orthodontics-invisalign-prince-george` | Orthodontics & Invisalign® in Prince George \| Hart Dental | Prince George Orthodontics & Invisalign® | Braces and clear aligner care | Current service categories and Invisalign reference | Reconfirm provider status; retain registered-mark treatment | High local intent | KEEP |
| `/services/periodontics-prince-george` | Periodontics in Prince George \| Hart Dental | Prince George Periodontics | Gum health and periodontal treatment | Current service categories | Current page lists advanced procedures; each must be owner-confirmed | High local intent | KEEP |
| `/services/sedation-dentistry-prince-george` | Sedation Dentistry in Prince George \| Hart Dental | Prince George Sedation Dentistry | Dental-anxiety support, oral sedation, nitrous oxide | Current options and patient intent | Reconfirm options/eligibility; avoid safety guarantees | High local intent | KEEP |
| `/services/sports-guards-prince-george` | Guards, Bite Appliances in Prince George \| Hart Dental | Prince George Sports Guards | Sports guards and night/bite appliances | Confirmed service categories | Rewrite; do not imply diagnosis | Medium-high | KEEP |
| `/services/teeth-whitening-prince-george` | Teeth Whitening in Prince George \| Hart Dental | Prince George Teeth Whitening | At-home and in-office whitening | Current service categories | Reconfirm both options; avoid result promises | High local intent | KEEP |
| `/services/tmj-prince-george` | TMJ in Prince George \| Hart Dental | Prince George TMJ | Jaw discomfort assessment and treatment discussion | Current topic and assessment intent | Avoid asserting symptoms equal a diagnosis | High local intent | KEEP |
| `/services/wisdom-teeth-removal-prince-george` | Wisdom Teeth Removal in Prince George \| Hart Dental | Prince George Wisdom Teeth Removal | Assessment and extraction | Confirmed service | Avoid implying every case is treated in-office | High local intent | KEEP |
| `/sitemap` | Sitemap \| Hart Dental | Sitemap | Human-readable navigation inventory | Route list | Current route is a vendor-generated view | Low direct traffic; useful crawl aid | KEEP and rebuild |

## Current entity and contact facts

These were confirmed on the live site on the audit date:

- Business name: Hart Dental
- Address: 3644 Austin Road W / 3644 W. Austin Road, Prince George, BC V2K 2H6
- Phone: 250-962-5351
- Email shown publicly: `info@hartdental.ca`
- Dentists prominently published: Dr. Jas Pahal, Dr. Gary Sidhu, Dr. Edward Walker
- Social profiles linked: Facebook (`HartDental`) and Instagram (`hart_dental`)
- Canonical production origin: `https://www.hartdental.ca`

Current website hours:

| Day | Hours shown |
| --- | --- |
| Monday | 9:00 a.m.–5:00 p.m. |
| Tuesday | 9:00 a.m.–5:00 p.m. |
| Wednesday | 8:00 a.m.–6:00 p.m. |
| Thursday | 8:00 a.m.–6:00 p.m. |
| Friday | 9:00 a.m.–4:00 p.m. |
| Saturday | 9:00 a.m.–3:00 p.m. |
| Sunday | Closed |

Third-party directories show conflicting hours. The replacement uses the live Hart site values for preview and marks them for owner confirmation before production.

## Team drift discovered during research

The live page currently publishes the following roster:

- Dentists: Dr. Jas Pahal, Dr. Gary Sidhu, Dr. Edward Walker.
- Hygienists: Kerry, Mandy, Lindsay, Maddie, Tori.
- Certified dental assistants: Cheryl, Emberlyn, Gavin, Karlee, Michelle.
- Patient/front-office team: Caitlin, Jaimie, Jayden, Selena.

The April mirror contained a different roster. The replacement therefore uses live names/roles and does not carry forward people absent from the current page. Where the live page has no bio, the replacement does not invent one.

## Current technical/SEO observations

### Strong signals worth preserving

- Long-standing `www.hartdental.ca` origin and HTTPS.
- Clear homepage title and location-specific H1.
- Distinct, descriptive top-level pages.
- Exact service URLs with local intent.
- Crawlable anchor navigation and a services hub.
- Consistent NAP and `Dentist` structured data.
- Doctor and team content.
- Strong internal linking from navigation and footer.
- Existing branded sitelink selection on multiple search engines.

### Weaknesses to improve without resetting intent

- Vendor code and Drupal form dependency.
- `/services` missing from the XML sitemap.
- `Dental Videos` occupies valuable navigation/sitelink attention despite being a vendor library.
- Repeated, oversized schema payloads include `priceCurrency: USD` for a Canadian clinic and generic `price: Varies`; the replacement omits unsupported pricing markup.
- Current descriptions contain typos and generic claims.
- Repeated appointment forms on every page create duplication and expose vendor-only hidden fields.
- Stock-like treatment imagery weakens Hart-specific identity.
- Map/API, analytics, and vendor scripts add dependency and performance risk.
- Current structured data does not clearly model the website, breadcrumbs, and individual people as separate, linked entities.

## Asset and copyright classification

### Presumed Hart-specific; owner confirmation still required

- Hart Dental logo.
- Current group photograph.
- Dentist and team portraits.
- Office exterior/interior photographs.
- Hart community photographs or organization marks where Hart has permission.

These may be used in the private preview as factual/Hart-specific material, but the owner must confirm reuse rights before production. A vector/source logo should be requested; the current raster logo is retained only as a source reference.

### Not reused

- Vendor source code, theme, layout, CSS, and JavaScript.
- Optio Publishing patient-education library and videos.
- Vendor icons and third-party map implementation.
- Treatment stock images without clear licence evidence.
- Existing page composition.

## Forms, analytics, local listings, and infrastructure

- Current Drupal forms are vendor-bound and will not function independently.
- Current analytics markers were observed, but no tracking tag is copied into preview.
- The replacement form is a new Pages Function with explicit preview behavior; it does not send email until Hart-specific secrets are configured.
- Google Business Profile, Bing Places, Apple Maps, Yelp, Search Console, Analytics, Tag Manager, DNS, MX, and the current vendor remain untouched.

## Pre-launch confirmations

1. Confirm the exact clinic name formatting and whether `Hart Dental Centre` remains a desired alternate name.
2. Confirm all hours, including holidays and whether Saturday availability is every week.
3. Confirm the current roster, roles, biographies, and image permissions.
4. Confirm Dr. Edward Walker's desired biography; none is invented from the current blank entry.
5. Confirm `info@hartdental.ca` as the public contact and select the private form-delivery mailbox.
6. Confirm accepting-new-patients and same-day-emergency wording.
7. Confirm English and Punjabi availability before publishing that claim.
8. Confirm each advanced periodontal, sedation, orthodontic, implant, and surgical service remains offered.
9. Obtain logo source/vector files and original-resolution Hart photography.
10. Review the new privacy policy with the clinic's legal/privacy adviser.

