import { motion } from "framer-motion";
import { FolderHeart, Video, Smartphone, Dumbbell, Stethoscope, BarChart3, Heart, Brain, Apple, Sparkles, TrendingDown, Users, Wallet, Calendar } from "lucide-react";

const CorporateContent = ({ onContactClick }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const corporateSolutions = [
    { icon: <FolderHeart size={20} />, title: "Digital Health Locker", desc: "ABHA-integrated personal health records for all employees" },
    { icon: <Video size={20} />, title: "Telehealth Capabilities", desc: "Virtual consultations with certified healthcare professionals" },
    { icon: <Smartphone size={20} />, title: "Co-branded Ecosystem", desc: "White-labeled mobile app with your company branding" },
    { icon: <Dumbbell size={20} />, title: "Corporate Wellness Programs", desc: "Customized fitness challenges and lifestyle interventions" },
    { icon: <Stethoscope size={20} />, title: "Health Checkup Camps", desc: "On-site and virtual health screening camps for teams" },
    { icon: <BarChart3 size={20} />, title: "Health Analytics Dashboard", desc: "Data-driven insights on employee wellness metrics" }
  ];

  const wellnessPillars = [
    { icon: <Heart size={20} />, title: "Physical Health", desc: "Health checkups, fitness tracking, preventive care" },
    { icon: <Brain size={20} />, title: "Mental Well-Being", desc: "Counseling, stress management, mindfulness programs" },
    { icon: <Apple size={20} />, title: "Nutrition", desc: "Diet consultations, meal planning, nutritional guidance" },
    { icon: <Sparkles size={20} />, title: "Yoga & Zen", desc: "Virtual yoga sessions, meditation, wellness retreats" }
  ];

  const campFeatures = [
    "Comprehensive health screening",
    "Vaccination drives",
    "Eye & dental checkups"
  ];

  const results = [
    { value: "-30%", label: "Reduced Absenteeism", desc: "Proactive care prevents long-term sick leaves and productivity dips." },
    { value: "85%", label: "Higher Participation", desc: "Engaging digital tools ensure maximum enrollment across teams." },
    { value: "15%", label: "Insurance Savings", desc: "Healthier pools lead to lower premiums and corporate healthcare costs." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Healthier Employees Section */}
      <section className="py-20 px-6 lg:px-12 bg-white" data-testid="corporate-intro-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Raleway' }}>
                Healthier Employees.<br /><span className="text-[#13B58E]">Stronger Business.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#6B7A99] mb-6 leading-relaxed">
                Your employees' health directly impacts your bottom line. A healthier workforce means reduced absenteeism, higher engagement, improved productivity, and long-term cost savings. Healthcare isn't an expense—it's an investment in your most valuable asset: your people.
              </motion.p>
              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                onClick={onContactClick}
                className="px-8 py-4 rounded-full font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #13B58E, #22C9A5)', fontFamily: 'Raleway' }}
              >
                Talk to our Corporate Team
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#13B58E]/20 to-[#0F2A5C]/20 rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#13B58E]/20 flex items-center justify-center">
                    <Users className="text-[#13B58E]" size={48} />
                  </div>
                  <p className="text-[#6B7A99] font-medium">Corporate Wellness</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Wellness Solutions */}
      <section className="py-20 px-6 lg:px-12 bg-[#0F1A19]" data-testid="corporate-solutions-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Raleway' }}>
              Corporate Wellness Solutions
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {corporateSolutions.map((solution, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.08)' }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all"
                data-testid={`corporate-solution-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#13B58E]/20 flex items-center justify-center text-[#13B58E] mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Raleway' }}>{solution.title}</h3>
                <p className="text-sm text-white/60">{solution.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wellness Pillars */}
      <section className="py-20 px-6 lg:px-12 bg-white" data-testid="wellness-pillars-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Raleway' }}>
              Wellness That's Built Around Your People
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#6B7A99] max-w-2xl">
              Comprehensive wellness programs designed for the modern workforce.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {wellnessPillars.map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-[#F5F5F5] rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-[#13B58E]/10 flex items-center justify-center text-[#13B58E] mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>{pillar.title}</h3>
                <p className="text-sm text-[#6B7A99]">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Health Camps */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#13B58E] to-[#0F2A5C] rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope size={24} />
                <span className="font-semibold">health camp</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Calendar size={20} />
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Users size={20} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h3 variants={fadeUp} className="text-2xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Raleway' }}>
                Camps That Come to Your Campus
              </motion.h3>
              <motion.p variants={fadeUp} className="text-[#6B7A99] mb-6">
                We bring healthcare directly to your office. Health checkups, vaccination camps, wellness workshops—all designed for minimal disruption and maximum impact.
              </motion.p>
              <motion.ul variants={fadeUp} className="space-y-3 mb-6">
                {campFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#6B7A99]">
                    <div className="w-2 h-2 rounded-full bg-[#13B58E]" />
                    {feature}
                  </li>
                ))}
              </motion.ul>
              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                onClick={onContactClick}
                className="px-6 py-3 rounded-full font-semibold text-[#13B58E] border-2 border-[#13B58E] hover:bg-[#13B58E] hover:text-white transition-colors"
                style={{ fontFamily: 'Raleway' }}
              >
                Book a camp for your office
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-20 px-6 lg:px-12 bg-[#F5F5F5]" data-testid="results-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Raleway' }}>
              Real Results
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#6B7A99]">
              That translate directly to your organizational efficiency and bottom line.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {results.map((result, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 text-center"
                data-testid={`result-card-${i}`}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-[#13B58E] mb-2" style={{ fontFamily: 'Raleway' }}>
                  {result.value}
                </div>
                <div className="font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>{result.label}</div>
                <p className="text-sm text-[#6B7A99]">{result.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 lg:px-12" style={{ background: 'linear-gradient(135deg, #13B58E 0%, #0F2A5C 100%)' }} data-testid="corporate-cta-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Raleway' }}>
              Let's Build a Healthier<br />Workforce Together
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of forward-thinking companies using HealthismPlus to care for their most valuable asset—their people.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContactClick}
              className="px-8 py-4 bg-white text-[#13B58E] rounded-full font-bold text-lg"
              style={{ fontFamily: 'Raleway' }}
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CorporateContent;
