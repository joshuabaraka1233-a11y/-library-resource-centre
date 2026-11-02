import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-card">
        <span className="brand-icon"><BookOpen size={28} /></span>
        <p className="eyebrow dark-eyebrow">404 · PAGE NOT FOUND</p>
        <h1>This page is not on our shelves.</h1>
        <p>The page may have moved, or the address may be incorrect.</p>
        <Link className="primary-button" href="/"><ArrowLeft size={16} /> Return to homepage</Link>
      </div>
    </main>
  );
}
