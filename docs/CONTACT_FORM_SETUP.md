# Contact form setup

Status: preview-safe and non-delivering. Production delivery is intentionally disabled.

## Current request path

1. The browser submits a same-origin `POST` to `/api/appointment`.
2. `functions/api/appointment.ts` limits request size, checks the origin, applies a per-isolate request window, parses only form/JSON content, validates expected fields and discards honeypot submissions.
3. In `FORM_MODE=preview`, the function returns `200` with `delivered: false` and does not call any delivery provider.
4. In `FORM_MODE=production`, the function fails closed unless Turnstile and delivery settings are complete.
5. Turnstile is verified server-side before any outbound request.
6. A successful production request is sent to one Hart-authorized mailbox through Resend. Request bodies and contact details are not logged by application code.

The web form requests only name, phone, optional email, contact preference, broad reason and an optional scheduling note. It explicitly asks visitors not to include medical information. An appointment request is never represented as a confirmed booking.

## Production prerequisites

Do not enable `FORM_MODE=production` until all of the following are complete:

- Hart Dental confirms the private recipient mailbox and staff access.
- Hart Dental approves Resend or chooses and implements another compliant provider.
- The sending domain is verified without changing unrelated mail flow.
- A Hart-specific Cloudflare Turnstile widget is created for the final hostname(s).
- The privacy policy receives legal/privacy review.
- A Cloudflare rate-limiting/WAF rule is configured for `POST /api/appointment`; the in-process map is only a best-effort secondary layer and is not durable across isolates.
- Retention, deletion, access, incident and response procedures are documented.
- Test requests are performed with non-sensitive dummy data and confirmed at the recipient mailbox.

## Required values

Build-time public value:

```text
PUBLIC_TURNSTILE_SITE_KEY=<Hart-specific public site key>
PUBLIC_SITE_MODE=production
```

Cloudflare Pages runtime values/secrets:

```text
FORM_MODE=production
FORM_RECIPIENT=<private Hart mailbox>
FORM_FROM=<verified sender, for example Website <website@approved-domain>>
TURNSTILE_SECRET=<secret>
RESEND_API_KEY=<secret>
```

Use the Cloudflare dashboard or the current documented `wrangler pages secret put` flow for secrets. Never pass secret values on a command line, paste them into a task transcript, or commit them. Re-run `npx wrangler types` after changing non-secret bindings in `wrangler.jsonc`.

## Verification matrix

Test on a separate preview before production:

- Valid request delivers once and displays a neutral confirmation.
- Missing required field returns `400` without delivery.
- Invalid phone/email returns `400`.
- Email preference without an email returns `400`.
- Cross-origin request returns `403`.
- Unsupported content type returns `415`.
- Oversized request returns `413`.
- Missing/invalid Turnstile token returns `400`.
- Missing production secrets returns `503`; it must never silently claim delivery.
- Provider failure returns `502` and gives the clinic phone number.
- Honeypot submission returns a generic success without delivery.
- Repeated requests reach the application throttle, and the Cloudflare rate-limit rule is independently exercised.
- No contact values appear in Function logs, analytics, URLs or error reports.

## Preview proof

`tests/site.spec.ts` submits dummy data against the local Pages Function and asserts `{ ok: true, delivered: false, mode: "preview" }`. The browser UI must also say that no message was sent.

