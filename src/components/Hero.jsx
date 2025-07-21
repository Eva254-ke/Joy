import React, { useEffect, useState } from "react";
import "../styles/Home.css";

export default function Hero() {
  // Animated words for the hero description
  const words = ["Relaxation", "Confidence", "Luxury", "Comfort", "Beauty"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [fade, setFade] = useState(true);
  
  // Background slideshow state with real spa images
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Beautiful spa images for background slideshow
  const backgroundImages = [
    "https://i.ibb.co/3mXySVhf/IMG-20250311-WA0019.jpg",
    "https://i.ibb.co/xSBLQHMy/african-woman-receiving-spa-facial-treatment-B3-A23-T.jpg",
    "https://i.ibb.co/svNmjGX9/medical.jpg",
    "https://i.ibb.co/p6hny82W/IMG-20250311-WA0011.jpg",
    "https://i.ibb.co/fzFQq9Nn/affordable.jpg"
  ];

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => setFade(false), 2000);
    const changeWordTimeout = setTimeout(() => {
      setCurrentWordIdx((idx) => (idx + 1) % words.length);
      setFade(true);
    }, 2400);
    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(changeWordTimeout);
    };
  }, [currentWordIdx, words.length]);

  // Background slideshow effect
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((idx) => (idx + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(bgInterval);
  }, [backgroundImages.length]);

  return (
    <section className="hero" role="banner" aria-label="Welcome section">
      {/* Dynamic image background slideshow */}
      <div 
        className="hero-background-image"
        style={{
          backgroundImage: `url(${backgroundImages[currentBgIndex]})`,
        }}
      ></div>
      <div className="hero-background-overlay"></div>

      {/* Overlay content with improved hierarchy */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>JoyBeauty</h1>
          <p className="hero-tagline">Women's Spa & Waxing Sanctuary</p>
          <p className="hero-description">
            Experience&nbsp;
            <span
              className={`hero-animated-word${
                fade ? " fade-in" : " fade-out"
              }`}
              aria-live="polite"
            >
              {words[currentWordIdx]}
            </span>
            &nbsp;with our expert female staff, dedicated to your comfort and
            impeccable care.
          </p>
        </div>

        <div className="hero-buttons">
          <a
            href="/bookings"
            className="hero-btn"
            aria-label="Book an appointment"
          >
            Book Now
            <span className="btn-icon">→</span>
          </a>
          <a
            href="/services"
            className="hero-secondary-btn"
            aria-label="Explore our services"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Scroll indicator for better UX */}
      <div className="scroll-indicator" aria-hidden="true">
        <span>Scroll</span>
        <div className="mouse"></div>
      </div>
    </section>
  );
}