
import SiteHeader from "@/components/SiteHeader";

import {
  ArrowRight,
  BookOpen,
  Clock3,
  MapPin,
  Phone,
  Star,

  BookMarked,
  GraduationCap,
  Compass,
  Quote,
  ExternalLink,
} from "lucide-react";

const googleMaps =
  "https://www.google.com/maps/search/?api=1&query=Library+And+Resource+Centre+Ngong+Road+Nairobi";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>KNOWLEDGE. LEARNING. DISCOVERY.</span>
          <span>Ngong Road, Nairobi, Kenya</span>
        </div>
      </div>

      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="eyebrow">
            <span /> A PLACE FOR KNOWLEDGE
          </div>
          <h1>
            Open a book.
            <br />
            <em>Open a world.</em>
          </h1>
          <p>
            Discover a welcoming space dedicated to reading,
            learning and the pursuit of knowledge.
          </p>
          <div className="hero-actions">
            <a href="#about" className="primary-button">
              Discover More <ArrowRight size={18} />
            </a>
            <a href={googleMaps} target="_blank" className="secondary-button">
              <MapPin size={17} /> Find Our Location
            </a>
          </div>
          <div className="hero-note">
            <BookOpen size={18} />
            <span>LIBRARY & RESOURCE CENTRE · NAIROBI</span>
          </div>
        </div>
        <div className="hero-side-label">READ · LEARN · GROW</div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat">
            <span className="stat-icon"><Star /></span>
            <div><strong>4.3/5</strong><small>Google rating</small></div>
          </div>
          <div className="stat">
            <span className="stat-icon"><Quote /></span>
            <div><strong>10</strong><small>Google reviews</small></div>
          </div>
          <div className="stat">
            <span className="stat-icon"><MapPin /></span>
            <div><strong>Nairobi</strong><small>Ngong Road</small></div>
          </div>
          <div className="stat">
            <span className="stat-icon"><Clock3 /></span>
            <div><strong>5:00 PM</strong><small>Listed closing time</small></div>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-image">
            <div className="image-caption">
              <BookOpen size={21} />
              <span>A WORLD OF KNOWLEDGE</span>
            </div>
          </div>
          <div className="about-copy">
            <div className="eyebrow dark-eyebrow">
              <span /> WELCOME
            </div>
            <h2>Where knowledge meets <em>possibility.</em></h2>
            <p>
              Welcome to Library And Resource Centre, located along
              Ngong Road in Nairobi. This website concept introduces
              the library and provides a convenient starting point
              for visitors seeking information.
            </p>
            <p className="muted">
              Our institutional history, mission, collections and
              services will be added after confirmation by library
              management.
            </p>
            <a href="#contact" className="text-link">
              Get in touch <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section discover-section" id="discover">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow dark-eyebrow"><span /> EXPLORE</div>
              <h2>A space for <em>discovery.</em></h2>
            </div>
            <p>
              A closer look at the information visitors can find
              through this website.
            </p>
          </div>

          <div className="discover-grid">
            <article className="discover-card">
              <div className="card-icon"><BookMarked /></div>
              <span>01 / READING</span>
              <h3>Books & Reading</h3>
              <p>
                Discover information about the library&apos;s books
                and collections. Collection details await
                confirmation.
              </p>
            </article>
            <article className="discover-card">
              <div className="card-icon"><GraduationCap /></div>
              <span>02 / LEARNING</span>
              <h3>Learning Resources</h3>
              <p>
                Explore learning and research resources.
                Specific available materials will be confirmed.
              </p>
            </article>
            <article className="discover-card">
              <div className="card-icon"><Compass /></div>
              <span>03 / VISITING</span>
              <h3>Plan Your Visit</h3>
              <p>
                Find the library&apos;s location and contact
                information before making your visit.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="review-section" id="reviews">
        <div className="container review-inner">
          <div className="review-mark"><Quote size={35} /></div>
          <div className="review-content">
            <div className="eyebrow">VISITOR FEEDBACK</div>
            <h2>“It&apos;s a nice place to get some books to learn and have fun with.”</h2>
            <p>Short “Mr. Humble” Nico · Google review</p>
          </div>
          <div className="review-rating">
            <strong>4.3</strong>
            <div className="stars">★★★★★</div>
            <small>10 Google reviews</small>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow dark-eyebrow"><span /> VISIT US</div>
              <h2>Let&apos;s connect.</h2>
            </div>
            <p>
              Need directions or more information?
              Use the contact details below.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <span className="contact-icon"><MapPin /></span>
              <h3>Our Location</h3>
              <p>Ngong Road, North, Nairobi, Kenya</p>
              <a href={googleMaps} target="_blank">
                Get directions <ExternalLink size={15} />
              </a>
            </div>
            <div className="contact-card">
              <span className="contact-icon"><Phone /></span>
              <h3>Call Us</h3>
              <p>020 2158352</p>
              <a href="tel:+254202158352">
                Contact the library <ArrowRight size={15} />
              </a>
            </div>
            <div className="contact-card">
              <span className="contact-icon"><Clock3 /></span>
              <h3>Opening Information</h3>
              <p>Listed closing time: 5:00 PM</p>
              <small>Full weekly schedule to be confirmed.</small>
            </div>
          </div>

          <div className="map-panel">
            <div>
              <span className="eyebrow dark-eyebrow">FIND YOUR WAY</span>
              <h3>Visit us along Ngong Road.</h3>
              <p>Plus Code: PR46+3X Nairobi</p>
            </div>
            <a href={googleMaps} target="_blank" className="primary-button">
              Open Google Maps <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-top">
          <a href="#home" className="brand footer-brand">
            <span className="brand-icon"><BookOpen size={25} /></span>
            <span><strong>LIBRARY</strong><small>AND RESOURCE CENTRE</small></span>
          </a>
          <p>Knowledge. Learning. Discovery.</p>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Library And Resource Centre</span>
          <span>Website demonstration · Subject to management approval</span>
        </div>
      </footer>
      </main>
    </>
  );
}
