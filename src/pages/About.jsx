import React from "react";
import "../styles/AboutUs.css";

export default function AboutUs() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-container">
        <div className="about-content">
          <h1 id="about-title" className="about-title">
            About JoyBeauty
          </h1>
          <p className="about-lead">
            Welcome to <strong>JoyBeauty</strong> – your sanctuary for women-only spa, waxing, and beauty services in Nairobi. We are dedicated to providing a luxurious, private, and empowering experience for every client.
          </p>
          <ul className="about-list">
            <li>
              <span className="about-icon">🌸</span>
              <span>
                <strong>Expert Team:</strong> Our certified estheticians and stylists bring years of professional experience and a passion for beauty care.
              </span>
            </li>
            <li>
              <span className="about-icon">✨</span>
              <span>
                <strong>Premium Products:</strong> We use only high-quality, skin-friendly products for lasting results and comfort.
              </span>
            </li>
            <li>
              <span className="about-icon">🛡️</span>
              <span>
                <strong>Hygiene & Privacy:</strong> Your safety and comfort are our top priorities, with strict hygiene standards and a serene, women-only environment.
              </span>
            </li>
            <li>
              <span className="about-icon">🤝</span>
              <span>
                <strong>Personalized Care:</strong> Every treatment is tailored to your unique needs and preferences.
              </span>
            </li>
          </ul>
          <p className="about-mission">
            Our mission is to help every woman feel confident, refreshed, and radiant. Whether you’re here for a quick wax, a relaxing massage, or a full day of pampering, you’ll leave feeling your absolute best.
          </p>
        </div>
        <div className="about-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
            alt="JoyBeauty team at work"
            className="about-image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
