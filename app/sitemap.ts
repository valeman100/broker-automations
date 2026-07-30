import type { MetadataRoute } from "next";
import { PARTNERS } from "@/app/contents/partners";

const SITE_URL = "https://broker-automations.valeriomannucci.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/partners`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...PARTNERS.map((p) => ({
      url: `${SITE_URL}/partners/${p.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
