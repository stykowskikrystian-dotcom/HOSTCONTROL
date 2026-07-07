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
