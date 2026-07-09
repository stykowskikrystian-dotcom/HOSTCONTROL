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
  priceRange: "$$",
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

schemas.forEach((schema) => {
  const schemaScript = document.createElement("script");
  schemaScript.type = "application/ld+json";
  schemaScript.textContent = JSON.stringify(schema);
  document.head.appendChild(schemaScript);
});
