"use client";

import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import styles from "./GallerySection.module.css";

const GALLERY_ITEMS = [
  {
    title: "Morbi Commercial Fleet Fitness Inspection",
    category: "Passing & Fitness",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    desc: "Comprehensive safety inspection and Parivahan portal record updates for commercial transport carriers."
  },
  {
    title: "CNG Hydro Testing & Certification",
    category: "Safety Compliance",
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80",
    desc: "Hydro-static testing at PESO approved center with certified aluminium compliance plate fitment."
  },
  {
    title: "Ceramic Tile Logistics Transport Permits",
    category: "National Permits",
    img: "https://images.unsplash.com/photo-1586191582056-a197779d71ee?auto=format&fit=crop&w=1200&q=80",
    desc: "All-India tourist and multi-state goods carrier permit clearances for Morbi ceramic industrial dispatches."
  },
  {
    title: "High Security Registration Plate Fitment",
    category: "HSRP RTO",
    img: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    desc: "Authorized laser-embossed aluminium HSRP plate replacement and security snap-lock fitment."
  },
  {
    title: "Private Vehicle Ownership Name Transfer",
    category: "RTO Transfer",
    img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    desc: "Hassle-free buyer-seller Form 29/30 processing, affidavit documentation, and new Smart Card delivery."
  },
  {
    title: "Comprehensive Vehicle Insurance Renewals",
    category: "Insurance & Claims",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    desc: "Instant policy issuance, maximum NCB bonus retention, and cashless garage network coverage."
  }
];

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  return (
    <section id="gallery" className={styles.gallerySection} aria-label="Photo Gallery">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div className="origin-badge">
            <span className="flag-icon" />
            <span>Photo Gallery</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "#111827" }}>
            Real Fleet Inspections &amp; Compliance in Action
          </h2>
          <p style={{ color: "#4b5563", maxWidth: 650, margin: "12px auto 0 auto", fontSize: "1.05rem" }}>
            Click any photo below to inspect our commercial vehicle fitness tests, RTO documentation, and CNG certifications across Morbi.
          </p>
        </div>

        <div className={styles.galleryGrid}>
          {GALLERY_ITEMS.map((item, idx) => (
            <div 
              key={idx} 
              className={styles.galleryCard}
              onClick={() => setSelectedPhoto(item)}
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className={styles.galleryImg} 
                loading="lazy" 
              />
              <div className={styles.galleryOverlay}>
                <span className={styles.galleryCategory}>{item.category}</span>
                <h3 className={styles.galleryTitle}>{item.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', opacity: 0.8, marginTop: 4 }}>
                  <ZoomIn style={{ width: 14, height: 14 }} />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className={styles.lightboxBackdrop} onClick={() => setSelectedPhoto(null)}>
          <div className={styles.lightboxBox} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeLightbox}
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo"
            >
              <X style={{ width: 20, height: 20 }} />
            </button>

            <img 
              src={selectedPhoto.img} 
              alt={selectedPhoto.title} 
              className={styles.lightboxImg}
            />

            <div className={styles.lightboxFooter}>
              <div>
                <span style={{ color: "var(--brand-green)", fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase" }}>
                  {selectedPhoto.category}
                </span>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#ffffff", marginTop: 2 }}>
                  {selectedPhoto.title}
                </h4>
                <p style={{ color: "#9ca3af", fontSize: "0.92rem", marginTop: 4 }}>
                  {selectedPhoto.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
