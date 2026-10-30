"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ORIGINAL_SERVICES } from "@/data/originalData";

export default function ServicesCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + itemsPerPage >= ORIGINAL_SERVICES.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? ORIGINAL_SERVICES.length - itemsPerPage : prev - 1));
  };

  const displayedServices = ORIGINAL_SERVICES.slice(startIndex, startIndex + itemsPerPage);
  // Wrap around if near end
  if (displayedServices.length < itemsPerPage) {
    displayedServices.push(...ORIGINAL_SERVICES.slice(0, itemsPerPage - displayedServices.length));
  }

  return (
    <section className="services-four section-space-top" id="services">
      <div className="services-four__bg">
        <div
          className="services-four__bg__inner"
          style={{ backgroundImage: "url(/assets/images/services/services-bg-4-1.png)" }}
        ></div>
      </div>
      <div className="container">
        <div className="services-four__top">
          <div className="row gutter-y-30 align-items-center">
            <div className="col-lg-6">
              <div className="sec-title">
                <div className="sec-title__top">
                  <div className="sec-title__box">
                    <div className="sec-title__box__inner"></div>
                  </div>
                  <h6 className="sec-title__tagline">Our All Service</h6>
                </div>
                <h3 className="sec-title__title">
                  We Guide to Insurance <br />
                  This Best Services
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-four__description">
                <p className="services-four__text">
                  At Torque Auto Advisor, we provide a wide range of vehicle-related services,
                  including Driving License assistance, CNG Cylinder Re-Testing, and Third Party Full
                  Insurance. Our expert team ensures that all your automotive needs are met with
                  professionalism and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid with Carousel Controls */}
        <div style={{ position: "relative" }}>
          <div className="row gutter-y-30">
            {displayedServices.map((service, idx) => (
              <div key={`${service.id}-${idx}`} className="col-lg-4 col-md-6">
                <div className="service-card-four">
                  <div
                    className="service-card-four__bg"
                    style={{ backgroundImage: "url(/assets/images/shapes/service-card-shape-1-1.png)" }}
                  ></div>
                  <div className="service-card-four__content">
                    <div className="service-card-four__top">
                      <div className="service-card-four__icon-box">
                        <span className="service-card-four__icon">
                          <i className="icon-car-insurance"></i>
                        </span>
                      </div>
                      <h3 className="service-card-four__title">
                        <Link href={`/service-detail/${service.slug}/${service.id}`}>
                          {service.title}
                        </Link>
                      </h3>
                    </div>
                    <p className="service-card-four__text">{service.shortDesc}</p>
                    <Link
                      href={`/service-detail/${service.slug}/${service.id}`}
                      className="service-card-four__link"
                    >
                      See More{" "}
                      <span className="work-planning-two__card__link__icon">
                        <i className="fas fa-plus"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="service-card-four__image">
                    <div
                      className="service-card-four__image__inner"
                      style={{
                        backgroundImage: `url(/img/service_image/750x750${service.image})`
                      }}
                    ></div>
                  </div>
                  <div className="service-card-four__shape service-card-four__shape--one"></div>
                  <div className="service-card-four__shape service-card-four__shape--two"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
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
              aria-label="Previous Services"
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
                justifyContent: "center",
                transition: "all 0.3s ease"
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Services"
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
                justifyContent: "center",
                transition: "all 0.3s ease"
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

