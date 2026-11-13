import Link from "next/link";
import Logo from "./Logo";
import { nav } from "@/lib/site";

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header-in">
        <Link href="/" aria-label="Photo Fixion home"><Logo size={38} /></Link>
        <nav aria-label="Main" className="nav">
          {nav.map((n) => (<Link key={n.href} href={n.href}>{n.label}</Link>))}
        </nav>
        <Link href="/contact" className="btn btn-pink btn-sm">Start free trial</Link>
      </div>
    </header>
  );
}
