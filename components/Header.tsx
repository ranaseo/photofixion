import HeaderClient from "./HeaderClient";
import { services } from "@/lib/services";
import { nav } from "@/lib/site";

// Server wrapper: sends only the fields the menu needs to the browser.
export default function Header() {
  const items = services.map(({ slug, name, short }) => ({ slug, name, short }));
  return <HeaderClient services={items} links={nav.filter((n) => n.label !== "Services")} />;
}
