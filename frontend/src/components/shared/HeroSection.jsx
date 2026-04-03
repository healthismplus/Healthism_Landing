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
        className="relative pt-24 pb-16 overflow-hidden"
        style={{
          background: `
            radial-gradient(116.62% 194.37% at 0% 100%, rgba(0, 107, 90, 0.05) 0%, rgba(0, 107, 90, 0) 40%),
            radial-gradient(116.62% 194.37% at 100% 0%, rgba(106, 251, 196, 0.15) 0%, rgba(106, 251, 196, 0) 40%),
            #FFFFFF
          `,
        }}
        data-testid="hero-section"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center py-8 lg:py-16">
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
                  background: "rgba(19, 181, 142, 0.1)",
                  border: "1px solid rgba(19, 181, 142, 0.3)",
                }}
                data-testid="hero-badge"
              >
                <span className="w-2 h-2 rounded-full bg-[#13B58E] animate-pulse" />
                <span
                  className="text-sm text-[#13B58E] font-semibold tracking-wide"
                  style={{ fontFamily: "Raleway" }}
                >
                  HEALTHCARE REDEFINED
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-[#1A1A1A] mb-6 leading-[1.1]"
                style={{ fontFamily: "Raleway" }}
                data-testid="hero-heading"
              >
                Your Health.
                <br />
                <span className="text-[#13B58E]">One Powerful</span>
                <br />
                Platform.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base text-[#6B7A99] mb-8 max-w-[440px] leading-relaxed"
                style={{ fontFamily: "Merriweather" }}
                data-testid="hero-subtext"
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
                  className="px-7 py-3.5 rounded-full font-semibold text-white inline-flex items-center gap-2 text-sm"
                  style={{ background: "#13B58E", fontFamily: "Raleway" }}
                  data-testid="hero-cta-download"
                >
                  Download App
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onContactClick}
                  className="px-7 py-3.5 rounded-full font-semibold text-[#1A1A1A] border border-[#E5E7EB] hover:border-[#13B58E] hover:text-[#13B58E] transition-colors text-sm"
                  style={{ fontFamily: "Raleway" }}
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
                src="/assets/health-monitor.png"
                alt="Health Monitoring Dashboard"
                className="w-full max-w-[480px]"
              />
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-[#E5E7EB]"
            data-testid="hero-stats"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-extrabold text-[#13B58E] mb-1"
                  style={{ fontFamily: "Raleway" }}
                >
                  {stat.number}
                </div>
                <div className="text-sm text-[#9CA3AF]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who Are You Here For? - Separate Section */}
      <section
        id="tab-switcher"
        className="py-16 px-6 lg:px-12 bg-white"
        data-testid="tab-switcher-section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2
              className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-3"
              style={{ fontFamily: "Raleway" }}
            >
              Who Are You Here For?
            </h2>
            <p className="text-[#6B7A99] mb-10 max-w-xl mx-auto text-sm">
              Select the journey that best fits your needs to explore tailored
              healthcare solutions.
            </p>

            <div
              className="flex flex-wrap justify-center gap-3"
              data-testid="user-type-tabs"
            >
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                    activeTab === tab.id
                      ? "bg-[#13B58E] text-white"
                      : "bg-white text-[#6B7A99] border border-[#E5E7EB] hover:border-[#13B58E] hover:text-[#13B58E]"
                  }`}
                  style={{ fontFamily: "Raleway" }}
                  data-testid={`tab-${tab.id}`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
