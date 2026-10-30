"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ORIGINAL_SERVICES } from "@/data/originalData";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="main-footer">
        <div className="main-footer__top">
          <div
            className="main-footer__bg"
            style={{ backgroundImage: "url(/assets/images/backgrounds/footer-bg.jpg)" }}
          ></div>
          <div className="container">
            <div className="row gutter-y-40">
              {/* Col 1: About & Social */}
              <div className="col-xl-3 col-lg-3 col-md-8">
                <div className="footer-widget footer-widget--about">
                  <Link href="/" className="footer-widget__logo">
                    <img
                      src="/assets/images/materials/logo-light.svg"
                      width="212"
                      alt="Torque Auto Advisor"
                    />
                  </Link>
                  <div className="social-links">
                    <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/">
                      <span className="social-links__icon">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        <span className="sr-only">Facebook</span>
                      </span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://pinterest.com/">
                      <span className="social-links__icon">
                        <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                        <span className="sr-only">Pinterest</span>
                      </span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
                      <span className="social-links__icon">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                        <span className="sr-only">Twitter</span>
                      </span>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/">
                      <span className="social-links__icon">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                        <span className="sr-only">Instagram</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Col 2: Services links */}
              <div className="col-xl-3 col-lg-3 col-md-4">
                <div className="footer-widget footer-widget--links">
                  <h2 className="footer-widget__title">Services</h2>
                  <ul className="list-unstyled footer-widget__links">
                    {ORIGINAL_SERVICES.slice(0, 6).map((srv) => (
                      <li key={srv.id}>
                        <Link href={`/service-detail/${srv.slug}/${srv.id}`}>
                          {srv.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Col 3: Get in Touch */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget footer-widget--info">
                  <h2 className="footer-widget__title">Get in Touch</h2>
                  <ul className="list-unstyled footer-widget__info">
                    <li>
                      <span className="footer-widget__info__icon">
                        <i className="far fa-clock"></i>
                      </span>
                      <div className="footer-widget__info__text">
                        <span>Open Hours:</span> <br />
                        <span>Mon - Sat: 9.30 AM - 8.30 PM</span>
                        <br />
                        <span>Sunday: 9.30 AM - 1.30 PM</span>
                      </div>
                    </li>
                    <li>
                      <span className="footer-widget__info__icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <a
                        href="https://maps.app.goo.gl/rDBNXnBnU55KhUab8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-widget__info__text"
                      >
                        2nd Floor, Zeel Complex Behind Old Bus Stand, Ayodhyapuri, Main Road, Morbi - 363641
                      </a>
                    </li>
                    <li>
                      <span className="footer-widget__info__icon">
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <div className="footer-widget__info__text">
                        <a href="tel:+918000811331">+91 8000 811 331</a>
                      </div>
                    </li>
                    <li>
                      <span className="footer-widget__info__icon">
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <div className="footer-widget__info__text">
                        <a href="tel:+918758812526">+91 87588 12526</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Col 4: Google Map */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget footer-widget--gallery">
                  <h2 className="footer-widget__title">Google Map</h2>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14710.307715440109!2d70.8286667!3d22.8181353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d035dd5131f%3A0x320f5fdddc1a7ac4!2sTorque%20Auto%20Advisor%20Morbi!5e0!3m2!1sen!2sin!4v1729656316501!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="main-footer__bottom">
          <div className="container">
            <div className="main-footer__bottom__inner">
              <div className="row">
                <p className="main-footer__copyright text-left col-lg-6 col-md-6">
                  &copy; Copyright <span>2026</span>{" "}
                  <Link className="fot_a" href="/">
                    Torque Auto Advisor
                  </Link>
                </p>
                <p className="main-footer__copyright text-left col-lg-6 col-md-6">
                  Developed by{" "}
                  <a className="fot_a" href="https://www.mityweb.com/" target="_blank" rel="noopener noreferrer">
                    Mityweb
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <a
        href="#"
        onClick={scrollToTop}
        className={`scroll-to-target scroll-to-top ${showScrollTop ? "show" : ""}`}
        style={showScrollTop ? { display: "inline-block", opacity: 1, visibility: "visible" } : { display: "none" }}
      >
        <span className="scroll-to-top__text">back top</span>
        <span className="scroll-to-top__wrapper">
          <span className="scroll-to-top__inner"></span>
        </span>
      </a>
    </>
  );
}
