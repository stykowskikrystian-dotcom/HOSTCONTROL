const siteRoot = new URL("./", window.location.href);
const organizationUrl = new URL("index.html", siteRoot).href;
const logoUrl = new URL("assets/logo.svg", siteRoot).href;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${organizationUrl}#organization`,
  name: "HostControl",
  alternateName: "HOSTCONTROL",
  url: organizationUrl,
  description: "Projektowanie, kodowanie i tworzenie nowoczesnych stron internetowych.",
  logo: {
    "@type": "ImageObject",
    url: logoUrl,
    contentUrl: logoUrl,
    width: 512,
    height: 512,
  },
  telephone: "+48692746031",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48692746031",
    contactType: "customer service",
    availableLanguage: ["pl"],
  },
  sameAs: ["https://www.instagram.com/much4ty"],
};

const schemaScript = document.createElement("script");
schemaScript.type = "application/ld+json";
schemaScript.textContent = JSON.stringify(organizationSchema);
document.head.appendChild(schemaScript);
