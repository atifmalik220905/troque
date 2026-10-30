"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function NewsBlogs() {
  const cards = [
    {
      img: "blog-1.jpg",
      icon: "icon-car-insurance",
      title: "Commercial Vehicle Insurance",
      text: "Protect your business with reliable vehicle coverage."
    },
    {
      img: "blog-2.jpg",
      icon: "icon-life-insurance",
      title: "Car & Bike Insurance",
      text: "Drive confidently with comprehensive insurance plans."
    },
    {
      img: "blog-3.jpg",
      icon: "icon-insurance-agent",
      title: "All RTO Work",
      text: "Quick, hassle-free solutions for all RTO-related services."
    },
    {
      img: "blog-4.jpg",
      icon: "icon-protection-1",
      title: "Vehicle Name Transfer",
      text: "Seamless transfer of vehicle ownership."
    },
    {
      img: "blog-5.jpg",
      icon: "icon-home",
      title: "Vehicle Fitness and Permit",
      text: "Ensure vehicle compliance and safety."
    },
    {
      img: "blog-6.jpg",
      icon: "icon-umbrella",
      title: "Driving License Assistance",
      text: "Get your license with ease and guidance."
    },
    {
      img: "blog-7.jpg",
      icon: "icon-car-insurance",
      title: "PUC Certification",
      text: "Keep emissions in check with quick PUC services."
    },
    {
      img: "blog-8.jpg",
      icon: "icon-life-insurance",
      title: "HSRP Number Plate",
      text: "Secure, compliant number plates for safer roads."
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + itemsPerPage >= cards.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? cards.length - itemsPerPage : prev - 1));
  };

  const displayed = cards.slice(startIndex, startIndex + itemsPerPage);
  if (displayed.length < itemsPerPage) {
    displayed.push(...cards.slice(0, itemsPerPage - displayed.length));
  }

  return (
    <section className="insurance-one section-space" style={{ position: "relative" }}>
      <div className="container">
        <div className="sec-title sec-title--center">
          <div className="sec-title__top">
            <div className="sec-title__box">
              <div className="sec-title__box__inner"></div>
            </div>
            <h6 className="sec-title__tagline">Torque Auto Advisor</h6>
          </div>
          <h3 className="sec-title__title">News & Blogs</h3>
        </div>
      </div>
      <div className="insurance-one__container container">
        <div className="row gutter-y-30">
          {displayed.map((c, idx) => (
            <div key={`${c.title}-${idx}`} className="col-xl-3 col-lg-6 col-md-6">
              <div className="insurance-card">
                <div className="insurance-card__image">
                  <img src={`/assets/images/materials/${c.img}`} alt={c.title} />
                  <div className="insurance-card__icon-box">
                    <span className="insurance-card__icon">
                      <i className={c.icon}></i>
                    </span>
                  </div>
                </div>
                <div className="insurance-card__content">
                  <h3 className="insurance-card__title">
                    <Link href="/contact">{c.title}</Link>
                  </h3>
                  <p className="insurance-card__text">{c.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
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
            aria-label="Previous Blogs"
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
            aria-label="Next Blogs"
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
      <div className="insurance-one__bg">
        <div className="insurance-one__circle insurance-one__circle--1"></div>
        <div className="insurance-one__circle insurance-one__circle--2"></div>
        <div className="insurance-one__circle insurance-one__circle--3"></div>
        <div className="insurance-one__circle insurance-one__circle--4"></div>
        <div className="insurance-one__circle insurance-one__circle--5"></div>
        <div className="insurance-one__circle insurance-one__circle--6"></div>
      </div>
    </section>
  );
}

