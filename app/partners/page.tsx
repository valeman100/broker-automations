import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { PARTNERS } from "@/app/contents/partners";

export const metadata: Metadata = {
  title: "Partner | Broker Automazioni — Valerio Mannucci",
  description:
    "I progetti e gli strumenti con cui collaboriamo, con un articolo dedicato per ciascun partner.",
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <main className="bg-[#0f172a] min-h-screen px-4 pt-24 pb-20">
        <div className="max-w-[900px] mx-auto">
          <Link
            href="/"
            className="text-[#94a3b8] hover:text-[#f59e0b] text-sm transition-colors"
          >
            &larr; Torna alla home
          </Link>

          <h1 className="font-display text-3xl md:text-4xl text-[#faf8f5] mt-6 mb-4">
            Partner
          </h1>
          <p className="text-[#e2e0dc]/70 max-w-[620px] mb-12">
            Progetti e strumenti con cui collaboriamo. Per ognuno trovi un
            articolo dedicato.
          </p>

          <ul className="flex flex-col gap-4">
            {PARTNERS.map((partner) => (
              <li key={partner.slug}>
                <Link
                  href={`/partners/${partner.slug}`}
                  className="glass-dark block rounded-xl p-6 hover:border-[#f59e0b]/40 transition-colors group"
                >
                  <h2 className="font-display text-xl text-[#faf8f5] group-hover:text-[#f59e0b] transition-colors">
                    {partner.name}
                  </h2>
                  <p className="text-[#94a3b8] text-sm mt-2">
                    {partner.description}
                  </p>
                  <span className="inline-block text-[#f59e0b] text-sm font-semibold mt-4">
                    Leggi l&apos;articolo &rarr;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
