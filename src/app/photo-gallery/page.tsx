"use client";

import React, { useState } from "react";
import PageHeader from "@/components/replica/PageHeader";
import { ORIGINAL_ALBUMS, ORIGINAL_GALLERY, GalleryData } from "@/data/originalData";

export default function PhotoGalleryPage() {
  const [activeAlbumId, setActiveAlbumId] = useState(1);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredGallery = ORIGINAL_GALLERY.filter((item) => item.albumId === activeAlbumId);

  return (
    <>
      <PageHeader title="Photo Gallery" />

      <section className="why-choose-one section-space-top section-space-bottom">
        <div className="container">
          <div className="why-choose-one__tab-box tabs-box">
            {/* Album Tabs */}
            <ul
              className="tab-buttons gallery-tab-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                listStyle: "none",
                padding: 0,
                marginBottom: "40px"
              }}
            >
              {ORIGINAL_ALBUMS.map((album) => {
                const isActive = album.id === activeAlbumId;
                return (
                  <li
                    key={album.id}
                    onClick={() => setActiveAlbumId(album.id)}
                    className={`tab-btn insuba-btn ${isActive ? "active-btn" : ""}`}
                    style={{
                      cursor: "pointer",
                      backgroundColor: isActive ? "#c4333b" : "#f1f4f8",
                      color: isActive ? "#ffffff" : "#111827",
                      padding: "12px 24px",
                      borderRadius: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      fontWeight: 600,
                      transition: "all 0.3s ease",
                      flexShrink: 0
                    }}
                  >
                    <span className="tab-btn__icon">
                      <i className="icon-growth"></i>
                    </span>
                    {album.title}
                  </li>
                );
              })}
            </ul>

            {/* Gallery Grid */}
            <div className="tabs-content">
              <div className="row align-items-center gutter-y-30">
                {filteredGallery.map((item: GalleryData) => (
                  <div key={item.id} className="col-xl-4 col-md-6">
                    <div
                      className="why-choose-one__image"
                      onClick={() => setLightboxImg(`/img/gallery_image/1500x1000${item.image}`)}
                      style={{ cursor: "pointer", overflow: "hidden", borderRadius: "10px" }}
                    >
                      <img
                        src={`/img/gallery_image/500x300${item.image}`}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "260px",
                          objectFit: "cover",
                          transition: "transform 0.4s ease"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          className="gallery-modal-overlay"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-modal-close"
              onClick={() => setLightboxImg(null)}
              aria-label="Close Preview"
            >
              &times;
            </button>
            <img src={lightboxImg} alt="Gallery Preview" />
          </div>
        </div>
      )}
    </>
  );
}

