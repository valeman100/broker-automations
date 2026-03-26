import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Automazione Processi per Broker Assicurativi | Valerio Mannucci",
  description:
    "Elimina le ore perse in attività manuali nella tua agenzia. Scadenze, rinnovi, data entry, documenti IVASS — automazioni su misura per broker assicurativi.",
  metadataBase: new URL("https://broker-automations.valeriomannucci.com"),
  alternates: {
    canonical: "https://broker-automations.valeriomannucci.com",
    languages: { it: "https://broker-automations.valeriomannucci.com" },
  },
  openGraph: {
    title: "Automazione Processi per Broker Assicurativi | Valerio Mannucci",
    description:
      "Elimina le ore perse in attività manuali nella tua agenzia. Scadenze, rinnovi, data entry, documenti IVASS — automazioni su misura per broker assicurativi.",
    url: "https://broker-automations.valeriomannucci.com",
    siteName: "Broker Automazioni — Valerio Mannucci",
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
