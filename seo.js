const siteRoot = new URL("./", window.location.href);
const organizationUrl = new URL("index.html", siteRoot).href;
const logoUrl = new URL("assets/logo.svg", siteRoot).href;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${organizationUrl}#organization`,
  name: "HostControl",
  alternateName: "HOSTCONTROL",
  url: organizationUrl,
  description: "Projektowanie, kodowanie i tworzenie nowoczesnych stron internetowych dla firm z Mikołajek, Mrągowa, powiatu mrągowskiego i całej Polski.",
  logo: {
    "@type": "ImageObject",
    url: logoUrl,
    contentUrl: logoUrl,
    width: 512,
    height: 512,
  },
  telephone: "+48692746031",
  email: "host_control@icloud.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    postalCode: "11-730",
    addressLocality: "Mikołajki",
    addressCountry: "PL"
  },
  hasMap: "https://www.google.com/maps/search/?api=1&query=11-730%20Miko%C5%82ajki",
  areaServed: [
    { "@type": "City", name: "Mikołajki" },
    { "@type": "City", name: "Mrągowo" },
    { "@type": "AdministrativeArea", name: "powiat mrągowski" },
    { "@type": "AdministrativeArea", name: "Mazury" },
    { "@type": "Country", name: "Polska" }
  ],
  knowsAbout: [
    "tworzenie stron internetowych",
    "projektowanie stron www",
    "kodowanie stron internetowych",
    "strony firmowe",
    "landing page",
    "SEO techniczne",
    "optymalizacja szybkości stron"
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Tworzenie stron internetowych",
      itemOffered: {
        "@type": "Service",
        name: "Projektowanie i kodowanie stron www",
        areaServed: ["Mikołajki", "Mrągowo", "powiat mrągowski", "Mazury", "Polska"]
      }
    }
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48692746031",
    contactType: "customer service",
    availableLanguage: ["pl"],
  },
  sameAs: ["https://www.instagram.com/much4ty"],
};

const schemas = [organizationSchema];

const serviceSeoItems = [
  { slug: "tworzenie-stron-internetowych", href: "tworzenie-stron-internetowych.html", name: "Tworzenie stron internetowych", description: "Nowoczesne tworzenie stron internetowych dla firm z Mikołajek, Mrągowa, Mazur i całej Polski." },
  { slug: "strony-firmowe", href: "strony-firmowe.html", name: "Strony firmowe", description: "Profesjonalne strony firmowe, które prezentują ofertę, zaufanie i przewagi marki." },
  { slug: "landing-page", href: "landing-page.html", name: "Landing page", description: "Jednostronicowe strony sprzedażowe pod kampanie, zapisy i pozyskiwanie klientów." },
  { slug: "sklepy-internetowe", href: "sklepy-internetowe.html", name: "Sklepy i katalogi online", description: "Katalogi produktów, strony ofertowe i lekkie sklepy internetowe." },
  { slug: "portfolio-online", href: "portfolio-online.html", name: "Portfolio online", description: "Strony prezentujące realizacje, projekty, zdjęcia i doświadczenie marki." },
  { slug: "odswiezanie-stron", href: "odswiezanie-stron.html", name: "Odświeżanie stron internetowych", description: "Modernizacja starej strony, poprawa wyglądu, mobile, treści i szybkości." },
  { slug: "kodowanie-projektow", href: "kodowanie-projektow.html", name: "Kodowanie projektów graficznych", description: "Wdrażanie projektów z Figmy i makiet UI do responsywnego kodu." },
  { slug: "optymalizacja-szybkosci", href: "optymalizacja-szybkosci.html", name: "Optymalizacja szybkości strony", description: "Przyspieszanie stron internetowych, optymalizacja obrazów, kodu i zasobów." },
  { slug: "seo-techniczne", href: "seo-techniczne.html", name: "SEO techniczne", description: "Techniczne podstawy SEO: metadane, schema, struktura, linkowanie i indeksacja." },
  { slug: "opieka-nad-strona", href: "opieka-nad-strona.html", name: "Opieka nad stroną", description: "Wsparcie po publikacji, aktualizacje treści, poprawki i rozwój strony internetowej." }
];

if (document.body?.dataset.page === "uslugi") {
  const servicesUrl = new URL("uslugi.html", siteRoot).href;

  schemas.push(
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${servicesUrl}#webpage`,
      url: servicesUrl,
      name: "Usługi HostControl",
      description: "Katalog usług HostControl: tworzenie stron internetowych, strony firmowe, landing page, sklepy, portfolio, SEO techniczne, optymalizacja i opieka nad stroną.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${organizationUrl}#website`,
        name: "HostControl",
        url: organizationUrl
      },
      about: { "@id": `${organizationUrl}#organization` },
      mainEntity: {
        "@type": "OfferCatalog",
        name: "Usługi projektowania i kodowania stron internetowych HostControl",
        itemListElement: serviceSeoItems.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          name: service.name,
          url: new URL(service.href, siteRoot).href,
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: { "@id": `${organizationUrl}#organization` },
            areaServed: ["Mikołajki", "Mrągowo", "powiat mrągowski", "Mazury", "Polska"]
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: organizationUrl },
        { "@type": "ListItem", position: 2, name: "Usługi", item: servicesUrl }
      ]
    }
  );
}

