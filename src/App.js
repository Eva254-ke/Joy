import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/About";
import Gallery from "./pages/Gallery";
import FloatingWidget from "./components/FloatingWidget.jsx";
import Booking from "./pages/Booking";

function App() {
  // Get current location to conditionally render FloatingWidget
  const { pathname } = window.location;
  return (
    <Router>
      <div className="App">
        {/* Navbar is fixed, so add padding top to avoid content hiding */}
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<><Home /><Footer /></>} />
            <Route path="/services" element={<Services />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* Add other routes here as you build more pages */}
          </Routes>
        </main>
        {pathname !== "/bookings" && <FloatingWidget />}
      </div>
    </Router>
  );
}

export default App;
