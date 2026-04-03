import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Shared Components
import Navigation from "./components/shared/Navigation";
import HeroSection from "./components/shared/HeroSection";
import FAQSection from "./components/shared/FAQSection";
import TestimonialSection from "./components/shared/TestimonialSection";
import TeamSection from "./components/shared/TeamSection";
import PartnersSection from "./components/shared/PartnersSection";
import ContactSection from "./components/shared/ContactSection";
import Footer from "./components/shared/Footer";

// Section Content
import IndividualContent from "./components/sections/IndividualContent";
import CorporateContent from "./components/sections/CorporateContent";
import PartnerContent from "./components/sections/PartnerContent";

// Team Page
import TeamPage from "./pages/TeamPage";

// Styles
import "./styles/design-system.css";
import "./App.css";

function HomePage() {
  const [activeTab, setActiveTab] = useState("individual");

  // Scroll to section handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle contact click - scroll to contact section
  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <div className="App" style={{ background: '#FFFFFF' }}>
      {/* Navigation */}
      <Navigation 
        onSectionClick={scrollToSection} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
      />

      {/* Hero Section with Tab Switcher */}
      <HeroSection 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onContactClick={handleContactClick}
      />

      {/* Dynamic Content Based on Active Tab */}
      <AnimatePresence mode="wait">
        {activeTab === "individual" && (
          <IndividualContent key="individual" onContactClick={handleContactClick} />
        )}
        {activeTab === "corporate" && (
          <CorporateContent key="corporate" onContactClick={handleContactClick} />
        )}
        {activeTab === "partner" && (
          <PartnerContent key="partner" onContactClick={handleContactClick} />
        )}
      </AnimatePresence>

      {/* Shared Sections */}
      <TestimonialSection variant={activeTab} />
      <FAQSection variant={activeTab} />
      <TeamSection />
      <PartnersSection />
      <ContactSection />
      <Footer onSectionClick={scrollToSection} setActiveTab={setActiveTab} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
