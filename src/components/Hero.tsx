"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

const SLIDES = [
  {
    titlePrefix: "Protect and Finance",
    highlight: "Your Vehicle",
    desc: "Get the best third-party and full insurance coverage, manage HP loan cancellations, and ensure your vehicle is protected with our reliable insurance services.",
    bg: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
  },
  {
    titlePrefix: "Commercial Fleet",
    highlight: "Passing & Permits",
    desc: "End-to-end RTO assistance for goods carriage, tourist permits, and annual fitness passing for Morbi ceramic and transport fleets.",
    bg: "https://images.unsplash.com/photo-1586191582056-a197779d71ee?auto=format&fit=crop&w=1920&q=80"
  },
  {
    titlePrefix: "Safe CNG Hydro",
    highlight: "Testing & PUC",
    desc: "Certified cylinder testing with 3-year safety compliance plate and instant digital Parivahan QR-code pollution certificates.",
    bg: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1920&q=80"
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = SLIDES[activeSlide];

  return (
    <section 
      className={styles.heroWrapper} 
      aria-label="Hero Section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(16, 27, 43, 0.94) 0%, rgba(19, 34, 56, 0.82) 50%, rgba(20, 36, 60, 0.5) 100%), url('${slide.bg}')`
      }}
    >
      <div className="container">
        <div className={styles.heroInner}>
          {/* Left Vertical Slider Controls */}
          <div className={styles.sliderControls}>
            {SLIDES.map((_, i) => (
              <button 
                key={i} 
                className={`${styles.dot} ${activeSlide === i ? styles.active : ""}`}
                onClick={() => setActiveSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className={`${styles.heroContent} ${styles.slideFade}`} key={activeSlide}>
            <h1 className={styles.heroTitle}>
              {slide.titlePrefix} <br />
              <span className={styles.ellipseWrapper}>
                {slide.highlight}
                <svg className={`${styles.ellipseSvg} animate-draw`} viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 12 45 C 10 18, 140 6, 290 20 C 315 23, 318 65, 230 78 C 110 92, 18 78, 14 46" 
                    stroke="#2563eb" 
                    strokeWidth="3.5" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </h1>

            <p className={styles.heroSubtitle}>
              {slide.desc}
            </p>

            <div className={styles.heroButtons}>
              <Link href="#contact" className="btn-origin-white" id="hero-contact-btn">
                <span>Contact Us</span>
                <div className="btn-circle-arrow">
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </div>
              </Link>

              <Link href="#services" className="btn-origin-dark" id="hero-get-started-btn">
                <span>Get Started</span>
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
