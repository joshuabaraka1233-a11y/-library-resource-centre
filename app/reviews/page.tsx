import type { Metadata } from "next";
import InteriorPage from "@/components/InteriorPage";
import Link from "next/link";

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
      <section className="section interior-section reviews-editorial">
        <div className="container reviews-editorial-grid">
          <div className="reviews-rating-panel">
            <p className="editorial-kicker">GOOGLE RATING</p>
            <strong>4.3<span> / 5</span></strong>
            <div className="reviews-stars" aria-label="Google rating 4.3 out of 5">★★★★★</div>
            <p>Based on 10 Google reviews, as shown in the current website brief.</p>
            <a href={mapsReviews} target="_blank" rel="noreferrer">Read on Google <span>↗</span></a>
          </div>
          <article className="reviews-feature">
            <p className="editorial-kicker">A VISITOR'S WORDS</p>
            <blockquote>“It&apos;s a nice place to get some books to learn and have fun with.”</blockquote>
            <div className="reviews-attribution"><span></span><p>Short “Mr. Humble” Nico <small>Google review</small></p></div>
          </article>
        </div>
      </section>
      <section className="reviews-bottom">
        <div className="container reviews-bottom-inner">
          <p className="editorial-kicker">YOUR VISIT</p>
          <h2>Come and make<br /><em>your own discovery.</em></h2>
          <Link href="/contact">Plan your visit <span>↗</span></Link>
        </div>
      </section>
    </InteriorPage>
  );
}
