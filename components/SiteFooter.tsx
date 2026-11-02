import { ArrowUpRight, BookOpen, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Library+And+Resource+Centre+Ngong+Road+Nairobi";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link href="/" className="brand footer-brand">
            <span className="brand-icon"><BookOpen size={25} /></span>
            <span><strong>LIBRARY</strong><small>AND RESOURCE CENTRE</small></span>
          </Link>
          <p>Knowledge. Learning. Discovery.</p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <Link href="/about">About the library</Link>
          <Link href="/discover">Discover</Link>
          <Link href="/reviews">Visitor reviews</Link>
          <Link href="/contact">Contact & directions</Link>
        </div>
        <div className="footer-links footer-contact">
          <strong>Visit us</strong>
          <a href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={15} /> Ngong Road, Nairobi <ArrowUpRight size={13} /></a>
          <a href="tel:+254202158352"><Phone size={15} /> 020 2158352</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Library And Resource Centre</span>
        <span>Website demonstration · Subject to management approval</span>
      </div>
    </footer>
  );
}
