import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/torqueData";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  return (
    <section className={styles.testiSection} aria-label="Customer Testimonials">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div className="origin-badge">
            <span className="flag-icon" />
            <span>Testimonial</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#111827" }}>
            Providing The Best Customer <br />
            Insurance &amp; RTO Service
          </h2>
          <p style={{ color: "#4b5563", maxWidth: 650, margin: "12px auto 0 auto", fontSize: "1.05rem" }}>
            Trusted by ceramic factory fleet owners, private motorists, and commercial transport drivers throughout Morbi.
          </p>
        </div>

        <div className={styles.testiGrid}>
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <div key={idx} className={styles.testiCard}>
              <div>
                <div className={styles.starsRow}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} style={{ width: 16, height: 16, fill: "#f59e0b", color: "#f59e0b" }} />
                  ))}
                </div>
                <p className={styles.comment}>&ldquo;{item.comment}&rdquo;</p>
              </div>

              <div className={styles.authorRow}>
                <div className={styles.authorAvatar}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className={styles.authorName}>{item.name}</h4>
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
