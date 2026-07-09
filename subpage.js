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
const sparkIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5L12 2Z" /><path d="M5 3v4M3 5h4M19 17v4M17 19h4" /></svg>`;
const layersIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></svg>`;
const rocketIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4c3.2.4 5.2 2.4 5.6 5.6L13 16.2 7.8 11 14 4Z" /><path d="M7.8 11 5 12l-2 4 4-2 1-2.8" /><path d="M13 16.2 12 19l-4 2 2-4 2.8-1" /><path d="M15 8.6h.01" /></svg>`;
const shieldIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 20 6v6c0 5-3.3 8-8 9-4.7-1-8-4-8-9V6l8-3Z" /><path d="m8.8 12 2.1 2.1 4.5-4.8" /></svg>`;
const codeIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 9-4 3 4 3" /><path d="m16 9 4 3-4 3" /><path d="m14 5-4 14" /></svg>`;
const testIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8" /><path d="M10 3v5.2L5.4 17a3 3 0 0 0 2.7 4h7.8a3 3 0 0 0 2.7-4L14 8.2V3" /><path d="M8.5 16h7" /></svg>`;
const deployIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10" /><path d="m8 8 4-4 4 4" /><path d="M5 14v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3" /><path d="M8 17h8" /></svg>`;
const handoffIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 11V7a5 5 0 0 1 10 0v4" /><rect x="5" y="11" width="14" height="10" rx="3" /><path d="M12 15v2" /></svg>`;
const questionIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 18h.01" /><path d="M9.2 9a3 3 0 1 1 5.2 2c-.9.8-2.4 1.3-2.4 3" /><circle cx="12" cy="12" r="9" /></svg>`;
const cabinIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /><path d="M7 7.5 5 5" /><path d="M17 7.5 19 5" /></svg>`;
const mapPinIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11Z" /><circle cx="12" cy="10" r="2.4" /></svg>`;
const calendarIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="15" rx="3" /><path d="M8 3v4M16 3v4M4 10h16" /><path d="m9 15 2 2 4-4" /></svg>`;
const deviceIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="13" height="10" rx="2" /><rect x="17" y="9" width="4" height="10" rx="1.4" /><path d="M8 19h5" /><path d="M10.5 15v4" /></svg>`;

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

