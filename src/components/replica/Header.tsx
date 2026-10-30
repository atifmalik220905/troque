"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ORIGINAL_SERVICES } from "@/data/originalData";

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesDropdownMobile, setServicesDropdownMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setSidebarOpen(false);
  };

  const isHome = pathname === "/";
  const isAbout = pathname === "/about" || pathname === "/about-us";
  const isServices = pathname.startsWith("/our-services") || pathname.startsWith("/service-detail");
  const isGallery = pathname === "/photo-gallery";
  const isContact = pathname === "/contact";

  return (
    <>
      <div className="header-four">
        {/* Topbar */}
        <div className="topbar topbar--three">
          <div className="container-fluid">
            <div className="topbar__inner">
              <div className="topbar__right">
                <div className="topbar__social social-links">
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
              <ul className="list-unstyled topbar__info">
                <li>
                  <div className="topbar__info__icon-box topbar__info__icon--email">
                    <span className="topbar__info__icon">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  <a href="mailto:myattar@yahoo.com">myattar@yahoo.com</a>
                </li>
                <li>
                  <div className="topbar__info__icon-box topbar__info__icon--email">
                    <span className="topbar__info__icon">
                      <i className="fas fa-envelope"></i>
                    </span>
                  </div>
                  <a href="mailto:info@torqueautoadvisor.com">info@torqueautoadvisor.com</a>
                </li>
                <li>
                  <div className="topbar__info__icon-box">
                    <span className="topbar__info__icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                  </div>
                  <a href="https://maps.app.goo.gl/rDBNXnBnU55KhUab8" target="_blank" rel="noopener noreferrer">
                    2nd Floor, Zeel Complex Behind Old Bus Stand, Ayodhyapuri, Main Road, Morbi - 363641
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`main-header main-header--four sticky-header sticky-header--normal ${
            isSticky ? "active" : ""
          }`}
          style={
            isSticky
              ? {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  zIndex: 999,
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)"
                }
              : undefined
          }
        >
          <div className="container-fluid">
            <div className="main-header__inner">
              <div className="main-header__logo logo-retina">
                <Link href="/" onClick={closeAll}>
                  <img src="/assets/images/materials/logo.svg" alt="Torque Auto Advisor" width="150" />
                </Link>
              </div>
              <div className="main-header__right">
                <div
                  className="mobile-nav__btn mobile-nav__toggler"
                  onClick={() => setMobileOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <span></span> <span></span> <span></span>
                </div>
                <nav className="main-header__nav main-menu">
                  <ul className="main-menu__list">
                    <li className={`megamenu-clickable ${isHome ? "active" : ""}`}>
                      <Link href="/" onClick={closeAll}>Home</Link>
                    </li>
                    <li className={`megamenu-clickable ${isAbout ? "active" : ""}`}>
                      <Link href="/about-us" onClick={closeAll}>About Us</Link>
                    </li>
                    <li className={`dropdown ${isServices ? "active" : ""}`}>
                      <Link href="/our-services" onClick={closeAll}>Our Services</Link>
                      <ul>
                        {ORIGINAL_SERVICES.map((srv) => (
                          <li key={srv.id}>
                            <Link href={`/service-detail/${srv.slug}/${srv.id}`} onClick={closeAll}>
                              {srv.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className={`megamenu-clickable ${isGallery ? "active" : ""}`}>
                      <Link href="/photo-gallery" onClick={closeAll}>Photo Gallery</Link>
                    </li>
                    <li className={`megamenu-clickable ${isContact ? "active" : ""}`}>
                      <Link href="/contact" onClick={closeAll}>Contact Us</Link>
                    </li>
                  </ul>
                </nav>
                <Link href="/contact" onClick={closeAll} className="insuba-btn insuba-btn--base main-header__btn">
                  <span>Get a Quote</span>
                  <span className="insuba-btn__icon-box">
                    <span className="insuba-btn__icon">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </span>
                </Link>
                <div
                  className="sidebar-btn__toggler sidebar-btn__toggler--nav"
                  onClick={() => setSidebarOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="sidebar-btn__toggler__bar">
                    <span></span> <span></span> <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav__wrapper ${mobileOpen ? "expanded" : ""}`}>
        <div className="mobile-nav__overlay" onClick={closeAll}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close" onClick={closeAll} style={{ cursor: "pointer" }}>
            <i className="fas fa-times"></i>
          </span>
          <div className="logo-box logo-retina">
            <Link href="/" onClick={closeAll} aria-label="logo image">
              <img src="/assets/images/materials/logo-light.svg" width="212" alt="Torque Auto Advisor" />
            </Link>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list" style={{ listStyle: "none", padding: 0 }}>
              <li style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <Link href="/" onClick={closeAll} style={{ color: "#fff", fontSize: "16px", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <Link href="/about-us" onClick={closeAll} style={{ color: "#fff", fontSize: "16px", textDecoration: "none" }}>
                  About Us
                </Link>
              </li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <div
                  onClick={() => setServicesDropdownMobile(!servicesDropdownMobile)}
                  style={{
                    color: "#fff",
                    fontSize: "16px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer"
                  }}
                >
                  <span>Our Services</span>
                  <i className={`fas fa-chevron-${servicesDropdownMobile ? "up" : "down"}`}></i>
                </div>
                {servicesDropdownMobile && (
                  <ul style={{ listStyle: "none", paddingLeft: "15px", marginTop: "10px" }}>
                    <li style={{ padding: "6px 0" }}>
                      <Link href="/our-services" onClick={closeAll} style={{ color: "#90b72d", fontSize: "14px" }}>
                        View All Services
                      </Link>
                    </li>
                    {ORIGINAL_SERVICES.map((srv) => (
                      <li key={srv.id} style={{ padding: "6px 0" }}>
                        <Link href={`/service-detail/${srv.slug}/${srv.id}`} onClick={closeAll} style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
                          {srv.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <Link href="/photo-gallery" onClick={closeAll} style={{ color: "#fff", fontSize: "16px", textDecoration: "none" }}>
                  Photo Gallery
                </Link>
              </li>
              <li style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <Link href="/contact" onClick={closeAll} style={{ color: "#fff", fontSize: "16px", textDecoration: "none" }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <span className="mobile-nav__contact__icon">
                <i className="fa fa-envelope"></i>
              </span>
              <a href="mailto:myattar@yahoo.com">myattar@yahoo.com</a>
            </li>
            <li>
              <span className="mobile-nav__contact__icon">
                <i className="fa fa-envelope"></i>
              </span>
              <a href="mailto:info@torqueautoadvisor.com">info@torqueautoadvisor.com</a>
            </li>
            <li>
              <span className="mobile-nav__contact__icon">
                <i className="fa fa-phone-alt"></i>
              </span>
              <a href="tel:+918000811331">+91 8000 811 331</a>
            </li>
            <li>
              <span className="mobile-nav__contact__icon">
                <i className="fa fa-phone-alt"></i>
              </span>
              <a href="tel:+918758812526">+91 87588 12526</a>
            </li>
          </ul>
          <div className="mobile-nav__social social-links">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <span className="social-links__icon">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </span>
            </a>
            <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer">
              <span className="social-links__icon">
                <i className="fab fa-pinterest-p" aria-hidden="true"></i>
              </span>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <span className="social-links__icon">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </span>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <span className="social-links__icon">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar Drawer */}
      <aside className={`sidebar-one ${sidebarOpen ? "active" : ""}`}>
        <div className="sidebar-one__overlay" onClick={closeAll}></div>
        <div className="sidebar-one__content">
          <span className="sidebar-one__close" onClick={closeAll} style={{ cursor: "pointer" }}>
            <i className="fas fa-times"></i>
          </span>
          <div className="sidebar-one__logo sidebar-one__item logo-retina">
            <Link href="/" onClick={closeAll} aria-label="logo image">
              <img src="/assets/images/materials/logo-light.svg" width="212" alt="Torque Auto Advisor" />
            </Link>
          </div>
          <div className="sidebar-one__info sidebar-one__item">
            <h4 className="sidebar-one__title">Contact Us</h4>
            <ul className="sidebar-one__info__list list-unstyled">
              <li>
                <span className="sidebar-one__info__icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <address>
                  <a href="https://maps.app.goo.gl/rDBNXnBnU55KhUab8" target="_blank" rel="noopener noreferrer">
                    2nd Floor, Zeel Complex Behind Old Bus Stand, Ayodhyapuri, Main Road, Morbi - 363641
                  </a>
                </address>
              </li>
              <li>
                <span className="sidebar-one__info__icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <a href="mailto:myattar@yahoo.com">myattar@yahoo.com</a>
              </li>
              <li>
                <span className="sidebar-one__info__icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <a href="mailto:info@torqueautoadvisor.com">info@torqueautoadvisor.com</a>
              </li>
              <li>
                <span className="sidebar-one__info__icon">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <a href="tel:+918000811331">+91 8000 811 331</a>
              </li>
              <li>
                <span className="sidebar-one__info__icon">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <a href="tel:+918758812526">+91 87588 12526</a>
              </li>
            </ul>
          </div>
          <div className="sidebar-one__social social-links sidebar-one__item">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <span className="social-links__icon">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </span>
            </a>
            <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer">
              <span className="social-links__icon">
                <i className="fab fa-pinterest-p" aria-hidden="true"></i>
              </span>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <span className="social-links__icon">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </span>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <span className="social-links__icon">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
