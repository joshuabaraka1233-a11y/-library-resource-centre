import type { Metadata } from "next";
import InteriorPage from "@/components/InteriorPage";
import { MapPin, Phone, Clock3, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Location | Library And Resource Centre",
  description: "Find Library And Resource Centre on Ngong Road, Nairobi. Call 020 2158352 for information.",
};

const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Library+And+Resource+Centre+Ngong+Road+Nairobi";
const embedUrl = "https://www.google.com/maps?q=Library+And+Resource+Centre+Ngong+Road+Nairobi&output=embed";

export default function ContactPage() {
  return (
    <InteriorPage
      eyebrow="VISIT US"
      title="We are on Ngong Road."
      intro="Find the location and contact information for Library And Resource Centre, Nairobi."
    >
      <section className="section interior-section">
        <div className="container">
          <div className="contact-grid contact-page-grid">
            <article className="contact-card"><span className="contact-icon"><MapPin /></span><h3>Our location</h3><p>Ngong Road, North, Nairobi, Kenya</p><a href={mapsUrl} target="_blank" rel="noreferrer">Get directions <ExternalLink size={15} /></a></article>
            <article className="contact-card"><span className="contact-icon"><Phone /></span><h3>Call the centre</h3><p>020 2158352</p><a href="tel:+254202158352">Call 020 2158352 <Phone size={15} /></a></article>
            <article className="contact-card"><span className="contact-icon"><Clock3 /></span><h3>Opening information</h3><p>Listed closing time: 5:00 PM</p><small>Full weekly opening schedule has not yet been confirmed.</small></article>
          </div>
          <div className="contact-map-layout">
            <div className="contact-map-copy"><div className="eyebrow dark-eyebrow"><span /> FIND YOUR WAY</div><h2>Plan your <em>route.</em></h2><p>Plus Code: PR46+3X Nairobi</p><p>For the latest directions, open the location in Google Maps or call the centre before travelling.</p><a className="primary-button" href={mapsUrl} target="_blank" rel="noreferrer">Open Google Maps <ExternalLink size={16} /></a></div>
            <div className="map-frame"><iframe title="Map showing Ngong Road, Nairobi" src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
