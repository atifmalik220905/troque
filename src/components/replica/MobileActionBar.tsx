"use client";

import React from "react";
import Link from "next/link";

export default function MobileActionBar() {
  const waUrl =
    "https://wa.me/918000811331?text=Hello%20Torque%20Auto%20Advisor,%20I%20need%20assistance%20with%20RTO%20services";

  return (
    <div className="mobile-action-bar">
      <a
        href="tel:+918000811331"
        className="mobile-action-item mobile-action-call"
        aria-label="Call Torque Auto Advisor"
      >
        <span className="mobile-action-icon">
          <i className="fas fa-phone-alt"></i>
        </span>
        <span className="mobile-action-label">Call Now</span>
      </a>

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action-item mobile-action-wa"
        aria-label="WhatsApp Torque Auto Advisor"
      >
        <span className="mobile-action-icon">
          <i className="fab fa-whatsapp"></i>
        </span>
        <span className="mobile-action-label">WhatsApp</span>
      </a>

      <Link
        href="/our-services"
        className="mobile-action-item"
        aria-label="View All Services"
      >
        <span className="mobile-action-icon">
          <i className="fas fa-th-list"></i>
        </span>
        <span className="mobile-action-label">Services</span>
      </Link>

      <a
        href="https://maps.app.goo.gl/rDBNXnBnU55KhUab8"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-action-item"
        aria-label="Google Maps Directions"
      >
        <span className="mobile-action-icon">
          <i className="fas fa-map-marked-alt"></i>
        </span>
        <span className="mobile-action-label">Directions</span>
      </a>
    </div>
  );
}
