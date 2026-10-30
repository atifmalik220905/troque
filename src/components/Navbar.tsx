"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  ArrowRight, 
  Menu, 
  X,
  ChevronDown,
  Phone
} from "lucide-react";
import { FacebookIcon, PinterestIcon, TwitterIcon, InstagramIcon } from "./SocialIcons";
import TorqueLogo from "./TorqueLogo";
import { SERVICES, BUSINESS_INFO } from "@/data/torqueData";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Original Red Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarContainer}`}>
          {/* Left Social Links */}
          <div className={styles.socialRow}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn} aria-label="Facebook">
              <FacebookIcon size={14} color="#ffffff" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn} aria-label="Pinterest">
              <PinterestIcon size={14} color="#ffffff" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn} aria-label="Twitter">
              <TwitterIcon size={14} color="#ffffff" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn} aria-label="Instagram">
              <InstagramIcon size={14} color="#ffffff" />
            </a>
          </div>

          {/* Right Contact Details */}
          <div className={styles.contactRow}>
            <div className={styles.contactItem}>
              <div className={styles.iconCircle}>
                <Mail style={{ width: 14, height: 14 }} />
              </div>
              <a href="mailto:myattar@yahoo.com">myattar@yahoo.com</a>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconCircle}>
                <Mail style={{ width: 14, height: 14 }} />
              </div>
              <a href="mailto:info@torqueautoadvisor.com">info@torqueautoadvisor.com</a>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.iconCircle}>
                <MapPin style={{ width: 14, height: 14 }} />
              </div>
              <span>2nd Floor, Zeel Complex Behind Old Bus Stand, Ayodhyapuri, Main Road, Morbi - 363641</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`${styles.navHeader} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          {/* Exact Logo */}
          <Link href="/" aria-label="Torque Auto Advisor Homepage">
            <TorqueLogo width={220} height={70} />
          </Link>

          {/* Menu Items */}
          <nav aria-label="Main Navigation">
            <ul className={styles.menuList}>
              <li className={`${styles.menuItem} ${styles.active}`}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#about">About Us</Link>
              </li>
              
              {/* Dropdown for Services */}
              <li 
                className={styles.menuItem}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button 
                  className={styles.menuTrigger} 
                  aria-expanded={dropdownOpen}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>Our Services +</span>
                  <ChevronDown style={{ width: 15, height: 15 }} />
                </button>

                <div className={`${styles.dropdownMenu} ${dropdownOpen ? styles.dropdownOpen : ""}`}>
                  {SERVICES.map((s) => (
                    <Link 
                      key={s.id} 
                      href="#services" 
                      className={styles.dropdownItem}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span>{s.title}</span>
                      <ArrowRight style={{ width: 13, height: 13, opacity: 0.6 }} />
                    </Link>
                  ))}
                </div>
              </li>

              <li className={styles.menuItem}>
                <Link href="#gallery">Photo Gallery</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#contact">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* Action Button: Get a Quote */}
          <div className={styles.actionsArea}>
            <a 
              href="https://wa.me/918000811331?text=Hello%20Torque%20Auto%20Advisor,%20I%20would%20like%20to%20get%20a%20quote" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-origin-green"
              id="get-a-quote-btn"
            >
              <span>Get a Quote</span>
              <div className="btn-circle-arrow">
                <ArrowRight style={{ width: 16, height: 16 }} />
              </div>
            </a>

            {/* Mobile Hamburger */}
            <button 
              className={styles.mobileBtn} 
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X style={{ width: 26, height: 26 }} /> : <Menu style={{ width: 26, height: 26 }} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
          <ul className={styles.mobileLinks}>
            <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
            <li><Link href="#about" onClick={() => setMobileOpen(false)}>About Us</Link></li>
            <li><Link href="#services" onClick={() => setMobileOpen(false)}>Our Services</Link></li>
            <li><Link href="#gallery" onClick={() => setMobileOpen(false)}>Photo Gallery</Link></li>
            <li><Link href="#faqs" onClick={() => setMobileOpen(false)}>FAQ</Link></li>
            <li><Link href="#contact" onClick={() => setMobileOpen(false)}>Contact Us</Link></li>
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a 
              href={`tel:${BUSINESS_INFO.phone1.replace(/\s+/g, "")}`}
              className="btn-origin-dark"
              style={{ justifyContent: 'center' }}
            >
              <Phone style={{ width: 16, height: 16 }} />
              <span>Call: {BUSINESS_INFO.phone1}</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
