import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { services, getService } from "@/lib/services";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: { absolute: `${s.metaTitle} | Photo Fixion` },
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.metaTitle} | Photo Fixion`, description: s.metaDescription, url: `/services/${s.slug}`, type: "website", siteName: site.name },
    twitter: { card: "summary_large_image", title: s.metaTitle, description: s.metaDescription },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const url = `${site.url}/services/${s.slug}`;
  const lower = s.name.toLowerCase();
  const related = s.related.map(getService).filter((r) => r !== undefined);
  const updated = new Date(`${site.lastUpdated}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": url, url, name: s.metaTitle, description: s.metaDescription, dateModified: site.lastUpdated, inLanguage: "en", isPartOf: { "@id": `${site.url}/#website` }, about: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` } },
      {
        "@type": "Service", "@id": `${url}#service`, name: `${s.name} Service`, serviceType: s.name, description: s.answer, url,
        provider: { "@id": `${site.url}/#organization` }, areaServed: "Worldwide",
        audience: { "@type": "BusinessAudience", name: s.bestFor.join(", ") },
        hasOfferCatalog: { "@type": "OfferCatalog", name: `Types of ${lower}`, itemListElement: s.types.map((t) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: t.name, description: t.desc } })) },
      },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/#services` },
        { "@type": "ListItem", position: 3, name: s.name, item: url },
      ] },
      { "@type": "HowTo", name: `How ${lower} works at Photo Fixion`, step: s.steps.map((st, i) => ({ "@type": "HowToStep", position: i + 1, name: st.name, text: st.text })) },
      { "@type": "FAQPage", mainEntity: [{ q: s.versus.q, a: s.versus.a }, ...s.faqs].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };

  return (
    <article>
      <header className="page-hero">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="crumbs"><Link href="/">Home</Link> / <Link href="/#services">Services</Link> / {s.name}</nav>
          <h1>{s.name} Service</h1>
          <p className="lead">{s.answer}</p>
          <div className="hero-cta"><Link href="/contact" className="btn btn-pink">Start a free trial</Link><Link href="/contact" className="btn btn-ink">Get a quote</Link></div>
          <p className="updated">Last updated <time dateTime={site.lastUpdated}>{updated}</time></p>
        </div>
      </header>

      <section className="section" aria-labelledby="glance">
        <div className="wrap">
          <p className="eyebrow">At a glance</p>
          <h2 className="title" id="glance">{s.name} at a glance</h2>
          <div className="table-wrap">
            <table>
              <tbody>
                <tr><th scope="row">What it is</th><td>{s.short}</td></tr>
                <tr><th scope="row">Best for</th><td>{s.bestFor.join(", ")}</td></tr>
                <tr><th scope="row">Method</th><td>{s.method}</td></tr>
                <tr><th scope="row">Turnaround</th><td>{site.turnaround.standard} standard, {site.turnaround.fast} express, {site.turnaround.rush} rush</td></tr>
                <tr><th scope="row">File formats</th><td>{s.formats}</td></tr>
                <tr><th scope="row">Free trial</th><td>Available on request</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-mist" aria-labelledby="types">
        <div className="wrap">
          <p className="eyebrow">Types</p>
          <h2 className="title" id="types">What types of {lower} do you offer?</h2>
          <p className="lead">Photo Fixion offers {s.types.length} types of {lower}: {s.types.map((t) => t.name.toLowerCase()).join(", ")}.</p>
          <div className="grid-4">{s.types.map((t) => (<div key={t.name} className="card"><h3>{t.name}</h3><p>{t.desc}</p></div>))}</div>
        </div>
      </section>

      <section className="section" aria-labelledby="included">
        <div className="wrap">
          <div className="two">
            <div className="panel"><h2 id="included">What is included in {lower}?</h2><ul className="check">{s.includes.map((i) => <li key={i}>{i}</li>)}</ul></div>
            <div className="panel"><h2>Who is {lower} best for?</h2><ul className="check">{s.bestFor.map((i) => <li key={i}>{i}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section className="section section-mist" aria-labelledby="process">
        <div className="wrap">
          <p className="eyebrow">Process</p>
          <h2 className="title" id="process">How does {lower} work?</h2>
          <p className="lead">{s.name} at Photo Fixion follows {s.steps.length} steps, from upload to delivery within {site.turnaround.standard}.</p>
          <ol className="steps steps-4">{s.steps.map((st) => (<li key={st.name}><h3>{st.name}</h3><p>{st.text}</p></li>))}</ol>
        </div>
      </section>

      <section className="section" aria-labelledby="versus">
        <div className="wrap answer">
          <div><p className="eyebrow">Compare</p><h2 className="title" id="versus">{s.versus.q}</h2></div>
          <div><p>{s.versus.a}</p></div>
        </div>
      </section>

      <section className="section section-mist" aria-labelledby="cost">
        <div className="wrap answer">
          <div><p className="eyebrow">Pricing</p><h2 className="title" id="cost">How much does {lower} cost?</h2></div>
          <div>
            <p>The price of {lower} is quoted per image and depends on four things. Send a few sample images to get an exact quote, and ask about discounts for bulk volume.</p>
            <ul className="check">{s.priceFactors.map((f) => <li key={f}>{f}</li>)}</ul>
            <div className="hero-cta"><Link href="/contact" className="btn btn-pink">Get a quote</Link></div>
          </div>
        </div>
      </section>

      <section className="section center" aria-labelledby="faq">
        <div className="wrap"><p className="eyebrow">FAQ</p><h2 className="title" id="faq">{s.name} questions and answers</h2><Faq items={s.faqs} /></div>
      </section>

      <section className="section section-mist" aria-labelledby="related">
        <div className="wrap">
          <p className="eyebrow">Related</p><h2 className="title" id="related">Services often ordered with {lower}</h2>
          <div className="grid-4">{related.map((o) => (<Link key={o.slug} href={`/services/${o.slug}`} className="card"><h3>{o.name}</h3><p>{o.short}</p><span className="more">{o.name} service →</span></Link>))}</div>
        </div>
      </section>

      <section className="section" aria-label="Get started">
        <div className="wrap">
          <div className="cta">
            <div><h2>Try our {lower} service free.</h2><p>Send a few images and get edited samples back within {site.turnaround.standard}.</p></div>
            <Link href="/contact" className="btn btn-yellow">Start a free trial</Link>
          </div>
        </div>
      </section>
      <JsonLd data={schema} />
    </article>
  );
}
