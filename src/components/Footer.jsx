import React from "react";
import { motion } from "framer-motion";
import "../styles/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        {/* Brand Section */}
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="logo-container">
            <h3 className="logo">JoyBeauty</h3>
            <span className="tagline">Feminine Beauty Sanctuary</span>
          </div>
          <p className="brand-description">
            Your exclusive women-only spa offering premium waxing and beauty treatments 
            in a private, luxurious environment.
          </p>
          
          <div className="social-links">
            <a href="#" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="3" width="18" height="18" rx="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M23 3a10 10 0 01-2.89.8 5 5 0 002.16-2.77c-.95.58-2 .9-3.13 1.1A4.92 4.92 0 0016.5 1a5 5 0 00-5 5 5 5 0 00.16 1.13 14 14 0 01-10-5.16A5 5 0 003 6.25a5 5 0 002.22 4.13 5 5 0 01-2.28-.63v.06a5 5 0 004 4.9 5 5 0 01-2.26.08 5 5 0 004.7 3.47 10 10 0 01-6.13 2.1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.div 
          className="footer-nav"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="nav-links">
            <li>
              <motion.a 
                href="/" 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Home
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="/services" 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Services
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="/about" 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                About Us
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="/gallery" 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Gallery
              </motion.a>
            </li>
            <li>
              <motion.a 
                href="/contact" 
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Contact
              </motion.a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="footer-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="contact-info">
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <a href="tel:+254700000000">+254 700 000 000</a>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <a href="mailto:info@joybeauty.com">info@joybeauty.com</a>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Ruaka Town, Nairobi, Kenya</span>
            </li>
            <li>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Mon-Sat: 9AM - 7PM</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} JoyBeauty. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}