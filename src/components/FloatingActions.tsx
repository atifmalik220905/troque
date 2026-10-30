"use client";

import React, { useState, useEffect } from "react";
import styles from "./FloatingActions.module.css";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button 
      onClick={scrollToTop} 
      className={styles.backToTop}
      aria-label="Scroll back to top"
      id="back-to-top-btn"
    >
      <div className={styles.topBarIndicator} />
      <span className={styles.verticalText}>BACK TOP</span>
    </button>
  );
}
