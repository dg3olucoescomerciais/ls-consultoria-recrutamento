import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ls-consultoria-recrutamento.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-22T00:00:00-03:00");

  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/politica-de-privacidade`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/termos-de-uso`, lastModified, changeFrequency: "monthly", priority: 0.5 },
  ];
}
