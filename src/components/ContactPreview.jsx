import React from "react";
import { motion } from "framer-motion";
import "../styles/Contact.css";

export default function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-container">
        {/* Contact Information */}
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
            We're conveniently located in Ruaka. Come experience our premium beauty services.
          </p>
          
          <div className="contact-details">
            <motion.div 
              className="contact-item"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3>Call Us</h3>
                <a href="tel:+254712345678" className="contact-link">
                  +254 712 345 678
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3>Our Location</h3>
                <div className="contact-text">
                  <p>Ruaka Town, Kiambu Road</p>
                  <p>Nairobi, Kenya</p>
                  <a 
                    href="https://maps.google.com?q=JoyBeauty+Ruaka+Town+Kiambu+Road+Nairobi+Kenya" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                    Get directions
                    <span className="link-arrow">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Map Container */}
        <motion.div 
          className="map-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="map-wrapper">
            <iframe
              title="JoyBeauty Location in Ruaka"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.954174860258!2d36.80520931533095!3d-1.188290535882358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f1a5e5d5d5b%3A0x5e5e5e5e5e5e5e5e!2sRuaka%20Town%2C%20Kenya!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              aria-hidden="true"
            />
            <div className="map-overlay" aria-hidden="true">
              <a 
                href="https://maps.google.com?q=JoyBeauty+Ruaka+Town+Kiambu+Road+Nairobi+Kenya" 
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
    </section>
  );
}