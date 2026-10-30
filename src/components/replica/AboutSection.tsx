import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-four section-space" id="about">
      <div className="about-four__overlay"></div>
      <div className="container">
        <div className="row gutter-y-50 align-items-center">
          <div className="col-xl-6">
            <div className="about-four__image">
              <div className="about-four__image__inner">
                <div className="about-four__image__one">
                  <img src="/assets/images/about/about-4-1.jpg" alt="about" />
                  <div className="about-four__experience">
                    <div className="about-four__experience__inner">
                      <h3 className="about-four__experience__title">5+ Years Experience</h3>
                    </div>
                  </div>
                </div>
                <div className="about-four__image__two">
                  <img src="/assets/images/about/about-4-2.jpg" alt="about" />
                </div>
              </div>
              <img
                src="/assets/images/shapes/about-shape-4-2.png"
                alt="shape"
                className="about-four__image__shape"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-four__content">
              <div className="sec-title">
                <div className="sec-title__top">
                  <div className="sec-title__box">
                    <div className="sec-title__box__inner"></div>
                  </div>
                  <h6 className="sec-title__tagline">About Company</h6>
                </div>
                <h3 className="sec-title__title">
                  Welcome to <br />
                  Torque Auto Advisor
                </h3>
              </div>
              <div className="about-four__description">
                <p className="about-four__text">
                  Your trusted partner in comprehensive vehicle services. At Torque Auto Advisor, we
                  understand the intricacies of vehicle management and insurance, and we are dedicated
                  to providing you with a seamless and hassle-free experience. Our expert team is
                  committed to ensuring that your vehicle remains roadworthy, insured, and legally
                  compliant at all times.
                </p>
                <p className="about-four__text">
                  <b>Driving License Assistance:</b> Whether you need a 2-wheeler, 4-wheeler, or heavy
                  vehicle license, or require license changes and renewals, our team is here to help.
                </p>
                <p className="about-four__text">
                  <b>Vehicle Fitness and Compliance:</b> From fitness certificates to P.U.C. checks
                  and CNG cylinder re-testing, we ensure your vehicle meets all regulatory standards.
                </p>
                <p className="about-four__text">
                  <b>Insurance Solutions:</b> Protect your vehicle with our comprehensive insurance
                  options, including third-party and full coverage. We also manage HP loan cancellations
                  for a stress-free experience.
                </p>
              </div>
              <div className="about-four__button">
                <Link href="/about-us" className="insuba-btn">
                  <span>About More</span>
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
    </section>
  );
}

