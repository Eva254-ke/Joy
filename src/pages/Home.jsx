import React, { Suspense, lazy } from "react";
import "../styles/Home.css";

// Lazy load components for performance
const Hero = lazy(() => import("../components/Hero"));
const Services = lazy(() => import("../components/Services"));
const WhyChooseUs = lazy(() => import("../components/WhyChooseUs"));
const ContactPreview = lazy(() => import("../components/ContactPreview"));

export default function Home() {
  return (
    <main className="home-container" role="main">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Hero />
        <Services />
        <WhyChooseUs />
        <ContactPreview />
      </Suspense>
    </main>
  );
}
