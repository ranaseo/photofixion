import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";
import Faq from "@/components/Faq";
import Icon from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";
import { homeFaqs } from "@/lib/faqs";
import { site } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};
const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", name: "How to order photo editing from Photo Fixion",
  step: [
    { "@type": "HowToStep", position: 1, name: "Send your images", text: "Upload your photos through a cloud link or your personal FTP and add your instructions." },
    { "@type": "HowToStep", position: 2, name: "We edit by hand", text: "Editors complete the work by hand and a quality checker reviews every image." },
    { "@type": "HowToStep", position: 3, name: "Download and review", text: "Download the finished images within 24 hours and request revisions if anything needs to change." },
  ],
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Photo editing service for e-commerce</p>
            <h1>Product photos, fixed and delivered in 24 hours.</h1>
            <p className="sub">Clipping path, background removal, retouching and ghost mannequin by {site.teamSize} hand-editing specialists. Bulk-ready, with express delivery in {site.turnaround.rush}.</p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-yellow">Start a free trial</Link>
              <Link href="/#services" className="btn btn-ghost">See our services</Link>
            </div>
            <dl className="stats">
              <div><dt>{site.foundedYears} years</dt><dd>of editing experience</dd></div>
              <div><dt>{site.teamSize}</dt><dd>Photoshop editors</dd></div>
              <div><dt>24 h</dt><dd>standard delivery</dd></div>
            </dl>
          </div>
          <BeforeAfter />
        </div>
      </section>

      <section className="section" aria-labelledby="what">
        <div className="wrap answer">
          <div>
            <p className="eyebrow">In short</p>
            <h2 className="title" id="what">What is Photo Fixion?</h2>
          </div>
          <div>
            <p>Photo Fixion is a professional photo editing and image retouching service. We prepare product and fashion photos for online stores, marketplaces and advertising: cutting out backgrounds, retouching, correcting colour and adding shadows, so every image is ready to publish.</p>
            <ul className="check">
              <li>Edited by hand, checked by a second editor</li>
              <li>Standard delivery in {site.turnaround.standard}, express in {site.turnaround.fast} or {site.turnaround.rush}</li>
              <li>Free trial, revisions and bulk discounts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-mist" id="services" aria-labelledby="services-h">
        <div className="wrap">
          <p className="eyebrow">Services</p>
          <h2 className="title" id="services-h">Photo editing services for every product image</h2>
          <p className="lead">Order one service or combine several in a single batch. Every service follows your style guide.</p>
          <div className="grid-4">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card">
                <span className="ic"><Icon name={s.slug} /></span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
                <span className="more">Learn more<span className="sr-only"> about {s.name}</span> →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works" aria-labelledby="how-h">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2 className="title" id="how-h">How do I order photo editing?</h2>
          <p className="lead">Three steps. No software to install and no minimum order.</p>
          <ol className="steps" style={{ padding: 0, listStyle: "none" }}>
            <li><h3>Send your images</h3><p>Upload through a cloud link or your personal FTP and tell us what you need.</p></li>
            <li><h3>We edit by hand</h3><p>Your batch is shared across the team, edited by hand and quality-checked.</p></li>
            <li><h3>Download and review</h3><p>Get your files within 24 hours. Ask for revisions until they are right.</p></li>
          </ol>
        </div>
      </section>

      <section className="section section-mist" aria-labelledby="why-h">
        <div className="wrap">
          <p className="eyebrow">Why Photo Fixion</p>
          <h2 className="title" id="why-h">A home of speed, skill and savings</h2>
          <div className="pillars">
            <div className="pillar"><span className="ic"><Icon name="speed" size={36} /></span><h3>Speed</h3><p>24-hour standard delivery with 12 and 6-hour express options. Editors work around the clock.</p></div>
            <div className="pillar"><span className="ic"><Icon name="skill" size={36} /></span><h3>Skill</h3><p>{site.foundedYears} years of experience and {site.teamSize} trained Photoshop editors. Every path is drawn by hand.</p></div>
            <div className="pillar"><span className="ic"><Icon name="savings" size={36} /></span><h3>Savings</h3><p>Fair per-image pricing, discounts on bulk volume and a free trial before you commit.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="turnaround" aria-labelledby="turn-h">
        <div className="wrap">
          <p className="eyebrow">Turnaround</p>
          <h2 className="title" id="turn-h">How long does photo editing take?</h2>
          <p className="lead">Standard orders are delivered in 24 hours. Urgent orders can be delivered in 12 or 6 hours.</p>
          <div className="table-wrap">
            <table>
              <caption>Delivery time depends on image count and complexity. Pricing is quoted per order: [ADD YOUR PRICES].</caption>
              <thead><tr><th scope="col">Delivery option</th><th scope="col">Turnaround</th><th scope="col">Best for</th></tr></thead>
              <tbody>
                <tr><th scope="row">Standard</th><td>24 hours</td><td>Regular catalogue updates and bulk batches</td></tr>
                <tr><th scope="row">Express</th><td>12 hours</td><td>Launches and time-sensitive listings</td></tr>
                <tr><th scope="row">Rush <span className="pill">Fastest</span></th><td>6 hours</td><td>Urgent campaigns and same-day needs</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-mist center" id="faq" aria-labelledby="faq-h">
        <div className="wrap">
          <p className="eyebrow">FAQ</p>
          <h2 className="title" id="faq-h">Frequently asked questions</h2>
          <Faq items={homeFaqs} />
        </div>
      </section>

      <section className="section" aria-label="Get started">
        <div className="wrap">
          <div className="cta">
            <div><h2>Send a few images. See the quality first.</h2><p>Request a free trial and get your edited samples back within 24 hours.</p></div>
            <Link href="/contact" className="btn btn-yellow">Start a free trial</Link>
          </div>
        </div>
      </section>

      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />
    </>
  );
}
