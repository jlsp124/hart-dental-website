# GitHub Pages preview

The public preview is built from `main` by `.github/workflows/deploy-pages.yml` and published at:

`https://jlsp124.github.io/hart-dental-website/`

## Deliberate safety boundaries

- The workflow sets `PUBLIC_SITE_MODE=preview`, so every HTML page emits `noindex, nofollow, noarchive`.
- Canonical URLs continue to point to the established `https://www.hartdental.ca` routes.
- The appointment form performs browser validation but makes no request and delivers no message.
- No custom domain, DNS record, email setting, analytics property, search-console property, or business profile is connected.
- The `/hart-dental-website` base path is preview-only. A production build uses `/`.

## Hosting limitations

GitHub Pages is static hosting. It does not execute `functions/api/appointment.ts` or Cloudflare `_redirects` rules. The two known legacy paths have static preview fallbacks, but only a production-capable host can return their required one-hop `301` responses. The Function and redirect sources remain in the repository for a separately approved production deployment. Validate production redirects and real form delivery on that host before any domain change.

## Local build

```powershell
$env:PUBLIC_BASE_PATH = "/hart-dental-website"
$env:PUBLIC_SITE_MODE = "preview"
npm run build:github-pages
npm run test:static
```

Remove those environment variables before running the normal root-path production regression sequence.
