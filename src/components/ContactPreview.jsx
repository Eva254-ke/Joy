// ContactSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

export default function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-container">
        <div className="contact-responsive-row">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="contact-heading" className="contact-title">
              Visit Our Studio
            </h2>
            <p className="contact-subtitle">
              We're conveniently located in Kilimani, Nairobi. Come experience our premium beauty services.
            </p>
            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </div>
                <div>
                  <h3>Email Us</h3>
                  <a href="mailto:info@joybeauty.com" className="contact-link">
                    info@joybeauty.com
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
              >
                <div className="contact-icon">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3>Call Us</h3>
                  <a href="tel:+254748082746" className="contact-link">
                    +254 748 082 746
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, delay: 0.2 }}
              >
                <div className="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="20"
                    height="20"
                  >
                    <path fillRule="evenodd" d="M12 21a16.961 16.961 0 01-6-13.5C6 4.29 8.686 2 12 2s6 2.29 6 5.5A16.962 16.962 0 0112 21zm0-9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3>Our Location</h3>
                  <div className="contact-text">
                    <p>Kilimani, Nairobi, Kenya</p>
                    <a
                      href="https://maps.google.com?q=JoyBeauty+Kilimani+Nairobi+Kenya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-link"
                    >
                      Get directions <span className="link-arrow">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="map-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="map-wrapper">
              <iframe
                title="JoyBeauty Location in Kilimani"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.396813600862!2d36.7803434!3d-1.2966743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10ed6a9a3897%3A0xe99c624de873c469!2sKilimani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1715588891216!5m2!1sen!2ske"
                width="100%"
                height="300"
                style={{ border: 0, minHeight: '300px', maxHeight: '400px', width: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-overlay" aria-hidden="true">
                <a 
                  href="https://maps.google.com?q=JoyBeauty+Kilimani+Nairobi+Kenya" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-interaction-notice"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
