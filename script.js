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
  const isCurrent = link.dataset.page === currentPage;
  link.classList.toggle("is-active", isCurrent);
  if (isCurrent) link.setAttribute("aria-current", "page");
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
