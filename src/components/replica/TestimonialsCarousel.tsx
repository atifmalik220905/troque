"use client";

import React, { useState } from "react";
import { ORIGINAL_TESTIMONIALS } from "@/data/originalData";

export default function TestimonialsCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + itemsPerPage >= ORIGINAL_TESTIMONIALS.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? ORIGINAL_TESTIMONIALS.length - itemsPerPage : prev - 1));
  };

  const displayed = ORIGINAL_TESTIMONIALS.slice(startIndex, startIndex + itemsPerPage);
  if (displayed.length < itemsPerPage) {
    displayed.push(...ORIGINAL_TESTIMONIALS.slice(0, itemsPerPage - displayed.length));
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

        <div className="row gutter-y-30">
          {displayed.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="col-lg-6">
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
            gap: "16px",
            marginTop: "40px"
          }}
        >
          <button
            onClick={prevSlide}
            aria-label="Previous Testimonials"
            style={{
              width: "48px",
              height: "48px",
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
          <button
            onClick={nextSlide}
            aria-label="Next Testimonials"
            style={{
              width: "48px",
              height: "48px",
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

