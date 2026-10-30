"use client";

import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/torqueData";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonialsSection} aria-label="Customer Reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Real Morbi Client Stories</span>
          <h2 className="section-title">Trusted by Thousands of Drivers & Fleets</h2>
          <p className="section-desc">
            See what vehicle owners, doctors, business executives, and commercial transport fleet managers in Morbi say about our service.
          </p>
        </div>

        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className={styles.testimonialCard} id={`testimonial-${idx}`}>
              <div>
                <div className={styles.starsRow}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} style={{ width: 16, height: 16, fill: "var(--accent-gold)" }} />
                  ))}
                </div>
                <p className={styles.comment}>&ldquo;{item.comment}&rdquo;</p>
              </div>

              <div className={styles.authorArea}>
                <div className={styles.avatarFallback}>
                  {item.name.charAt(0)}
                </div>
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>{item.name}</span>
                  <span className={styles.authorRole}>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
