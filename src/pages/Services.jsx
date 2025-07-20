import React, { useState, useEffect } from 'react';
import '../styles/Services.css';
import BookingForm from '../components/BookingForm';

// SVG Icons (unchanged)
const WaxingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
  </svg>
);

const HairIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
  </svg>
);

const SpaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd" />
  </svg>
);

const BrowLashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
  </svg>
);

const serviceCategories = [
  {
    id: "waxing",
    title: "Waxing Services",
    description: "Professional waxing for smooth, hair-free skin. We use gentle, hypoallergenic wax for all skin types.",
    icon: <WaxingIcon />,
    color: "pink-purple",
    image: "https://hdsalonandacademy.co.uk/wp-content/uploads/2023/07/Full-body-waxing-scaled-e1692185226745.jpg",
    services: [
      { name: "Full Body Waxing", price: 15000, desc: "Complete waxing for all areas.", image: "https://hdsalonandacademy.co.uk/wp-content/uploads/2023/07/Full-body-waxing-scaled-e1692185226745.jpg" },
      { name: "Bikini Wax", price: 5000, desc: "Clean and comfortable bikini waxing.", image: "https://blufashionbd.com/wp-content/uploads/2022/09/Face-and-Bikini-Line-Wax-Strips-1.webp" },
      { name: "Brazilian Wax", price: 8500, desc: "Smooth Brazilian waxing.", image: "https://i.pinimg.com/originals/d0/19/b8/d019b8c020ccec881b14fd77bd91b992.jpg" },
      { name: "Armpit Wax", price: 3500, desc: "Gentle waxing for underarms.", image: "https://th.bing.com/th/id/R.2b68f848729b8a8c0295f9a497af8b45?rik=f1g3Jslsw%2bgAxQ&pid=ImgRaw&r=0" },
      { name: "Full Leg Wax", price: 4000, desc: "Smooth, hair-free legs.", image: "https://tse3.mm.bing.net/th/id/OIP.-pryEMxp4MNnqWQdECXrHQHaC5?rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  {
    id: "hair-styling",
    title: "Hair & Styling",
    description: "Expert haircuts, styling, and treatments for every hair type and occasion.",
    icon: <HairIcon />,
    color: "amber-orange",
    image: "https://c8.alamy.com/comp/2GYFX44/young-african-american-woman-blow-drying-her-hair-on-white-background-2GYFX44.jpg",
    services: [
      { name: "Haircut & Blow Dry", price: 3500, desc: "Fresh cut and professional blow dry.", image: "https://c8.alamy.com/comp/2GYFX44/young-african-american-woman-blow-drying-her-hair-on-white-background-2GYFX44.jpg" },
      { name: "Hair Braiding", price: 4000, desc: "Classic and modern braiding styles.", image: "https://tse4.mm.bing.net/th/id/OIP.eytTIyu7K0YyuP8g5Og0PAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Deep Conditioning", price: 3500, desc: "Nourishing hair therapy.", image: "https://txturhair.com/cdn/shop/products/pdp-shampoo-11.jpg?v=1674592072" },
      { name: "Hair Dye", price: 3500, desc: "Vibrant, lasting color.", image: "https://tse1.mm.bing.net/th/id/OIP.IlMdklNzj5cGEv3_lRDomQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
  {
    id: "spa-facials",
    title: "Spa & Facials",
    description: "Relaxing massages and rejuvenating facials to refresh your body and mind.",
    icon: <SpaIcon />,
    color: "emerald-teal",
    image: "https://th.bing.com/th/id/R.c7cc980b32d0673eeed6855cdc644a4d?rik=yoGJ6jcX0U7MUg&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f5601589ae4b0b133a4b3f031%2f5601a2a0e4b0a65d1259b783%2f5a6631a88165f5708589ee8b%2f1593192238201%2fiStockHeaven-on-earth--A-day-at-the-spa.jpg%3fformat%3d1500w&ehk=g2mWkKYaU%2f81SalPeZomXAxwHB5umj3W0N8150vpU5k%3d&risl=&pid=ImgRaw&r=0",
    services: [
      { name: "Full Body Massage (Swedish)", price: 10000, desc: "Swedish massage, 1hr.", image: "https://th.bing.com/th/id/R.c7cc980b32d0673eeed6855cdc644a4d?rik=yoGJ6jcX0U7MUg&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f5601589ae4b0b133a4b3f031%2f5601a2a0e4b0a65d1259b783%2f5a6631a88165f5708589ee8b%2f1593192238201%2fiStockHeaven-on-earth--A-day-at-the-spa.jpg%3fformat%3d1500w&ehk=g2mWkKYaU%2f81SalPeZomXAxwHB5umj3W0N8150vpU5k%3d&risl=&pid=ImgRaw&r=0" },
      { name: "Deep Tissue Massage", price: 13500, desc: "Intensive muscle relief.", image: "https://sflhealthandwellness.com/wp-content/uploads/2012/12/Deep-Tissue-Massage-Techniques-and-Health-Benefits-1.jpg" },
      { name: "Aromatherapy Massage", price: 12000, desc: "Relaxing aromatherapy massage.", image: "https://www.gspa.com.sg/image/cache/catalog/Treatment/Facial_Website%20Image-01-500x500.jpg" },
      // ...existing code...
    ],
  },
  {
    id: "brow-lash",
    title: "Brow & Lash Services",
    description: "Enhance your natural beauty with our brow and lash treatments.",
    icon: <BrowLashIcon />,
    color: "blue-indigo",
    image: "https://tse1.mm.bing.net/th/id/OIP.t7aPZC-AEEdt64GVjpRYuwHaHX?rs=1&pid=ImgDetMain&o=7&rm=3",
    services: [
      { name: "Eye Lash", price: 3500, desc: "Beautiful eyelash service.", image: "https://tse1.mm.bing.net/th/id/OIP.t7aPZC-AEEdt64GVjpRYuwHaHX?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Lash Tinting", price: 1500, desc: "Long-lasting lash color.", image: "https://i.pinimg.com/736x/7c/cb/8e/7ccb8ee6432dba47c6e4237d78b01196.jpg" },
      { name: "Henna Brows", price: 1800, desc: "Natural, fuller-looking brows.", image: "https://tse2.mm.bing.net/th/id/OIP.fdOsaXsD4jwEDqoIwD63gwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleBookNow = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const getFilteredServices = () => {
    if (activeCategory === "all") {
      return serviceCategories.flatMap(category => category.services);
    }
    return serviceCategories.find(cat => cat.id === activeCategory)?.services || [];
  };

  return (
    <div className="services-container">

      {/* Booking Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal} role="presentation">
          <div 
            className={`modal-content ${isMobile ? 'mobile' : ''}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <BookingForm service={selectedService} onClose={closeModal} />
          </div>
        </div>
      )}

      <section className="services-content">
        <div className="services-header">
          <h1>Premium Beauty Services</h1>
          <p>Discover our range of beauty, spa, waxing, and styling services. Choose a category below to explore our offerings and book your next appointment.</p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          <button
            onClick={() => setActiveCategory("all")}
            className={`filter-btn ${activeCategory === "all" ? 'active all' : ''}`}
          >
            All Services
          </button>
          
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`filter-btn ${activeCategory === category.id ? `active ${category.color}` : ''}`}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {getFilteredServices().map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-image-container">
                <img src={service.image} alt={service.name} className="service-image" loading="lazy" />
                <div className="image-overlay"></div>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                </div>
                <div className="card-meta">
                  <span className="service-price">KES {service.price.toLocaleString()}</span>
                  <div className="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                    </svg>
                    <span>4.8 (120)</span>
                  </div>
                </div>
                <button
                  onClick={() => handleBookNow(service)}
                  className="book-now-btn medium-btn"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="categories-section">
          <h2>Service Categories</h2>
          <div className="categories-grid">
            {serviceCategories.map((category) => (
              <div key={category.id} className={`category-card ${category.color}`}>
                <div className="category-image-container">
                  <img src={category.image} alt={category.title} className="category-image" loading="lazy" />
                  <div className="category-image-overlay"></div>
                </div>
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <button 
                  onClick={() => setActiveCategory(category.id)}
                  className="view-services-btn"
                >
                  View Services
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="services-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>BeautyBloom</h3>
              <p>Premium beauty services for the modern individual</p>
            </div>
            <div className="footer-links">
              <div>
                <h4>Services</h4>
                <ul>
                  <li>Waxing</li>
                  <li>Hair & Styling</li>
                  <li>Spa & Facials</li>
                  <li>Brow & Lash</li>
                </ul>
              </div>
              <div>
                <h4>Company</h4>
                <ul>
                  <li>About Us</li>
                  <li>Locations</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>
              <div>
                <h4>Support</h4>
                <ul>
                  <li>Help Center</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 BeautyBloom. All rights reserved.</p>
          </div>
        </footer>
      </section>
    </div>
  );
}