const portfolioSection = `
  <section class="portfolio-page section" id="portfolio">
    <div class="portfolio-grid-bg" aria-hidden="true"></div>
    <div class="portfolio-orb portfolio-orb--lime" aria-hidden="true"></div>
    <div class="portfolio-orb portfolio-orb--blue" aria-hidden="true"></div>

    <section class="portfolio-hero" aria-labelledby="portfolio-title">
      <div class="portfolio-hero-copy">
        <span class="portfolio-kicker"><i></i> Portfolio HostControl</span>
        <h1 id="portfolio-title">Realizacje, które pokazują <em>styl, kod i cel</em>.</h1>
        <p>Nie tworzymy stron „do katalogu”. Każdy projekt ma oddawać charakter marki, prowadzić użytkownika do kontaktu i działać dobrze na telefonie, komputerze oraz dużym ekranie.</p>
        <div class="portfolio-hero-actions">
          <a class="portfolio-primary" href="#kurka-wodna">Zobacz realizację <span aria-hidden="true">${arrowIcon}</span></a>
          <a class="portfolio-secondary" href="kontakt.html">Zaprojektujmy Twoją stronę</a>
        </div>
      </div>

      <aside class="portfolio-signal-card" aria-label="Co pokazujemy w portfolio">
        <span>Aktualnie w portfolio</span>
        <strong>01</strong>
        <p>pełna realizacja z branży turystycznej — domki na Mazurach, rezerwacje i lokalny charakter marki.</p>
        <div>
          <small>branża</small>
          <b>turystyka / noclegi</b>
        </div>
      </aside>
    </section>

    <section class="portfolio-featured" id="kurka-wodna" aria-labelledby="kurka-title">
      <div class="portfolio-project-copy">
        <span class="portfolio-tag">Realizacja strony internetowej</span>
        <h2 id="kurka-title"><em>Kurka Wodna</em> — domki na Mazurach w klimacie ciszy, natury i rodzinnego wypoczynku.</h2>
        <p>Kurka Wodna to obecnie 5 całorocznych domków w miejscowości Faszcze koło Mikołajek, położonych w spokojnej okolicy nad Jeziorem Głębokim. Strona ma od razu przenosić użytkownika w mazurski klimat i prowadzić go do rezerwacji.</p>
        <div class="portfolio-tags" aria-label="Cechy projektu">
          <span>strona turystyczna</span>
          <span>rezerwacje</span>
          <span>mobile first</span>
          <span>lokalny klimat</span>
        </div>
        <div class="portfolio-project-actions">
          <a class="portfolio-live" href="https://www.kurka-wodna.com.pl/" target="_blank" rel="noreferrer">Otwórz projekt <span aria-hidden="true">${arrowIcon}</span></a>
          <a class="portfolio-outline" href="cennik.html">Sprawdź nasze ceny</a>
        </div>
      </div>

      <div class="portfolio-device" aria-label="Podgląd projektu Kurka Wodna">
        <div class="portfolio-window">
          <div class="portfolio-window-bar">
            <span></span><span></span><span></span>
            <small>kurka-wodna.com.pl</small>
          </div>
          <figure>
            <img src="assets/portfolio/kurka-wodna-hero.jpg" alt="Podgląd strony Kurka Wodna — domki na Mazurach" />
          </figure>
        </div>
        <div class="portfolio-phone" aria-label="Mobilny podgląd projektu Kurka Wodna">
          <div class="portfolio-phone-speaker"></div>
          <img src="assets/portfolio/kurka-wodna-mobile.jpg" alt="" />
          <div class="portfolio-phone-bar"></div>
        </div>
        <div class="portfolio-floating portfolio-floating--one">
          <span>cel</span>
          <strong>rezerwacja</strong>
        </div>
        <div class="portfolio-floating portfolio-floating--two">
          <span>styl</span>
          <strong>Mazury / natura</strong>
        </div>
      </div>

      <div class="portfolio-details" aria-label="Zakres realizacji Kurka Wodna">
      <article>
        <div class="portfolio-detail-icon">${cabinIcon}</div>
        <span>01</span>
        <h3>Klimat marki</h3>
        <p>Strona została oparta o mocny hero, zdjęcia natury i spokojną narrację. Sprzedaje nie tylko nocleg, ale obietnicę odpoczynku, ciszy, jeziora i rodzinnego klimatu.</p>
      </article>
      <article>
        <div class="portfolio-detail-icon">${deviceIcon}</div>
        <span>02</span>
        <h3>Czytelna struktura</h3>
        <p>Układ prowadzi przez najważniejsze decyzje gościa: jakie są domki, co jest w okolicy, jakie atrakcje czekają na miejscu i gdzie zapytać o termin.</p>
      </article>
      <article>
        <div class="portfolio-detail-icon">${calendarIcon}</div>
        <span>03</span>
        <h3>Droga do kontaktu</h3>
        <p>Przyciski i sekcje kontaktowe nie są dodatkiem na końcu. Są naturalnie wplecione w ścieżkę, żeby użytkownik mógł szybko przejść do rezerwacji.</p>
      </article>
      <article>
        <div class="portfolio-detail-icon">${mapPinIcon}</div>
        <span>04</span>
        <h3>Lokalny kontekst</h3>
        <p>Treść wspiera skojarzenia z Mikołajkami, Mazurami, Jeziorem Głębokim i wypoczynkiem blisko natury — czyli dokładnie tym, czego szuka klient.</p>
      </article>
      </div>
    </section>

    <section class="portfolio-next" aria-labelledby="portfolio-next-title">
      <div>
        <span>Następny projekt?</span>
        <h2 id="portfolio-next-title">Twoja strona może być kolejną realizacją, którą pokażemy z dumą.</h2>
      </div>
      <a href="kontakt.html">Opowiedz nam o projekcie <span aria-hidden="true">${arrowIcon}</span></a>
    </section>
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

const pricingSection = `
  <section class="pricing-page section" id="cennik">
    <div class="pricing-grid-bg" aria-hidden="true"></div>
    <div class="pricing-orb pricing-orb--lime" aria-hidden="true"></div>
    <div class="pricing-orb pricing-orb--blue" aria-hidden="true"></div>

    <div class="pricing-hero">
      <div class="pricing-hero-copy">
        <span class="pricing-kicker"><i></i> Przejrzysty cennik HostControl</span>
        <h1>Cennik stron internetowych, który <em>mówi wprost</em>, za co płacisz.</h1>
        <p>Każda wycena wynika z zakresu, poziomu dopracowania, liczby widoków, integracji, animacji i odpowiedzialności po stronie wykonawcy. Przed umową rozpisujemy dokładny zakres, żeby klient wiedział, co kupuje i co otrzyma po publikacji.</p>
        <div class="pricing-hero-actions">
          <a class="pricing-primary" href="kontakt.html">Poproś o wycenę <span aria-hidden="true">${arrowIcon}</span></a>
          <a class="pricing-secondary" href="#jak-powstaje-cena">Co obejmuje cena</a>
        </div>
      </div>

      <aside class="pricing-estimator" aria-label="Co wpływa na cenę projektu">
        <div class="pricing-estimator-top">
          <span>Wycena projektu</span>
          <strong>indywidualna</strong>
        </div>
        <div class="pricing-meter" aria-hidden="true">
          <span style="--value: 72%"></span>
        </div>
        <div class="pricing-estimator-list">
          <div><span>Zakres</span><strong>liczba podstron</strong></div>
          <div><span>Design</span><strong>unikalny styl</strong></div>
          <div><span>Kod</span><strong>szybkość i SEO</strong></div>
          <div><span>Wsparcie</span><strong>opieka po starcie</strong></div>
        </div>
      </aside>
    </div>

    <div class="pricing-packages" aria-label="Pakiety cenowe">
      <article class="pricing-card">
        <div class="pricing-card-icon">${sparkIcon}</div>
        <div class="pricing-card-head">
          <span>Start</span>
          <strong>od 2 100 zł</strong>
        </div>
        <h2>Landing page lub prosta strona wizytówka</h2>
        <p>Dla osób, które chcą szybko wystartować z profesjonalną obecnością online i jasnym komunikatem.</p>
        <ul>
          <li>1 dopracowana strona lub krótka wizytówka</li>
          <li>Responsywny wygląd mobile / desktop</li>
          <li>Podstawowe SEO techniczne</li>
          <li>Podpięcie kontaktu, telefonu i social mediów</li>
        </ul>
      </article>

      <article class="pricing-card pricing-card--featured">
        <div class="pricing-badge">Najczęstszy wybór</div>
        <div class="pricing-card-icon">${layersIcon}</div>
        <div class="pricing-card-head">
          <span>Firma</span>
          <strong>od 3 500 zł</strong>
        </div>
        <h2>Rozbudowana strona firmowa z indywidualnym stylem</h2>
        <p>Dla marek, które chcą wyglądać nowocześnie, budować zaufanie i zamieniać odwiedzających w klientów.</p>
        <ul>
          <li>Projekt głównych sekcji i podstron</li>
          <li>Animacje, mikrointerakcje i dopracowany UX</li>
          <li>Optymalizacja szybkości oraz struktury SEO</li>
          <li>Przygotowanie do publikacji i indeksowania</li>
          <li>Instrukcja obsługi oraz wsparcie po starcie</li>
        </ul>
      </article>

      <article class="pricing-card">
        <div class="pricing-card-icon">${rocketIcon}</div>
        <div class="pricing-card-head">
          <span>Premium</span>
          <strong>od 5 500 zł</strong>
        </div>
        <h2>Strona z mocnym efektem wizualnym i większym zakresem</h2>
        <p>Dla firm, które potrzebują mocniejszej prezentacji, większej liczby widoków, integracji lub niestandardowych efektów.</p>
        <ul>
          <li>Więcej podstron i rozbudowana architektura treści</li>
          <li>Zaawansowane animacje i dedykowane komponenty</li>
          <li>Integracje, formularze, katalogi lub elementy sprzedażowe</li>
          <li>Rozbudowane testy, poprawki i przygotowanie produkcyjne</li>
        </ul>
      </article>
    </div>

    <div class="price-note">
      <span>Ważne</span>
      <p>Podane kwoty są widełkami startowymi. Finalna cena zależy od zakresu, materiałów, liczby poprawek, stopnia indywidualnego projektu oraz tego, czy klient potrzebuje samego wykonania, czy pełnego prowadzenia od koncepcji do publikacji.</p>
    </div>

    <section class="pricing-breakdown" id="jak-powstaje-cena" aria-labelledby="price-breakdown-title">
      <div class="pricing-section-heading">
        <span>Skąd bierze się cena?</span>
        <h2 id="price-breakdown-title">Cena to nie sam wygląd — to <em>strategia, kod, testy i wdrożenie</em>.</h2>
      </div>
      <div class="breakdown-grid">
        <article><div class="breakdown-icon">${sparkIcon}</div><strong>01</strong><h3>Analiza i kierunek</h3><p>Rozmowa, zrozumienie branży, celu strony, konkurencji i tego, jaki styl ma pasować do marki.</p></article>
        <article><div class="breakdown-icon">${layersIcon}</div><strong>02</strong><h3>Projekt wizualny</h3><p>Układ sekcji, hierarchia treści, kolory, rytm, dopasowanie do mobile i większych monitorów.</p></article>
        <article><div class="breakdown-icon">${codeIcon}</div><strong>03</strong><h3>Kodowanie</h3><p>Czysty kod, responsywność, animacje, formularze, linki kontaktowe i przygotowanie pod publikację.</p></article>
        <article><div class="breakdown-icon">${shieldIcon}</div><strong>04</strong><h3>Optymalizacja</h3><p>Szybkość działania, podstawowe SEO, metadane, favicon, struktura nagłówków i techniczna jakość strony.</p></article>
        <article><div class="breakdown-icon">${testIcon}</div><strong>05</strong><h3>Poprawki i testy</h3><p>Sprawdzanie widoków, eliminowanie błędów, dopracowanie detali oraz test na komputerze i telefonie.</p></article>
        <article><div class="breakdown-icon">${deployIcon}</div><strong>06</strong><h3>Wdrożenie</h3><p>Publikacja na hostingu, domena, konfiguracja produkcyjna, kontrola działania i instrukcja po starcie.</p></article>
      </div>
    </section>

    <section class="pricing-process" aria-labelledby="price-process-title">
      <div class="pricing-section-heading">
        <span>Przed podpisaniem umowy</span>
        <h2 id="price-process-title">Najpierw ustalamy <em>kierunek</em>, żeby wycena była uczciwa i czytelna.</h2>
        <p>Zanim padnie kwota, porządkujemy cele, materiały, styl i zakres. Dzięki temu klient wie, co zamawia, a projekt nie rozjeżdża się w połowie pracy.</p>
      </div>
      <div class="process-timeline">
        <article><span>01</span><h3>Krótka rozmowa</h3><p>Ustalamy, czego potrzebujesz: strona firmowa, landing page, portfolio, katalog, odświeżenie czy projekt od zera.</p></article>
        <article><span>02</span><h3>Materiały i inspiracje</h3><p>Sprawdzamy logo, zdjęcia, teksty, konkurencję i strony, które podobają Ci się stylistycznie.</p></article>
        <article><span>03</span><h3>Zakres i wycena</h3><p>Rozpisujemy, co dokładnie wchodzi w projekt, co jest opcją dodatkową i ile czasu zajmie realizacja.</p></article>
        <article><span>04</span><h3>Umowa i start</h3><p>Po akceptacji zakresu podpisujemy ustalenia, ustalamy płatności i zaczynamy projektowanie oraz kodowanie.</p></article>
      </div>
    </section>

    <section class="pricing-aftercare" aria-labelledby="aftercare-title">
      <div class="aftercare-card">
        <span>Opieka posprzedażowa</span>
        <h2 id="aftercare-title">Po publikacji strona dalej ma działać szybko, stabilnie i bez stresu.</h2>
        <p>Po oddaniu projektu sprawdzamy, czy wszystko działa poprawnie, pomagamy z drobnymi zmianami i możemy przejąć stałą opiekę techniczną.</p>
      </div>
      <div class="aftercare-options">
        <article><strong>7 dni</strong><span>Kontrola po starcie</span><p>Sprawdzenie działania po publikacji, poprawki techniczne i upewnienie się, że strona jest dostępna.</p></article>
        <article><strong>30 dni</strong><span>Wsparcie wdrożeniowe</span><p>Drobne korekty treści, konsultacje i pomoc przy pierwszym korzystaniu ze strony.</p></article>
        <article><strong>Stała opieka</strong><span>Opcja miesięczna</span><p>Aktualizacje, zmiany treści, monitoring, rozwój sekcji i techniczne wsparcie w miarę potrzeb.</p></article>
      </div>
    </section>

    <section class="pricing-rights" aria-labelledby="rights-title">
      <div class="rights-copy">
        <span>Kod i prawa</span>
        <h2 id="rights-title">Po zakończeniu projektu <em>nie zostajesz bez dostępu</em> do swojej strony.</h2>
        <p>Strona nie jest „uwięziona” u wykonawcy. Po zakończeniu i rozliczeniu prac możemy przekazać pliki, repozytorium lub dostęp do hostingu — zależnie od ustalonego modelu współpracy.</p>
      </div>
      <div class="rights-transfer-card" aria-hidden="true">
        <div class="rights-transfer-icon">${handoffIcon}</div>
        <strong>Przekazanie projektu</strong>
        <p>Po rozliczeniu porządkujemy dostęp, pliki i ustalenia techniczne w jednym miejscu.</p>
        <ul>
          <li><span>01</span>Dostęp do wdrożonej strony</li>
          <li><span>02</span>Pliki lub repozytorium projektu</li>
          <li><span>03</span>Instrukcja dalszych zmian</li>
        </ul>
      </div>
    </section>

    <section class="pricing-faq" aria-labelledby="pricing-faq-title">
      <div class="pricing-section-heading">
        <span>Najczęstsze pytania</span>
        <h2 id="pricing-faq-title">Krótko i konkretnie: <em>najważniejsze rzeczy</em> przed startem.</h2>
        <p>Bez drobnego druku i bez technicznego chaosu. Poniżej zebraliśmy pytania, które najczęściej padają przed pierwszą wyceną.</p>
      </div>
      <div class="faq-grid">
        <article><div class="faq-icon">${questionIcon}</div><h3>Czy można zacząć bez gotowych tekstów?</h3><p>Tak. Możemy oprzeć się na rozmowie i przygotować strukturę treści, a później wspólnie dopracować komunikaty.</p></article>
        <article><div class="faq-icon">${questionIcon}</div><h3>Czy cena może wzrosnąć w trakcie?</h3><p>Tylko wtedy, gdy zmienia się zakres, np. dochodzą nowe podstrony, funkcje, integracje albo dodatkowe rundy prac.</p></article>
        <article><div class="faq-icon">${handoffIcon}</div><h3>Czy strona będzie moja?</h3><p>Tak — po rozliczeniu projektu przekazujemy ustalone prawa i dostęp do kodu lub wdrożonej strony.</p></article>
        <article><div class="faq-icon">${deployIcon}</div><h3>Czy pomagacie z domeną i hostingiem?</h3><p>Tak. Możemy podpowiedzieć najlepsze rozwiązanie, skonfigurować publikację i sprawdzić działanie po wdrożeniu.</p></article>
      </div>
    </section>
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
    ${page === "polityka" ? privacySection : page === "cennik" ? pricingSection : page === "portfolio" ? portfolioSection : defaultSection}
  </main>
  ${footerMarkup}
`;
