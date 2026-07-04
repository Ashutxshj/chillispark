import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/work", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
