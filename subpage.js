const pages = {
  uslugi: { index: "01", title: "Usługi" },
  portfolio: { index: "02", title: "Portfolio" },
  cennik: { index: "03", title: "Cennik" },
  kontakt: { index: "04", title: "Kontakt" },
};

const page = document.body.dataset.page;
const content = pages[page];

document.getElementById("app").innerHTML = `
  <a class="skip-link" href="#${page}">Przejdź do treści</a>
  <header class="site-header" data-header>
    <div class="nav-shell">
      <a class="brand" href="index.html" aria-label="HostControl — strona główna">
        <img class="brand-mark" src="assets/logo.svg" width="56" height="56" alt="" />
        <span class="brand-copy">
          <span class="brand-name">HOST<span>CONTROL</span></span>
          <span class="brand-tagline">WEB DEVELOPMENT</span>
        </span>
      </a>
      <nav class="desktop-nav" aria-label="Główna nawigacja">
        <a class="nav-link" data-page="start" href="index.html">Start</a>
        <a class="nav-link" data-page="uslugi" href="uslugi.html">Usługi</a>
        <a class="nav-link" data-page="portfolio" href="portfolio.html">Portfolio</a>
        <a class="nav-link" data-page="cennik" href="cennik.html">Cennik</a>
        <a class="nav-link" data-page="kontakt" href="kontakt.html">Kontakt</a>
      </nav>
      <div class="nav-actions">
        <a class="social-button" href="https://www.instagram.com/much4ty" target="_blank" rel="noreferrer" aria-label="Instagram HostControl">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="icon-dot" cx="17.5" cy="6.5" r="1"/></svg>
          <span>Instagram</span>
        </a>
        <a class="call-button" href="tel:+48692746031" aria-label="Zadzwoń: 692 746 031">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z"/></svg>
          <span>Zadzwoń</span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Otwórz menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span><span></span></button>
      </div>
    </div>
    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <nav aria-label="Mobilna nawigacja">
        <a href="index.html"><span>01</span> Start</a>
        <a href="uslugi.html"><span>02</span> Usługi</a>
        <a href="portfolio.html"><span>03</span> Portfolio</a>
        <a href="cennik.html"><span>04</span> Cennik</a>
        <a href="kontakt.html"><span>05</span> Kontakt</a>
      </nav>
      <div class="mobile-contact-actions">
        <a href="tel:+48692746031">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z"/></svg>
          <span><small>Zadzwoń teraz</small>692 746 031</span>
        </a>
        <a href="https://www.instagram.com/much4ty" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="icon-dot" cx="17.5" cy="6.5" r="1"/></svg>
          <span><small>Obserwuj nas</small>@much4ty</span>
        </a>
      </div>
    </div>
  </header>
  <main>
    <section class="placeholder-section section" id="${page}">
      <span>${content.index}</span>
      <h1>${content.title}</h1>
    </section>
  </main>
`;
