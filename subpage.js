const pages = {
  uslugi: { index: "01", title: "Usługi" },
  portfolio: { index: "02", title: "Portfolio" },
  cennik: { index: "03", title: "Cennik" },
  kontakt: { index: "04", title: "Kontakt" },
  polityka: { index: "05", title: "Polityka prywatności" },
};

const page = document.body.dataset.page;
const content = pages[page] || pages.uslugi;

const phoneIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92Z" /></svg>`;
const instagramIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle class="icon-dot" cx="17.5" cy="6.5" r="1" /></svg>`;
const arrowIcon = `<svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg>`;

const footerMarkup = `
  <footer class="site-footer" id="kontakt-stopka" aria-labelledby="footer-title">
    <div class="footer-grid-bg" aria-hidden="true"></div>
    <div class="footer-orb footer-orb--lime" aria-hidden="true"></div>
    <div class="footer-orb footer-orb--blue" aria-hidden="true"></div>
    <div class="footer-wordmark" aria-hidden="true">HOSTCONTROL</div>

    <div class="footer-hero">
      <div class="footer-brand-panel">
        <a class="footer-brand" href="index.html" aria-label="HostControl — strona główna">
          <img src="assets/logo.svg" width="72" height="72" alt="" />
          <span>
            <strong>HOST<span>CONTROL</span></strong>
            <small>WEB DEVELOPMENT</small>
          </span>
        </a>
        <p>Tworzymy strony internetowe, które wyglądają świeżo, działają szybko i są dopasowane do stylu Twojej marki — od pierwszego szkicu po publikację.</p>
        <div class="footer-socials">
          <a href="tel:+48692746031" aria-label="Zadzwoń: 692 746 031">
            ${phoneIcon}
            <span>692 746 031</span>
          </a>
          <a class="footer-instagram" href="https://www.instagram.com/much4ty" target="_blank" rel="noreferrer" aria-label="Instagram HostControl">
            ${instagramIcon}
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div class="footer-cta-panel">
        <span class="footer-kicker"><i></i> Masz pomysł na stronę?</span>
        <h2 id="footer-title">Zbudujmy stronę, która wygląda świetnie i pracuje na klienta.</h2>
        <div class="footer-cta-actions">
          <a class="footer-primary" href="kontakt.html">Start projektu <span aria-hidden="true">${arrowIcon}</span></a>
          <a class="footer-secondary" href="portfolio.html">Zobacz portfolio</a>
        </div>
      </div>
    </div>

    <div class="footer-content">
      <nav class="footer-column" aria-label="Nawigacja w stopce">
        <strong>Nawigacja</strong>
        <a href="index.html">Start</a>
        <a href="uslugi.html">Usługi</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="cennik.html">Cennik</a>
        <a href="kontakt.html">Kontakt</a>
      </nav>

      <div class="footer-column">
        <strong>Co robimy</strong>
        <a href="uslugi.html">Strony firmowe</a>
        <a href="uslugi.html">Landing page</a>
        <a href="uslugi.html">Sklepy i katalogi</a>
        <a href="uslugi.html">Kodowanie z Figmy</a>
        <a href="uslugi.html">Optymalizacja</a>
      </div>

      <div class="footer-compact-card">
        <strong>Kontakt i formalności</strong>
        <p>Masz pomysł, starą stronę do odświeżenia albo potrzebujesz szybkiej konsultacji? Wybierz najwygodniejszą formę kontaktu.</p>
        <div class="footer-contact-grid">
          <a href="tel:+48692746031"><span>Telefon</span><strong>692 746 031</strong></a>
          <a href="kontakt.html"><span>Formularz</span><strong>Napisz do nas</strong></a>
        </div>
        <div class="footer-legal-links">
          <a href="polityka-prywatnosci.html">Polityka prywatności</a>
          <a href="polityka-prywatnosci.html#cookies">Pliki cookies</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© 2026 HostControl. Nowoczesne strony internetowe.</span>
      <a href="#${page}">Wróć na górę <span aria-hidden="true">↑</span></a>
    </div>
  </footer>

  <div class="hc-credit-bar" aria-label="Informacja o wykonawcy strony">
    <a class="hc-credit-brand" href="https://www.hostcontrol.pl" target="_blank" rel="noreferrer">
      <img src="assets/logo.svg" width="34" height="34" alt="" />
      <span>Zaprojektowano przez <strong>HostControl</strong> Krystian Stykowski</span>
    </a>
    <div class="hc-credit-actions">
      <a href="tel:+48692746031" aria-label="Zadzwoń do HostControl: 692 746 031">
        ${phoneIcon}
        <span>692 746 031</span>
      </a>
      <a href="https://www.instagram.com/much4ty" target="_blank" rel="noreferrer" aria-label="Instagram HostControl">
        ${instagramIcon}
      </a>
    </div>
  </div>
`;

const defaultSection = `
  <section class="placeholder-section section" id="${page}">
    <span>${content.index}</span>
    <h1>${content.title}</h1>
  </section>
`;

const privacySection = `
  <section class="legal-section section" id="polityka">
    <div class="legal-shell">
      <span class="legal-index">${content.index}</span>
      <div class="legal-heading">
        <p>HostControl — informacje formalne</p>
        <h1>Polityka prywatności</h1>
        <span>Ta strona opisuje, w jaki sposób możemy przetwarzać dane przekazane przez formularz kontaktowy, telefon lub wiadomość.</span>
      </div>
      <div class="legal-grid">
        <article>
          <strong>01</strong>
          <h2>Kontakt</h2>
          <p>Dane podane w formularzu lub rozmowie wykorzystujemy wyłącznie po to, aby odpowiedzieć na zapytanie i przygotować propozycję współpracy.</p>
        </article>
        <article>
          <strong>02</strong>
          <h2>Zakres danych</h2>
          <p>Może to być imię, numer telefonu, adres e-mail, nazwa firmy oraz treść wiadomości dotycząca projektu strony internetowej.</p>
        </article>
        <article id="cookies">
          <strong>03</strong>
          <h2>Pliki cookies</h2>
          <p>Strona może korzystać z podstawowych plików cookies potrzebnych do poprawnego działania serwisu oraz analizy jakości odwiedzin.</p>
        </article>
        <article>
          <strong>04</strong>
          <h2>Twoje prawa</h2>
          <p>Możesz poprosić o dostęp do swoich danych, ich poprawienie lub usunięcie, kontaktując się telefonicznie pod numerem 692 746 031.</p>
        </article>
      </div>
    </div>
  </section>
`;

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
          ${instagramIcon}
          <span>Instagram</span>
        </a>
        <a class="call-button" href="tel:+48692746031" aria-label="Zadzwoń: 692 746 031">
          ${phoneIcon}
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
          ${phoneIcon}
          <span><small>Zadzwoń teraz</small>692 746 031</span>
        </a>
        <a href="https://www.instagram.com/much4ty" target="_blank" rel="noreferrer">
          ${instagramIcon}
          <span><small>Obserwuj nas</small>@much4ty</span>
        </a>
      </div>
    </div>
  </header>
  <main>
    ${page === "polityka" ? privacySection : defaultSection}
  </main>
  ${footerMarkup}
`;
