import type { MetadataRoute } from "next";

const BASE_URL = "https://www.evamoretechnologies.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/llm.txt", "/llms.txt"],
        disallow: ["/api/", "/privacy", "/terms"],
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Googlebot",
          "Bingbot",
        ],
        allow: ["/", "/llm.txt", "/llms.txt"],
        disallow: ["/api/", "/privacy", "/terms"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
