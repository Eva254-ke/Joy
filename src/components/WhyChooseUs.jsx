import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./WhyChooseUs.module.css";

// List of benefits (keep or fetch from API)
const benefits = [
  {
    icon: "👩‍⚕️",
    image: "https://i.ibb.co/xSBLQHMy/african-woman-receiving-spa-facial-treatment-B3-A23-T.jpg",
    title: "Expert Female Specialists",
    description: "Our all-female team provides personalized care with a gentle touch",
  },
  {
    icon: "✨",
    image: "https://i.ibb.co/ccPkYTSD/luxury.jpg",
    title: "Luxury Experience",
    description: "Indulge in premium treatments with high-end products",
  },
  {
    icon: "🧼",
    image: "https://i.ibb.co/svNmjGX9/medical.jpg",
    title: "Medical-Grade Hygiene",
    description: "Sterilized tools and hospital-level cleanliness standards",
  },
  {
    icon: "🌸",
    image: "https://img.freepik.com/free-photo/tender-african-woman-smiling-looking-into-distance-relaxing-spa-salon_176420-12908.jpg?size=626&ext=jpg",
    title: "Women-Only Sanctuary",
    description: "A private, comfortable space designed just for women",
  },
  {
    icon: "💆‍♀️",
    image: "https://i.ibb.co/ccPkYTSD/luxury.jpg",
    title: "Customized Treatments",
    description: "Personalized solutions for your unique beauty needs",
  },
  {
    icon: "💎",
    image: "https://i.ibb.co/fzFQq9Nn/affordable.jpg",
    title: "Affordable Luxury",
    description: "Premium services at accessible prices",
  },
];

export default function WhyChooseUs() {
  // Mobile carousel state
  const [slide, setSlide] = useState(0);
  const autoScrollRef = useRef();

  // Keyboard navigation for accessibility
  const goTo = idx => setSlide(Math.max(0, Math.min(idx, benefits.length - 1)));

  // Carousel handlers
  const handlePrev = () => goTo(slide - 1);
  const handleNext = () => goTo(slide + 1);

  // Touch swipe support
  const touchStartX = useRef(null);

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 60) {
      if (dx < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  }

  // For desktop detection
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  return (
    <section className={styles.whyChooseUs} aria-labelledby="why-choose-title">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <h2 id="why-choose-title">
            Why Women Choose <span className={styles.pink}>JoyBeauty</span>
          </h2>
          <p className={styles.subtitle}>Experience the difference of feminine-centric beauty care</p>
        </motion.div>

        {/* Desktop: Grid cards */}
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className={styles.benefitCard}
              style={{
                backgroundImage:
                  `linear-gradient(rgba(49, 13, 35, 0.40),rgba(49, 13, 35, 0.25)),url(${benefit.image})`,
              }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.44, delay: i * 0.07 }}
              viewport={{ once: true }}
            >
              <span className={styles.iconCircle} aria-hidden>
                {benefit.icon}
              </span>
              <div className={styles.cardContent}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Swipeable single-card carousel */}
        <div className={styles.mobileCarousel}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className={styles.carouselCard}
              key={slide}
              style={{
                backgroundImage:
                  `linear-gradient(rgba(49, 13, 35, 0.40),rgba(49, 13, 35, 0.25)),url(${benefits[slide].image})`,
              }}
              initial={{ x: 48, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -48, opacity: 0 }}
              transition={{ type: "tween", duration: 0.42 }}
              tabIndex={0}
              aria-label={`${benefits[slide].title}: ${benefits[slide].description}`}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <span className={styles.iconCircle} aria-hidden>
                {benefits[slide].icon}
              </span>
              <div className={styles.cardContent}>
                <h3>{benefits[slide].title}</h3>
                <p>{benefits[slide].description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation Dots (mobile only) */}
          <div className={styles.carouselDots}>
            {benefits.map((_, idx) => (
              <button
                key={idx}
                className={`${styles.dot} ${idx === slide ? styles.active : ""}`}
                style={{ pointerEvents: idx === slide ? "none" : "auto" }}
                aria-label={`Show benefit ${idx + 1}`}
                onClick={() => setSlide(idx)}
                tabIndex={0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
