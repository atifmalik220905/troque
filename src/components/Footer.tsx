import React from "react";
import Link from "next/link";
import { 
  Clock, 
  MapPin, 
  Phone 
} from "lucide-react";
import { FacebookIcon, PinterestIcon, TwitterIcon, InstagramIcon } from "./SocialIcons";
import TorqueLogo from "./TorqueLogo";
import { BUSINESS_INFO } from "@/data/torqueData";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper} id="contact">
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Col 1: White Logo & Socials */}
          <div className={styles.logoCol}>
            <Link href="/" aria-label="Torque Auto Advisor">
              <TorqueLogo isWhite={true} width={240} height={75} />
            </Link>

            <div className={styles.socialRow}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Facebook">
                <FacebookIcon size={16} color="#ffffff" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Pinterest">
                <PinterestIcon size={16} color="#ffffff" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Twitter">
                <TwitterIcon size={16} color="#ffffff" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram">
                <InstagramIcon size={16} color="#ffffff" />
              </a>
            </div>
          </div>

          {/* Col 2: Services List */}
          <div>
            <h4 className={styles.colHeading}>Services</h4>
            <ul className={styles.linksList}>
              <li><Link href="#services">Permit</Link></li>
              <li><Link href="#services">Parsing</Link></li>
              <li><Link href="#services">P.U.C.</Link></li>
              <li><Link href="#services">CNG Cylinder Re-Testing</Link></li>
              <li><Link href="#services">Vehicle Name Transfer</Link></li>
              <li><Link href="#services">HSRP RTO Number Plate</Link></li>
            </ul>
          </div>

          {/* Col 3: Get In Touch */}
          <div>
            <h4 className={styles.colHeading}>Get In Touch</h4>
            <div className={styles.contactList}>
              <div className={styles.contactRow}>
                <Clock style={{ width: 18, height: 18 }} />
                <div>
                  <strong>Open Hours:</strong> <br />
                  Mon - Sat: 9.30 AM - 8.30 PM <br />
                  Sunday: 9.30 AM - 1.30 PM
                </div>
              </div>

              <div className={styles.contactRow}>
                <MapPin style={{ width: 18, height: 18 }} />
                <div>
                  2nd Floor, Zeel Complex Behind Old Bus Stand, Ayodhyapuri, Main Road, Morbi - 363641
                </div>
              </div>

              <div className={styles.contactRow}>
                <Phone style={{ width: 18, height: 18 }} />
                <div>
                  <a href={`tel:${BUSINESS_INFO.phone1.replace(/\s+/g, "")}`} style={{ color: "#fff" }}>
                    {BUSINESS_INFO.phone1}
                  </a>
                </div>
              </div>

              <div className={styles.contactRow}>
                <Phone style={{ width: 18, height: 18 }} />
                <div>
                  <a href={`tel:${BUSINESS_INFO.phone2.replace(/\s+/g, "")}`} style={{ color: "#fff" }}>
                    {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Google Map preview */}
          <div>
            <h4 className={styles.colHeading}>Google Map</h4>
            <div className={styles.mapCard}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.523555234551!2d70.8385!3d22.8185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598ce112234567%3A0x123456789abcdef!2sZeel%20Complex%20Morbi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                title="Torque Auto Advisor Morbi Office Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Original Olive Green Copyright Bar */}
      <div className={styles.copyrightBar}>
        <div className={`container ${styles.copyrightInner}`}>
          <div>
            &copy; Copyright 2026 Torque Auto Advisor
          </div>
          <div>
            Developed by Mityweb
          </div>
        </div>
      </div>
    </footer>
  );
}
