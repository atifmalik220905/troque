"use client";

import React from "react";
import { 
  ShieldCheck, 
  Home, 
  Banknote, 
  Clock, 
  PhoneCall, 
  Award,
  Sparkles 
} from "lucide-react";
import { WHY_CHOOSE_US, BUSINESS_INFO } from "@/data/torqueData";
import styles from "./WhyChooseUs.module.css";

const renderWhyIcon = (iconName: string) => {
  const props = { style: { width: 26, height: 26 } };
  switch (iconName) {
    case "ShieldAlert": return <ShieldCheck {...props} />;
    case "Home": return <Home {...props} />;
    case "Banknote": return <Banknote {...props} />;
    case "Clock": return <Clock {...props} />;
    default: return <Award {...props} />;
  }
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className={styles.whySection} aria-label="Why Choose Torque Auto Advisor">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Morbi&apos;s Trusted RTO Partner</span>
          <h2 className="section-title">Why Vehicle Owners & Fleet Operators Choose Us</h2>
          <p className="section-desc">
            Navigating RTO rules, Parivahan paperwork, and legal vehicle transfers shouldn&apos;t be stressful. We combine 15+ years of local experience with transparent service.
          </p>
        </div>

        <div className={styles.whyGrid}>
          {WHY_CHOOSE_US.map((item, idx) => (
            <div key={idx} className={styles.whyCard} id={`why-card-${idx}`}>
              <div className={styles.iconBox}>
                {renderWhyIcon(item.icon)}
              </div>
              <h3 className={styles.whyTitle}>{item.title}</h3>
              <p className={styles.whyDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Highlight Callout Banner */}
        <div className={styles.whyBanner}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <Sparkles style={{ color: "var(--accent-primary)", width: 18, height: 18 }} />
              <span className="badge badge-orange">Ceramic Fleet Priority Channel</span>
            </div>
            <h3 className={styles.bannerTitle}>Managing Commercial Fleets in Morbi?</h3>
            <p className={styles.bannerDesc}>
              We offer dedicated bulk processing, annual fitness tracking, and multi-state goods permits for Morbi ceramic factories, logistics companies, and fleet operators.
            </p>
          </div>

          <a 
            href={`tel:${BUSINESS_INFO.phone1.replace(/\s+/g, "")}`}
            className="btn btn-primary btn-lg"
            id="fleet-priority-call-btn"
          >
            <PhoneCall style={{ width: 18, height: 18 }} />
            <span>Speak with Fleet Specialist</span>
          </a>
        </div>
      </div>
    </section>
  );
}
