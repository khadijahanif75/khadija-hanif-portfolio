import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Single-page site, so this is intentionally a one-entry sitemap —
// still useful for search engines to discover the canonical URL and
// last-modified signal.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
