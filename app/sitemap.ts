import type { MetadataRoute } from "next";

const baseUrl = "https://library-resource-centre.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/discover", "/reviews", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
