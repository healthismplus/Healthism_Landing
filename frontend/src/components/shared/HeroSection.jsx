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
    { number: "50,000+", label: "Users Monthly" },
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
      {/* Hero Section - Light background with subtle gradients */}
      <section
        className="relative my-16  overflow-hidden"
        data-testid="hero-section"
      >
        {/* Hero Content */}
        <div
          style={{
            background: `
  radial-gradient(800px at 0% 100%, rgba(19,181,142,0.15), transparent 60%),
  radial-gradient(800px at 100% 0%, rgba(106,251,196,0.25), transparent 60%),
  #ffffff
`,
          }}
          className="h-dvh grid lg:grid-cols-2 gap-12 items-center px-20 "
        >
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "#E3F2EE",
              }}
              data-testid="hero-badge"
            >
              <span className="text-sm text-[#005143] font-semibold tracking-wide">
                HEALTHCARE REDEFINED
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#1A1A1A] mb-6 leading-[1.1]"
              data-testid="hero-heading"
            >
              Your Health.
              <br />
              Your People.
              <br />
              <span className="text-[#006B5A]">One Powerful</span>
              <br />
              <span className="text-[#006B5A]"> Platform.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base text-[#3D4945] mb-8 max-w-[440px] leading-relaxed"
              data-testid="hero-subtext"
              style={{ fontFamily: "Manrope" }}
            >
              Experience the future of healthcare with an all-in-one ecosystem
              designed for preventative wellness, instant care, and AI-driven
              insights.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://play.google.com/store/apps/details?id=com.healthismplus.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-[14px] font-semibold text-white inline-flex items-center gap-2 text-sm"
                style={{
                  background: `linear-gradient(90deg, #006B5A 0%, #27A28B 100%)`,
                }}
                data-testid="hero-cta-download"
              >
                Download App
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onContactClick}
                className="px-7 py-3.5 rounded-[14px] font-semibold bg-white text-[#006B5A] border border-[#BCC9C426] hover:border-[#13B58E] hover:text-[#13B58E] transition-colors text-sm"
                data-testid="hero-cta-contact"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Health Monitor Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src="/assets/hero-image.png"
              alt="Health Monitoring Dashboard"
              className="w-full max-w-[480px] rounded-[28px] "
            />
          </motion.div>
        </div>
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 py-12 border-t border-[#E6E9EE] bg-[#F2F4F5]"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`
        flex flex-col items-center justify-center
        px-6 md:px-10
        ${i !== stats.length - 1 ? "md:border-r border-[#E6E9EE]" : ""}
      `}
            >
              {/* Number */}
              <div className="text-[32px] md:text-[36px] font-extrabold text-[#006B5A] leading-none">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-[13px] text-[#3D4945] mt-2 tracking-wide font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Who Are You Here For? - Separate Section */}
      <section id="tab-switcher" className=" px-6 lg:px-12 bg-[#FFFFFF] py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-[38px] md:text-[48px] font-extrabold text-[#191C1D] tracking-tight">
            Who Are You Here For?
          </h2>

          {/* Subtext */}
          <p className="text-[#3D4945] mt-2 mb-10 text-[16px]">
            Select the journey that best fits your needs to explore tailored
            healthcare solutions.
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
  px-20 py-3 rounded-[28px] text-[20px] font-medium
  border transition-all duration-200

  ${
    activeTab === tab.id
      ? tab.id === "partner"
        ? "bg-[#2A3077] text-white border-[#2A3077] shadow-md"
        : "bg-[#2AA787] text-white border-[#2AA787] shadow-md"
      : tab.id === "partner"
        ? "bg-[#F5F7F6] text-[#2A3077] border-[#2A3077]"
        : tab.id === "corporate"
          ? "bg-[#F5F7F6] text-[#2AA787] border-[#2AA787]"
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
