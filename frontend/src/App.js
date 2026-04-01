import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Menu, X, Phone, Mail, Globe, ArrowRight, Linkedin, Instagram, Facebook } from "lucide-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import "@/App.css";
import TeamPage from "./pages/TeamPage";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Animated Counter Component
const AnimatedCounter = ({ end, label, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center" data-testid={`stat-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ fontFamily: 'Raleway', color: '#1AAC8B' }}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  );
};

// Section Animation Wrapper
const AnimatedSection = ({ children, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
};

function HomePage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Handle scroll to update active nav
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "hospital", "corporate", "wellness", "plans", "team", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const response = await axios.post(`${API}/contact`, formData);
      setFormStatus({
        type: "success",
        message: "✅ Thank you! We'll be in touch soon!"
      });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "❌ Something went wrong. Please try again or email us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Partner logos data
  const healthcarePartners = [
    "Saifee Hospital", "Apollo Pharmacy", "Metropolis", "Dr Lal PathLabs",
    "Wellness Forever", "Healthians", "Agilus Diagnostics", "Sabka Dentist",
    "Suburban Diagnostics", "Redcliffe Labs", "Global 5 Hospital", "Pathkind Labs"
  ];

  const wellnessPartners = [
    "Jawed Habib", "Tattva Spa", "Four Fountains Spa", "Bodhi Wellness",
    "Thai Elements", "Myron Wellness", "Body Temple"
  ];

  // Team data - Leadership only (Kashyap and Yamini)
  const teamMembers = [
    {
      name: "Kashyap Thakkar",
      role: "Founder & Director",
      initials: "KT",
      bio: "Serial entrepreneur leading business strategy, partnerships & revenue growth with vision to build India's most trusted preventive healthcare ecosystem.",
      linkedin: "https://www.linkedin.com/in/kashyapkthakkar",
      photo: "/team/kashyaap.jpeg"
    },
    {
      name: "Yamini Dove",
      role: "Co-Founder & Director",
      initials: "YD",
      bio: "Dynamic professional with 8+ years operations experience, leading fulfillment, onboarding & service excellence with passion and precision.",
      linkedin: "https://www.linkedin.com/in/yamini-dove-889887224",
      photo: "/team/yamini.jpeg"
    }
  ];

  // Plans data
  const plans = [
    { name: "Health Save", icon: "💚" },
    { name: "Health Save Plus", icon: "🌿" },
    { name: "Health Save Prime", icon: "✨" },
    { name: "Health Save Pro", icon: "🏆", featured: true },
    { name: "Pro Plus", icon: "💎" },
    { name: "Health Save Max", icon: "👑" }
  ];

  return (
    <div className="App page-wrapper">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass-card"
        style={{ backdropFilter: 'blur(20px)' }}
        data-testid="main-navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2" data-testid="logo">
              <img src="/logo.png" alt="HealthismPlus" className="h-10 w-10" />
              <span className="text-xl font-extrabold" style={{ fontFamily: 'Raleway' }}>
                healthism<span style={{ color: '#1AAC8B' }}>+</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {["About", "Hospital", "Corporate", "Wellness", "Plans", "Team", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link text-sm font-medium ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                  data-testid={`nav-${item.toLowerCase()}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mobile-menu"
          data-testid="mobile-menu"
        >
          {["About", "Hospital", "Corporate", "Wellness", "Plans", "Team", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-2xl font-bold nav-link"
              data-testid={`mobile-nav-${item.toLowerCase()}`}
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}

      {/* Hero Section */}
      <section
        id="about"
        className="hero-mesh-gradient min-h-screen pt-24 pb-12 px-6 md:px-12 relative overflow-hidden"
        data-testid="hero-section"
      >
        <div className="dot-grid-pattern"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Centered Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1AAC8B] mb-6" data-testid="hero-badge">
              <span className="pulse-dot w-2 h-2 rounded-full bg-[#1AAC8B]"></span>
              <span className="text-sm text-[#1AAC8B] font-medium">India's Leading Health-Tech Platform</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-4xl mx-auto"
              style={{ fontFamily: 'Raleway' }}
              data-testid="hero-heading"
            >
              Your Complete Digital{" "}
              <span className="gradient-text">Healthcare & Wellness</span>{" "}
              Ecosystem
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Merriweather' }}
              data-testid="hero-subtext"
            >
              Graceful Health · Preventive Living · Empowered Wellness. Less Paperwork, More Patient Care.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
                data-testid="hero-cta-demo"
              >
                <span>Book a Demo</span>
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://play.google.com/store/apps/details?id=com.healthismplus.customer&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center"
                data-testid="hero-cta-download"
              >
                <span>Download App</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Feature Cards - 3 Column Grid Below Hero */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl shimmer text-center"
              data-testid="hero-card-hospital"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl mb-3 inline-block"
              >
                🏥
              </motion.div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Raleway' }}>Smart Hospital Dashboard</h3>
              <p className="text-sm text-white/70">Live OPD · IPD · ICU tracking</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl shimmer text-center"
              data-testid="hero-card-ai"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl mb-3 inline-block"
              >
                🤖
              </motion.div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Raleway' }}>AI Virtual Receptionist</h3>
              <p className="text-sm text-white/70">Hindi, English & Marathi voice booking</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 rounded-2xl shimmer text-center"
              data-testid="hero-card-locker"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl mb-3 inline-block"
              >
                💊
              </motion.div>
              <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Raleway' }}>Digital Health Locker</h3>
              <p className="text-sm text-white/70">ABHA-integrated health records</p>
            </motion.div>
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/10"
            data-testid="hero-stats"
          >
            <AnimatedCounter end={50000} suffix="+" label="Active Users" />
            <AnimatedCounter end={1200} suffix="+" label="Trusted Partners" />
            <AnimatedCounter end={700} suffix="+" label="Healthcare Experts" />
            <AnimatedCounter end={50} suffix="M+" label="Savings Generated" prefix="₹" />
          </motion.div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 px-6 md:px-12" style={{ background: '#F4F8F7' }} data-testid="usp-section">
        <AnimatedSection className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-[#1AAC8B]"></div>
              <span className="text-sm uppercase tracking-[0.2em] font-semibold" style={{ color: '#1AAC8B' }}>WHY CHOOSE US</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: 'Raleway', color: '#091A3A' }} data-testid="usp-heading">
              Built Around What Matters Most
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: "💰", title: "Affordable & Accessible", desc: "Save 20-70% on healthcare services with trusted partner network" },
              { icon: "🔗", title: "One Connected Platform", desc: "Seamlessly integrates hospitals, wellness centers, and health experts" },
              { icon: "📊", title: "Data Empowerment", desc: "ABHA-integrated digital health locker with complete health history" },
              { icon: "🎮", title: "Gamified Prevention", desc: "12-week Fad 2 Fit program making wellness engaging and achievable" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, rotateZ: i % 2 === 0 ? 2 : -2 }}
                className="bg-white rounded-3xl p-6 card-hover shimmer"
                style={{ border: '1px solid rgba(26, 172, 139, 0.15)' }}
                data-testid={`usp-card-${i}`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="text-4xl mb-3"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Raleway', color: '#091A3A' }}>{item.title}</h3>
                <p className="text-sm text-[#6B7A99]" style={{ fontFamily: 'Merriweather' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Hospital Management Section */}
      <section id="hospital" className="py-16 px-6 md:px-12 bg-white" data-testid="hospital-section">
        <AnimatedSection className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Features */}
            <motion.div variants={staggerContainer}>
              <motion.div variants={fadeUp} className="mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-8 bg-[#1AAC8B]"></div>
                  <span className="text-sm uppercase tracking-[0.2em] font-semibold" style={{ color: '#1AAC8B' }}>HOSPITAL SOLUTIONS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: 'Raleway', color: '#091A3A' }} data-testid="hospital-heading">
                  Complete Hospital Management
                </h2>
              </motion.div>

              {[
                { title: "Complete Hospital Administration", desc: "Unified system for OPD, IPD, ICU, and OT management" },
                { title: "AI Virtual Receptionist & Speak Bot", desc: "Multi-language voice booking in Hindi, English & Marathi" },
                { title: "Advanced Clinical Assistance for Doctors", desc: "Smart prescriptions, voice notes, and AI-powered suggestions" },
                { title: "IPD & Ward Management", desc: "Real-time patient tracking, medication management, and digital handovers" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex gap-4 mb-4 p-4 rounded-2xl transition-all duration-300 hover:border-l-4 hover:border-[#1AAC8B] hover:bg-[#F4F8F7]"
                  data-testid={`hospital-feature-${i}`}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #1AAC8B, #22C9A5)' }}
                    >
                      <span className="text-white text-lg">✓</span>
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Raleway', color: '#091A3A' }}>{feature.title}</h3>
                    <p className="text-sm text-[#6B7A99]">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right - Dashboard Mockup */}
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="rounded-[32px] p-6 shadow-2xl shimmer"
              style={{ background: 'linear-gradient(135deg, #091A3A, #0F2A5C)' }}
              data-testid="hospital-dashboard"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-1" style={{ fontFamily: 'Raleway' }}>Live Hospital Dashboard</h3>
                <p className="text-white/70 text-xs">Real-time operational insights</p>
              </div>

              <div className="space-y-3">
                <motion.div whileHover={{ scale: 1.03 }} className="glass-card p-4 rounded-2xl">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-white/70">Live Occupancy</span>
                    <span className="text-2xl font-extrabold" style={{ fontFamily: 'Raleway', color: '#1AAC8B' }}>84%</span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <motion.span whileHover={{ scale: 1.1 }} className="px-2 py-1 rounded-full text-xs" style={{ background: 'rgba(26, 172, 139, 0.2)', color: '#22C9A5' }}>OPD: 42</motion.span>
                    <motion.span whileHover={{ scale: 1.1 }} className="px-2 py-1 rounded-full text-xs" style={{ background: 'rgba(26, 172, 139, 0.2)', color: '#22C9A5' }}>IPD: 18</motion.span>
                    <motion.span whileHover={{ scale: 1.1 }} className="px-2 py-1 rounded-full text-xs" style={{ background: 'rgba(26, 172, 139, 0.2)', color: '#22C9A5' }}>ICU: 6</motion.span>
                    <motion.span whileHover={{ scale: 1.1 }} className="px-2 py-1 rounded-full text-xs" style={{ background: 'rgba(26, 172, 139, 0.2)', color: '#22C9A5' }}>OT: 3</motion.span>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} className="glass-card p-4 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-white/70 mb-1">Appointments Today</div>
                      <div className="text-2xl font-extrabold" style={{ fontFamily: 'Raleway' }}>136</div>
                    </div>
                    <div className="text-[#1AAC8B] text-sm font-semibold">↑ 12%</div>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} className="glass-card p-4 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-white/70 mb-1">Billing Processed</div>
                      <div className="text-2xl font-extrabold" style={{ fontFamily: 'Raleway' }}>₹2.4L</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-4 h-1 rotating-border rounded-full"></div>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* Corporate Solutions Section */}
      <section id="corporate" className="py-16 px-6 md:px-12" style={{ background: '#091A3A' }} data-testid="corporate-section">
        <AnimatedSection className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-[#1AAC8B]"></div>
              <span className="text-sm uppercase tracking-[0.2em] font-semibold" style={{ color: '#1AAC8B' }}>FOR BUSINESSES</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ fontFamily: 'Raleway' }} data-testid="corporate-heading">
              Corporate Wellness Solutions
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">Transform employee health with our comprehensive B2B platform</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: "🏦", title: "Digital Health Locker", desc: "ABHA-integrated personal health records for all employees" },
              { icon: "📱", title: "Telehealth Capabilities", desc: "Virtual consultations with certified healthcare professionals" },
              { icon: "🌿", title: "Co-branded Ecosystem", desc: "White-labeled mobile app with your company branding" },
              { icon: "🧘", title: "Corporate Wellness Programs", desc: "Customized fitness challenges and lifestyle interventions" },
              { icon: "🔬", title: "Health Checkup Camps", desc: "On-site and virtual health screening camps for teams" },
              { icon: "📈", title: "Health Analytics Dashboard", desc: "Data-driven insights on employee wellness metrics" }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, rotateZ: i % 2 === 0 ? 1 : -1 }}
                className="glass-card-hover p-6 rounded-3xl shimmer"
                style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}
                data-testid={`corporate-card-${i}`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl mb-3"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Raleway' }}>{item.title}</h3>
                <p className="text-sm text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Fad 2 Fit Gamification Section */}
      <section id="wellness" className="py-16 px-6 md:px-12" style={{ background: '#F4F8F7' }} data-testid="wellness-section">
        <AnimatedSection className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Timeline */}
            <motion.div variants={staggerContainer} className="relative">
              <motion.div variants={fadeUp} className="mb-8">
                <div className="inline-flex items-center gap-3 mb-3">
                  <div className="h-0.5 w-8 bg-[#1AAC8B]"></div>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: '#1AAC8B' }}>12-WEEK JOURNEY</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: 'Raleway', color: '#091A3A' }} data-testid="wellness-heading">
                  Fad 2 Fit Gamification
                </h2>
              </motion.div>

              <div className="relative pl-12">
                <div className="timeline-line"></div>

                {[
                  { stage: 1, title: "Water Challenge", steps: "7,000 steps", time: "30 mins" },
                  { stage: 2, title: "Dump the Sugar", steps: "7,500 steps", time: "35 mins" },
                  { stage: 6, title: "Intuitive Eating", steps: "9,500 steps", time: "50 mins" },
                  { stage: 12, title: "Walk It Off", steps: "12,500 steps", time: "60 mins" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="mb-6 flex items-start gap-4"
                    data-testid={`wellness-stage-${item.stage}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="timeline-node flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white"
                      style={{ background: 'linear-gradient(135deg, #1AAC8B, #22C9A5)', fontFamily: 'Raleway' }}
                    >
                      {item.stage}
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Raleway', color: '#091A3A' }}>Stage {item.stage}: {item.title}</h3>
                      <p className="text-[#6B7A99] text-sm">{item.steps} · {item.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - HealthismPlus Kart */}
            <motion.div variants={staggerContainer}>
              <motion.div variants={fadeUp} className="mb-6">
                <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ fontFamily: 'Raleway', color: '#091A3A' }}>
                  HealthismPlus Kart
                </h2>
                <p className="text-sm text-[#6B7A99]">Save on Everything Health & Wellness</p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  { value: "20%+", label: "Pharmacies & Clinics" },
                  { value: "10–50%", label: "Diagnostic Centers" },
                  { value: "50%", label: "Wellness Services" },
                  { value: "70%", label: "Post-plan Diagnostics" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ scale: 1.08, rotateZ: i % 2 === 0 ? 3 : -3 }}
                    className="bg-white rounded-3xl p-6 text-center shadow-lg shimmer"
                    data-testid={`kart-discount-${i}`}
                  >
                    <div className="text-4xl font-extrabold mb-1" style={{ fontFamily: 'Raleway', color: '#1AAC8B' }}>
                      {item.value}
                    </div>
                    <div className="text-xs text-[#6B7A99]">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* Subscription Plans Section */}
      <section id="plans" className="py-16 px-6 md:px-12 bg-white overflow-hidden" data-testid="plans-section">
        <AnimatedSection className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-[#1AAC8B]"></div>
              <span className="text-sm uppercase tracking-[0.2em] font-semibold" style={{ color: '#1AAC8B' }}>PRICING</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: 'Raleway', color: '#091A3A' }} data-testid="plans-heading">
              Choose Your Health Save Plan
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="flex gap-6 overflow-x-auto pb-8 px-4"
            style={{ scrollbarWidth: 'thin' }}
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: plan.featured ? 1.05 : 1.08, y: -10 }}
                className={`flex-shrink-0 w-72 p-6 rounded-3xl text-center shimmer ${plan.featured ? 'featured-plan' : 'bg-white'}`}
                style={!plan.featured ? { border: '1.5px solid rgba(26, 172, 139, 0.15)' } : {}}
                data-testid={`plan-card-${i}`}
              >
                {plan.featured && (
                  <div className="mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl mb-3"
                >
                  {plan.icon}
                </motion.div>
                <h3 className="text-xl font-extrabold mb-4" style={{ fontFamily: 'Raleway', color: plan.featured ? 'white' : '#091A3A' }}>
                  {plan.name}
                </h3>
                <ul className="space-y-2 text-sm text-left mb-6" style={{ color: plan.featured ? 'rgba(255,255,255,0.8)' : '#6B7A99' }}>
                  <li>✓ Digital Health Locker</li>
                  <li>✓ Discounted Healthcare Services</li>
                  <li>✓ Wellness Program Access</li>
                  <li>✓ 24/7 Telehealth Support</li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('contact')}
                  className={`w-full py-3 rounded-full font-semibold transition-all ${plan.featured ? 'bg-white text-[#091A3A] hover:bg-white/90' : 'bg-[#1AAC8B] text-white hover:bg-[#22C9A5]'}`}
                  data-testid={`plan-cta-${i}`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Partner Network Section */}
      <section className="py-16 px-6 md:px-12" style={{ background: '#F4F8F7' }} data-testid="partners-section">
        <AnimatedSection className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-[#1AAC8B]"></div>
              <span className="text-sm uppercase tracking-[0.2em] font-semibold" style={{ color: '#1AAC8B' }}>TRUSTED BY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: 'Raleway', color: '#091A3A' }} data-testid="partners-heading">
              Our Partner Network
            </h2>
          </motion.div>

          {/* Healthcare Partners Marquee */}
          <div className="mb-6 overflow-hidden">
            <div className="flex gap-3 marquee">
              {[...healthcarePartners, ...healthcarePartners].map((partner, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 px-5 py-2 bg-white rounded-full border border-[#1AAC8B]/20 font-semibold text-sm text-[#091A3A] hover:bg-[#1AAC8B] hover:text-white transition-all cursor-pointer"
                  style={{ fontFamily: 'Merriweather' }}
                  data-testid={`healthcare-partner-${i}`}
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Wellness Partners Marquee */}
          <div className="mb-10 overflow-hidden">
            <div className="flex gap-3 marquee" style={{ animationDirection: 'reverse' }}>
              {[...wellnessPartners, ...wellnessPartners].map((partner, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 px-5 py-2 bg-white rounded-full border border-[#1AAC8B]/20 font-semibold text-sm text-[#091A3A] hover:bg-[#1AAC8B] hover:text-white transition-all cursor-pointer"
                  style={{ fontFamily: 'Merriweather' }}
                  data-testid={`wellness-partner-${i}`}
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recognition Badges */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-4 mt-12"
          >
            {[
              { emoji: "🇮🇳", text: "Recognised by Startup India" },
              { emoji: "🏆", text: "Awarded a Grant by Startup India" },
              { emoji: "🌱", text: "Incubated by JITO Innovation Foundation" }
            ].map((badge, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-5 rounded-2xl text-center shimmer"
                style={{ background: 'linear-gradient(135deg, #1AAC8B, #22C9A5)' }}
                data-testid={`recognition-badge-${i}`}
              >
                <div className="text-3xl mb-1">{badge.emoji}</div>
                <p className="font-semibold text-sm">{badge.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-6 md:px-12 bg-white" data-testid="team-section">
        <AnimatedSection className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-0.5 w-8 bg-[#1AAC8B]"></div>
              <span className="text-sm uppercase tracking-[0.2em] font-semibold" style={{ color: '#1AAC8B' }}>LEADERSHIP</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ fontFamily: 'Raleway', color: '#091A3A' }} data-testid="team-heading">
              Meet Our Leadership
            </h2>
            <p className="text-[#6B7A99]">The visionaries behind HealthismPlus</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10"
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-3xl overflow-hidden card-hover shimmer"
                style={{ border: '1px solid rgba(26, 172, 139, 0.15)' }}
                data-testid={`team-member-${i}`}
              >
                <div className="h-20" style={{ background: 'linear-gradient(135deg, #1AAC8B, #22C9A5)' }}></div>
                <div className="px-5 pb-5 text-center -mt-12">
                  {member.photo ? (
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={member.photo}
                      alt={member.name}
                      className="w-36 h-36 mx-auto rounded-full object-cover object-top border-4 border-white mb-3"
                    />
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-36 h-36 mx-auto rounded-full flex items-center justify-center text-4xl font-extrabold border-4 border-white mb-3"
                      style={{ background: 'white', color: '#1AAC8B', fontFamily: 'Raleway' }}
                    >
                      {member.initials}
                    </motion.div>
                  )}
                  <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Raleway', color: '#091A3A' }}>
                    {member.name}
                  </h3>
                  <p className="text-xs mb-2" style={{ color: '#1AAC8B' }}>{member.role}</p>
                  <p className="text-xs text-[#6B7A99] leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Show More Button */}
          <motion.div
            variants={fadeUp}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/team')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-all"
              style={{ 
                background: 'linear-gradient(135deg, #1AAC8B, #22C9A5)',
                color: 'white',
                fontFamily: 'Raleway',
                boxShadow: '0 4px 20px rgba(26, 172, 139, 0.4)'
              }}
              data-testid="view-full-team-button"
            >
              View Full Team
              <ArrowRight size={20} />
            </motion.button>
            <p className="text-sm text-[#6B7A99] mt-3">
              Meet all our team members, advisors, and consultants
            </p>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-6 md:px-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1AAC8B, #0F2A5C)' }}
        data-testid="contact-section"
      >
        <AnimatedSection className="max-w-4xl mx-auto relative z-10">
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ fontFamily: 'Raleway' }} data-testid="contact-heading">
              Let's Connect and Build the Future of Preventive Health
            </h2>
            <p className="text-white/75 text-base">Get in touch with our team to explore how we can help</p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-3xl p-6 md:p-10 max-w-2xl mx-auto shimmer"
            data-testid="contact-form"
          >
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                    data-testid="contact-input-name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="form-input"
                    data-testid="contact-input-email"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="form-input"
                    data-testid="contact-input-phone"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    required
                    className="form-input"
                    data-testid="contact-input-company"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    required
                    className="form-input"
                    rows="4"
                    data-testid="contact-input-message"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full font-bold text-lg bg-white transition-all hover:scale-[1.02]"
                  style={{ color: '#1AAC8B', fontFamily: 'Raleway' }}
                  data-testid="contact-submit-button"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>

                {formStatus.message && (
                  <div
                    className={`text-center p-4 rounded-xl ${formStatus.type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'}`}
                    data-testid="contact-form-status"
                  >
                    {formStatus.message}
                  </div>
                )}
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-10 grid md:grid-cols-3 gap-5 text-center">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="mailto:info@healthismplus.com"
                className="flex flex-col items-center gap-2 hover:text-[#1AAC8B] transition-colors"
                data-testid="contact-email"
              >
                <Mail size={20} />
                <span className="text-xs">info@healthismplus.com</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="tel:+919594964321"
                className="flex flex-col items-center gap-2 hover:text-[#1AAC8B] transition-colors"
                data-testid="contact-phone"
              >
                <Phone size={20} />
                <span className="text-xs">+91 95949 64321</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="https://www.healthismplus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 hover:text-[#1AAC8B] transition-colors"
                data-testid="contact-website"
              >
                <Globe size={20} />
                <span className="text-xs">www.healthismplus.com</span>
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-12" style={{ background: '#091A3A' }} data-testid="footer">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="HealthismPlus" className="h-12 w-12" />
              <span className="text-2xl font-extrabold" style={{ fontFamily: 'Raleway' }}>
                healthism<span style={{ color: '#1AAC8B' }}>+</span>
              </span>
            </div>

            {/* Nav Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {["About", "Hospital", "Corporate", "Wellness", "Plans", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-white/70 hover:text-[#1AAC8B] transition-colors"
                  data-testid={`footer-nav-${item.toLowerCase()}`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => navigate('/team')}
                className="text-sm text-white/70 hover:text-[#1AAC8B] transition-colors"
                data-testid="footer-nav-team"
              >
                Team
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href="https://www.linkedin.com/company/healthism-plus-375901264"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'rgba(26, 172, 139, 0.2)', color: '#1AAC8B' }}
                data-testid="footer-linkedin"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href="https://www.instagram.com/healthismplus?igsh=MmtxZG43dmM4bm9r"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'rgba(26, 172, 139, 0.2)', color: '#1AAC8B' }}
                data-testid="footer-instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -3 }}
                href="https://www.facebook.com/profile.php?id=100081202249654"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'rgba(26, 172, 139, 0.2)', color: '#1AAC8B' }}
                data-testid="footer-facebook"
              >
                <Facebook size={20} />
              </motion.a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-white/10">
            <div className="text-sm text-white/50">
              © 2025 HealthismPlus Technologies Pvt. Ltd. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
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
