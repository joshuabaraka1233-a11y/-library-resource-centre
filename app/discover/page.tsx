import type { Metadata } from "next";
import InteriorPage from "@/components/InteriorPage";
import Link from "next/link";
import { BookMarked, GraduationCap, Laptop, Compass, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Discover | Library And Resource Centre",
  description: "Explore visitor information for Library And Resource Centre, Nairobi.",
};

const areas = [
  { icon: BookMarked, number: "01", title: "Books & reading", text: "Find out about the library's book collections and reading resources. A detailed catalogue has not yet been confirmed for this website." },
  { icon: GraduationCap, number: "02", title: "Learning & research", text: "This section is reserved for confirmed information about learning, study and research resources available at the centre." },
  { icon: Laptop, number: "03", title: "Digital resources", text: "Information about computers, internet access and other digital facilities will be published once confirmed by management." },
  { icon: Compass, number: "04", title: "Plan a visit", text: "Check the location, contact number and available opening information before setting out." },
];

export default function DiscoverPage() {
  return (
    <InteriorPage
      eyebrow="EXPLORE"
      title="Make room for discovery."
      intro="A guide to the kinds of information visitors can explore as the centre's official details are confirmed."
    >
      <section className="section interior-section">
        <div className="container">
          <div className="section-heading interior-heading">
            <div><div className="eyebrow dark-eyebrow"><span /> EXPLORE THE CENTRE</div><h2>Knowledge has many <em>paths.</em></h2></div>
            <p>Use these sections as a starting point. Specific collections, facilities and programmes should be confirmed directly with the library.</p>
          </div>
          <div className="area-grid">
            {areas.map(({ icon: Icon, number, title, text }) => (
              <article className="area-card" key={number}>
                <div className="area-card-top"><span>{number}</span><Icon size={25} /></div>
                <h3>{title}</h3><p>{text}</p>
                <Link href="/contact">Ask about this <ArrowRight size={15} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="interior-band">
        <div className="container callout-row">
          <div><div className="eyebrow dark-eyebrow"><span /> NEED MORE INFORMATION?</div><h2>Speak to the library.</h2><p>Contact the centre directly for the latest information about collections, services and visiting arrangements.</p></div>
          <Link className="primary-button" href="/contact">Contact details <ArrowRight size={16} /></Link>
        </div>
      </section>
    </InteriorPage>
  );
}
