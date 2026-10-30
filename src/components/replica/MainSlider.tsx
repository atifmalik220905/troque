"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ORIGINAL_SLIDERS } from "@/data/originalData";

export default function MainSlider() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % ORIGINAL_SLIDERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideContent = [
    {
      titleText: "All-in-One Vehicle",
      highlight: "Solutions",
      desc: "From driving license assistance to vehicle name transfers, Torque Auto Advisor offers a complete range of services to keep you on the road safely and legally."
    },
    {
      titleText: "Protect and Finance Your",
      highlight: "Vehicle",
      desc: "Get the best third-party and full insurance coverage, manage HP loan cancellations, and ensure your vehicle is protected with our reliable insurance services."
    },
    {
      titleText: "Expert Care for Your",
      highlight: "Vehicle",
      desc: "Ensure your vehicle's fitness with services like P.U.C. checks, CNG cylinder re-testing, and obtaining HSRP RTO number plates. Torque Auto Advisor has you covered."
    }
  ];

  return (
    <section className="main-slider-four" id="home" style={{ position: "relative", overflow: "hidden" }}>
      <div className="main-slider-four__carousel" style={{ position: "relative" }}>
        {ORIGINAL_SLIDERS.map((slider, idx) => {
          const content = slideContent[idx] || slideContent[0];
          const isActive = idx === activeIdx;

          return (
            <div
              key={slider.id}
              className={`main-slider-four__item ${isActive ? "active" : ""}`}
              style={{
                display: isActive ? "block" : "none",
                position: "relative",
                transition: "opacity 0.7s ease-in-out"
              }}
            >
              <div
                className="main-slider-four__bg"
                style={{
                  backgroundImage: `url(/img/slider_image/1920x1000${slider.image})`
                }}
              ></div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-9">
                    <div className="main-slider-four__content">
                      <h2 className="main-slider-four__title">
                        {content.titleText}{" "}
                        <span className="main-slider-four__title__text">{content.highlight}</span>
                      </h2>
                      <div className="main-slider-four__description">
                        <p className="main-slider-four__text">{content.desc}</p>
                      </div>
                      <div className="main-slider-four__button">
                        <div className="main-slider-four__button__inner">
                          <Link href="/contact" className="main-slider-four__btn-1 insuba-btn">
                            <span>Contact Us</span>
                            <span className="insuba-btn__icon-box">
                              <span className="insuba-btn__icon">
                                <i className="fas fa-arrow-right"></i>
                              </span>
                            </span>
                          </Link>
                        </div>
                        <div className="main-slider-four__button__inner">
                          <Link href="/about-us" className="main-slider-four__btn-2 insuba-btn">
                            <span>Get Started</span>
                            <span className="insuba-btn__icon-box">
                              <span className="insuba-btn__icon">
                                <i className="fas fa-arrow-right"></i>
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative shapes from original website */}
              <img
                src="/assets/images/shapes/main-slider-shape-4-2.png"
                alt="shape"
                className="main-slider-four__shape-two slider-image"
              />
              <img
                src="/assets/images/shapes/main-slider-shape-4-3.png"
                alt="shape"
                className="main-slider-four__shape-three slider-image"
              />
              <img
                src="/assets/images/shapes/main-slider-shape-4-4.png"
                alt="shape"
                className="main-slider-four__shape-four slider-image"
              />
            </div>
          );
        })}
      </div>

      {/* Slide Indicators / Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "35px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          gap: "10px"
        }}
      >
        {ORIGINAL_SLIDERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === activeIdx ? "28px" : "10px",
              height: "10px",
              borderRadius: "5px",
              backgroundColor: i === activeIdx ? "#90b72d" : "rgba(255, 255, 255, 0.5)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          />
        ))}
      </div>
    </section>
  );
}

