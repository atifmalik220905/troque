"use client";

import React, { useState } from "react";
import { 
  FileText, 
  Check, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  Calculator,
  AlertCircle
} from "lucide-react";
import { SERVICES, BUSINESS_INFO } from "@/data/torqueData";
import styles from "./ServiceEstimator.module.css";

const VEHICLE_TYPES = [
  { id: "2wheeler", label: "Two Wheeler (Bike / Scooter)" },
  { id: "4wheeler", label: "Private Four Wheeler (Car / SUV)" },
  { id: "commercial", label: "Commercial / Goods Carrier / Truck" },
  { id: "cng", label: "CNG Fitted Vehicle (Auto / Car / Van)" }
];

export default function ServiceEstimator() {
  const [selectedVehicle, setSelectedVehicle] = useState("4wheeler");
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[5].id); // Name transfer default
  const [checkedDocs, setCheckedDocs] = useState<{ [key: string]: boolean }>({});

  const currentService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const toggleDoc = (doc: string) => {
    setCheckedDocs(prev => ({
      ...prev,
      [doc]: !prev[doc]
    }));
  };

  const currentVehicleObj = VEHICLE_TYPES.find(v => v.id === selectedVehicle);

  const handleWhatsAppGuide = () => {
    const text = `Hello Torque Auto Advisor, I need guidance for: ${currentService.title} for my ${currentVehicleObj?.label}. Please provide details on fees and processing.`;
    const url = `https://wa.me/918000811331?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="estimator" className={styles.estimatorSection} aria-label="Document and Fee Estimator">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Interactive RTO Assistant</span>
          <h2 className="section-title">Document Checklist & Processing Guide</h2>
          <p className="section-desc">
            Select your vehicle category and service to instantly view mandatory RTO forms, required paperwork, and estimated processing timelines.
          </p>
        </div>

        <div className={styles.estimatorCard}>
          {/* Controls: Vehicle & Service Selector */}
          <div className={styles.controlsGrid}>
            <div className={styles.controlGroup}>
              <label htmlFor="estimator-vehicle" className={styles.controlLabel}>
                1. Select Vehicle Category
              </label>
              <select 
                id="estimator-vehicle"
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                className={styles.selectBox}
              >
                {VEHICLE_TYPES.map(vt => (
                  <option key={vt.id} value={vt.id}>{vt.label}</option>
                ))}
              </select>
            </div>

            <div className={styles.controlGroup}>
              <label htmlFor="estimator-service" className={styles.controlLabel}>
                2. Select RTO Service Required
              </label>
              <select 
                id="estimator-service"
                value={selectedServiceId}
                onChange={(e) => {
                  setSelectedServiceId(e.target.value);
                  setCheckedDocs({});
                }}
                className={styles.selectBox}
              >
                {SERVICES.map(s => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Interactive Results Box */}
          <div className={styles.resultBox}>
            {/* Left: Checklist */}
            <div className={styles.checklistArea}>
              <div className={styles.resultTitle}>
                <FileText style={{ color: "var(--accent-primary)", width: 22, height: 22 }} />
                <span>Required Documents Checklist</span>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                Click to tick documents you currently have ready:
              </p>

              <div className={styles.interactiveChecklist}>
                {currentService.documents.map((doc, idx) => {
                  const isChecked = !!checkedDocs[doc];
                  return (
                    <div 
                      key={idx} 
                      className={`${styles.checklistItem} ${isChecked ? styles.checked : ""}`}
                      onClick={() => toggleDoc(doc)}
                      id={`checklist-item-${idx}`}
                    >
                      <div className={styles.customCheckbox}>
                        {isChecked && <Check style={{ width: 14, height: 14, strokeWidth: 3 }} />}
                      </div>
                      <span style={{ fontSize: "0.92rem", color: isChecked ? "#ffffff" : "var(--text-secondary)" }}>
                        {doc}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'var(--accent-gold)', marginTop: 8 }}>
                <AlertCircle style={{ width: 16, height: 16, flexShrink: 0 }} />
                <span>Missing any documents or have unpaid challans? Our advisors can assist with obtaining duplicates and clearing penalties.</span>
              </div>
            </div>

            {/* Right: Summary & Action */}
            <div className={styles.summaryArea}>
              <div className={styles.summaryMetric}>
                <span className={styles.summaryLabel}>Selected Service</span>
                <span className={styles.summaryValue}>{currentService.title}</span>
              </div>

              <div className={styles.summaryMetric}>
                <span className={styles.summaryLabel}>Target Vehicle</span>
                <span className={styles.summaryValue}>{currentVehicleObj?.label}</span>
              </div>

              <div className={styles.summaryMetric}>
                <span className={styles.summaryLabel}>Estimated RTO Turnaround</span>
                <span className={styles.summaryValue} style={{ color: "var(--accent-secondary)", display: "flex", alignItems: "center", gap: 6 }}>
                  <Clock style={{ width: 18, height: 18 }} />
                  {currentService.turnaroundTime}
                </span>
              </div>

              <div className={styles.summaryMetric}>
                <span className={styles.summaryLabel}>Morbi RTO Assistance</span>
                <span className={styles.summaryValue} style={{ color: "var(--accent-success)", display: "flex", alignItems: "center", gap: 6 }}>
                  <ShieldCheck style={{ width: 18, height: 18 }} />
                  Full Liaison & Doorstep Pickup Available
                </span>
              </div>

              <button 
                onClick={handleWhatsAppGuide}
                className="btn btn-whatsapp"
                style={{ width: "100%", marginTop: 8 }}
                id="estimator-whatsapp-btn"
              >
                <MessageCircle style={{ width: 18, height: 18 }} />
                <span>Send Checklist & Get Exact Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
