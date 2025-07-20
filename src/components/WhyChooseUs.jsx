import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/WhyChooseUs.css";

const benefits = [
  {
    icon: "👩‍⚕️",
    image: "https://i.ibb.co/xSBLQHMy/african-woman-receiving-spa-facial-treatment-B3-A23-T.jpg",
    title: "Expert Female Specialists",
    description: "Our all-female team provides personalized care with a gentle touch"
  },
  {
    icon: "✨",
    image: "https://i.ibb.co/ccPkYTSD/luxury.jpg",
    title: "Luxury Experience",
    description: "Indulge in premium treatments with high-end products"
  },
  {
    icon: "🧼",
    image: "https://i.ibb.co/svNmjGX9/medical.jpg",
    title: "Medical-Grade Hygiene",
    description: "Sterilized tools and hospital-level cleanliness standards"
  },
  {
    icon: "🌸",
    image: "https://img.freepik.com/free-photo/tender-african-woman-smiling-looking-into-distance-relaxing-spa-salon_176420-12908.jpg?size=626&ext=jpg",
    title: "Women-Only Sanctuary",
    description: "A private, comfortable space designed just for women"
  },
  {
    icon: "💆‍♀️",
    image: "https://i.ibb.co/ccPkYTSD/luxury.jpg",
    title: "Customized Treatments",
    description: "Personalized solutions for your unique beauty needs"
  },
  {
    icon: "💎",
    image: "https://i.ibb.co/fzFQq9Nn/affordable.jpg",
    title: "Affordable Luxury",
    description: "Premium services at accessible prices"
  }
];

export default function WhyChooseUs() {
  const scrollContainerRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft >= scrollWidth - clientWidth - 1);
    
    // Update active index
    const newIndex = Math.round(scrollLeft / (clientWidth / 2));
    setActiveIndex(newIndex);
  };

  const scrollTo = (index) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth / 2;
    
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section className="why-choose-us" aria-labelledby="why-choose-title">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="why-choose-title">Why Women Choose <span>JoyBeauty</span></h2>
          <p className="subtitle">Experience the difference of feminine-centric beauty care</p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${benefit.image})`,
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
            >
              <div className="icon-circle" aria-hidden="true">{benefit.icon}</div>
              <div className="card-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile 2-Card Layout */}
        <div className="mobile-scroll-container">
          <div 
            className="benefits-grid-horizontal"
            ref={scrollContainerRef}
            onScroll={handleScroll}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={`mobile-${index}`}
                className="benefit-card-horizontal"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${benefit.image})`,
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
              >
                <div className="icon-circle" aria-hidden="true">{benefit.icon}</div>
                <div className="card-content">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="mobile-navigation">
            <button 
              className={`nav-arrow left ${isAtStart ? 'disabled' : ''}`}
              onClick={() => scrollTo(activeIndex - 1)}
              disabled={isAtStart}
              aria-label="Previous cards"
            >
              &lt;
            </button>
            
            <div className="scroll-indicators">
              {[...Array(Math.ceil(benefits.length / 2))].map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  className={`indicator ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => scrollTo(index)}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className={`nav-arrow right ${isAtEnd ? 'disabled' : ''}`}
              onClick={() => scrollTo(activeIndex + 1)}
              disabled={isAtEnd}
              aria-label="Next cards"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}