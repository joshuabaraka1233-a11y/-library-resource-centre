"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const selectors = [
      ".page-hero-inner",
      ".about-editorial-grid",
      ".about-section-heading",
      ".about-principles-grid article",
      ".about-closing-inner",
      ".contact-editorial-heading",
      ".contact-editorial-card",
      ".contact-map-layout",
      ".discover-editorial-heading",
      ".discover-editorial-item",
      ".discover-bottom-inner",
      ".reviews-rating-panel",
      ".reviews-feature",
      ".reviews-bottom-inner",
      ".interior-two-column",
      ".value-grid article",
      ".area-card",
      ".callout-row",
      ".review-score-card",
      ".featured-review",
      ".contact-card",
      ".map-panel",
      ".stats-grid .stat",
      ".about-grid",
      ".discover-card",
      ".review-inner",
    ];

    const elements = document.querySelectorAll<HTMLElement>(selectors.join(","));
    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -45px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
