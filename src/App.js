import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import BookingForm from "./components/BookingForm";
import AboutUs from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar is fixed, so add padding top to avoid content hiding */}
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<><Home /><Footer /></>} />
            <Route path="/services" element={<Services />} />
            <Route path="/bookings" element={<BookingForm />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* Add other routes here as you build more pages */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
