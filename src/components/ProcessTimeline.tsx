"use client";

import React from "react";
import { PROCESS_STEPS } from "@/data/torqueData";
import styles from "./ProcessTimeline.module.css";

export default function ProcessTimeline() {
  return (
    <section id="process" className={styles.processSection} aria-label="Our 4-Step Process">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Effortless & Simple</span>
          <h2 className="section-title">How Torque Auto Advisor Works For You</h2>
          <p className="section-desc">
            We simplify complex RTO procedures into 4 clear steps so you never have to stand in government lines or worry about paperwork rejections.
          </p>
        </div>

        <div className={styles.processGrid}>
          {PROCESS_STEPS.map((item, idx) => (
            <div key={idx} className={styles.processCard} id={`process-step-${idx}`}>
              <div className={styles.stepNumber}>{item.step}</div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
