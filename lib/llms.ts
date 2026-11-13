import { services } from "./services";
import { homeFaqs } from "./faqs";
import { site } from "./site";

const facts = `> ${site.description}

Key facts:
- Tagline: ${site.tagline}
- Experience: ${site.foundedYears} years; team of ${site.teamSize} Photoshop editors working around the clock
- Turnaround: ${site.turnaround.standard} standard, ${site.turnaround.fast} express, ${site.turnaround.rush} rush
- Free trial, revisions and bulk discounts are available
- Pricing is quoted per order based on service, complexity and volume
- Contact: ${site.email}, phone and WhatsApp ${site.phoneDisplay}, open 24 hours
- Last updated: ${site.lastUpdated}`;

/** Short index for AI systems (llmstxt.org format). */
export function llmsIndex() {
  return `# ${site.name}

${facts}

## Services
${services.map((s) => `- [${s.name}](${site.url}/services/${s.slug}): ${s.short}`).join("\n")}

## Company
- [Home](${site.url}/): overview, how ordering works, turnaround table and FAQ
- [Contact and free trial](${site.url}/contact): request a quote or a free trial

## Optional
- [Full content in one file](${site.url}/llms-full.txt): every service description and FAQ as plain Markdown
`;
}

/** Whole site as one Markdown file, generated from the same data as the pages. */
export function llmsFull() {
  const svc = services.map((s) => `## ${s.name}
URL: ${site.url}/services/${s.slug}

${s.answer}

What is included:
${s.includes.map((i) => `- ${i}`).join("\n")}

Best for:
${s.bestFor.map((i) => `- ${i}`).join("\n")}

Types:
${s.types.map((t) => `- ${t.name}: ${t.desc}`).join("\n")}

How it works:
${s.steps.map((st, i) => `${i + 1}. ${st.name}: ${st.text}`).join("\n")}

Method: ${s.method}
File formats: ${s.formats}
Price depends on: ${s.priceFactors.join("; ")}

### ${s.versus.q}
${s.versus.a}

${s.faqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}`).join("\n\n");
  return `# ${site.name}: full content

${facts}

## How ordering works
1. Send your images through a cloud link or personal FTP, with instructions.
2. Editors complete the work by hand and a second editor checks quality.
3. Download the finished images within ${site.turnaround.standard} and request revisions if needed.

## Frequently asked questions
${homeFaqs.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

# Services

${svc}
`;
}
