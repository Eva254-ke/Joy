import React, { useEffect, useState } from "react";
import "../styles/Home.css";

export default function Hero() {
  // Animated words for the hero description
  const words = ["Relaxation", "Confidence", "Luxury", "Comfort", "Beauty"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

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

  return (
    <section className="hero" role="banner" aria-label="Welcome section">
      {/* Background video with poster for better loading */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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