import React from "react";
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

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.img
                src={benefit.image}
                alt={benefit.title}
                className="benefit-image"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              />
              <div className="icon-circle">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}