"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icons";
import Logo from "./Logo";

type Item = { slug: string; name: string; short: string };
type Props = { services: Item[]; links: { href: string; label: string }[] };

export default function HeaderClient({ services, links }: Props) {
  const [mega, setMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const close = () => { setMega(false); setMobile(false); };

  useEffect(() => { close(); }, [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    const onClick = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) close(); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("click", onClick); };
  }, []);

  return (
    <header className="header" ref={ref} onMouseLeave={() => setMega(false)}>
      <div className="wrap header-in">
        <Link href="/" aria-label="Photo Fixion home" onClick={close}><Logo size={38} /></Link>

        <nav aria-label="Main" className="nav">
          <button
            type="button" className="nav-trigger" aria-expanded={mega} aria-controls="mega-services"
            onClick={() => setMega((v) => !v)} onMouseEnter={() => setMega(true)}
          >
            Services
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          {links.map((n) => (<Link key={n.href} href={n.href} onMouseEnter={() => setMega(false)}>{n.label}</Link>))}
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="btn btn-pink btn-sm" onClick={close}>Start free trial</Link>
          <button type="button" className="burger" aria-label={mobile ? "Close menu" : "Open menu"} aria-expanded={mobile} aria-controls="mobile-menu" onClick={() => setMobile((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mega menu: always in the HTML so every service link is crawlable; shown on hover, focus or click. */}
      <div id="mega-services" className={`mega${mega ? " open" : ""}`}>
        <div className="wrap mega-in">
          <div>
            <p className="mega-label">Photo editing services</p>
            <ul className="mega-grid">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="mega-item" onClick={close} tabIndex={mega ? 0 : -1}>
                    <span className="ic"><Icon name={s.slug} size={24} /></span>
                    <span><strong>{s.name}</strong><small>{s.short}</small></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <aside className="mega-side">
            <p className="mega-side-title">Not sure which service you need?</p>
            <p>Send a few images. We will suggest the right edit and return free samples in 24 hours.</p>
            <Link href="/contact" className="btn btn-yellow btn-sm" onClick={close} tabIndex={mega ? 0 : -1}>Start a free trial</Link>
            <Link href="/#services" className="mega-all" onClick={close} tabIndex={mega ? 0 : -1}>View all services →</Link>
          </aside>
        </div>
      </div>

      <div id="mobile-menu" className={`mnav${mobile ? " open" : ""}`}>
        <div className="wrap">
          <p className="mega-label">Services</p>
          <ul className="mnav-services">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} onClick={close} tabIndex={mobile ? 0 : -1}><span className="ic"><Icon name={s.slug} size={20} /></span>{s.name}</Link></li>
            ))}
          </ul>
          <ul className="mnav-links">
            {links.map((n) => (<li key={n.href}><Link href={n.href} onClick={close} tabIndex={mobile ? 0 : -1}>{n.label}</Link></li>))}
          </ul>
          <Link href="/contact" className="btn btn-pink" onClick={close} tabIndex={mobile ? 0 : -1}>Start a free trial</Link>
        </div>
      </div>
    </header>
  );
}
