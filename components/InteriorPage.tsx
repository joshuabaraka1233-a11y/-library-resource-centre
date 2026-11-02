import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ArrowRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export default function InteriorPage({ eyebrow, title, intro, children }: Props) {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>KNOWLEDGE. LEARNING. DISCOVERY.</span>
          <span>Ngong Road, Nairobi, Kenya</span>
        </div>
      </div>
      <SiteHeader />
      <main id="main-content">
        <section className="page-hero">
          <div className="container page-hero-inner">
            <div className="eyebrow"><span /> {eyebrow}</div>
            <h1>{title}</h1>
            <p>{intro}</p>
            <a className="page-hero-link" href="/contact">Plan your visit <ArrowRight size={16} /></a>
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
