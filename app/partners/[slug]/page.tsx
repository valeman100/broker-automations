import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { PARTNERS } from "@/app/contents/partners";
import { renderMarkdown } from "@/lib/markdown";

const CONTENT_DIR = path.join(process.cwd(), "app/contents/partners");

async function getArticle(slug: string) {
  const partner = PARTNERS.find((p) => p.slug === slug);
  if (!partner) return null;

  const md = (await readFile(path.join(CONTENT_DIR, partner.mdFile), "utf8")).trim();
  // First heading is the article title; the rest is the body.
  const match = md.match(/^#{1,6}\s+(.+)\n([\s\S]*)$/);
  const title = match ? match[1] : partner.name;
  const body = match ? match[2] : md;

  return { partner, title, html: renderMarkdown(body) };
}

export function generateStaticParams() {
  return PARTNERS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return {};

  return {
    title: `${article.title} | Partner — Broker Automazioni`,
    description: article.partner.description,
    alternates: { canonical: `/partners/${slug}` },
    openGraph: {
      title: article.title,
      description: article.partner.description,
      url: `/partners/${slug}`,
      type: "article",
    },
  };
}

export default async function PartnerArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const { partner, title, html } = article;

  return (
    <>
      <main className="bg-[#0f172a] bg-grid-pattern min-h-screen px-4 pt-24 pb-20">
        <article className="max-w-[720px] mx-auto">
          <Link
            href="/partners"
            className="text-[#94a3b8] hover:text-[#f59e0b] text-sm transition-colors"
          >
            &larr; Tutti i partner
          </Link>

          <h1 className="font-display text-3xl md:text-4xl text-[#faf8f5] mt-6">
            {title}
          </h1>

          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[#f59e0b] hover:underline text-sm font-semibold mt-3"
          >
            {partner.name} ↗
          </a>

          <div
            className="article mt-10"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
