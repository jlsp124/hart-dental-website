# Hart Dental URL Migration Map

Prepared: 2026-09-01  
Policy: preserve sensible current paths; use direct, single-hop permanent redirects only where content is intentionally retired or an implementation alias must be consolidated.

## Summary

- Known current public paths: **25**
- Keep at the same path: **23**
- Direct 301 redirects: **2**
- Intentional 404/410 removals among known paths: **0**
- Blanket redirects to the homepage: **0**

`/dental-videos/*` is also covered by a defensive wildcard redirect to `/services`; no internal child video URLs were present in the current XML sitemap. External Optio Publishing URLs are outside Hart's domain and are not copied or redirected by this project.

| OLD URL | CURRENT PURPOSE | NEW URL | KEEP / 301 / REMOVE | TARGET PAGE | SEO IMPORTANCE | BACKLINK RISK | NOTES |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `https://www.hartdental.ca/` | Branded/local homepage | Same | KEEP | `/` | Critical | Critical | Preserve title/H1 intent, NAP, doctors, service links |
| `https://www.hartdental.ca/about-us` | Practice/about information | Same | KEEP | `/about-us` | High | Medium | Retain page purpose and policies; rewrite copy |
| `https://www.hartdental.ca/become-patient` | New patients | Same | KEEP | `/become-patient` | Critical | High | Important current/future sitelink |
| `https://www.hartdental.ca/contact-us` | NAP, hours, form, directions | Same | KEEP | `/contact-us` | Critical | Critical | Preserve direct destination; replace vendor form |
| `https://www.hartdental.ca/dental-videos` | Vendor education library | `https://www.hartdental.ca/services` | 301 | `/services` | Medium | Medium | Retire proprietary library; closest useful replacement |
| `https://www.hartdental.ca/hart-dental-reviews` | Reviews/review links | Same | KEEP | `/hart-dental-reviews` | Critical | High | Important branded sitelink candidate |
| `https://www.hartdental.ca/node/1` | Drupal homepage alias | `https://www.hartdental.ca/` | 301 | `/` | Medium | Medium | Direct alias consolidation; no chain |
| `https://www.hartdental.ca/our-team` | Dentists and team | Same | KEEP | `/our-team` | Critical | High | Preserve doctor/entity associations |
| `https://www.hartdental.ca/privacy-policy` | Privacy disclosure | Same | KEEP | `/privacy-policy` | High | Low | Rewrite for new providers/form after legal review |
| `https://www.hartdental.ca/services` | Service hub | Same | KEEP | `/services` | Critical | Critical | Add to XML sitemap and strengthen internal hierarchy |
| `https://www.hartdental.ca/services/childrens-dentistry-prince-george` | Children's dentistry | Same | KEEP | Same path | High | High | Preserve exact local-intent slug |
| `https://www.hartdental.ca/services/cosmetic-dentistry-prince-george` | Cosmetic dentistry | Same | KEEP | Same path | High | High | Preserve exact local-intent slug |
| `https://www.hartdental.ca/services/dental-emergencies-prince-george` | Emergency dentistry | Same | KEEP | Same path | Critical | Critical | Exact page observed in current local-intent results |
| `https://www.hartdental.ca/services/dental-implants-prince-george` | Dental implants | Same | KEEP | Same path | Critical | Critical | Exact page observed in current local-intent results |
| `https://www.hartdental.ca/services/dental-restoration-prince-george` | Dental restorations | Same | KEEP | Same path | High | High | Preserve topic/subtopics |
| `https://www.hartdental.ca/services/endodontics-prince-george` | Root canal/endodontic care | Same | KEEP | Same path | High | High | Preserve title intent and internal links |
| `https://www.hartdental.ca/services/oral-hygienecleaning-prince-george` | Hygiene/cleaning | Same | KEEP | Same path | High | High | Keep unusual but established slug exactly |
| `https://www.hartdental.ca/services/orthodontics-invisalign-prince-george` | Orthodontics/Invisalign | Same | KEEP | Same path | High | High | Preserve registered-mark wording where appropriate |
| `https://www.hartdental.ca/services/periodontics-prince-george` | Periodontal care | Same | KEEP | Same path | High | High | Existing branded Google sitelink at capture time |
| `https://www.hartdental.ca/services/sedation-dentistry-prince-george` | Sedation dentistry | Same | KEEP | Same path | High | High | Preserve exact path and intent |
| `https://www.hartdental.ca/services/sports-guards-prince-george` | Sports guards/bite appliances | Same | KEEP | Same path | Medium-high | Medium | Preserve established slug even though title is broader |
| `https://www.hartdental.ca/services/teeth-whitening-prince-george` | Teeth whitening | Same | KEEP | Same path | High | High | Preserve exact local-intent slug |
| `https://www.hartdental.ca/services/tmj-prince-george` | TMJ care | Same | KEEP | Same path | High | High | Preserve exact local-intent slug |
| `https://www.hartdental.ca/services/wisdom-teeth-removal-prince-george` | Wisdom teeth | Same | KEEP | Same path | High | High | Preserve exact local-intent slug |
| `https://www.hartdental.ca/sitemap` | Human-readable sitemap | Same | KEEP | `/sitemap` | Low | Low | Rebuild as useful HTML navigation and add canonical |

## Redirect implementation

Cloudflare Pages `_redirects` rules:

```text
/node/1 / 301
/dental-videos /services 301
/dental-videos/* /services 301
```

The exact production form will be tested on the `.pages.dev` host before DNS migration. Redirect targets must return `200`, and the old URL must reach the target in one hop.

## Backlink preservation work before production

1. Export Search Console top linked pages and external links.
2. Export Bing Webmaster Tools backlink data.
3. Check third-party directories and social profiles for deep links.
4. Crawl known backlinks with HEAD/GET requests.
5. Add a direct rule for any historically linked URL not in the current sitemap.
6. Do not redirect unrelated expired URLs to the homepage; use the closest true replacement or a useful 404.
7. Keep the redirect table under version control and test it after every change.

