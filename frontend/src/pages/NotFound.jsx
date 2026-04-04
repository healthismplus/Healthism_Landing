import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
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
      <section className="min-h-screen flex items-center justify-center bg-white px-6">
        <div className="max-w-xl w-full text-center">
          {/* 404 Number */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-8xl font-extrabold"
          >
            <span className="text-[#1C0C4A]">4</span>
            <span className="text-[#13B58E]">0</span>
            <span className="text-[#1C0C4A]">4</span>
          </motion.h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#1C0C4A] mt-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed">
            The page you’re looking for doesn’t exist or has been moved. Let’s
            get you back on track.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              onClick={() => navigate("/")}
              className="
              px-6 py-3 rounded-xl
              bg-[#13B58E] text-white font-semibold
              hover:bg-[#0e9f7a] transition
            "
            >
              Go Home
            </button>

            <button
              onClick={() => navigate(-1)}
              className="
              px-6 py-3 rounded-xl
              border border-gray-300 text-gray-700
              hover:border-[#13B58E] hover:text-[#13B58E]
              transition
            "
            >
              Go Back
            </button>
          </div>
        </div>
      </section>
      <Footer onSectionClick={scrollToSection} setActiveTab={setActiveTab} />
    </div>
  );
};

export default NotFoundPage;
