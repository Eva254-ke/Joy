import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../services.css'; // External CSS import

const featuredServices = [
  {
    id: 1,
    image: "https://i.ibb.co/Q763hGR8/image.png",
    title: "Full Body Waxing",
    desc: "Smooth, hair-free skin that lasts weeks",
    price: 15000,
    duration: "60 min",
    isPopular: true,
  },
  {
    id: 2,
    image: "https://i.ibb.co/RGGkh6Dp/image.png",
    title: "Signature Facial",
    desc: "Customized treatment for radiant skin",
    price: 3500,
    duration: "45 min",
    isNew: true,
  },
  {
    id: 3,
    image: "https://i.ibb.co/PvTXVJLB/image.png",
    title: "Hot Stone Massage (Swedish)",
    desc: "Swedish massage, 1hr.",
    price: 10000,
    duration: "60 min",
  },
  {
    id: 4,
    image: "https://i.ibb.co/nNRqk7G8/image.png",
    title: "Lash Extensions",
    desc: "Luxurious volume lashes",
    price: 3500,
    duration: "90 min",
  },
];

const HomeServicesPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="home-services-section" aria-label="Our Spa Services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">Experience luxury treatments tailored for you</p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {featuredServices.map((service) => (
            <ServiceCard 
              key={service.id}
              service={service}
              onClick={() => navigate(`/services/${service.id}`)}
            />
          ))}
        </div>

        {/* Main CTA Section */}
        <motion.div 
          className="main-cta-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Ready for Your Transformation?</h3>
          <p>Explore our complete menu of 20+ professional treatments</p>
          <motion.button
            className="primary-cta-button"
            onClick={() => navigate('/services')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View all spa services"
          >
            View All Services
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service, onClick }) => {
  return (
    <motion.article
      className="service-card"
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      aria-label={`${service.title} - ${service.desc}`}
    >
      <div className="card-media">
        <img 
          src={service.image} 
          alt={service.title} 
          loading="lazy"
          width="400"
          height="250"
        />
        <div className="service-badges">
          {service.isPopular && <span className="badge popular">Popular</span>}
          {service.isNew && <span className="badge new">New</span>}
          <span className="badge duration">{service.duration}</span>
        </div>
      </div>

      <div className="card-content">
        <h3>{service.title}</h3>
        <p className="description">{service.desc}</p>
        <div className="price-row">
          <span className="price">KES {service.price.toLocaleString()}</span>
          <button className="quick-book-btn" aria-label={`Quick book ${service.title}`}>
            Quick Book
          </button>
        </div>
      </div>
    </motion.article>
  );
};

export default HomeServicesPreview;