import React, { useState, useEffect } from "react";
import "./Navbar.css";

const logoUrl = "https://i.ibb.co/ZpTXzQ9r/a-logo-design-featuring-the-text-joybeau-57-TA7xe4-QBOu-Aua9umbh-Eg-Hxp-NVS0t-Qfu-RXZb-XEE-1-Uw.jpg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Left: Logo + App Name */}
        <div className="navbar-left">
          <a href="/" className="navbar-logo" aria-label="JoyBeauty Home">
            <img src={logoUrl} alt="JoyBeauty Logo" />
          </a>
          <span className="navbar-app-name">JoyBeauty</span>
        </div>

        {/* Center: Navigation Links - Desktop */}
        <div className="navbar-center">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} tabIndex="0">
                  {link.name}
                  <span className="nav-link-underline" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Book Now Button */}
        <div className="navbar-right">
          <a
            href="/bookings"
            className="navbar-book-btn"
            tabIndex="0"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="hamburger">
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex="0"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="/bookings" 
              className="mobile-book-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex="0"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;