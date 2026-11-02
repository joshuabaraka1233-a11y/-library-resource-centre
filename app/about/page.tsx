import type { Metadata } from "next";
import InteriorPage from "@/components/InteriorPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Library And Resource Centre",
  description: "Learn about the Library And Resource Centre on Ngong Road, Nairobi.",
};

export default function AboutPage() {
  return (
    <InteriorPage
      eyebrow="ABOUT THE LIBRARY"
      title="A quieter place for bigger ideas."
      intro="Discover Library And Resource Centre, located along Ngong Road in Nairobi."
    >
      <section className="about-editorial section">
        <div className="container about-editorial-grid">
          <div className="about-editorial-image">
            <div className="about-image-caption">
              <span>LIBRARY AND RESOURCE CENTRE</span>
              <strong>Knowledge begins with curiosity.</strong>
            </div>
          </div>
          <div className="about-editorial-copy">
            <p className="editorial-kicker">A PLACE TO BEGIN</p>
            <h2>Room to think.<br /><em>Space to discover.</em></h2>
            <p className="about-lead">A library is more than a collection of books. It is a place to pause, follow a question and give new ideas room to grow.</p>
            <p>Library And Resource Centre is located along Ngong Road in Nairobi. This website brings together the visitor information currently available and gives you a simple starting point for planning a visit.</p>
            <p>We are preparing this introduction around confirmed information. Details about the centre's history, leadership, mission, collections and specific services will be added after they have been verified by management.</p>
            <Link className="about-underlined-link" href="/contact">Find the centre <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="container">
          <div className="about-section-heading">
            <p className="editorial-kicker">THE EXPERIENCE</p>
            <h2>Made for the moments<br /><em>that matter.</em></h2>
            <p>Three simple ideas shape the way this website introduces the centre.</p>
          </div>
          <div className="about-principles-grid">
            <article>
              <span className="principle-number">01</span>
              <h3>Read</h3>
              <p>Find a starting point for discovering books, reading resources and the information available to visitors.</p>
            </article>
            <article>
              <span className="principle-number">02</span>
              <h3>Explore</h3>
              <p>Follow your interests and ask the centre directly about collections, facilities and learning resources.</p>
            </article>
            <article>
              <span className="principle-number">03</span>
              <h3>Visit</h3>
              <p>Use the contact details and directions on this website to plan your journey to Ngong Road.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-closing">
        <div className="container about-closing-inner">
          <p className="editorial-kicker">COME AND FIND OUT</p>
          <h2>Let curiosity<br /><em>lead the way.</em></h2>
          <p>For current information about visiting, location and contact details, get in touch with the centre.</p>
          <Link className="about-closing-link" href="/contact">Contact & directions <span>↗</span></Link>
        </div>
      </section>
    </InteriorPage>
  );
}
