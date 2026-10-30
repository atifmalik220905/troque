"use client";

import React, { useState, useEffect, useRef } from "react";
import { ORIGINAL_TESTIMONIALS } from "@/data/originalData";

export default function TestimonialsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 992) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1 >= ORIGINAL_TESTIMONIALS.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? ORIGINAL_TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const displayed = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const idx = (startIndex + i) % ORIGINAL_TESTIMONIALS.length;
    displayed.push(ORIGINAL_TESTIMONIALS[idx]);
  }

  return (
    <div className="testimonials-three section-space" id="testimonials" style={{ position: "relative" }}>
      <div className="container">
        <div className="sec-title sec-title--center">
          <div className="sec-title__top">
            <div className="sec-title__box">
              <div className="sec-title__box__inner"></div>
            </div>
            <h6 className="sec-title__tagline">Testimonials</h6>
          </div>
          <h3 className="sec-title__title">
            Providing The Best Customer <br />
            Insurance Client
          </h3>
        </div>

        <div
          className="row gutter-y-30"
          style={{ touchAction: "pan-y" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {displayed.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className={itemsPerPage === 1 ? "col-12" : "col-lg-6"}>
              <div className="testimonial-card-two">
                <div className="testimonial-card-two__shape">
                  <div className="testimonial-card-two__shape__bg"></div>
                </div>
                <div className="testimonial-card-two__image">
                  <img
                    src={`/img/testimonials_image/150x160${item.image}`}
                    alt={item.title}
                  />
                  <span className="testimonial-card-two__image__quote">
                    <i className="icon-quote"></i>
                  </span>
                </div>
                <div className="testimonial-card-two__content">
                  <p className="testimonial-card-two__quote">{item.description}</p>
                  <div className="testimonial-card-two__identity">
                    <p className="testimonial-card-two__designation">{item.title}</p>
                  </div>
                </div>
                <span className="testimonial-card-two__quote-icon">
                  <i className="icon-quote-2"></i>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            marginTop: "40px"
          }}
        >
          <button
            onClick={prevSlide}
            aria-label="Previous Testimonials"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid #90b72d",
              backgroundColor: "#ffffff",
              color: "#90b72d",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <span style={{ fontSize: "14px", fontWeight: 600, color: "#6b7280" }}>
            {startIndex + 1} / {ORIGINAL_TESTIMONIALS.length}
          </span>
          <button
            onClick={nextSlide}
            aria-label="Next Testimonials"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: "1px solid #90b72d",
              backgroundColor: "#90b72d",
              color: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <img
        src="/assets/images/shapes/testimonials-shape-3-1.png"
        alt=""
        className="testimonials-three__shape-one"
      />
      <img
        src="/assets/images/shapes/testimonials-shape-3-2.png"
        alt=""
        className="testimonials-three__shape-two"
      />
    </div>
  );
}
