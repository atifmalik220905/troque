import React from "react";
import { ShieldCheck, Users, Award, FileCheck } from "lucide-react";
import styles from "./StatsRibbon.module.css";

const STATS = [
  {
    count: "15+",
    label: "Our RTO Services",
    icon: FileCheck
  },
  {
    count: "7,000+",
    label: "Satisfied Customers",
    icon: Users
  },
  {
    count: "15+",
    label: "Years Experience",
    icon: Award
  },
  {
    count: "99.8%",
    label: "First-Time Clearance",
    icon: ShieldCheck
  }
];

export default function StatsRibbon() {
  return (
    <div className={styles.ribbonSection} aria-label="Company Statistics">
      <div className="container">
        <div className={styles.ribbonGrid}>
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={styles.ribbonItem}>
                <div className={styles.iconCircle}>
                  <Icon style={{ width: 26, height: 26 }} />
                </div>
                <div className={styles.ribbonText}>
                  <span className={styles.ribbonCount}>{stat.count}</span>
                  <span className={styles.ribbonLabel}>{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