if (document.body?.dataset.page === "usluga") {
  const service = serviceSeoItems.find((item) => item.slug === document.body.dataset.service) || serviceSeoItems[0];
  const serviceUrl = new URL(service.href, siteRoot).href;
  const servicesUrl = new URL("uslugi.html", siteRoot).href;

  schemas.push(
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      name: service.name,
      description: service.description,
      url: serviceUrl,
      provider: { "@id": `${organizationUrl}#organization` },
      areaServed: [
        { "@type": "City", name: "Mikołajki" },
        { "@type": "City", name: "Mrągowo" },
        { "@type": "AdministrativeArea", name: "powiat mrągowski" },
        { "@type": "AdministrativeArea", name: "Mazury" },
        { "@type": "Country", name: "Polska" }
      ],
      serviceType: service.name
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${serviceUrl}#webpage`,
      url: serviceUrl,
      name: `${service.name} — HostControl`,
      description: service.description,
      isPartOf: {
        "@type": "WebSite",
        "@id": `${organizationUrl}#website`,
        name: "HostControl",
        url: organizationUrl
      },
      about: { "@id": `${serviceUrl}#service` }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: organizationUrl },
        { "@type": "ListItem", position: 2, name: "Usługi", item: servicesUrl },
        { "@type": "ListItem", position: 3, name: service.name, item: serviceUrl }
      ]
    }
  );
}

if (document.body?.dataset.page === "cennik") {
  const pricingUrl = new URL("cennik.html", siteRoot).href;

  schemas.push(
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pricingUrl}#webpage`,
      url: pricingUrl,
      name: "Cennik stron internetowych — HostControl",
      description: "Cennik tworzenia stron internetowych dla firm z Mikołajek, Mrągowa i powiatu mrągowskiego. Pakiety stron www, proces współpracy, opieka po publikacji i prawa do kodu.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${organizationUrl}#website`,
        name: "HostControl",
        url: organizationUrl
      },
      about: { "@id": `${organizationUrl}#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: logoUrl
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "@id": `${pricingUrl}#offer-catalog`,
      name: "Pakiety tworzenia stron internetowych HostControl",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Landing page lub prosta strona wizytówka",
          priceSpecification: { "@type": "PriceSpecification", priceCurrency: "PLN", minPrice: 2100 },
          itemOffered: { "@type": "Service", name: "Landing page" }
        },
        {
          "@type": "Offer",
          name: "Rozbudowana strona firmowa",
          priceSpecification: { "@type": "PriceSpecification", priceCurrency: "PLN", minPrice: 3500 },
          itemOffered: { "@type": "Service", name: "Strona firmowa" }
        },
        {
          "@type": "Offer",
          name: "Strona premium z większym zakresem",
          priceSpecification: { "@type": "PriceSpecification", priceCurrency: "PLN", minPrice: 5500 },
          itemOffered: { "@type": "Service", name: "Zaawansowana strona internetowa" }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: organizationUrl },
        { "@type": "ListItem", position: 2, name: "Cennik", item: pricingUrl }
      ]
    }
  );
}

if (document.body?.dataset.page === "portfolio") {
  const portfolioUrl = new URL("portfolio.html", siteRoot).href;
  const kurkaPreviewUrl = new URL("assets/portfolio/kurka-wodna-hero.jpg", siteRoot).href;

  schemas.push(
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${portfolioUrl}#webpage`,
      url: portfolioUrl,
      name: "Portfolio realizacji — HostControl",
      description: "Portfolio HostControl z realizacją strony Kurka Wodna — 5 domków na Mazurach w miejscowości Faszcze koło Mikołajek.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${organizationUrl}#website`,
        name: "HostControl",
        url: organizationUrl
      },
      about: { "@id": `${organizationUrl}#organization` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: kurkaPreviewUrl
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${portfolioUrl}#kurka-wodna`,
      name: "Kurka Wodna — strona internetowa 5 domków na Mazurach",
      url: "https://www.kurka-wodna.com.pl/",
      image: kurkaPreviewUrl,
      creator: { "@id": `${organizationUrl}#organization` },
      about: [
        "strona internetowa dla domków na Mazurach",
        "strona turystyczna",
        "rezerwacje online",
        "projektowanie stron www Mikołajki"
      ],
      locationCreated: {
        "@type": "Place",
        name: "Mikołajki / Faszcze"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: organizationUrl },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: portfolioUrl }
      ]
    }
  );
}

if (document.body?.dataset.page === "kontakt") {
  const contactUrl = new URL("kontakt.html", siteRoot).href;

  schemas.push(
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${contactUrl}#webpage`,
      url: contactUrl,
      name: "Kontakt — HostControl",
      description: "Kontakt z HostControl w sprawie tworzenia stron internetowych, stron firmowych, landing page, portfolio i kodowania stron www w Mikołajkach, Mrągowie oraz powiecie mrągowskim.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${organizationUrl}#website`,
        name: "HostControl",
        url: organizationUrl
      },
      about: { "@id": `${organizationUrl}#organization` },
      mainEntity: {
        "@type": "ProfessionalService",
        "@id": `${organizationUrl}#organization`,
        name: "HostControl",
        email: "host_control@icloud.com",
        telephone: "+48692746031",
        address: {
          "@type": "PostalAddress",
          postalCode: "11-730",
          addressLocality: "Mikołajki",
          addressCountry: "PL"
        },
        hasMap: "https://www.google.com/maps/search/?api=1&query=11-730%20Miko%C5%82ajki",
        areaServed: [
          { "@type": "City", name: "Mikołajki" },
          { "@type": "City", name: "Mrągowo" },
          { "@type": "AdministrativeArea", name: "powiat mrągowski" },
          { "@type": "AdministrativeArea", name: "Mazury" }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: organizationUrl },
        { "@type": "ListItem", position: 2, name: "Kontakt", item: contactUrl }
      ]
    }
  );
}

schemas.forEach((schema) => {
  const schemaScript = document.createElement("script");
  schemaScript.type = "application/ld+json";
  schemaScript.textContent = JSON.stringify(schema);
  document.head.appendChild(schemaScript);
});
