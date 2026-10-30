"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { BUSINESS_INFO, SERVICES } from "@/data/torqueData";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleNo: "",
    serviceId: SERVICES[0].id,
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const sName = SERVICES.find(s => s.id === formData.serviceId)?.title || "Vehicle Service";
    const waText = `Hello Torque Auto Advisor, new inquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Vehicle: ${formData.vehicleNo || "N/A"}
Service: ${sName}
Notes: ${formData.message || "Please call back with consultation."}`;

    setSubmitted(true);
    setTimeout(() => {
      const waUrl = `https://wa.me/918000811331?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, "_blank");
    }, 800);
  };

  return (
    <section id="contact" className={styles.contactSection} aria-label="Contact Us">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div className="origin-badge">
            <span className="flag-icon" />
            <span>Contact Us</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#111827" }}>
            Get In Touch With Our Morbi Office
          </h2>
          <p style={{ color: "#4b5563", maxWidth: 650, margin: "12px auto 0 auto", fontSize: "1.05rem" }}>
            Reach out by phone, WhatsApp, or submit your requirement below for fast RTO clearance advice.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left: Office Information */}
          <div className={styles.infoCard}>
            <div>
              <h3 className={styles.infoTitle}>Office Location</h3>
              <p className={styles.infoDesc}>
                Located conveniently at Zeel Complex behind the Old Bus Stand in Morbi. Walk-ins and appointments are both welcomed.
              </p>
            </div>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <MapPin style={{ width: 20, height: 20 }} />
                </div>
                <div>
                  <div className={styles.itemLabel}>Morbi Office Address</div>
                  <div className={styles.itemVal}>{BUSINESS_INFO.address}</div>
                  <a 
                    href={BUSINESS_INFO.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 4, color: "var(--brand-green)", fontSize: "0.85rem", marginTop: 4, fontWeight: 700 }}
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink style={{ width: 12, height: 12 }} />
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <Phone style={{ width: 20, height: 20 }} />
                </div>
                <div>
                  <div className={styles.itemLabel}>Phone Inquiries</div>
                  <div className={styles.itemVal}>
                    <a href={`tel:${BUSINESS_INFO.phone1.replace(/\s+/g, "")}`}>{BUSINESS_INFO.phone1}</a>
                    {" / "}
                    <a href={`tel:${BUSINESS_INFO.phone2.replace(/\s+/g, "")}`}>{BUSINESS_INFO.phone2}</a>
                  </div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <Mail style={{ width: 20, height: 20 }} />
                </div>
                <div>
                  <div className={styles.itemLabel}>Email Support</div>
                  <div className={styles.itemVal}>
                    <a href={`mailto:${BUSINESS_INFO.email1}`}>{BUSINESS_INFO.email1}</a>
                    <br />
                    <a href={`mailto:${BUSINESS_INFO.email2}`}>{BUSINESS_INFO.email2}</a>
                  </div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <Clock style={{ width: 20, height: 20 }} />
                </div>
                <div>
                  <div className={styles.itemLabel}>Working Hours</div>
                  <div className={styles.itemVal}>
                    {BUSINESS_INFO.timings} <br />
                    <span style={{ color: "#6b7280", fontSize: "0.85rem" }}>Sunday: 9:30 AM - 1:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Consultation Form */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Request Consultation</h3>
            <p style={{ color: "#4b5563", fontSize: "0.95rem" }}>
              Leave your contact and required service; we will prepare your document checklist.
            </p>

            {submitted && (
              <div style={{ padding: "14px 18px", borderRadius: 10, backgroundColor: "#ecfdf5", border: "1px solid #a7f3d0", color: "#065f46", display: "flex", alignItems: "center", gap: 10, marginTop: 16 }}>
                <CheckCircle2 style={{ width: 20, height: 20, color: "#10b981", flexShrink: 0 }} />
                <span style={{ fontSize: "0.92rem", fontWeight: 600 }}>Connecting you directly to WhatsApp for priority support...</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.formGrid}>
              <div className={styles.group}>
                <label htmlFor="contact-name" className={styles.label}>Full Name *</label>
                <input 
                  id="contact-name"
                  type="text" 
                  required 
                  placeholder="e.g. Rajeshbhai Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.group}>
                <label htmlFor="contact-phone" className={styles.label}>Mobile Number *</label>
                <input 
                  id="contact-phone"
                  type="tel" 
                  required 
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.group}>
                <label htmlFor="contact-vehicle" className={styles.label}>Vehicle Number</label>
                <input 
                  id="contact-vehicle"
                  type="text" 
                  placeholder="GJ-36-AB-1234"
                  value={formData.vehicleNo}
                  onChange={(e) => setFormData({ ...formData, vehicleNo: e.target.value })}
                  className={styles.input}
                />
              </div>

              <div className={styles.group}>
                <label htmlFor="contact-service" className={styles.label}>Service Needed *</label>
                <select 
                  id="contact-service"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className={styles.select}
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div className={styles.groupFull}>
                <label htmlFor="contact-msg" className={styles.label}>Message / Details</label>
                <textarea 
                  id="contact-msg"
                  placeholder="Mention vehicle type, year, or any specific documentation problem..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={styles.textarea}
                />
              </div>

              <div className={styles.groupFull} style={{ marginTop: 8 }}>
                <button 
                  type="submit" 
                  className="btn-origin-green"
                  style={{ width: "100%", justifyContent: "space-between", padding: "10px 10px 10px 24px" }}
                >
                  <span>Submit Inquiry to WhatsApp</span>
                  <div className="btn-circle-arrow">
                    <ArrowRight style={{ width: 16, height: 16 }} />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
