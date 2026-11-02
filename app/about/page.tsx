import type { Metadata } from "next";
import InteriorPage from "@/components/InteriorPage";
import { BookOpen, MapPin, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Library And Resource Centre",
  description: "Learn about the Library And Resource Centre on Ngong Road, Nairobi.",
};

export default function AboutPage() {
  return (
    <InteriorPage
      eyebrow="ABOUT THE LIBRARY"
      title="A place for knowledge."
      intro="An introduction to Library And Resource Centre, located along Ngong Road in Nairobi."
    >
      <section className="section interior-section">
        <div className="container interior-two-column">
          <div className="interior-photo about-photo" role="img" aria-label="Shelves of books in a library" />
          <div className="interior-copy">
            <div className="eyebrow dark-eyebrow"><span /> WELCOME</div>
            <h2>Where learning begins with <em>curiosity.</em></h2>
            <p>Library And Resource Centre is listed along Ngong Road in Nairobi. This website is designed to help visitors find introductory information, directions and contact details in one place.</p>
            <p>Institutional history, leadership, mission, membership arrangements and detailed service information have not yet been confirmed for publication. These details can be added following approval by library management.</p>
          </div>
        </div>
      </section>
      <section className="interior-band">
        <div className="container value-grid">
          <article><BookOpen /><h3>Reading</h3><p>A welcoming starting point for visitors looking for information about books and collections.</p></article>
          <article><Compass /><h3>Discovery</h3><p>Explore the information currently available on this website and plan your visit.</p></article>
          <article><MapPin /><h3>Location</h3><p>Find the centre along Ngong Road, Nairobi, and get directions before travelling.</p></article>
        </div>
      </section>
    </InteriorPage>
  );
}
