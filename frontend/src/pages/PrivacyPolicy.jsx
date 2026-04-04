import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();
  const scrollToSection = (sectionId) => {
    navigate(`/?section=${sectionId}`);
  };
  return (
    <div>
      <Navigation
        onSectionClick={scrollToSection}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <section className="bg-[#EDF3F4] py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <h1 className="text-[32px] font-bold text-[#0F172A] mb-4">
            PRIVACY POLICY
          </h1>
        </div>
      </section>
      <Footer onSectionClick={scrollToSection} setActiveTab={setActiveTab} />
    </div>
  );
};

export default PrivacyPolicy;
