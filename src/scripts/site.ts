const root = document.documentElement;
root.classList.remove("no-js");
root.classList.add("js");

const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
const nav = document.querySelector<HTMLElement>("[data-nav]");
const mobileNav = window.matchMedia("(max-width: 1120px)");
const pageContent = [...document.querySelectorAll<HTMLElement>("main, .site-footer")];
let navScrollY = 0;

const closeNav = (restoreFocus = false) => {
  if (!toggle || !nav || toggle.getAttribute("aria-expanded") !== "true") return;
  toggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  document.body.style.removeProperty("--nav-scroll-offset");
  pageContent.forEach((element) => { element.inert = false; });
  window.scrollTo({ top: navScrollY, behavior: "instant" });
  if (restoreFocus) toggle.focus();
};

toggle?.addEventListener("click", () => {
  if (!nav || !mobileNav.matches) return;
  if (toggle.getAttribute("aria-expanded") === "true") {
    closeNav(true);
    return;
  }
  navScrollY = window.scrollY;
  document.body.style.setProperty("--nav-scroll-offset", `-${navScrollY}px`);
  document.body.classList.add("nav-open");
  pageContent.forEach((element) => { element.inert = true; });
  toggle.setAttribute("aria-expanded", "true");
  nav.classList.add("is-open");
  nav.querySelector<HTMLAnchorElement>("a")?.focus();
});

nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => closeNav()));
mobileNav.addEventListener("change", () => { if (!mobileNav.matches) closeNav(); });
document.addEventListener("keydown", (event) => {
  if (!toggle || !nav || toggle.getAttribute("aria-expanded") !== "true") return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeNav(true);
  } else if (event.key === "Tab") {
    const links = [...nav.querySelectorAll<HTMLAnchorElement>("a[href]")];
    const last = links[links.length - 1];
    if (event.shiftKey && document.activeElement === toggle && last) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      toggle.focus();
    }
  }
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -7%", threshold: 0.08 });
  revealItems.forEach((item) => revealObserver.observe(item));
}

const enamelMarks = [...document.querySelectorAll<SVGElement>(".enamel-mark")];
if (!reducedMotion && enamelMarks.length) {
  let ticking = false;
  const draw = () => {
    const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0.08, window.scrollY / docHeight));
    enamelMarks.forEach((mark, index) => mark.style.setProperty("--line-progress", String(Math.min(1, progress * 1.7 + index * 0.08))));
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(draw); ticking = true; }
  }, { passive: true });
  draw();
}

const appointmentForm = document.querySelector<HTMLFormElement>("[data-appointment-form]");
if (appointmentForm) {
  const status = appointmentForm.querySelector<HTMLElement>("[data-form-status]");
  const submit = appointmentForm.querySelector<HTMLButtonElement>("button[type='submit']");
  const preview = appointmentForm.dataset.preview === "true";

  appointmentForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!appointmentForm.reportValidity()) return;
    status?.classList.remove("is-error", "is-success");

    if (preview) {
      if (status) {
        status.textContent = "Preview only — no message was sent. Please call 250-962-5351 to contact the clinic.";
        status.classList.add("is-success");
      }
      return;
    }

    if (status) status.textContent = "Sending…";
    if (submit) submit.disabled = true;

    try {
      const response = await fetch(appointmentForm.action, {
        method: "POST",
        body: new FormData(appointmentForm),
        headers: { Accept: "application/json" }
      });
      const data = await response.json() as { ok?: boolean; message?: string };
      if (!response.ok || !data.ok) throw new Error(data.message || "The request could not be sent.");
      if (status) {
        status.textContent = data.message || "Thank you. The team will be in touch.";
        status.classList.add("is-success");
      }
      appointmentForm.reset();
      const turnstile = (window as Window & { turnstile?: { reset: () => void } }).turnstile;
      turnstile?.reset();
    } catch (error) {
      if (status) {
        status.textContent = error instanceof Error ? error.message : "Something went wrong. Please call 250-962-5351.";
        status.classList.add("is-error");
      }
    } finally {
      if (submit) submit.disabled = false;
    }
  });
}
