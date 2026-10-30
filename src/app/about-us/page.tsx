import React from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/replica/PageHeader";
import Marquee from "@/components/replica/Marquee";

export const metadata: Metadata = {
  title: "About Us || Torque Auto Advisor",
  description:
    "Learn more about Torque Auto Advisor, your trusted partner in comprehensive vehicle services, RTO compliance, and insurance in Morbi, Gujarat."
};

export default function AboutUsPage() {
  const funfacts = [
    { count: "98", unit: "K", suffix: "+", label: "Global Country", icon: "icon-life-insurance", itemClass: "funfact__item--1", hasShape: true },
    { count: "361", unit: "K", suffix: "+", label: "Satisfied Clients", icon: "icon-family", itemClass: "funfact__item--2", hasShape: true },
    { count: "76", unit: "K", suffix: "+", label: "Company Growth", icon: "icon-protection", itemClass: "funfact__item--3", hasShape: true },
    { count: "98", unit: "K", suffix: "+", label: "Global Award", icon: "icon-trophy1", itemClass: "funfact__item--4", hasShape: false },
  ];

  return (
    <>
      <PageHeader title="About Us" />

      {/* About Section */}
      <section className="about-one about-one--about section-space" style={{ position: "relative" }}>
        <div className="container">
          <div className="row gutter-y-50 align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="about-one__image">
                <img
                  src="/assets/images/about/about-5-1.jpg"
                  alt="about"
                  className="about-one__image__inner"
                />
                <img
                  src="/assets/images/shapes/about-shape-5-1.png"
                  alt="shape"
                  className="about-one__image__shape"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="about-one__content">
                <div className="sec-title">
                  <div className="sec-title__top">
                    <div className="sec-title__box">
                      <div className="sec-title__box__inner"></div>
                    </div>
                    <h6 className="sec-title__tagline">About Company</h6>
                  </div>
                  <h3 className="sec-title__title">
                    About This For <span className="sec-title__title__highlight">Torque Auto Advisor</span>
                  </h3>
                </div>
                <div className="about-one__text-box">
                  <p className="about-one__text">
                    At Torque Auto Advisor, we are dedicated to providing exceptional automotive
                    services tailored to meet the diverse needs of our clients. Established with a
                    vision to simplify and enhance the vehicle ownership experience, we have become a
                    trusted partner for individuals and businesses alike. Our expertise spans a wide
                    range of services, including Driving License assistance, Vehicle Fitness
                    certification, Permit processing, P.U.C. (Pollution Under Control) certification,
                    Vehicle Name Transfer, HSRP RTO Number Plate procurement, CNG Cylinder Re-Testing,
                    HP Loan Cancellation, and comprehensive Third Party Full Insurance solutions.
                  </p>
                  <p className="about-one__text">
                    We understand that navigating the complexities of vehicle-related procedures can
                    be daunting. That’s why our team of skilled professionals is committed to offering
                    seamless, efficient, and personalized services. Whether you&apos;re a first-time vehicle
                    owner or managing a fleet, our goal is to ensure that all your automotive needs are
                    handled with the utmost care and attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/shapes/about-shape-5-2.png"
          alt="shape"
          className="about-one__shape"
        />
      </section>

      {/* Funfacts Section */}
      <section className="funfact section-space-bottom">
        <div className="container">
          <div className="funfact__inner">
            <div className="funfact__row row gutter-y-40">
              {funfacts.map((f, idx) => (
                <div key={idx} className="col-lg-3 col-sm-6">
                  <div className={`funfact__item ${f.itemClass}`}>
                    <div className="funfact__icon-box">
                      <span className="funfact__icon">
                        <i className={f.icon}></i>
                      </span>
                    </div>
                    <div className="funfact__content">
                      <h3 className="funfact__count count-box">
                        <span className="count-text">{f.count}</span>
                        <span>{f.unit}</span>
                        <span>{f.suffix}</span>
                      </h3>
                      <p className="funfact__text">{f.label}</p>
                    </div>
                    {f.hasShape && (
                      <img
                        src="/assets/images/shapes/funfact-shape-1.png"
                        alt="shape"
                        className="funfact__item__shape"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Marquee */}
      <Marquee />

      {/* Why Choose Us Section */}
      <section className="why-choose-one section-space-top section-space-bottom">
        <div className="container">
          <div className="sec-title sec-title--center">
            <div className="sec-title__top">
              <div className="sec-title__box">
                <div className="sec-title__box__inner"></div>
              </div>
              <h6 className="sec-title__tagline">Why Choose us</h6>
            </div>
            <h3 className="sec-title__title">Customer-Centric Approach</h3>
          </div>
          <div className="why-choose-one__tab-box tabs-box">
            <div className="tabs-content">
              <div className="tab active-tab" style={{ display: "block" }}>
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="why-choose-one__content">
                      <h3 className="why-choose-one__title">Expertise and Experience</h3>
                      <div className="why-choose-one__text-box">
                        <p className="why-choose-one__text">
                          With years of experience in the automotive industry, Torque Auto Advisor
                          brings in-depth knowledge and expertise to every service we offer. Our team
                          is well-versed in the latest regulations, procedures, and best practices,
                          ensuring that your vehicle-related needs are met with precision and
                          professionalism.
                        </p>
                      </div>
                      <h3 className="why-choose-one__title">Comprehensive Services</h3>
                      <div className="why-choose-one__text-box">
                        <p className="why-choose-one__text">
                          From driving license assistance to vehicle fitness certifications, name
                          transfers, CNG cylinder re-testing, and insurance services, we cover all
                          aspects of vehicle ownership. Our one-stop solution means you don’t have to
                          go anywhere else for your automotive requirements.
                        </p>
                      </div>
                      <ul className="why-choose-one__list list-unstyled">
                        <li>
                          <span className="why-choose-one__list__icon">
                            <i className="fas fa-angle-double-right"></i>
                          </span>{" "}
                          Customer-Focused: Enjoy personalized service tailored to your unique requirements.
                        </li>
                        <li>
                          <span className="why-choose-one__list__icon">
                            <i className="fas fa-angle-double-right"></i>
                          </span>{" "}
                          Trust and Reliability: Rely on our proven reputation for honesty and dependable service.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="why-choose-one__image">
                      <img
                        src="/assets/images/why-choose/why-choose-1-1.jpg"
                        alt="choose image"
                      />
                      <span className="why-choose-one__image__star-text">*</span>
                      <div className="why-choose-one__image__shape"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

