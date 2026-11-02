"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, ArrowRight, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Discover", href: "/discover" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Library+And+Resource+Centre+Ngong+Road+Nairobi";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container nav">
          <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-icon">
              <BookOpen size={27} />
            </span>
            <span>
              <strong>LIBRARY</strong>
              <small>AND RESOURCE CENTRE</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a
            className="nav-button"
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit the Library <ArrowRight size={16} />
          </a>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              <ArrowRight size={15} />
            </a>
          ))}

          <a
            className="mobile-visit"
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit the Library <ArrowRight size={16} />
          </a>
        </nav>
      )}
    </>
  );
}
