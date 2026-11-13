import Link from "next/link";
export default function NotFound() {
  return (<section className="page-hero"><div className="wrap"><h1>Page not found</h1><p className="lead">The page you are looking for does not exist.</p><div className="hero-cta"><Link href="/" className="btn btn-pink">Back to home</Link></div></div></section>);
}
