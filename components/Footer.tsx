import Link from "next/link";
import Logo from "./Logo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo variant="dark" size={38} />
          <p>{site.tagline}. Professional photo editing for e-commerce brands, photographers and agencies.</p>
        </div>
        <nav aria-label="Services">
          <h2>Services</h2>
          <ul>{services.map((s) => (<li key={s.slug}><Link href={`/services/${s.slug}`}>{s.name}</Link></li>))}</ul>
        </nav>
        <nav aria-label="Company">
          <h2>Company</h2>
          <ul>
            <li><Link href="/#how-it-works">How it works</Link></li>
            <li><Link href="/#turnaround">Turnaround</Link></li>
            <li><Link href="/#faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>Phone: <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></li>
            <li>WhatsApp: <a href={site.whatsappUrl} rel="noopener">{site.phoneDisplay}</a></li>
            <li>Open 24 hours, 7 days</li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-base">© {new Date().getFullYear()} {site.legalName}. All rights reserved.</div>
    </footer>
  );
}
