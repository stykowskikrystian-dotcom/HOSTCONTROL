const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = mobileMenu.querySelectorAll("a");
const navLinks = document.querySelectorAll(".nav-link");

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Zamknij menu" : "Otwórz menu");
  mobileMenu.setAttribute("aria-hidden", String(!open));
  mobileMenu.classList.toggle("is-open", open);
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) setMenu(false);
});

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const currentPage = document.body.dataset.page;
navLinks.forEach((link) => {
  const isCurrent = link.dataset.page === currentPage || (currentPage === "usluga" && link.dataset.page === "uslugi");
  link.classList.toggle("is-active", isCurrent);
  if (isCurrent) link.setAttribute("aria-current", "page");
});

const pageTransitionMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const pageTransitionStorageKey = "hostcontrol-page-transition";
let cameFromInternalTransition = false;

try {
  cameFromInternalTransition = sessionStorage.getItem(pageTransitionStorageKey) === "active";
  sessionStorage.removeItem(pageTransitionStorageKey);
} catch {
  cameFromInternalTransition = false;
}

const pageTransition = document.createElement("div");
pageTransition.className = "page-transition";
pageTransition.setAttribute("aria-hidden", "true");
pageTransition.innerHTML = `
  <div class="transition-ambient" aria-hidden="true"><span></span><span></span><span></span></div>
  <div class="transition-mark">
    <span class="transition-ring transition-ring--outer"></span>
    <span class="transition-ring transition-ring--inner"></span>
    <span class="transition-glint"></span>
    <img src="assets/logo.svg" alt="" />
  </div>
  <div class="transition-label">HostControl</div>
`;
document.body.appendChild(pageTransition);

if (!pageTransitionMotion.matches && !cameFromInternalTransition) {
  window.requestAnimationFrame(() => {
    pageTransition.classList.add("is-entering");
    window.setTimeout(() => pageTransition.classList.remove("is-entering"), 1180);
  });
}

window.addEventListener("pageshow", () => {
  pageTransition.classList.remove("is-leaving");
  pageTransition.classList.remove("is-entering");
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  if (!link || event.defaultPrevented || pageTransitionMotion.matches) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  if (link.target === "_blank" || link.hasAttribute("download")) return;

  let url;
  try {
    url = new URL(link.href, window.location.href);
  } catch {
    return;
  }

  const isPageLink = ["http:", "https:", "file:"].includes(url.protocol) && url.origin === window.location.origin;
  const isSamePageAnchor = url.pathname === window.location.pathname && url.search === window.location.search && url.hash;
  if (!isPageLink || isSamePageAnchor || url.href === window.location.href) return;

  event.preventDefault();
  if (pageTransition.classList.contains("is-leaving")) return;

  try {
    sessionStorage.setItem(pageTransitionStorageKey, "active");
  } catch {
    // Jeżeli przeglądarka blokuje sessionStorage, przejście nadal działa standardowo.
  }

  pageTransition.classList.remove("is-entering");
  pageTransition.classList.add("is-leaving");
  window.setTimeout(() => {
    window.location.href = url.href;
  }, 820);
});

const hero = document.querySelector("[data-hero]");

if (hero) {
  const showcase = hero.querySelector("[data-tilt]");
  const rotatingWord = hero.querySelector(".rotating-word");
  const preview = hero.querySelector("[data-preview-mode]");
  const modeButtons = hero.querySelectorAll("[data-mode]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const words = ["sprzedaje.", "przyciąga.", "buduje markę."];
  let wordIndex = 0;

  if (!reduceMotion.matches) {
    window.setInterval(() => {
      rotatingWord.classList.add("is-changing");
      window.setTimeout(() => {
        wordIndex = (wordIndex + 1) % words.length;
        rotatingWord.textContent = words[wordIndex];
        rotatingWord.classList.remove("is-changing");
      }, 220);
    }, 2800);
  }

  hero.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch" || reduceMotion.matches) return;
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    hero.style.setProperty("--pointer-x", `${x * 100}%`);
    hero.style.setProperty("--pointer-y", `${y * 100}%`);
    showcase.style.setProperty("--rotate-x", `${(0.5 - y) * 5}deg`);
    showcase.style.setProperty("--rotate-y", `${(x - 0.5) * 7}deg`);
  });

  hero.addEventListener("pointerleave", () => {
    showcase.style.setProperty("--rotate-x", "0deg");
    showcase.style.setProperty("--rotate-y", "0deg");
  });

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.mode;
      preview.dataset.previewMode = mode;
      modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      preview.querySelectorAll(".preview-scene").forEach((scene) => {
        scene.setAttribute("aria-hidden", String(!scene.classList.contains(`preview-scene--${mode}`)));
      });
    });
  });
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  const status = contactForm.querySelector("[data-contact-status]");
  const consentInput = contactForm.querySelector('input[name="consent"]');
  const consentModal = document.querySelector("[data-consent-modal]");
  const consentModalClose = consentModal?.querySelectorAll("[data-consent-close]");
  const consentModalReturn = consentModal?.querySelector(".consent-modal-close");

  function openConsentModal() {
    if (!consentModal) return;
    consentModal.classList.add("is-open");
    consentModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    window.setTimeout(() => consentModalReturn?.focus(), 60);
  }

  function closeConsentModal() {
    if (!consentModal) return;
    consentModal.classList.remove("is-open");
    consentModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    consentInput?.focus();
  }

  consentModalClose?.forEach((item) => item.addEventListener("click", closeConsentModal));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && consentModal?.classList.contains("is-open")) {
      closeConsentModal();
    }
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!consentInput?.checked) {
      if (status) {
        status.textContent = "Najpierw zaakceptuj zgodę — bez niej nie otworzymy wiadomości e-mail.";
      }
      openConsentModal();
      return;
    }

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    const formData = new FormData(contactForm);
    const targetEmail = contactForm.dataset.email || "host_control@icloud.com";
    const selectedProjects = formData.getAll("project");
    const selectedStyles = formData.getAll("style");
    const valueOrDash = (value) => String(value || "").trim() || "—";
    const listOrDash = (items) => items.length ? items.map((item) => `- ${item}`).join("\n") : "—";
    const clientName = valueOrDash(formData.get("name"));
    const company = valueOrDash(formData.get("company"));
    const subject = `Zapytanie o stronę — ${clientName}${company !== "—" ? ` / ${company}` : ""}`;
    const body = [
      "Cześć HostControl,",
      "",
      "chcę porozmawiać o projekcie strony internetowej. Poniżej przesyłam informacje z formularza:",
      "",
      "DANE KONTAKTOWE",
      `Imię i nazwisko: ${clientName}`,
      `Telefon: ${valueOrDash(formData.get("phone"))}`,
      `E-mail: ${valueOrDash(formData.get("email"))}`,
      `Firma / marka: ${company}`,
      "",
      "ZAKRES PROJEKTU",
      listOrDash(selectedProjects),
      "",
      `Orientacyjny budżet: ${valueOrDash(formData.get("budget"))}`,
      `Najlepszy termin startu: ${valueOrDash(formData.get("deadline"))}`,
      "",
      "PREFEROWANY STYL",
      listOrDash(selectedStyles),
      "",
      "OPIS POMYSŁU",
      valueOrDash(formData.get("message")),
      "",
      "Zgoda na kontakt zwrotny: tak",
      "",
      "Pozdrawiam"
    ].join("\n");

    if (status) {
      status.textContent = "Otwieram aplikację pocztową z gotową wiadomością do HostControl...";
    }

    window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
