import type { Metadata } from "next";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact and Free Trial",
  description: "Request a free trial or a quote from Photo Fixion. Send sample images and receive edited results within 24 hours.",
  alternates: { canonical: "/contact" },
};

// TODO: this form has no backend yet. Point `action` at your form handler (a route handler, Formspree, etc.).
export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <h1>Start a free trial or get a quote</h1>
          <p className="lead">Tell us what you need and send a few sample images. We reply around the clock.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap two">
          <form className="form" action="#" method="post">
            <label>Name<input name="name" autoComplete="name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" required /></label>
            <label>Service<select name="service">{services.map((s) => <option key={s.slug}>{s.name}</option>)}</select></label>
            <label>Number of images<input name="volume" inputMode="numeric" /></label>
            <label>Instructions<textarea name="message" /></label>
            <button className="btn btn-pink" type="submit">Send request</button>
          </form>
          <div className="panel">
            <h2>Other ways to reach us</h2>
            <ul className="check"><li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li><li>Phone: <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li><li>WhatsApp: <a href={site.whatsappUrl} rel="noopener">{site.phoneDisplay}</a></li><li>Open 24 hours, 7 days a week</li></ul>
          </div>
        </div>
      </section>
    </>
  );
}
