import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// AI crawlers are allowed on purpose: a page must be readable before it can be cited.
// Three roles per vendor: training, search index, and user-triggered fetch.
const aiCrawlers = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",          // OpenAI
  "ClaudeBot", "Claude-SearchBot", "Claude-User",     // Anthropic
  "PerplexityBot", "Perplexity-User",                 // Perplexity
  "Google-Extended", "Applebot-Extended",             // Gemini / Apple Intelligence control tokens
  "MistralAI-Index", "meta-webindexer", "Amzn-SearchBot", "DuckAssistBot", "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
