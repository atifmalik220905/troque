"use client";

import React, { useState } from "react";
import PageHeader from "@/components/replica/PageHeader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    const waText = `Hello Torque Auto Advisor, new inquiry:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Subject: ${formData.subject || "General Inquiry"}
Message: ${formData.message || "Please call back for consultation."}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      const waUrl = `https://wa.me/918000811331?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, "_blank");
    }, 600);
  };

  return (
    <>
      <PageHeader title="Contact Us" />

      <section className="contact section-space" style={{ position: "relative" }}>
        <div className="container">
          <div className="contact__wrapper">
            <div className="contact__call">
              <span className="contact__call__icon">
                <i className="icon-phone-ringing"></i>
              </span>
              <div className="contact__call__content">
                <h4 className="contact__call__title">Call if Any Time!</h4>
                <a href="tel:+918000811331" className="contact__call__number">
                  +91 8000 811 331
                </a>
                <a href="tel:+918758812526" className="contact__call__number">
                  +91 87588 12526
                </a>
              </div>
            </div>

            <div className="contact__inner">
              <div className="contact__row row gutter-y-50 align-items-center">
                <div className="contact__form-col">
                  <div className="contact__content">
                    <div className="contact__tab-box tabs-box">
                      <div className="tabs-content">
                        <div className="tab active-tab" style={{ display: "block" }}>
                          <div className="contact__tab-content">
                            <h3 className="contact__title">
                              Get The Free Ready to Begin <br /> your Savings Money
                            </h3>

                            {submitted ? (
                              <div
                                style={{
                                  padding: "20px",
                                  backgroundColor: "#e8f5e9",
                                  border: "1px solid #c8e6c9",
                                  borderRadius: "8px",
                                  color: "#2e7d32",
                                  marginTop: "20px"
                                }}
                              >
                                <h4>Thank you! Your message has been sent.</h4>
                                <p style={{ marginTop: "8px", color: "#2e7d32" }}>
                                  Our team at Torque Auto Advisor will get in touch with you shortly.
                                </p>
                              </div>
                            ) : (
                              <form onSubmit={handleSubmit} className="contact__form" id="contact_form">
                                <div className="contact__form__group">
                                  <div className="contact__form__control contact__form__control--full">
                                    <input
                                      type="text"
                                      name="e_name"
                                      required
                                      placeholder="ex: John Doe"
                                      value={formData.name}
                                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                  </div>
                                  <div className="contact__form__control contact__form__control--full">
                                    <input
                                      type="tel"
                                      name="e_phone"
                                      pattern="\d*"
                                      minLength={10}
                                      maxLength={10}
                                      required
                                      placeholder="ex: 9898989898"
                                      value={formData.phone}
                                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                  </div>
                                  <div className="contact__form__control contact__form__control--full">
                                    <input
                                      type="email"
                                      name="e_email"
                                      required
                                      placeholder="ex: john@mail.com"
                                      value={formData.email}
                                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                  </div>
                                  <div className="contact__form__control contact__form__control--full">
                                    <input
                                      type="text"
                                      name="e_subject"
                                      placeholder="ex: Meet for insurance"
                                      value={formData.subject}
                                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                  </div>
                                  <div className="contact__form__control contact__form__control--full">
                                    <textarea
                                      name="e_message"
                                      className="textareaText"
                                      cols={5}
                                      rows={3}
                                      placeholder="ex: Best insurance for vehicle"
                                      value={formData.message}
                                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                  </div>

                                  <div className="contact__form__control contact__form__control--full">
                                    <button
                                      type="submit"
                                      className="insuba-btn insuba-btn--base"
                                      disabled={loading}
                                      style={{ border: "none", cursor: "pointer" }}
                                    >
                                      <span>
                                        <i>{loading ? "Sending..." : "Send Message"}</i>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact__image-col">
                  <div className="contact__image">
                    <img src="/assets/images/contact/contact-3-1.jpg" alt="contact" />
                  </div>
                </div>
              </div>
              <div className="contact__inner__shape-box">
                <div className="contact__inner__shape"></div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/shapes/contact-umbrella.png"
          alt="umbrella"
          className="contact__umbrella-image"
        />
        <img
          src="/assets/images/shapes/contact-call.png"
          alt="call"
          className="contact__call-image"
        />
      </section>

      {/* Google Map Section */}
      <section className="contact-map section-space-bottom2">
        <div className="container-fluid">
          <div className="google-map google-map__contact">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14710.307715440109!2d70.8286667!3d22.8181353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d035dd5131f%3A0x320f5fdddc1a7ac4!2sTorque%20Auto%20Advisor%20Morbi!5e0!3m2!1sen!2sin!4v1729656316501!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

