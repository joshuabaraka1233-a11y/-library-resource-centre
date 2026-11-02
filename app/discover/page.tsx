import type { Metadata } from "next";
import InteriorPage from "@/components/InteriorPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Discover | Library And Resource Centre",
  description: "Explore visitor information for Library And Resource Centre, Nairobi.",
};

const areas = [
  { number: "01", title: "Books & reading", text: "Find out about the library's book collections and reading resources. A detailed catalogue has not yet been confirmed for this website." },
  { number: "02", title: "Learning & research", text: "This section is reserved for confirmed information about learning, study and research resources available at the centre." },
  { number: "03", title: "Digital resources", text: "Information about computers, internet access and other digital facilities will be published once confirmed by management." },
  { number: "04", title: "Plan a visit", text: "Check the location, contact number and available opening information before setting out." },
];

export default function DiscoverPage() {
  return (
    <InteriorPage
      eyebrow="EXPLORE"
      title="Make room for discovery."
      intro="A guide to the kinds of information visitors can explore as the centre's official details are confirmed."
    >
      <section className="section interior-section discover-editorial">
        <div className="container">
          <div className="discover-editorial-heading">
            <div>
              <p className="editorial-kicker">EXPLORE THE CENTRE</p>
              <h2>Knowledge has many<br /><em>paths.</em></h2>
            </div>
            <p>Start with an area that interests you. For specific collections, facilities and programmes, please confirm details directly with the library.</p>
          </div>
          <div className="discover-editorial-list">
            {areas.map(({ number, title, text }) => (
              <article className="discover-editorial-item" key={number}>
                <span className="discover-number">{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href="/contact">Enquire <span>↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="discover-bottom">
        <div className="container discover-bottom-inner">
          <p className="editorial-kicker">NEED MORE INFORMATION?</p>
          <h2>We would be glad<br /><em>to point you in the right direction.</em></h2>
          <Link href="/contact">Contact the centre <span>↗</span></Link>
        </div>
      </section>
    </InteriorPage>
  );
}
