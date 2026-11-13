import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Photo Fixion | Photo Editing Service for E-commerce, 24h Delivery", template: "%s | Photo Fixion" },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: site.name, url: site.url, title: "Photo Fixion | Professional Photo Editing Service", description: site.description, locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Photo Fixion | Professional Photo Editing Service", description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};
export const viewport: Viewport = { themeColor: "#D91B63", width: "device-width", initialScale: 1 };

// Entity graph: tells search engines and AI systems exactly who Photo Fixion is and what it sells.
const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, slogan: site.tagline,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.svg` }, description: site.description,
      email: site.email, telephone: site.phone,
      contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: site.email, telephone: site.phone, availableLanguage: ["en", "bn"] },
      ...(site.social.length ? { sameAs: site.social } : {}),
      knowsAbout: services.map((s) => s.name),
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": `${site.url}/#organization` }, inLanguage: "en" },
    {
      "@type": "ProfessionalService", "@id": `${site.url}/#service`, name: site.name, url: site.url, image: `${site.url}/logo.svg`,
      parentOrganization: { "@id": `${site.url}/#organization` }, areaServed: "Worldwide", email: site.email, telephone: site.phone,
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
      hasOfferCatalog: {
        "@type": "OfferCatalog", name: "Photo editing services",
        itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, description: s.short, url: `${site.url}/services/${s.slug}` } })),
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={graph} />
      </body>
    </html>
  );
}
