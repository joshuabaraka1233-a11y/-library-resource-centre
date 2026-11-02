import type { Metadata } from "next";
import InteriorPage from "@/components/InteriorPage";

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
      <section className="section interior-section contact-editorial">
        <div className="container">
          <div className="contact-editorial-heading">
            <p className="editorial-kicker">PLAN YOUR VISIT</p>
            <h2>Everything you need<br /><em>to find us.</em></h2>
          </div>
          <div className="contact-editorial-grid">
            <article className="contact-editorial-card">
              <span className="contact-number">01 / LOCATION</span>
              <h3>Come see us.</h3>
              <p>Ngong Road, North,<br />Nairobi, Kenya</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer">Get directions <span>↗</span></a>
            </article>
            <article className="contact-editorial-card">
              <span className="contact-number">02 / PHONE</span>
              <h3>Let's talk.</h3>
              <p>020 2158352</p>
              <a href="tel:+254202158352">Call the centre <span>↗</span></a>
            </article>
            <article className="contact-editorial-card">
              <span className="contact-number">03 / HOURS</span>
              <h3>Before you visit.</h3>
              <p>Listed closing time: 5:00 PM</p>
              <small>The full weekly opening schedule has not yet been confirmed. Please call ahead.</small>
            </article>
          </div>
          <div className="contact-map-layout">
            <div className="contact-map-copy">
              <p className="editorial-kicker">FIND YOUR WAY</p>
              <h2>See you<br /><em>soon.</em></h2>
              <p>Plus Code: PR46+3X Nairobi</p>
              <p>For the latest directions, open the location in Google Maps or call the centre before travelling.</p>
              <a className="primary-button" href={mapsUrl} target="_blank" rel="noreferrer">Open Google Maps <span>↗</span></a>
            </div>
            <div className="map-frame"><iframe title="Map showing Ngong Road, Nairobi" src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
          </div>
        </div>
      </section>
    </InteriorPage>
  );
}
