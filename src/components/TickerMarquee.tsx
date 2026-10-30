import React from "react";
import styles from "./TickerMarquee.module.css";

const TICKER_ITEMS = [
  { text: "Driving License", isHollow: false },
  { text: "Parsing", isHollow: true },
  { text: "Fitness", isHollow: false },
  { text: "Permit", isHollow: true },
  { text: "CNG Cylinder Re-Testing", isHollow: false },
  { text: "Vehicle Insurance", isHollow: true },
  { text: "Name Transfer", isHollow: false },
  { text: "HSRP Plate", isHollow: true },
];

export default function TickerMarquee() {
  const combined = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className={styles.tickerWrapper} aria-hidden="true">
      <div className={styles.tickerTrack}>
        {combined.map((item, idx) => (
          <div key={idx} className={styles.tickerItem}>
            <span className={item.isHollow ? styles.hollowText : styles.solidText}>
              {item.text}
            </span>
            <span className={styles.slash}>/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
