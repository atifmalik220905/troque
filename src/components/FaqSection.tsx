"use client";

import React, { useState } from "react";
import { 
  ArrowUpRight, 
  ChevronDown, 
  Check, 
  PhoneCall 
} from "lucide-react";
import { FAQS, BUSINESS_INFO } from "@/data/torqueData";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section id="faqs" className={styles.faqSection} aria-label="Frequently Asked Questions">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div className="origin-badge">
            <span className="flag-icon" />
            <span>Faq Question</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#111827" }}>
            Get This Asked Answers <br />
            Common Questions
          </h2>
        </div>

        <div className={styles.faqGrid}>
          {/* Left Column: Advisor Image */}
          <div className={styles.advisorImageCol}>
            <div className={styles.greenBackdropShape} />
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
              alt="Torque Auto Advisor representative" 
              className={styles.advisorImg}
              style={{ position: "relative", zIndex: 1, borderRadius: 28 }}
            />
          </div>

          {/* Right Column: Original styled accordion */}
          <div className={styles.accordionList}>
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx} 
                  className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
                >
                  <button 
                    className={styles.accordionHeader} 
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <div className={styles.headerLeft}>
                      <div className={styles.greenCircleArrow}>
                        <ArrowUpRight style={{ width: 18, height: 18 }} />
                      </div>
                      <span className={styles.questionText}>{faq.q}</span>
                    </div>
                    <ChevronDown className={styles.chevron} style={{ width: 18, height: 18 }} />
                  </button>

                  {isOpen && (
                    <div className={styles.accordionBody}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Original Blue Callout Banner */}
      <div className={styles.blueCtaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaLeft}>
              <h3 className={styles.ctaHeading}>
                If You Need To Contact Your <br />
                Advisor Company
              </h3>

              <div className={styles.ctaCheckmarks}>
                <div className={styles.checkItem}>
                  <Check style={{ color: "var(--brand-green)", width: 18, height: 18 }} strokeWidth={3} />
                  <span>Insurance team has deep expertise in commercial fleets &amp; RTO compliance.</span>
                </div>
                <div className={styles.checkItem}>
                  <Check style={{ color: "var(--brand-green)", width: 18, height: 18 }} strokeWidth={3} />
                  <span>Save your time and avoid fines with doorstep document handling.</span>
                </div>
              </div>
            </div>

            {/* Red Call Pill Button */}
            <a 
              href={`tel:${BUSINESS_INFO.phone1.replace(/\s+/g, "")}`}
              className={styles.callRedPill}
              id="cta-call-pill-btn"
            >
              <div className={styles.phoneCircle}>
                <PhoneCall style={{ width: 26, height: 26 }} />
              </div>
              <div className={styles.callPillText}>
                <span className={styles.pillLabel}>Call if Any Requirement!</span>
                <span className={styles.pillNumber}>{BUSINESS_INFO.phone1}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
