import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = ({ onSectionClick, activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Individual", tab: "individual", isTab: true },
    { label: "Partner", tab: "partner", isTab: true },
    { label: "Corporate", tab: "corporate", isTab: true },
    { label: "Meet Our Team", path: "/team", isTab: false },
    { label: "Associates", section: "partners", isTab: false },
    { label: "Contact Us", section: "contact", isTab: false },
  ];

  const handleNavClick = (item) => {
    if (item.isTab) {
      setActiveTab(item.tab);
      onSectionClick("tab-switcher");
    } else if (item.path) {
      navigate(item.path);
    } else if (item.section) {
      onSectionClick(item.section);
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-100"
      data-testid="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              setActiveTab("individual");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            data-testid="logo"
          >
            <img src="/logo.png" alt="HealthismPlus" className="h-9 w-9" />
            <span className="text-lg font-bold text-[#1A1A1A]">
              healthism<span className="text-[#13B58E]">+</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  item.isTab && activeTab === item.tab
                    ? "text-[#13B58E]"
                    : "text-[#6B7A99] hover:text-[#13B58E]"
                }`}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://play.google.com/store/apps/details?id=com.healthismplus.customer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full font-semibold text-white text-sm"
              style={{
                background: `linear-gradient(90deg, #006B5A 0%, #27A28B 100%)`,
              }}
              data-testid="nav-download-cta"
            >
              Download App
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-gray-100"
          data-testid="mobile-menu"
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left py-2 font-medium text-sm ${
                  item.isTab && activeTab === item.tab
                    ? "text-[#13B58E]"
                    : "text-[#6B7A99]"
                }`}
                style={{
                  background: `linear-gradient(90deg, #006B5A 0%, #27A28B 100%)`,
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://play.google.com/store/apps/details?id=com.healthismplus.customer"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 rounded-full font-semibold text-white text-center text-sm"
              style={{
                background: `linear-gradient(90deg, #006B5A 0%, #27A28B 100%)`,
              }}
            >
              Download App
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
