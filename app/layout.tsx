import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const SITE_URL = "https://broker-automations.valeriomannucci.com";
const TITLE = "Automazione Processi per Broker Assicurativi | Valerio Mannucci";
const DESCRIPTION =
  "Elimina le ore perse in attività manuali nella tua agenzia. Scadenze, rinnovi, data entry, documenti IVASS — automazioni su misura per broker assicurativi.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "automazione broker assicurativi",
    "automazione agenzia assicurativa",
    "automazione processi assicurativi",
    "software automazione assicurazioni",
    "automazione rinnovi assicurativi",
    "gestione documenti IVASS",
    "RPA broker assicurativo",
    "automazione data entry assicurazioni",
    "broker assicurativo digitale",
    "Valerio Mannucci automazioni",
  ],
  authors: [{ name: "Valerio Mannucci", url: SITE_URL }],
  creator: "Valerio Mannucci",
  alternates: {
    canonical: SITE_URL,
    languages: { "it-IT": SITE_URL },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Broker Automazioni — Valerio Mannucci",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@valeriomannucci",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Broker Automazioni — Valerio Mannucci",
      description: DESCRIPTION,
      inLanguage: "it-IT",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Valerio Mannucci",
      url: SITE_URL,
      email: "valerio@valeriomannucci.com",
      sameAs: ["https://www.linkedin.com/in/valerio-mannucci/"],
      jobTitle: "Automation Specialist per Broker Assicurativi",
      knowsAbout: [
        "Automazione processi aziendali",
        "Broker assicurativi",
        "IVASS",
        "RPA",
        "Rinnovi assicurativi",
        "Data entry automation",
      ],
      areaServed: [
        { "@type": "Country", name: "Italia" },
        { "@type": "Country", name: "Svizzera" },
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Automazione Processi per Broker Assicurativi",
      provider: { "@id": `${SITE_URL}/#person` },
      description:
        "Costruzione di automazioni su misura per broker assicurativi: gestione scadenze, rinnovi automatici, data entry, documenti IVASS e reportistica.",
      serviceType: "Business Process Automation",
      areaServed: [
        { "@type": "Country", name: "Italia" },
        { "@type": "Country", name: "Svizzera" },
      ],
      url: SITE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
