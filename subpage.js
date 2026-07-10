const pages = {
  uslugi: { index: "01", title: "Usługi" },
  portfolio: { index: "02", title: "Portfolio" },
  cennik: { index: "03", title: "Cennik" },
  kontakt: { index: "04", title: "Kontakt" },
  polityka: { index: "05", title: "Polityka prywatności" },
  usluga: { index: "01", title: "Usługa" },
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

const serviceItems = [
  {
    slug: "tworzenie-stron-internetowych",
    href: "tworzenie-stron-internetowych.html",
    image: "assets/services/usl1.jpg",
    icon: layersIcon,
    title: "Tworzenie stron internetowych",
    short: "Kompletne strony www od koncepcji, przez projekt, po wdrożenie i przygotowanie do pozyskiwania klientów.",
    intro: "Tworzenie strony internetowej w HostControl zaczyna się od zrozumienia celu biznesowego. Nie chodzi tylko o ładny widok, ale o stronę, która prowadzi użytkownika do kontaktu, pokazuje wartość firmy i działa bez tarcia na telefonie oraz komputerze.",
    audience: "Dla firm, które chcą wystartować z nową stroną, odświeżyć wizerunek lub zbudować solidny fundament sprzedażowy online.",
    scope: ["Analiza celu strony i struktury podstron", "Projekt nowoczesnego układu dopasowanego do marki", "Kodowanie responsywne na telefon, tablet i komputer", "Podstawowa optymalizacja SEO i szybkości", "Wdrożenie, testy oraz instrukcja dalszego rozwoju"],
    results: ["Spójna strona dopasowana do stylu firmy", "Czytelna ścieżka do kontaktu", "Kod przygotowany do dalszej rozbudowy", "Lepsze pierwsze wrażenie w Google i social mediach"],
    seo: ["tworzenie stron internetowych Mikołajki", "strony www Mrągowo", "projektowanie stron internetowych Mazury"],
    faq: [["Ile trwa wykonanie strony internetowej?", "Najczęściej od 2 do 6 tygodni, zależnie od liczby podstron, materiałów i zakresu funkcji."], ["Czy muszę mieć gotowe teksty?", "Nie. Możemy zacząć od rozmowy i przygotować strukturę treści, którą później wspólnie dopracujemy."]]
  },
  {
    slug: "strony-firmowe",
    href: "strony-firmowe.html",
    image: "assets/services/usl2.jpg",
    icon: deviceIcon,
    title: "Strony firmowe",
    short: "Profesjonalne strony dla lokalnych i ogólnopolskich firm, które jasno pokazują ofertę, zaufanie i przewagi marki.",
    intro: "Strona firmowa powinna szybko odpowiedzieć na trzy pytania: czym zajmuje się firma, dlaczego warto jej zaufać i jak łatwo się skontaktować. Dlatego projektujemy ją jak uporządkowaną prezentację marki, a nie zbiór przypadkowych sekcji.",
    audience: "Dla usługodawców, firm lokalnych, marek osobistych, wykonawców, gabinetów, obiektów turystycznych i przedsiębiorstw, które potrzebują wiarygodnej wizytówki online.",
    scope: ["Strona główna z mocnym hero i CTA", "Podstrony oferty, o firmie, realizacji i kontaktu", "Sekcje z opiniami, procesem, przewagami i FAQ", "Formularz kontaktowy lub gotowy mail", "Przygotowanie struktury pod lokalne pozycjonowanie"],
    results: ["Większa wiarygodność firmy", "Lepsze wyjaśnienie oferty", "Więcej zapytań od klientów", "Strona gotowa pod kampanie i SEO"],
    seo: ["strony firmowe Mikołajki", "strona internetowa dla firmy Mrągowo", "strony dla firm Mazury"],
    faq: [["Czy strona firmowa może mieć kilka podstron?", "Tak. Najczęściej budujemy od 4 do 8 podstron, ale zakres dobieramy do realnej oferty."], ["Czy można później rozbudować stronę?", "Tak, struktura jest przygotowana tak, aby można było dodawać kolejne sekcje, podstrony i treści SEO."]]
  },
  {
    slug: "landing-page",
    href: "landing-page.html",
    image: "assets/services/usl3.jpg",
    icon: rocketIcon,
    title: "Landing page",
    short: "Jednostronicowe strony sprzedażowe pod kampanie, ofertę, zapisy, promocje i szybkie pozyskiwanie leadów.",
    intro: "Landing page jest jak dobrze zaprojektowana rozmowa sprzedażowa. Prowadzi użytkownika od problemu, przez rozwiązanie, dowody zaufania i konkretną ofertę, aż do działania: telefonu, formularza lub zakupu.",
    audience: "Dla firm, które promują jedną usługę, wydarzenie, produkt, kampanię reklamową albo chcą szybko przetestować nową ofertę.",
    scope: ["Strategia kolejności sekcji", "Nagłówki i komunikaty nastawione na konwersję", "Przyciski CTA rozmieszczone w kluczowych miejscach", "Wersja mobilna dopracowana pod szybkie decyzje", "Podpięcie formularza, telefonu, maila lub social mediów"],
    results: ["Więcej kontaktów z kampanii", "Czytelniejsza prezentacja jednej oferty", "Mniej rozproszeń dla użytkownika", "Strona gotowa do reklam Google i social"],
    seo: ["landing page Mikołajki", "strona sprzedażowa Mrągowo", "landing page dla firmy"],
    faq: [["Czy landing page nadaje się pod reklamy?", "Tak, to jedna z najlepszych form strony pod reklamy, bo skupia uwagę na jednym celu."], ["Czy landing page może być później rozbudowany?", "Tak. Może stać się początkiem większej strony firmowej."]]
  },
  {
    slug: "sklepy-internetowe",
    href: "sklepy-internetowe.html",
    image: "assets/services/usl4.jpg",
    icon: layersIcon,
    title: "Sklepy i katalogi online",
    short: "Strony produktowe, katalogi ofert i lekkie sklepy internetowe zaprojektowane pod czytelność oraz sprzedaż.",
    intro: "Nie każdy biznes od razu potrzebuje rozbudowanego sklepu. Czasem najlepszym krokiem jest katalog produktów, strona ofertowa albo lekki sklep z najważniejszymi funkcjami. Dobieramy rozwiązanie do etapu firmy.",
    audience: "Dla marek, które sprzedają produkty, pokazują katalog, przyjmują zapytania ofertowe lub chcą uporządkować prezentację asortymentu.",
    scope: ["Struktura kategorii i kart produktów", "Projekt listy produktów oraz szczegółów oferty", "Elementy zaufania, dostawy, płatności i FAQ", "Przygotowanie pod zdjęcia produktowe", "Integracje zależne od wybranego modelu sprzedaży"],
    results: ["Lepsza prezentacja oferty", "Szybsze zapytania o produkty", "Porządek w kategoriach", "Możliwość dalszej rozbudowy sprzedaży online"],
    seo: ["sklep internetowy Mikołajki", "katalog produktów online", "strona produktowa Mrągowo"],
    faq: [["Czy od razu muszę robić pełny sklep?", "Nie. Możemy zacząć od katalogu lub strony ofertowej i rozbudować ją później."], ["Czy przygotujecie miejsce na zdjęcia produktów?", "Tak, projektujemy układ tak, aby zdjęcia były ważnym elementem sprzedaży."]]
  },
  {
    slug: "portfolio-online",
    href: "portfolio-online.html",
    image: "assets/services/usl5.jpg",
    icon: sparkIcon,
    title: "Portfolio online",
    short: "Strony prezentujące realizacje, projekty, zdjęcia i doświadczenie w sposób, który buduje zaufanie do marki.",
    intro: "Portfolio nie powinno być galerią bez kontekstu. Dobre portfolio opowiada, jaki był cel projektu, co zostało wykonane i dlaczego efekt ma znaczenie dla klienta.",
    audience: "Dla fotografów, projektantów, wykonawców, architektów, twórców, freelancerów i firm, które sprzedają jakością swoich realizacji.",
    scope: ["Struktura realizacji i kategorii", "Karty projektów z opisem zakresu", "Widoki zdjęć i mockupów", "Sekcje z procesem oraz opiniami", "CTA prowadzące do zapytania o podobny projekt"],
    results: ["Lepsze pokazanie jakości pracy", "Większe zaufanie przed kontaktem", "Porządek w realizacjach", "Strona wspierająca markę osobistą lub firmową"],
    seo: ["portfolio online", "strona portfolio Mikołajki", "strona dla freelancera"],
    faq: [["Czy mogę dodać później nowe realizacje?", "Tak. Projektujemy układ z myślą o systematycznym dodawaniu kolejnych prac."], ["Czy portfolio może mieć filtr kategorii?", "Tak, jeśli liczba projektów tego wymaga."]]
  },
  {
    slug: "odswiezanie-stron",
    href: "odswiezanie-stron.html",
    image: "assets/services/usl6.jpg",
    icon: testIcon,
    title: "Odświeżanie stron internetowych",
    short: "Modernizacja starej strony: wygląd, układ, mobile, szybkość, treści i lepsze prowadzenie użytkownika do kontaktu.",
    intro: "Stara strona często ma dobry fundament, ale słaby wygląd, chaos w treści albo problemy na telefonie. Odświeżenie pozwala zachować to, co działa, i poprawić to, co blokuje klientów.",
    audience: "Dla firm, które mają już stronę, ale czują, że nie wygląda aktualnie, nie działa dobrze na mobile albo nie generuje zapytań.",
    scope: ["Audyt obecnej strony", "Nowy układ najważniejszych sekcji", "Poprawa responsywności i czytelności", "Dopracowanie treści i CTA", "Optymalizacja techniczna i podstawowe SEO"],
    results: ["Nowocześniejszy wygląd bez startu od zera", "Lepsza wersja mobilna", "Czytelniejsza oferta", "Więcej zaufania u odwiedzających"],
    seo: ["odświeżanie strony internetowej", "modernizacja strony www", "poprawa strony firmowej"],
    faq: [["Czy trzeba wyrzucać starą stronę?", "Nie zawsze. Najpierw sprawdzamy, co można zachować, a co warto przebudować."], ["Czy odświeżenie jest tańsze niż nowa strona?", "Czasem tak, ale zależy od jakości obecnej strony i zakresu zmian."]]
  },
  {
    slug: "kodowanie-projektow",
    href: "kodowanie-projektow.html",
    image: "assets/services/usl7.jpg",
    icon: codeIcon,
    title: "Kodowanie projektów graficznych",
    short: "Przenoszenie projektów z Figmy lub gotowych makiet do czystego, responsywnego kodu strony internetowej.",
    intro: "Dobry projekt graficzny potrzebuje dobrego wdrożenia. Kodowanie makiety polega na zachowaniu detali wizualnych, animacji, responsywności i jakości technicznej, a nie tylko na przepisaniu obrazka do HTML.",
    audience: "Dla projektantów, agencji i firm, które mają gotowy projekt graficzny i potrzebują solidnego wdrożenia front-end.",
    scope: ["Analiza makiety i stanów responsywnych", "Kodowanie sekcji zgodnie z projektem", "Animacje, interakcje i mikrodetale", "Dostosowanie do mobile i dużych ekranów", "Testy przeglądarek i optymalizacja"],
    results: ["Wdrożenie bliskie projektowi", "Czysty i czytelny kod", "Dobra wydajność strony", "Mniej poprawek po przekazaniu projektu"],
    seo: ["kodowanie z Figmy", "wdrożenie projektu graficznego", "front-end strona internetowa"],
    faq: [["Czy potrzebny jest projekt mobile?", "Najlepiej tak, ale jeśli go nie ma, możemy przygotować responsywne decyzje na podstawie wersji desktopowej."], ["Czy kod może trafić do repozytorium?", "Tak, po ustaleniu zakresu możemy pracować na repozytorium i przekazać kod po zakończeniu."]]
  },
  {
    slug: "optymalizacja-szybkosci",
    href: "optymalizacja-szybkosci.html",
    image: "assets/services/usl8.jpg",
    icon: deployIcon,
    title: "Optymalizacja szybkości strony",
    short: "Przyspieszanie stron internetowych przez poprawę kodu, obrazów, ładowania zasobów i technicznej wydajności.",
    intro: "Szybkość strony wpływa na wygodę użytkownika, skuteczność reklamy i odbiór marki. Optymalizacja polega na znalezieniu elementów, które spowalniają stronę, a potem uporządkowaniu ich bez psucia wyglądu.",
    audience: "Dla firm, których strona długo się ładuje, źle wypada w testach lub traci użytkowników na telefonach.",
    scope: ["Analiza obecnego ładowania strony", "Optymalizacja obrazów i zasobów", "Porządkowanie CSS i JavaScript", "Poprawa ładowania fontów", "Rekomendacje dalszych zmian technicznych"],
    results: ["Szybsze pierwsze wczytanie", "Lepsze doświadczenie na telefonach", "Mniej frustracji użytkowników", "Solidniejszy fundament pod SEO"],
    seo: ["optymalizacja szybkości strony", "przyspieszanie strony www", "Core Web Vitals"],
    faq: [["Czy każdą stronę da się przyspieszyć?", "Większość tak, ale zakres zależy od technologii i jakości obecnego wdrożenia."], ["Czy optymalizacja wpływa na wygląd?", "Celem jest poprawa szybkości bez pogorszenia wyglądu strony."]]
  },
  {
    slug: "seo-techniczne",
    href: "seo-techniczne.html",
    image: "assets/services/usl9.jpg",
    icon: shieldIcon,
    title: "SEO techniczne",
    short: "Podstawy technicznego SEO: struktura nagłówków, metadane, schema, linkowanie, indeksacja i lokalne sygnały.",
    intro: "SEO techniczne pomaga Google zrozumieć, czym zajmuje się strona, jakie usługi oferuje firma i na jakim obszarze działa. To nie zastępuje regularnych treści, ale daje stronie zdrowszy fundament.",
    audience: "Dla firm, które chcą uporządkować stronę pod wyszukiwarkę i lepiej komunikować lokalne usługi w Mikołajkach, Mrągowie oraz na Mazurach.",
    scope: ["Tytuły, opisy i struktura nagłówków", "Dane strukturalne schema.org", "Linkowanie wewnętrzne usług", "Przygotowanie pod lokalne frazy", "Rekomendacje treści SEO na kolejne etapy"],
    results: ["Czytelniejsza struktura dla Google", "Lepsze podstrony usługowe", "Większa spójność lokalnych fraz", "Fundament pod dalsze pozycjonowanie"],
    seo: ["SEO techniczne Mikołajki", "pozycjonowanie lokalne Mrągowo", "optymalizacja SEO strony"],
    faq: [["Czy SEO techniczne wystarczy do pierwszej pozycji?", "Nie ma uczciwej gwarancji pierwszej pozycji, ale techniczne SEO jest ważnym fundamentem dalszego pozycjonowania."], ["Czy można dodać osobne strony pod usługi?", "Tak — właśnie takie podstrony często pomagają lepiej opisać ofertę."]]
  },
  {
    slug: "opieka-nad-strona",
    href: "opieka-nad-strona.html",
    image: "assets/services/usl10.jpg",
    icon: handoffIcon,
    title: "Opieka nad stroną",
    short: "Wsparcie po publikacji: poprawki, aktualizacje treści, rozwój sekcji, kontrola działania i techniczne wsparcie.",
    intro: "Strona po publikacji nadal żyje. Dochodzą nowe realizacje, zmiany w ofercie, promocje, zdjęcia, poprawki i pomysły. Opieka nad stroną daje spokój, że projekt nie zostaje sam po wdrożeniu.",
    audience: "Dla firm, które chcą mieć kogoś od bieżących zmian, rozwoju strony i technicznych konsultacji po starcie.",
    scope: ["Drobne zmiany treści i sekcji", "Dodawanie nowych materiałów", "Kontrola działania strony", "Rozwój podstron usługowych", "Konsultacje techniczne i rekomendacje"],
    results: ["Strona pozostaje aktualna", "Szybsze wprowadzanie zmian", "Mniej stresu technicznego", "Możliwość stałego rozwoju SEO i treści"],
    seo: ["opieka nad stroną internetową", "administracja strony www", "utrzymanie strony internetowej"],
    faq: [["Czy opieka jest obowiązkowa?", "Nie. To opcja dla firm, które chcą regularnie rozwijać stronę bez samodzielnego grzebania w kodzie."], ["Czy można zamówić jednorazową poprawkę?", "Tak, jeśli zakres jest konkretny, możemy działać jednorazowo."]]
  }
];

const selectedService = serviceItems.find((service) => service.slug === document.body.dataset.service) || serviceItems[0];
const serviceRichDescriptions = {
  "tworzenie-stron-internetowych": {
    value: "Kompletna strona internetowa porządkuje sposób, w jaki firma prezentuje ofertę w sieci. Klient nie musi domyślać się, czym się zajmujesz, jakie są kolejne kroki i dlaczego warto wybrać właśnie Ciebie — wszystko prowadzi go od pierwszego wrażenia do kontaktu.",
    search: "Dobrze zaprojektowana strona www pozwala budować widoczność na frazy takie jak tworzenie stron internetowych Mikołajki, strony www Mrągowo czy projektowanie stron internetowych Mazury. Każda sekcja, nagłówek i podstrona mogą wzmacniać konkretny temat w Google.",
    business: "Największą wartością nie jest sam wygląd, tylko połączenie estetyki, szybkości, treści i logicznej struktury. Strona staje się narzędziem sprzedażowym: odpowiada na pytania, buduje zaufanie i ułatwia wysłanie zapytania."
  },
  "strony-firmowe": {
    value: "Strona firmowa działa jak cyfrowa siedziba marki. Pokazuje ofertę, doświadczenie, przewagi, opinie i dane kontaktowe w jednym uporządkowanym miejscu, dzięki czemu klient szybciej podejmuje decyzję o rozmowie.",
    search: "Osobne sekcje i podstrony mogą wspierać lokalne wyszukiwania: strony firmowe Mikołajki, strona internetowa dla firmy Mrągowo, strony dla firm Mazury. To szczególnie ważne dla usługodawców, którzy chcą pozyskiwać klientów z konkretnego regionu.",
    business: "Dobra strona firmowa ogranicza chaos komunikacyjny. Zamiast tłumaczyć ofertę od zera w każdej rozmowie, możesz odsyłać klientów do miejsca, które jasno pokazuje zakres, proces i styl Twojej firmy."
  },
  "landing-page": {
    value: "Landing page skupia uwagę na jednej ofercie i jednym celu. Dzięki temu użytkownik nie błądzi po wielu podstronach, tylko przechodzi przez konkretną argumentację: problem, rozwiązanie, korzyści, dowody zaufania i wezwanie do działania.",
    search: "Taka strona może wspierać frazy związane z konkretną usługą, kampanią albo lokalnym zapytaniem. Dobrze opisany landing page daje Google jasny sygnał, czego dotyczy oferta i dla kogo została przygotowana.",
    business: "Największa korzyść to mierzalność. Landing page łatwo podpiąć pod reklamy, testować nagłówki, porównywać kliknięcia i sprawdzać, które komunikaty najlepiej zamieniają odwiedzających w zapytania."
  },
  "sklepy-internetowe": {
    value: "Sklep lub katalog online pomaga pokazać produkty w sposób uporządkowany, estetyczny i wygodny dla klienta. Nawet jeśli sprzedaż nie odbywa się od razu przez koszyk, dobra prezentacja oferty może znacząco zwiększyć liczbę zapytań.",
    search: "Kategorie, opisy produktów i podstrony ofertowe mogą wzmacniać widoczność na zapytania produktowe oraz lokalne. To dobry fundament pod rozwój treści SEO dla konkretnych grup produktów i usług.",
    business: "Klient zyskuje jasny układ oferty, a firma narzędzie do prezentowania asortymentu bez ręcznego wysyłania wszystkiego w wiadomościach. To oszczędza czas i poprawia profesjonalny odbiór marki."
  },
  "portfolio-online": {
    value: "Portfolio online zamienia realizacje w argument sprzedażowy. Zamiast pokazywać same zdjęcia, można opisać zakres, cel, efekt i styl pracy, dzięki czemu potencjalny klient rozumie wartość wykonanych projektów.",
    search: "Dobrze opisane realizacje mogą wzmacniać widoczność na frazy branżowe, lokalne i usługowe. Każdy projekt może stać się osobnym dowodem kompetencji oraz dodatkowym punktem wejścia z Google.",
    business: "Portfolio skraca drogę do zaufania. Klient widzi nie tylko, że coś zostało wykonane, ale też jak wygląda proces, jaki był efekt i czy styl wykonawcy pasuje do jego potrzeb."
  },
  "odswiezanie-stron": {
    value: "Odświeżenie strony pozwala poprawić wizerunek bez konieczności wyrzucania wszystkiego od zera. Często wystarczy uporządkować komunikację, poprawić mobile, przyspieszyć ładowanie i nadać stronie nowoczesny rytm wizualny.",
    search: "Modernizacja strony to także okazja do poprawienia nagłówków, metadanych, linkowania i opisów usług. Stara strona może zacząć lepiej odpowiadać na zapytania użytkowników oraz wyszukiwarek.",
    business: "Firma zyskuje stronę, która wygląda aktualnie i nie odstrasza użytkownika. To szczególnie ważne, gdy reklamy, polecenia albo wizytówka Google prowadzą na witrynę, która musi zrobić dobre pierwsze wrażenie."
  },
  "kodowanie-projektow": {
    value: "Kodowanie projektu graficznego przenosi makietę do działającej strony bez utraty detali. Ważne są odstępy, animacje, responsywność, jakość kodu i zachowanie charakteru projektu na różnych ekranach.",
    search: "Czyste wdrożenie wpływa na szybkość, semantykę HTML, dostępność i strukturę treści. To elementy, które wspierają późniejsze SEO oraz ułatwiają dalszą rozbudowę strony.",
    business: "Dla projektanta lub firmy oznacza to mniej kompromisów między projektem a efektem końcowym. Strona wygląda jak zaplanowano, działa sprawnie i może być łatwiej przekazana dalej."
  },
  "optymalizacja-szybkosci": {
    value: "Szybka strona zmniejsza frustrację użytkowników i poprawia odbiór marki. Jeśli witryna ładuje się zbyt długo, część osób rezygnuje, zanim zobaczy ofertę — szczególnie na telefonach.",
    search: "Optymalizacja szybkości wspiera techniczne SEO, Core Web Vitals i jakość doświadczenia użytkownika. Google nie ocenia tylko treści, ale również to, czy strona działa szybko i stabilnie.",
    business: "Lepsza wydajność może poprawić skuteczność kampanii reklamowych, zmniejszyć liczbę porzuceń i sprawić, że strona będzie bardziej komfortowa dla klientów wracających po informacje."
  },
  "seo-techniczne": {
    value: "SEO techniczne porządkuje fundament strony: nagłówki, metadane, adresy, linkowanie, dane strukturalne i indeksację. Dzięki temu wyszukiwarka lepiej rozumie, jakie usługi oferuje firma i gdzie działa.",
    search: "To szczególnie ważne przy lokalnym pozycjonowaniu na Mikołajki, Mrągowo, powiat mrągowski i Mazury. Dobrze ułożone podstrony usługowe zwiększają szansę, że Google połączy stronę z konkretnymi zapytaniami.",
    business: "Techniczne SEO nie zastępuje regularnej pracy nad treścią, ale usuwa bariery. Strona staje się czytelniejsza, bardziej logiczna i gotowa na dalszy rozwój widoczności."
  },
  "opieka-nad-strona": {
    value: "Opieka nad stroną sprawia, że witryna nie starzeje się po publikacji. Można dodawać nowe treści, realizacje, zmiany w ofercie, sezonowe komunikaty i kolejne sekcje bez odkładania wszystkiego na później.",
    search: "Regularne aktualizacje wspierają rozwój SEO, bo strona może stale odpowiadać na nowe zapytania i rozbudowywać tematy usługowe. To dobry kierunek dla firm, które chcą rosnąć organicznie.",
    business: "Firma zyskuje spokój i ciągłość. Zamiast szukać pomocy przy każdej drobnej zmianie, ma ustalony sposób działania i możliwość systematycznego rozwijania strony."
  }
};
const selectedServiceRich = serviceRichDescriptions[selectedService.slug] || serviceRichDescriptions["tworzenie-stron-internetowych"];
const accentAudienceTitle = (text) => {
  const marker = " które ";
  const markerIndex = text.indexOf(marker);
  if (markerIndex !== -1) {
    const accentStart = markerIndex + marker.length;
    return `${text.slice(0, accentStart)}<em>${text.slice(accentStart)}</em>`;
  }

  const commaIndex = text.indexOf(", ");
  if (commaIndex !== -1) {
    const accentStart = commaIndex + 2;
    return `${text.slice(0, accentStart)}<em>${text.slice(accentStart)}</em>`;
  }

  return text;
};
const selectedServiceAudienceTitle = accentAudienceTitle(selectedService.audience);

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

      <div class="footer-column footer-services-column">
        <strong>Usługi</strong>
        <a href="tworzenie-stron-internetowych.html">Tworzenie stron</a>
        <a href="strony-firmowe.html">Strony firmowe</a>
        <a href="landing-page.html">Landing page</a>
        <a href="sklepy-internetowe.html">Sklepy i katalogi</a>
        <a href="portfolio-online.html">Portfolio online</a>
        <a href="odswiezanie-stron.html">Odświeżanie stron</a>
        <a href="kodowanie-projektow.html">Kodowanie projektów</a>
        <a href="optymalizacja-szybkosci.html">Szybkość strony</a>
        <a href="seo-techniczne.html">SEO techniczne</a>
        <a href="opieka-nad-strona.html">Opieka nad stroną</a>
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

const serviceCardsMarkup = serviceItems.map((service, index) => `
  <article class="services-list-card">
    <a href="${service.href}" aria-label="${service.title} — zobacz szczegóły">
      <div class="services-list-media" aria-hidden="true">
        <img src="${service.image}" alt="" loading="lazy" />
        <span class="services-image-overlay"></span>
        <i>${String(index + 1).padStart(2, "0")}</i>
      </div>
      <div class="services-list-copy">
        <div class="services-list-icon">${service.icon}</div>
        <span>${service.seo[0]}</span>
        <h2>${service.title}</h2>
        <p>${service.short}</p>
        <div class="services-list-tags">
          ${service.seo.slice(0, 3).map((tag) => `<small>${tag}</small>`).join("")}
        </div>
        <strong>Rozwiń usługę <em>${arrowIcon}</em></strong>
      </div>
    </a>
  </article>
`).join("");

const servicesSection = `
  <section class="services-page section" id="uslugi">
    <div class="services-page-grid" aria-hidden="true"></div>
    <div class="services-page-orb services-page-orb--lime" aria-hidden="true"></div>
    <div class="services-page-orb services-page-orb--blue" aria-hidden="true"></div>

    <section class="services-page-hero" aria-labelledby="services-title">
      <div>
        <span class="services-page-kicker"><i></i>Usługi HostControl</span>
        <h1 id="services-title">Projektujemy, kodujemy i rozwijamy <em>strony, które realnie pracują</em> na firmę.</h1>
        <p>Każda usługa ma własną podstronę z szerszym opisem, zakresem, efektami i odpowiedziami na pytania. To jednocześnie mocny fundament pod SEO — szczególnie dla firm z Mikołajek, Mrągowa, Mazur i całej Polski.</p>
        <div class="services-page-actions">
          <a class="services-page-primary" href="#lista-uslug">Zobacz 10 usług <span aria-hidden="true">${arrowIcon}</span></a>
          <a class="services-page-secondary" href="kontakt.html">Dobierzmy zakres</a>
        </div>
      </div>
      <aside class="services-page-panel">
        <span>Dopasowanie zakresu</span>
        <strong>najpierw cel, potem <em>najlepsza usługa</em></strong>
        <p>Nie zaczynamy od wciskania pakietu. Sprawdzamy, czy firmie bardziej pomoże nowa strona, landing page, przebudowa oferty, techniczne SEO, katalog online czy stała opieka po publikacji.</p>
        <div class="services-panel-checklist">
          <article><small>Cel</small><span>co strona ma realnie zrobić dla firmy: pozyskać zapytania, zbudować zaufanie albo uporządkować ofertę.</span></article>
          <article><small>Styl</small><span>jak marka ma wyglądać i brzmieć, żeby klient od pierwszych sekund czuł jej charakter.</span></article>
          <article><small>Efekt</small><span>które elementy prowadzą do telefonu, formularza, rezerwacji, sprzedaży lub dalszej rozmowy.</span></article>
        </div>
      </aside>
    </section>

    <section class="services-list" id="lista-uslug" aria-label="Lista usług HostControl">
      ${serviceCardsMarkup}
    </section>

    <section class="services-page-note">
      <div>
        <span>Jak dobrać usługę?</span>
        <h2>Nie musisz wiedzieć, czy potrzebujesz <em>strony firmowej, landing page, katalogu czy opieki technicznej.</em></h2>
        <p>Najważniejszy jest cel: więcej zapytań, lepszy wizerunek, uporządkowana oferta, szybsza strona albo widoczność w Google. Na tej podstawie dobieramy zakres, który ma sens biznesowo — bez wciskania funkcji, których firma realnie nie potrzebuje.</p>
      </div>
      <a href="kontakt.html">Opowiedz o projekcie <span aria-hidden="true">${arrowIcon}</span></a>
    </section>
  </section>
`;

const serviceDetailSection = `
  <section class="service-detail-page section" id="usluga">
    <div class="service-detail-grid" aria-hidden="true"></div>
    <div class="service-detail-orb service-detail-orb--lime" aria-hidden="true"></div>
    <div class="service-detail-orb service-detail-orb--blue" aria-hidden="true"></div>

    <section class="service-detail-hero" aria-labelledby="service-detail-title">
      <div class="service-detail-copy">
        <a class="service-back-link" href="uslugi.html">Wróć do usług</a>
        <span class="service-detail-kicker"><i></i>${selectedService.seo[0]}</span>
        <h1 id="service-detail-title">${selectedService.title} <em>dla firm, które chcą działać lepiej online.</em></h1>
        <p>${selectedService.intro}</p>
        <div class="service-detail-actions">
          <a class="service-detail-primary" href="kontakt.html">Zapytaj o tę usługę <span aria-hidden="true">${arrowIcon}</span></a>
          <a class="service-detail-secondary" href="cennik.html">Sprawdź cennik</a>
        </div>
      </div>
      <aside class="service-detail-media">
        <div class="service-detail-placeholder">
          <img src="${selectedService.image}" alt="" />
          <span class="service-detail-image-shade"></span>
          <span>Usługa HostControl</span>
          <strong>${selectedService.title}</strong>
          <small>${selectedService.seo[0]}</small>
        </div>
      </aside>
    </section>

    <section class="service-detail-intro">
      <article>
        <span>Dla kogo?</span>
        <h2>${selectedServiceAudienceTitle}</h2>
      </article>
      <article>
        <span>Po co?</span>
        <p>${selectedService.short} Dobrze przygotowana podstrona usługi pomaga klientowi szybciej zrozumieć ofertę, a wyszukiwarce lepiej połączyć stronę z konkretnymi zapytaniami.</p>
      </article>
    </section>

    <section class="service-rich-copy" aria-label="Rozbudowany opis usługi">
      <article>
        <span>Co zyskujesz?</span>
        <h2>Ta usługa ma przełożyć się na <em>konkretny efekt</em>, a nie tylko kolejny element na stronie.</h2>
        <p>${selectedServiceRich.value}</p>
        <p class="service-rich-extra">W praktyce oznacza to m.in.: ${selectedService.scope.slice(0, 3).join("; ")}. Dzięki temu oferta jest czytelna zarówno dla osoby, która pierwszy raz trafia na markę, jak i dla klienta gotowego do rozmowy.</p>
      </article>
      <article>
        <span>Google i SEO</span>
        <h2>Treść, układ i <em>widoczność</em> pracują razem od pierwszego etapu.</h2>
        <p>${selectedServiceRich.search}</p>
        <p class="service-rich-extra">W treściach naturalnie wzmacniamy tematy takie jak: ${selectedService.seo.join(", ")} — bez sztucznego upychania fraz i bez brzmienia jak tekst pisany wyłącznie pod algorytm.</p>
      </article>
      <article>
        <span>Wartość biznesowa</span>
        <h2>Projektujemy usługę tak, żeby wspierała rozmowę z klientem i <em>skracała drogę do kontaktu.</em></h2>
        <p>${selectedServiceRich.business}</p>
        <p class="service-rich-extra">Najważniejsze efekty, na których się skupiamy: ${selectedService.results.slice(0, 3).join(", ").toLowerCase()}. Strona ma wyglądać świetnie, ale przede wszystkim pomagać w decyzji i kontakcie.</p>
      </article>
    </section>

    <section class="service-detail-content" aria-label="Zakres i efekty usługi">
      <div class="service-detail-block">
        <span>Zakres prac</span>
        <h2>Co obejmuje <em>usługa?</em></h2>
        <div class="service-detail-list">
          ${selectedService.scope.map((item, index) => `<article><strong>${String(index + 1).padStart(2, "0")}</strong><p>${item}</p></article>`).join("")}
        </div>
      </div>

      <div class="service-detail-block">
        <span>Efekt dla klienta</span>
        <h2>Za co faktycznie <em>płacisz?</em></h2>
        <div class="service-result-grid">
          ${selectedService.results.map((item) => `<article><div>${sparkIcon}</div><p>${item}</p></article>`).join("")}
        </div>
      </div>
    </section>

    <section class="service-seo-section">
      <div>
        <span>Widoczność i komunikacja</span>
        <h2>Klient ma szybko zrozumieć wartość usługi, a Google — <em>właściwy kontekst oferty.</em></h2>
        <p>Opisujemy zakres konkretnie, pokazujemy efekty, odpowiadamy na najczęstsze pytania i używamy naturalnych sformułowań związanych z usługą. Dzięki temu treść pomaga osobie, która szuka wykonawcy, a jednocześnie wzmacnia widoczność na tematy takie jak: ${selectedService.seo.join(", ")}. Bez sztucznego języka, bez pustych haseł — z naciskiem na realne potrzeby klienta.</p>
      </div>
      <div class="service-seo-tags">
        ${selectedService.seo.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </section>

    <section class="service-detail-faq" aria-labelledby="service-faq-title">
      <div class="service-detail-heading">
        <span>Najczęstsze pytania</span>
        <h2 id="service-faq-title">Krótko i konkretnie <em>przed startem.</em></h2>
      </div>
      <div class="service-faq-grid">
        ${selectedService.faq.map(([question, answer]) => `<article><div>${questionIcon}</div><h3>${question}</h3><p>${answer}</p></article>`).join("")}
        <article><div>${phoneIcon}</div><h3>Jak zacząć?</h3><p>Najprościej przejść do kontaktu i opisać, czego potrzebujesz. W odpowiedzi zaproponujemy sensowny zakres, kolejność działań i orientacyjny kierunek wyceny.</p></article>
      </div>
    </section>

    <section class="service-detail-next">
      <div>
        <span>Gotowy na rozmowę?</span>
        <h2>Dobierzmy usługę do celu Twojej firmy, zamiast <em>wciskać gotowy szablon.</em></h2>
      </div>
      <a href="kontakt.html">Przejdź do kontaktu <span aria-hidden="true">${arrowIcon}</span></a>
    </section>
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

const contactSection = `
  <section class="contact-page section" id="kontakt">
    <div class="contact-grid-bg" aria-hidden="true"></div>
    <div class="contact-orb contact-orb--lime" aria-hidden="true"></div>
    <div class="contact-orb contact-orb--blue" aria-hidden="true"></div>

    <section class="contact-hero" aria-labelledby="contact-title">
      <div class="contact-hero-copy">
        <span class="contact-kicker"><i></i>Kontakt HostControl</span>
        <h1 id="contact-title">Masz pomysł na stronę? <em>Zamieńmy go w projekt</em>, który pracuje na Twoją markę.</h1>
        <p>Opowiedz, czego potrzebujesz: strony firmowej, landing page, portfolio, sklepu albo odświeżenia obecnej witryny. Odpowiemy konkretnie — z kierunkiem, zakresem i propozycją kolejnego kroku.</p>
        <div class="contact-hero-actions">
          <a class="contact-primary" href="#formularz-kontaktowy">Wypełnij formularz <span aria-hidden="true">${arrowIcon}</span></a>
          <a class="contact-secondary" href="#mapa-mikolajki">${mapPinIcon}<span>Zobacz Mikołajki</span></a>
        </div>
      </div>

      <aside class="contact-signal-card" aria-label="Szybki kontakt">
        <div class="signal-top">
          <span>Najkrótsza droga</span>
          <strong>Krótki brief, jasny kierunek</strong>
        </div>
        <div class="signal-orbit" aria-hidden="true">
          <span></span><span></span><span></span>
          <img src="assets/logo.svg" alt="" />
        </div>
        <p>Jeśli wiesz już mniej więcej, czego szukasz — formularz ułoży wiadomość. Jeśli nie, zadzwoń i wspólnie złapiemy kierunek.</p>
        <a class="signal-form-link" href="#formularz-kontaktowy">Przejdź do formularza <span aria-hidden="true">${arrowIcon}</span></a>
        <div class="signal-links">
          <a href="mailto:host_control@icloud.com">host_control@icloud.com</a>
          <a href="https://www.instagram.com/much4ty" target="_blank" rel="noreferrer">@much4ty</a>
        </div>
      </aside>
    </section>

    <section class="contact-workflow" aria-label="Jak wygląda pierwszy kontakt">
      <article>
        <div>${sparkIcon}</div>
        <span>01</span>
        <h2>Opowiadasz pomysł</h2>
        <p>Może to być jedno zdanie, stara strona, inspiracja albo pełny brief. Najważniejsze jest to, co strona ma osiągnąć.</p>
      </article>
      <article>
        <div>${layersIcon}</div>
        <span>02</span>
        <h2>Dobieramy zakres</h2>
        <p>Ustalamy podstrony, styl, treści, funkcje, termin i elementy, które faktycznie wpływają na cenę.</p>
      </article>
      <article>
        <div>${rocketIcon}</div>
        <span>03</span>
        <h2>Dostajesz kierunek</h2>
        <p>Po rozmowie wiesz, co warto zrobić najpierw, jak wygląda proces i jaki pakiet ma największy sens.</p>
      </article>
    </section>

    <section class="contact-main" id="formularz-kontaktowy" aria-labelledby="form-title">
      <form class="contact-form" data-contact-form data-email="host_control@icloud.com">
        <div class="form-heading">
          <span>Brief kontaktowy</span>
          <h2 id="form-title">Wypełnij kilka pól, a strona przygotuje <em>gotową wiadomość e-mail.</em></h2>
          <p>Po kliknięciu przycisku otworzy się Twoja aplikacja pocztowa z ułożonym tematem i treścią wiadomości do HostControl.</p>
        </div>

        <div class="form-grid">
          <label class="field">
            <span>Imię i nazwisko *</span>
            <input type="text" name="name" autocomplete="name" placeholder="np. Anna Testowa" required />
          </label>
          <label class="field">
            <span>Telefon</span>
            <input type="tel" name="phone" autocomplete="tel" placeholder="np. 500 123 456" />
          </label>
          <label class="field">
            <span>E-mail *</span>
            <input type="email" name="email" autocomplete="email" placeholder="np. kontakt@twojafirma.pl" required />
          </label>
          <label class="field">
            <span>Firma / marka</span>
            <input type="text" name="company" autocomplete="organization" placeholder="np. Przykładowa Marka" />
          </label>
        </div>

        <fieldset class="choice-group">
          <legend>Jakiego projektu potrzebujesz?</legend>
          <label><input type="checkbox" name="project" value="Strona firmowa" /><span>${deviceIcon}<strong>Strona firmowa</strong></span></label>
          <label><input type="checkbox" name="project" value="Landing page" /><span>${rocketIcon}<strong>Landing page</strong></span></label>
          <label><input type="checkbox" name="project" value="Portfolio lub strona osobista" /><span>${sparkIcon}<strong>Portfolio</strong></span></label>
          <label><input type="checkbox" name="project" value="Sklep, katalog lub oferta online" /><span>${layersIcon}<strong>Sklep / katalog</strong></span></label>
          <label><input type="checkbox" name="project" value="Odświeżenie obecnej strony" /><span>${testIcon}<strong>Odświeżenie</strong></span></label>
          <label><input type="checkbox" name="project" value="Kodowanie projektu graficznego" /><span>${codeIcon}<strong>Kodowanie</strong></span></label>
        </fieldset>

        <div class="form-split">
          <fieldset class="radio-group">
            <legend>Orientacyjny budżet</legend>
            <label><input type="radio" name="budget" value="Do ustalenia" checked /><span>Do ustalenia</span></label>
            <label><input type="radio" name="budget" value="2100–3500 zł" /><span>2100–3500 zł</span></label>
            <label><input type="radio" name="budget" value="3500–5500 zł" /><span>3500–5500 zł</span></label>
            <label><input type="radio" name="budget" value="5500 zł+" /><span>5500 zł+</span></label>
          </fieldset>

          <fieldset class="radio-group">
            <legend>Najlepszy termin startu</legend>
            <label><input type="radio" name="deadline" value="Jak najszybciej" /><span>Jak najszybciej</span></label>
            <label><input type="radio" name="deadline" value="W ciągu 2–4 tygodni" checked /><span>2–4 tygodnie</span></label>
            <label><input type="radio" name="deadline" value="W ciągu 1–2 miesięcy" /><span>1–2 miesiące</span></label>
            <label><input type="radio" name="deadline" value="Termin elastyczny" /><span>Elastycznie</span></label>
          </fieldset>
        </div>

        <fieldset class="choice-group choice-group--style">
          <legend>Jaki styl najlepiej pasuje do Twojej marki?</legend>
          <label><input type="checkbox" name="style" value="Nowocześnie i jasno" /><span><strong>Nowocześnie</strong></span></label>
          <label><input type="checkbox" name="style" value="Premium i elegancko" /><span><strong>Premium</strong></span></label>
          <label><input type="checkbox" name="style" value="Dynamicznie i odważnie" /><span><strong>Dynamicznie</strong></span></label>
          <label><input type="checkbox" name="style" value="Naturalnie i spokojnie" /><span><strong>Naturalnie</strong></span></label>
          <label><input type="checkbox" name="style" value="Nie wiem — chcę propozycję" /><span><strong>Chcę propozycję</strong></span></label>
        </fieldset>

        <label class="field field--textarea">
          <span>Opisz pomysł, obecną stronę albo cel projektu *</span>
          <textarea name="message" rows="7" placeholder="Napisz krótko: czym zajmuje się firma, jakie podstrony są potrzebne, co ma robić użytkownik i czy masz już teksty/zdjęcia." required></textarea>
        </label>

        <label class="consent">
          <input type="checkbox" name="consent" aria-required="true" />
          <span>Potwierdzam, że chcę wysłać zapytanie do HostControl i akceptuję przetwarzanie danych potrzebnych do kontaktu zwrotnego oraz obsługi tej wiadomości.</span>
        </label>

        <div class="form-submit-row">
          <button class="contact-submit" type="submit">Otwórz gotowy e-mail <span aria-hidden="true">${arrowIcon}</span></button>
          <p data-contact-status>Nie wysyłamy nic w tle — wiadomość zobaczysz przed wysłaniem w swojej aplikacji pocztowej.</p>
        </div>
      </form>

      <aside class="contact-side">
        <article class="map-card" id="mapa-mikolajki" aria-labelledby="contact-map-title">
          <div class="map-visual">
            <iframe
              title="Mapa Mikołajek — HostControl"
              src="https://www.google.com/maps?q=11-730%20Miko%C5%82ajki%2C%20Polska&z=13&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="map-glass">
              <span class="map-pin">${mapPinIcon}</span>
              <span class="map-label">centrum<br />Mikołajek</span>
            </div>
          </div>
          <div class="map-copy">
            <span>Lokalnie na Mazurach</span>
            <strong id="contact-map-title">Mikołajki i okolice</strong>
            <p>Prawdziwa mapa jest wycentrowana na Mikołajkach. Pracujemy lokalnie dla Mazur i zdalnie dla firm z całej Polski — bez znaczenia, czy zaczynamy od rozmowy, briefu czy szybkiej konsultacji.</p>
            <a class="map-open" href="https://www.google.com/maps/search/?api=1&query=11-730%20Miko%C5%82ajki" target="_blank" rel="noreferrer">Otwórz w Google Maps <span aria-hidden="true">${arrowIcon}</span></a>
          </div>
        </article>

        <div class="contact-cards">
          <a href="tel:+48692746031"><span>${phoneIcon}</span><strong>Zadzwoń</strong><small>692 746 031</small></a>
          <a href="mailto:host_control@icloud.com"><span>${deployIcon}</span><strong>Napisz</strong><small>host_control@icloud.com</small></a>
          <a href="https://www.instagram.com/much4ty" target="_blank" rel="noreferrer"><span>${instagramIcon}</span><strong>Instagram</strong><small>@much4ty</small></a>
        </div>
      </aside>
    </section>

    <div class="consent-modal" data-consent-modal aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="consent-modal-title">
      <div class="consent-modal-backdrop" data-consent-close></div>
      <div class="consent-modal-card">
        <button class="consent-modal-close" type="button" data-consent-close aria-label="Zamknij komunikat">×</button>
        <div class="consent-modal-icon">${shieldIcon}</div>
        <span>Wymagana zgoda</span>
        <h2 id="consent-modal-title">Zanim otworzymy wiadomość e-mail, zaakceptuj zgodę w formularzu.</h2>
        <p>Formularz przenosi do aplikacji pocztowej dopiero po potwierdzeniu zgody na kontakt zwrotny i przetwarzanie danych potrzebnych do obsługi zapytania.</p>
        <div class="consent-modal-actions">
          <button type="button" data-consent-close>Wróć do formularza</button>
          <a href="polityka-prywatnosci.html">Polityka prywatności</a>
          <a href="polityka-prywatnosci.html#cookies">Pliki cookies</a>
        </div>
      </div>
    </div>
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
    ${page === "polityka" ? privacySection : page === "cennik" ? pricingSection : page === "portfolio" ? portfolioSection : page === "kontakt" ? contactSection : page === "uslugi" ? servicesSection : page === "usluga" ? serviceDetailSection : defaultSection}
  </main>
  ${footerMarkup}
`;
