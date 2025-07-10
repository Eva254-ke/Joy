import React, { useState } from "react";
import "../styles/Gallery.css";

const images = [
  // Salon Interior
  {
    src: "https://i.ibb.co/2JhQYnF/IMG-20250311-WA0007.jpg",
    alt: "Salon reception area with elegant decor",
    category: "Salon Interior",
  },
  {
    src: "https://i.ibb.co/G3p76Vrx/IMG-20250311-WA0003.jpg",
    alt: "Relaxing treatment room with soft lighting",
    category: "Salon Interior",
  },
  {
    src: "https://i.ibb.co/3mXySVhf/IMG-20250311-WA0019.jpg",
    alt: "Modern salon interior with comfortable seating",
    category: "Salon Interior",
  },
  {
    src: "https://i.ibb.co/p6hny82W/IMG-20250311-WA0011.jpg",
    alt: "Clean and welcoming salon environment",
    category: "Salon Interior",
  },

  // Services in Action
  {
    src: "https://emara.ole-sereni.com/wp-content/uploads/2023/06/Spa-and-Wellness-Services-1024x576.jpg",
    alt: "Spa and wellness service in progress",
    category: "Services in Action",
  },
  {
    src: "https://emara.ole-sereni.com/wp-content/uploads/2023/06/Spa-and-Wellness-Services-1024x576.jpg",
    alt: "Professional spa treatment session",
    category: "Services in Action",
  },
  {
    src: "https://beautytriangle.com/cdn/shop/files/Salon-Display_30_1.jpg?v=1668421237&width=2400",
    alt: "Salon displaying beauty products and services",
    category: "Services in Action",
  },

  // Special Events
  {
    src: "https://i.ibb.co/PZFWfLTf/image.png",
    alt: "Salon decorated for a special event",
    category: "Special Events",
  },
  {
    src: "https://i.ibb.co/BKLt9tgs/image.png",
    alt: "Seasonal promotion setup in salon",
    category: "Special Events",
  },
];

const categories = [
  "All",
  "Salon Interior",
  "Services in Action",
  "Special Events",
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showPrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gallery-section" aria-label="JoyBeauty photo gallery">
      <h2 className="gallery-title">Gallery</h2>

      <nav className="gallery-filters" role="list" aria-label="Gallery category filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="gallery-grid">
        {filteredImages.map((img, idx) => (
          <div
            key={idx}
            className="gallery-item"
            tabIndex={0}
            role="button"
            aria-label={`View image: ${img.alt}`}
            onClick={() => openLightbox(idx)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") openLightbox(idx);
            }}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={filteredImages[lightboxIndex].alt}
          tabIndex={-1}
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
          }}
        >
          <button
            className="lightbox-close"
            aria-label="Close gallery"
            onClick={closeLightbox}
          >
            ×
          </button>
          <button
            className="lightbox-prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            ‹
          </button>
          <img
            className="lightbox-image"
            src={filteredImages[lightboxIndex].src}
            alt={filteredImages[lightboxIndex].alt}
          />
          <button
            className="lightbox-next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
