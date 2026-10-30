"use client";

import React, { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // 2nd item open by default like original

  const faqs = [
    {
      q: "What services does Torque Auto Advisor offer?",
      a: "Torque Auto Advisor provides a wide range of vehicle-related services, including driving license assistance, vehicle fitness checks, permit acquisition, Pollution Under Control (P.U.C.) certification, and vehicle name transfers. We also offer comprehensive insurance solutions and financial services such as HP loan cancellations."
    },
    {
      q: "How can Torque Auto Advisor help with driving licenses?",
      a: "We assist with obtaining, renewing, and updating driving licenses for 2-wheelers, 4-wheelers, and heavy vehicles. Our experts guide you through the entire process, ensuring all paperwork is correctly filled out and submitted."
    },
    {
      q: "What is included in the vehicle fitness service?",
      a: "Our vehicle fitness service includes a thorough inspection to ensure your vehicle meets all safety and regulatory standards. We provide certification that your vehicle is fit for the road, giving you peace of mind and legal compliance."
    },
    {
      q: "Why is a P.U.C. certificate important, and how can you help?",
      a: "A Pollution Under Control (P.U.C.) certificate is essential for ensuring your vehicle meets environmental standards. We offer efficient P.U.C. certification services to help you stay compliant with pollution control regulations and avoid fines."
    }
  ];

  return (
    <section className="faq-two section-space">
      <div className="container">
        <div className="faq-two__image">
          <div className="faq-two__image__inner">
            <img src="/assets/images/resources/faq-2-1.png" alt="faq" className="faq-two__image__img" />
            <div className="faq-two__image__shape"></div>
          </div>
          <span className="faq-two__image__question">
            <i className="icon-question"></i>
          </span>
        </div>
        <div className="row gutter-y-60 align-items-center">
          <div className="col-xl-6 col-lg-8 ms-xl-auto">
            <div className="faq-two__content">
              <div className="sec-title">
                <div className="sec-title__top">
                  <div className="sec-title__box">
                    <div className="sec-title__box__inner"></div>
                  </div>
                  <h6 className="sec-title__tagline">Our Faq Us</h6>
                </div>
                <h3 className="sec-title__title">
                  Get This Asked Answers <br />
                  Common Questions
                </h3>
              </div>
              <div className="faq-accordion insuba-accordion">
                {faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`accordion ${isOpen ? "active" : ""}`}
                      style={{ marginBottom: "15px" }}
                    >
                      <div
                        className="accordion-title"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="accordion-title__icon">
                          <i className={`fas fa-chevron-${isOpen ? "down" : "right"}`}></i>
                        </span>
                        <h4>{faq.q}</h4>
                      </div>
                      {isOpen && (
                        <div className="accordion-content" style={{ display: "block" }}>
                          <div className="inner">
                            <p>{faq.a}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

