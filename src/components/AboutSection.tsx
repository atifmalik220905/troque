import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection} aria-label="About Torque Auto Advisor">
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Left Column: Image with green border accent */}
          <div className={styles.imageCol}>
            <div className={styles.imageBorderAccent} />
            <div className={styles.imageFrame}>
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
                alt="Torque Auto Advisor vehicle expert in Morbi" 
                className={styles.aboutImg}
              />
            </div>
          </div>

          {/* Right Column: Original Copy & Badge */}
          <div className={styles.contentCol}>
            <div className="origin-badge">
              <span className="flag-icon" />
              <span>About Company</span>
            </div>

            <h2 className={styles.sectionTitle}>
              Welcome to <br />
              Torque Auto Advisor
            </h2>

            <p className={styles.paragraph}>
              Your trusted partner in comprehensive vehicle services. At Torque Auto Advisor, we understand the intricacies of vehicle management and insurance, and we are dedicated to providing you with a seamless and hassle-free experience. Our expert team is committed to ensuring that your vehicle remains roadworthy, insured, and legally compliant at all times.
            </p>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <Check className={styles.checkIcon} strokeWidth={3} />
                <span><strong>Driving License Assistance:</strong> Whether you need a 2-wheeler, 4-wheeler, or heavy vehicle license, we guide you through renewals, tests, and permits.</span>
              </div>
              <div className={styles.featureItem}>
                <Check className={styles.checkIcon} strokeWidth={3} />
                <span><strong>CNG Cylinder Hydro Re-Testing:</strong> Ensure your CNG setup meets statutory safety standards with certified testing and official plate fitment.</span>
              </div>
              <div className={styles.featureItem}>
                <Check className={styles.checkIcon} strokeWidth={3} />
                <span><strong>Complete RTO Documentation:</strong> Ownership transfers, hypothecation cancellation, HSRP plates, and commercial fitness passing.</span>
              </div>
            </div>

            <div>
              <Link href="#services" className="btn-origin-green" id="about-read-more-btn">
                <span>Explore Services</span>
                <div className="btn-circle-arrow">
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
