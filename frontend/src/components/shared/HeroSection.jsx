import { motion } from "framer-motion";

const HeroSection = ({ activeTab, setActiveTab, onContactClick }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const stats = [
    { number: "50,000+", label: "Users" },
    { number: "1,200+", label: "Global Partners" },
    { number: "700+", label: "Medical Experts" },
    { number: "₹50Mn+", label: "Annual Savings" },
  ];

  const tabs = [
    { id: "individual", label: "Health for Myself" },
    { id: "partner", label: "For Partners" },
    { id: "corporate", label: "For Corporate" },
  ];

  return (
    <>
      <section
        className="relative mt-8 md:mt-12 lg:mt-16 overflow-hidden"
        data-testid="hero-section"
      >
        <div
          style={{
            background: `
              radial-gradient(800px at 0% 100%, rgba(19,181,142,0.15), transparent 60%),
              radial-gradient(800px at 100% 0%, rgba(106,251,196,0.25), transparent 60%),
              #ffffff
            `,
          }}
          className="min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center px-5 sm:px-6 md:px-8 lg:px-14 xl:px-20 py-10 sm:py-12 md:py-16"
        >
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 md:mb-6"
              style={{ background: "#E3F2EE" }}
              data-testid="hero-badge"
            >
              <span className="text-xs sm:text-sm text-[#005143] font-semibold tracking-wide">
                HEALTHCARE REDEFINED
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-extrabold text-[#1A1A1A] mb-5 md:mb-6 leading-[1.08]"
              data-testid="hero-heading"
            >
              Your Health.
              <br />
              Your People.
              <br />
              <span className="text-[#006B5A]">One Powerful</span>
              <br />
              <span className="text-[#006B5A]">Platform.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-[#3D4945] mb-7 md:mb-8 max-w-[520px] mx-auto lg:mx-0 leading-relaxed"
              data-testid="hero-subtext"
              style={{ fontFamily: "Manrope" }}
            >
              Experience the future of healthcare with an all-in-one ecosystem
              designed for preventative wellness, instant care, and AI-driven
              insights.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://play.google.com/store/apps/details?id=com.healthismplus.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 md:px-7 py-3.5 rounded-[14px] font-semibold text-white inline-flex items-center justify-center gap-2 text-sm"
                style={{
                  background:
                    "linear-gradient(90deg, #006B5A 0%, #27A28B 100%)",
                }}
                data-testid="hero-cta-download"
              >
                Download App
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onContactClick}
                className="w-full sm:w-auto px-6 md:px-7 py-3.5 rounded-[14px] font-semibold bg-white text-[#006B5A] border border-[#D6E0DC] hover:border-[#13B58E] hover:text-[#13B58E] transition-colors text-sm"
                data-testid="hero-cta-contact"
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Image below buttons on mobile + tablet */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center mt-8 md:mt-10 lg:hidden"
            >
              <img
                src="/assets/hero-image.png"
                alt="Health Monitoring Dashboard"
                className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[430px] rounded-[24px] md:rounded-[28px]"
              />
            </motion.div>
          </motion.div>

          {/* Desktop Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex justify-center lg:justify-end"
          >
            <img
              src="/assets/hero-image.png"
              alt="Health Monitoring Dashboard"
              className="w-full max-w-[480px] rounded-[28px]"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 border-t border-[#E6E9EE] bg-[#F2F4F5]"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`
                flex flex-col items-center justify-center
                px-4 sm:px-6 md:px-8 py-8 md:py-10 text-center
                border-[#E6E9EE]
                ${i % 2 === 0 ? "border-r md:border-r" : ""}
                ${i < 2 ? "border-b md:border-b-0" : ""}
                ${i !== stats.length - 1 && i >= 2 ? "md:border-r" : ""}
              `}
            >
              <div className="text-[24px] sm:text-[28px] md:text-[34px] lg:text-[36px] font-extrabold text-[#006B5A] leading-none">
                {stat.number}
              </div>

              <div className="text-[12px] sm:text-[13px] text-[#3D4945] mt-2 tracking-wide font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Tabs Section */}
      <section
        id="tab-switcher"
        className="px-4 sm:px-6 md:px-8 lg:px-12 bg-[#FFFFFF] py-12 md:py-14 lg:py-16"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-extrabold text-[#191C1D] tracking-tight">
            Who Are You Here For?
          </h2>

          <p className="text-[#3D4945] mt-3 mb-8 md:mb-10 text-sm sm:text-[15px] md:text-[16px] max-w-2xl mx-auto">
            Select the journey that best fits your needs to explore tailored
            healthcare solutions.
          </p>

          <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center gap-3 sm:gap-4 md:gap-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  w-full sm:w-auto
                  px-6 sm:px-10 md:px-14 lg:px-16
                  py-3.5 md:py-4
                  rounded-[20px] md:rounded-[28px]
                  text-sm sm:text-base md:text-lg lg:text-[20px]
                  font-medium border transition-all duration-200
                  ${
                    activeTab === tab.id
                      ? tab.id === "partner"
                        ? "bg-[#2A3077] text-white border-[#2A3077] shadow-md"
                        : "bg-[#2AA787] text-white border-[#2AA787] shadow-md"
                      : tab.id === "partner"
                        ? "bg-[#F5F7F6] text-[#2A3077] border-[#2A3077]"
                        : "bg-[#F5F7F6] text-[#2AA787] border-[#2AA787]"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
