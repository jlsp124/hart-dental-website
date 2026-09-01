# Production migration checklist

Current state: **not authorized and not performed**. The replacement remains separate from `hartdental.ca`.

Use this only after Hart Dental has approved the design, copy, team roster, assets, privacy terms, form provider and launch window.

## 1. Owner sign-off

- [ ] Confirm legal business name, address, phone and public email.
- [ ] Confirm all office hours, holiday handling and emergency language.
- [ ] Confirm dentists, staff names, roles, bios and current employment.
- [ ] Confirm every listed service and all service-specific statements.
- [ ] Confirm new-patient status, insurance/payment language and contact workflow.
- [ ] Confirm Hart owns or may reuse the logo, group photo, portraits and office photos; obtain original-resolution/source files.
- [ ] Approve attributed review excerpts and outbound review-profile links.
- [ ] Obtain privacy/legal approval for the policy and form data flow.

## 2. Search and analytics preservation

- [ ] Export dated Google Search Console and Bing Webmaster data before launch.
- [ ] Export current analytics configuration and a traffic baseline if Hart controls it.
- [ ] Export current XML sitemap, crawl, top linked pages and known backlinks.
- [ ] Reconcile every discovered historic URL with `URL_MIGRATION_MAP.md`.
- [ ] Decide whether and how existing analytics will be implemented; do not copy a vendor tag blindly.
- [ ] Prepare new sitemap submission only for the production origin, never the preview host.

## 3. Release candidate

- [ ] Create an owner-approved production build with `PUBLIC_SITE_MODE=production`.
- [ ] Enable the Hart-approved form configuration from `CONTACT_FORM_SETUP.md`.
- [ ] Run all automated checks, production indexability checks and manual cross-browser QA.
- [ ] Verify all redirects in one hop and ensure targets return `200`.
- [ ] Validate structured data; no aggregate rating, fabricated review count or unsupported price markup.
- [ ] Confirm security headers, cache behaviour, custom 404, form failure states and rollback artifact.
- [ ] Freeze content during the launch window or track every late change.

## 4. Infrastructure safety

- [ ] Record current DNS zone/export and exact hosting configuration before any change.
- [ ] Identify which records serve the website. Do not alter MX, SPF, DKIM, DMARC, autodiscover or other mail/service records.
- [ ] Confirm the current production host remains available for rollback.
- [ ] Attach and validate the custom domain only in the approved Pages project.
- [ ] Use a measured cutover plan and appropriate TTL; do not delete old hosting first.
- [ ] Verify apex/`www` redirect and canonical policy without a redirect chain.
- [ ] Do not change Google Business Profile, Apple/Bing listings, Search Console ownership, advertising or social profiles during the hosting cutover.

## 5. Launch and rollback

- [ ] Capture the approved commit SHA and deployment identifier.
- [ ] Verify HTTPS, homepage, every critical landing page, redirects, sitemap, robots and form delivery from outside the account session.
- [ ] Monitor Pages Function failures and HTTP error rates without logging patient-entered data.
- [ ] If critical routing, indexing, form or content errors appear, restore the prior web target using the recorded configuration; do not improvise DNS changes.
- [ ] Keep the previous host and rollback record until Hart approves closure.

## 6. After launch

- [ ] Submit the production sitemap to existing verified search properties.
- [ ] Inspect canonical selection, crawl errors and redirect hits over several weeks.
- [ ] Compare branded and local-intent landing pages with `SERP_BASELINE.md` using dated evidence.
- [ ] Update business listings only if a factual NAP/hours change is independently approved.
- [ ] Schedule ownership reviews for staff, services, hours, privacy text and dependencies.

