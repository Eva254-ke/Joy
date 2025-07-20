import React, { useRef, useEffect, useState } from "react";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsAtStart(container.scrollLeft === 0);
      setIsAtEnd(container.scrollLeft >= container.scrollWidth - container.clientWidth - 1);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => container.removeEventListener('scroll', handleScroll);
  }, [windowWidth]);

  const scrollTo = (direction) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    
    container.scrollTo({
      left: direction === 'right' 
        ? container.scrollLeft + scrollAmount 
        : container.scrollLeft - scrollAmount,
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

        {/* Mobile Horizontal Scroll */}
        <div className="mobile-scroll-container">
          <div 
            className="benefits-grid-horizontal"
            ref={scrollContainerRef}
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
          
          {/* Navigation Arrows */}
          {!isAtStart && (
            <button 
              className="scroll-arrow left" 
              onClick={() => scrollTo('left')}
              aria-label="Scroll left"
            >
              &lt;
            </button>
          )}
          {!isAtEnd && (
            <button 
              className="scroll-arrow right" 
              onClick={() => scrollTo('right')}
              aria-label="Scroll right"
            >
              &gt;
            </button>
          )}
          
          {/* Scroll Indicators */}
          <div className="scroll-indicators">
            {benefits.map((_, index) => (
              <div 
                key={`indicator-${index}`}
                className={`indicator ${Math.round(scrollContainerRef.current?.scrollLeft / (scrollContainerRef.current?.clientWidth || 1)) === index ? 'active' : ''}`}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({
                      left: index * scrollContainerRef.current.clientWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}