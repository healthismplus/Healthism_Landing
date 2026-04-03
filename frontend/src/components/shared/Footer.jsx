import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Footer = ({ onSectionClick, setActiveTab }) => {
  const navigate = useNavigate();

  const productLinks = [
    { label: "Individual", tab: "individual" },
    { label: "Partner", tab: "partner" },
    { label: "Corporate", tab: "corporate" }
  ];

  const companyLinks = [
    { label: "About Us", section: "about" },
    { label: "Meet Our Team", path: "/team" }
  ];

  const supportLinks = [
    { label: "Privacy Policy", section: "privacy" },
    { label: "Terms of Service", section: "terms" },
    { label: "Contact Us", section: "contact" }
  ];

  const handleCompanyClick = (link) => {
    if (link.path) {
      navigate(link.path);
    } else if (link.section) {
      onSectionClick(link.section);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100" data-testid="footer">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="HealthismPlus" className="h-10 w-10" />
              <span className="text-xl font-bold text-[#1A1A1A]" style={{ fontFamily: 'Raleway' }}>
                healthism<span className="text-[#13B58E]">+</span>
              </span>
            </div>
            <p className="text-[#6B7A99] leading-relaxed max-w-sm text-sm" style={{ fontFamily: 'Merriweather' }}>
              Building the world's most accessible and proactive healthcare ecosystem for everyone, everywhere.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[#13B58E] font-bold mb-6 text-sm" style={{ fontFamily: 'Raleway' }}>Product</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      setActiveTab(link.tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#6B7A99] hover:text-[#13B58E] transition-colors text-sm"
                    style={{ fontFamily: 'Raleway' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[#13B58E] font-bold mb-6 text-sm" style={{ fontFamily: 'Raleway' }}>Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleCompanyClick(link)}
                    className="text-[#6B7A99] hover:text-[#13B58E] transition-colors text-sm"
                    style={{ fontFamily: 'Raleway' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-[#13B58E] font-bold mb-6 text-sm" style={{ fontFamily: 'Raleway' }}>Support</h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onSectionClick(link.section)}
                    className="text-[#6B7A99] hover:text-[#13B58E] transition-colors text-sm"
                    style={{ fontFamily: 'Raleway' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#9CA3AF] text-sm" style={{ fontFamily: 'Raleway' }}>
              © 2024 Healthism+ Healthcare. All rights reserved.
            </p>

            {/* Social Links - Text only as per design */}
            <div className="flex items-center gap-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://twitter.com/healthismplus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-[#13B58E] transition-colors text-sm"
                style={{ fontFamily: 'Raleway' }}
                data-testid="footer-twitter"
              >
                Twitter
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.linkedin.com/company/healthism-plus-375901264"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-[#13B58E] transition-colors text-sm"
                style={{ fontFamily: 'Raleway' }}
                data-testid="footer-linkedin"
              >
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.instagram.com/healthismplus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-[#13B58E] transition-colors text-sm"
                style={{ fontFamily: 'Raleway' }}
                data-testid="footer-instagram"
              >
                Instagram
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
