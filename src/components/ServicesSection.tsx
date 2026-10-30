"use client";

import React, { useState } from "react";
import { 
  Car, 
  ShieldCheck, 
  CreditCard, 
  Gauge, 
  FileText, 
  Truck, 
  CheckCircle, 
  Award, 
  KeyRound,
  X,
  Check,
  ArrowRight,
  Clock
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/data/torqueData";
import styles from "./ServicesSection.module.css";

const SERVICE_IMAGES: { [key: string]: string } = {
  "vehicle-name-transfer": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
  "hsrp-number-plate": "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
  "cng-cylinder-testing": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
  "driving-license": "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80",
  "vehicle-passing": "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80",
  "fitness-certificate": "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=600&q=80",
  "permit-services": "https://images.unsplash.com/photo-1586191582056-a197779d71ee?auto=format&fit=crop&w=600&q=80",
  "puc-certification": "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80",
  "vehicle-insurance": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
  "hp-cancellation": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80"
};

const renderIcon = (id: string) => {
  const iconProps = { style: { width: 28, height: 28 } };
  switch (id) {
    case "vehicle-name-transfer": return <Car {...iconProps} />;
    case "hsrp-number-plate": return <CreditCard {...iconProps} />;
    case "cng-cylinder-testing": return <Gauge {...iconProps} />;
    case "driving-license": return <FileText {...iconProps} />;
    case "vehicle-passing": return <Award {...iconProps} />;
    case "fitness-certificate": return <ShieldCheck {...iconProps} />;
    case "permit-services": return <Truck {...iconProps} />;
    case "puc-certification": return <CheckCircle {...iconProps} />;
    case "vehicle-insurance": return <ShieldCheck {...iconProps} />;
    case "hp-cancellation": return <KeyRound {...iconProps} />;
    default: return <Car {...iconProps} />;
  }
};

export default function ServicesSection() {
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  const handleWhatsAppInquiry = (service: ServiceItem) => {
    const text = `Hello Torque Auto Advisor, I need guidance for: ${service.title}. Please provide details on requirements and fees.`;
    const url = `https://wa.me/918000811331?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="services" className={styles.servicesSection} aria-label="Our All Services">
      {/* Curved Red Header block */}
      <div className={styles.redHeaderBlock}>
        <div className="container">
          <div className={styles.headerGrid}>
            <div>
              <div className="origin-badge">
                <span className="flag-icon" />
                <span>Our All Service</span>
              </div>
              <h2 className={styles.headerTitle}>
                We Guide to Insurance <br />
                This Best Services
              </h2>
            </div>
            <div>
              <p className={styles.headerDesc}>
                At Torque Auto Advisor, we provide a wide range of vehicle-related services, including Driving License assistance, CNG Cylinder Re-Testing, and Third Party Full Insurance. Our expert team ensures that all your automotive needs are met with professionalism and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container">
        <div className={styles.cardsContainer}>
          <div className={styles.cardsGrid}>
            {SERVICES.map((service) => (
              <div key={service.id} className={styles.card} id={`orig-service-${service.id}`}>
                <div className={styles.cardBody}>
                  <div className={styles.cardIconCircle}>
                    {renderIcon(service.id)}
                  </div>

                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardText}>{service.shortDesc}</p>

                  <div className={styles.cardFooter}>
                    <button 
                      onClick={() => setModalService(service)}
                      className={styles.seeMoreLink}
                      id={`see-more-${service.id}`}
                    >
                      <span>See Moe +</span>
                    </button>
                  </div>
                </div>

                {/* Bottom Image with wave top */}
                <div className={styles.cardImageWrapper}>
                  <svg className={styles.waveSvg} viewBox="0 0 500 40" preserveAspectRatio="none">
                    <path d="M 0 0 C 150 40 350 -15 500 15 L 500 0 L 0 0 Z" fill="#ffffff" />
                  </svg>
                  <img 
                    src={SERVICE_IMAGES[service.id] || "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"} 
                    alt={service.title} 
                    className={styles.cardImg}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {modalService && (
        <div className={styles.modalBackdrop} onClick={() => setModalService(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeModalBtn} 
              onClick={() => setModalService(null)}
              aria-label="Close"
            >
              <X style={{ width: 18, height: 18 }} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span className="origin-badge" style={{ margin: 0 }}>
                {modalService.tag}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: 4 }}>
                <Clock style={{ width: 14, height: 14 }} />
                Turnaround: {modalService.turnaroundTime}
              </span>
            </div>

            <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#111827", marginBottom: 12 }}>
              {modalService.title}
            </h3>

            <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: 20 }}>
              {modalService.fullDesc}
            </p>

            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-red)", marginBottom: 10 }}>
              Required Documents Checklist
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {modalService.documents.map((doc, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.95rem", color: "#374151" }}>
                  <Check style={{ color: "var(--brand-green)", width: 16, height: 16, flexShrink: 0 }} strokeWidth={3} />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--brand-green)", marginBottom: 10 }}>
              Key Benefits
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {modalService.keyBenefits.map((benefit, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.95rem", color: "#374151" }}>
                  <Check style={{ color: "var(--brand-red)", width: 16, height: 16, flexShrink: 0 }} strokeWidth={3} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: 14 }}>
              <button 
                onClick={() => handleWhatsAppInquiry(modalService)}
                className="btn-origin-green"
                style={{ flex: 1, justifyContent: "space-between" }}
              >
                <span>Consult on WhatsApp</span>
                <div className="btn-circle-arrow">
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
