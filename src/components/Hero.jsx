import React, { useEffect, useState } from "react";

export default function Hero() {
  const words = ["Relaxation", "Confidence", "Luxury", "Comfort", "Beauty"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [fade, setFade] = useState(true);
  
  const backgroundImages = [
    "https://i.ibb.co/3mXySVhf/IMG-20250311-WA0019.jpg",
    "https://i.ibb.co/xSBLQHMy/african-woman-receiving-spa-facial-treatment-B3-A23-T.jpg",
    "https://i.ibb.co/svNmjGX9/medical.jpg",
    "https://i.ibb.co/p6hny82W/IMG-20250311-WA0011.jpg",
    "https://i.ibb.co/fzFQq9Nn/affordable.jpg"
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

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

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((idx) => (idx + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(bgInterval);
  }, [backgroundImages.length]);

  return (
    <section className="hero" role="banner" aria-label="Welcome to JoyBeauty Spa">
      {/* Background slideshow */}
      <div className="hero-background-container">
        {backgroundImages.map((img, index) => (
          <div 
            key={index}
            className={`hero-background-image ${index === currentBgIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
            aria-hidden={index !== currentBgIndex}
          />
        ))}
        <div className="hero-background-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">JoyBeauty</h1>
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

        {/* Buttons - always horizontal */}
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

      {/* Scroll indicator */}
      <div className="scroll-indicator" aria-hidden="true">
        <div className="mouse"></div>
      </div>
      
      <style jsx>{`
        /* Hero Section - Mobile First Approach */
        .hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          color: white;
          text-align: center;
          padding: 0 1rem;
          isolation: isolate;
        }
        
        /* Background container for optimized transitions */
        .hero-background-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
        }
        
        .hero-background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
          transform: scale(1.05);
          filter: brightness(0.8);
        }
        
        .hero-background-image.active {
          opacity: 1;
          transform: scale(1);
        }
        
        .hero-background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 100%);
          z-index: -1;
        }
        
        /* Content styling */
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        
        .hero-text {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 90%;
        }
        
        .hero-title {
          font-size: clamp(2.5rem, 8vw, 4rem);
          font-weight: 800;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 12px rgba(0,0,0,0.4);
          font-family: 'Playfair Display', serif;
        }
        
        .hero-tagline {
          font-size: clamp(1.25rem, 4.5vw, 1.75rem);
          font-weight: 400;
          margin: 0;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          opacity: 0.95;
          font-weight: 300;
          letter-spacing: 0.02em;
        }
        
        .hero-description {
          font-size: clamp(1rem, 3.5vw, 1.25rem);
          margin: 1.5rem 0 0;
          line-height: 1.6;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
          opacity: 0.95;
          font-weight: 300;
          max-width: 650px;
        }
        
        .hero-animated-word {
          display: inline-block;
          font-weight: 600;
          color: #ffd700;
          position: relative;
          padding: 0 0.25rem;
        }
        
        .hero-animated-word::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #ffd700;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.5s ease;
        }
        
        .fade-in {
          opacity: 1;
        }
        
        .fade-out {
          opacity: 0;
        }
        
        /* Button styling - always horizontal */
        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1rem;
          width: 100%;
          max-width: 500px;
        }
        
        .hero-btn {
          background-color: #DB2777;
          padding: 1.1rem 2.2rem;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: clamp(1rem, 3.5vw, 1.1rem);
          box-shadow: 0 4px 16px rgba(219, 39, 119, 0.4);
          border: none;
          cursor: pointer;
          flex: 1;
          min-width: 140px;
          justify-content: center;
        }
        
        .hero-btn:hover, .hero-btn:focus {
          background-color: #BE185D;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(219, 39, 119, 0.6);
        }
        
        .hero-btn:active {
          transform: translateY(0);
        }
        
        .hero-secondary-btn {
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 1.1rem 2.2rem;
          border-radius: 50px;
          color: white;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: clamp(1rem, 3.5vw, 1.1rem);
          flex: 1;
          min-width: 140px;
        }
        
        .hero-secondary-btn:hover, .hero-secondary-btn:focus {
          background-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }
        
        .btn-icon {
          transition: transform 0.3s ease;
          font-weight: 700;
        }
        
        .hero-btn:hover .btn-icon {
          transform: translateX(4px);
        }
        
        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          font-size: 0.875rem;
          opacity: 0.8;
          animation: float 2s ease-in-out infinite;
        }
        
        .mouse {
          width: 22px;
          height: 36px;
          border: 2px solid rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          position: relative;
        }
        
        .mouse::after {
          content: '';
          display: block;
          width: 4px;
          height: 8px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 2px;
          position: absolute;
          left: 50%;
          top: 8px;
          transform: translateX(-50%);
          animation: mouse-scroll 1.4s infinite;
        }
        
        @keyframes mouse-scroll {
          0% { opacity: 1; top: 8px; }
          50% { opacity: 0.6; top: 16px; }
          100% { opacity: 1; top: 8px; }
        }
        
        @keyframes float {
          0% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -8px); }
          100% { transform: translate(-50%, 0); }
        }
        
        /* Mobile-specific adjustments */
        @media (max-width: 480px) {
          .hero {
            min-height: 90dvh;
          }
          
          .hero-content {
            padding-top: 5rem;
          }
          
          .hero-title {
            font-size: 2.7rem;
          }
          
          .hero-tagline {
            font-size: 1.3rem;
          }
          
          .hero-description {
            font-size: 1.05rem;
            margin-top: 1rem;
          }
          
          .hero-buttons {
            gap: 0.8rem;
          }
          
          .hero-btn, .hero-secondary-btn {
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }
          
          .scroll-indicator {
            bottom: 1rem;
          }
        }
        
        /* Tablet and Desktop */
        @media (min-width: 768px) {
          .hero-content {
            padding-top: 0;
          }
          
          .hero-text {
            max-width: 80%;
          }
        }
        
        /* Desktop */
        @media (min-width: 1024px) {
          .hero-title {
            font-size: clamp(3rem, 5vw, 4.5rem);
          }
          
          .hero-tagline {
            font-size: clamp(1.5rem, 2.5vw, 2rem);
          }
          
          .hero-description {
            font-size: clamp(1.1rem, 1.8vw, 1.4rem);
          }
        }
      `}</style>
    </section>
  );
}