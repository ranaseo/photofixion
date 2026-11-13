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
  const title = `${s.name} Service | 24h Delivery`;
  return {
    title, description: s.answer.slice(0, 155),
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${title} | Photo Fixion`, description: s.short, url: `/services/${s.slug}`, type: "website" },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const url = `${site.url}/services/${s.slug}`;
  const others = services.filter((o) => o.slug !== s.slug).slice(0, 4);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": url, url, name: `${s.name} Service`, description: s.answer, dateModified: site.lastUpdated, isPartOf: { "@id": `${site.url}/#website` }, about: { "@id": `${url}#service` } },
      { "@type": "Service", "@id": `${url}#service`, name: `${s.name} Service`, serviceType: s.name, description: s.answer, url, provider: { "@id": `${site.url}/#organization` }, areaServed: "Worldwide" },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/#services` },
        { "@type": "ListItem", position: 3, name: s.name, item: url },
      ] },
      { "@type": "FAQPage", mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="crumbs"><Link href="/">Home</Link> / <Link href="/#services">Services</Link> / {s.name}</nav>
          <h1>{s.name} Service</h1>
          <p className="lead">{s.answer}</p>
          <div className="hero-cta"><Link href="/contact" className="btn btn-pink">Start a free trial</Link><Link href="/contact" className="btn btn-ink">Get a quote</Link></div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="two">
            <div className="panel"><h2>What is included in {s.name.toLowerCase()}?</h2><ul className="check">{s.includes.map((i) => <li key={i}>{i}</li>)}</ul></div>
            <div className="panel"><h2>Who is {s.name.toLowerCase()} best for?</h2><ul className="check">{s.bestFor.map((i) => <li key={i}>{i}</li>)}</ul></div>
          </div>
        </div>
      </section>
      <section className="section section-mist center">
        <div className="wrap"><p className="eyebrow">FAQ</p><h2 className="title">{s.name} questions</h2><Faq items={s.faqs} /></div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Related</p><h2 className="title">Other photo editing services</h2>
          <div className="grid-4">{others.map((o) => (<Link key={o.slug} href={`/services/${o.slug}`} className="card"><h3>{o.name}</h3><p>{o.short}</p><span className="more">Learn more<span className="sr-only"> about {o.name}</span> →</span></Link>))}</div>
        </div>
      </section>
      <JsonLd data={schema} />
    </>
  );
}
