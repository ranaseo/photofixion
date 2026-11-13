import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

// lastModified comes from site.lastUpdated, not the build time: search engines ignore
// lastmod values that change on every deploy. priority/changefreq are left out (ignored by Google).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = site.lastUpdated;
  return [
    { url: `${site.url}/`, lastModified },
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified })),
    { url: `${site.url}/contact`, lastModified },
  ];
}
