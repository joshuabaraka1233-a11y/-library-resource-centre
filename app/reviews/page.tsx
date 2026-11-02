import type { Metadata } from "next";
import InteriorPage from "@/components/InteriorPage";
import Link from "next/link";
import { Quote, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviews | Library And Resource Centre",
  description: "Visitor feedback and Google rating for Library And Resource Centre, Nairobi.",
};

const mapsReviews = "https://www.google.com/maps/search/?api=1&query=Library+And+Resource+Centre+Ngong+Road+Nairobi";

export default function ReviewsPage() {
  return (
    <InteriorPage
      eyebrow="VISITOR FEEDBACK"
      title="A word from visitors."
      intro="Read the feedback currently highlighted for Library And Resource Centre."
    >
      <section className="section interior-section">
        <div className="container review-page-grid">
          <div className="review-score-card">
            <span className="eyebrow dark-eyebrow"><span /> GOOGLE RATING</span>
            <strong>4.3<span>/5</span></strong>
            <div className="stars large-stars" aria-label="Google rating 4.3 out of 5">★★★★★</div>
            <p>Based on 10 Google reviews, as shown in the current website brief.</p>
            <a className="text-link" href={mapsReviews} target="_blank" rel="noreferrer">View on Google <ExternalLink size={15} /></a>
          </div>
          <article className="featured-review">
            <Quote size={38} />
            <div className="eyebrow dark-eyebrow"><span /> FEATURED VISITOR COMMENT</div>
            <blockquote>“It&apos;s a nice place to get some books to learn and have fun with.”</blockquote>
            <p>Short “Mr. Humble” Nico · Google review</p>
          </article>
        </div>
      </section>
      <section className="interior-band">
        <div className="container callout-row">
          <div><div className="eyebrow dark-eyebrow"><span /> YOUR VISIT</div><h2>Discover the centre for yourself.</h2><p>Check the location and contact details before visiting.</p></div>
          <Link className="primary-button" href="/contact">Plan your visit <ExternalLink size={15} /></Link>
        </div>
      </section>
    </InteriorPage>
  );
}
