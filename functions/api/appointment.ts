interface Env {
  FORM_MODE?: "preview" | "production";
  FORM_RECIPIENT?: string;
  FORM_FROM?: string;
  TURNSTILE_SECRET?: string;
  RESEND_API_KEY?: string;
}

type FormFields = {
  name: string;
  phone: string;
  email: string;
  contactPreference: string;
  reason: string;
  message: string;
  website: string;
  consent: string;
  turnstileToken: string;
};

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;
const attempts = new Map<string, number[]>();

function json(message: string, status: number, extra: Record<string, unknown> = {}) {
  return Response.json(
    { ok: status >= 200 && status < 300, message, ...extra },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff"
      }
    }
  );
}

function text(value: FormDataEntryValue | unknown, limit: number) {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

function emailIsValid(value: string) {
  return !value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function phoneIsValid(value: string) {
  return /^[+()\d\s.-]{7,30}$/.test(value);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  })[character] || character);
}

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((timestamp) => now - timestamp < RATE_WINDOW_MS);
  recent.push(now);
  attempts.set(key, recent);
  return recent.length > RATE_MAX;
}

async function readFields(request: Request): Promise<FormFields> {
  const contentType = request.headers.get("content-type") || "";
  let values: Record<string, unknown> = {};

  if (contentType.includes("application/json")) {
    const parsed = await request.json();
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) values = parsed as Record<string, unknown>;
  } else if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
    const form = await request.formData();
    values = Object.fromEntries(form.entries());
  } else {
    throw new Error("unsupported-content-type");
  }

  return {
    name: text(values.name, 100),
    phone: text(values.phone, 30),
    email: text(values.email, 160),
    contactPreference: text(values.contactPreference, 20),
    reason: text(values.reason, 80),
    message: text(values.message, 700),
    website: text(values.website, 200),
    consent: text(values.consent, 10),
    turnstileToken: text(values["cf-turnstile-response"], 2048)
  };
}

async function verifyTurnstile(secret: string, token: string, ip?: string) {
  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);
  if (ip) body.set("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
  if (!response.ok) return false;
  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method !== "POST") return json("Method not allowed.", 405);

  const requestUrl = new URL(request.url);
  const origin = request.headers.get("Origin");
  if (origin && origin !== requestUrl.origin) return json("This request was not accepted.", 403);

  const declaredLength = Number(request.headers.get("content-length") || "0");
  if (declaredLength > 64_000) return json("This request is too large.", 413);

  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  if (rateLimited(ip)) return json("Too many requests. Please wait a few minutes or call 250-962-5351.", 429);

  let fields: FormFields;
  try {
    fields = await readFields(request);
  } catch {
    return json("Please submit the appointment form from the website.", 415);
  }

  // Quietly accept bots that fill the honeypot without sending or disclosing the filter.
  if (fields.website) return json("Thank you. Your request has been received.", 200, { delivered: false });

  const allowedPreferences = new Set(["phone", "email"]);
  const allowedReasons = new Set(["New patient visit", "Routine care", "Dental concern", "Emergency appointment", "Ask the team to call me"]);
  if (!fields.name || !fields.phone || !fields.reason || fields.consent !== "yes") {
    return json("Please complete the required fields and consent checkbox.", 400);
  }
  if (!phoneIsValid(fields.phone) || !emailIsValid(fields.email)) {
    return json("Please check the phone number and email address.", 400);
  }
  if (!allowedPreferences.has(fields.contactPreference) || !allowedReasons.has(fields.reason)) {
    return json("Please choose a valid contact preference and reason.", 400);
  }
  if (fields.contactPreference === "email" && !fields.email) {
    return json("Please provide an email address or choose phone contact.", 400);
  }

  const production = env.FORM_MODE === "production";
  if (!production) {
    return json("Preview checked successfully. No message was sent.", 200, { delivered: false, mode: "preview" });
  }

  if (!env.TURNSTILE_SECRET) return json("The form is not ready. Please call 250-962-5351.", 503);
  if (!fields.turnstileToken || !(await verifyTurnstile(env.TURNSTILE_SECRET, fields.turnstileToken, ip))) {
    return json("Please complete the security check and try again.", 400);
  }

  if (!env.RESEND_API_KEY || !env.FORM_RECIPIENT || !env.FORM_FROM) {
    return json("Online delivery is not configured. Please call 250-962-5351.", 503);
  }

  const safe = Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, escapeHtml(value)])) as FormFields;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: env.FORM_FROM,
      to: [env.FORM_RECIPIENT],
      reply_to: fields.email || undefined,
      subject: `Hart Dental website request: ${fields.reason}`,
      text: [
        `Name: ${fields.name}`,
        `Phone: ${fields.phone}`,
        `Email: ${fields.email || "Not provided"}`,
        `Preferred contact: ${fields.contactPreference}`,
        `Reason: ${fields.reason}`,
        `Scheduling note: ${fields.message || "None"}`,
        "",
        "This is an appointment request, not a confirmed booking."
      ].join("\n"),
      html: `<h2>Hart Dental website request</h2><dl><dt>Name</dt><dd>${safe.name}</dd><dt>Phone</dt><dd>${safe.phone}</dd><dt>Email</dt><dd>${safe.email || "Not provided"}</dd><dt>Preferred contact</dt><dd>${safe.contactPreference}</dd><dt>Reason</dt><dd>${safe.reason}</dd><dt>Scheduling note</dt><dd>${safe.message || "None"}</dd></dl><p><strong>This is an appointment request, not a confirmed booking.</strong></p>`
    })
  });

  if (!response.ok) return json("The request could not be delivered. Please call 250-962-5351.", 502);
  return json("Thank you. Hart Dental will contact you to confirm the next step.", 200, { delivered: true, mode: "production" });
};

