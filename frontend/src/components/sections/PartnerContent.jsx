import { motion } from "framer-motion";
import { Check, X, Building2, Stethoscope, FlaskConical, Pill, Activity, Clock, Database, Headphones, Settings, BarChart3, Phone, FileText, Rocket } from "lucide-react";

const PartnerContent = ({ onContactClick }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const providerTypes = [
    { id: "doctors", label: "Doctors", icon: <Stethoscope size={20} /> },
    { id: "clinics", label: "Clinics", icon: <Building2 size={20} /> },
    { id: "hospitals", label: "Hospitals", icon: <Activity size={20} /> },
    { id: "diagnostics", label: "Diagnostics", icon: <FlaskConical size={20} /> },
    { id: "pharmacies", label: "Pharmacies", icon: <Pill size={20} /> }
  ];

  const doctorFeatures = [
    "Get discovered by patients actively searching for specialists in your area through our verified marketplace.",
    "Accept appointments, manage your schedule, and send automated reminders – all without a receptionist.",
    "Write prescriptions by typing, scribbling on a tablet, or simply dictating via voice notes.",
    "Use AI-powered clinical suggestions and a conversational assistant to support faster, safer decisions.",
    "Conduct virtual consultations and remote follow-ups through built-in telehealth capabilities.",
    "Build your reputation with verified patient reviews and ratings that reflect your quality of care."
  ];

  const comparisonData = [
    { feature: "Verified Lead Generation", directory: false, healthism: true },
    { feature: "Integrated HMS Software", directory: false, healthism: true },
    { feature: "WhatsApp Appointment Booking", directory: false, healthism: true },
    { feature: "Real-time Revenue Tracking", directory: false, healthism: true },
    { feature: "Network Wide Referrals", directory: "Basic", healthism: true },
    { feature: "Automated Claims Support", directory: false, healthism: true },
    { feature: "Patient Engagement CRM", directory: false, healthism: true },
    { feature: "Digital Marketing Tools", directory: "Paid Extras", healthism: true },
    { feature: "Dedicated Key Account Mgr", directory: false, healthism: true },
    { feature: "Regulatory Compliance Kits", directory: false, healthism: true }
  ];

  const implementationFeatures = [
    {
      icon: <Settings size={20} />,
      title: "Effortless Implementation",
      desc: "Our team handles the data migration and staff training. You focus on patients, we focus on the transition."
    },
    {
      icon: <Database size={20} />,
      title: "Scalable Architecture",
      desc: "Built for practices of all sizes, from solo practitioners to multi-location hospital chains."
    },
    {
      icon: <Headphones size={20} />,
      title: "Continuous Support",
      desc: "24/7 technical assistance and dedicated account managers for premium partners."
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Advanced Analytics",
      desc: "Deep insights into patient demographics, appointment patterns, revenue trends, and growth opportunities."
    }
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: "Discovery Call",
      desc: "We understand your specific clinical workflows and requirements."
    },
    {
      step: 2,
      title: "Data Migration & Configuration",
      desc: "Seamless transfer of your existing patient records to the HMS."
    },
    {
      step: 3,
      title: "Go-Live & Training",
      desc: "Expert-led sessions for your medical and administrative staff."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Platform For Healthcare Providers */}
      <section className="py-20 px-6 lg:px-12 bg-white" data-testid="partner-intro-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Raleway' }}>
                The Platform For<br /><span className="text-[#13B58E]">Healthcare Providers</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[#6B7A99] mb-6 leading-relaxed">
                Whether you're an independent doctor, a diagnostic lab, a pharmacy, or a hospital – HealthismPlus gives you a platform to grow your reach, streamline your operations, and build lasting relationships with patients who are already looking for you.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={onContactClick}
                  className="px-6 py-3 rounded-full font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #13B58E, #22C9A5)', fontFamily: 'Raleway' }}
                >
                  Sign in to HMS
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={onContactClick}
                  className="px-6 py-3 rounded-full font-semibold text-[#1A1A1A] border-2 border-gray-200 hover:border-[#13B58E] hover:text-[#13B58E] transition-colors"
                  style={{ fontFamily: 'Raleway' }}
                >
                  Contact Us
                </motion.button>
              </motion.div>
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
                    <Stethoscope className="text-[#13B58E]" size={48} />
                  </div>
                  <p className="text-[#6B7A99] font-medium">Healthcare Partners</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tailored for Your Excellence */}
      <section className="py-20 px-6 lg:px-12 bg-[#F5F5F5]" data-testid="tailored-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Raleway' }}>
              Tailored for Your Excellence
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Provider Type Tabs */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-2"
            >
              {providerTypes.map((type, i) => (
                <motion.button
                  key={type.id}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${i === 0 ? 'bg-[#13B58E] text-white' : 'bg-white text-[#6B7A99] hover:bg-gray-50'}`}
                  style={{ fontFamily: 'Raleway' }}
                >
                  {type.icon}
                  <span className="font-medium">{type.label}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Features for Doctors */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-3 space-y-4"
            >
              {doctorFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 bg-white rounded-xl p-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#13B58E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-[#13B58E]" size={14} />
                  </div>
                  <p className="text-[#6B7A99]">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 lg:px-12 bg-white" data-testid="comparison-section">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Raleway' }}>
              Why HealthismPlus Over Everything Else
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F5F5] rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-3 bg-white border-b border-gray-200">
              <div className="p-4 font-bold text-[#1A1A1A]" style={{ fontFamily: 'Raleway' }}>Key Features</div>
              <div className="p-4 font-bold text-center text-[#6B7A99]" style={{ fontFamily: 'Raleway' }}>Just a Directory</div>
              <div className="p-4 font-bold text-center text-[#13B58E]" style={{ fontFamily: 'Raleway' }}>HealthismPlus</div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-gray-200 last:border-0">
                <div className="p-4 text-[#6B7A99] text-sm">{row.feature}</div>
                <div className="p-4 flex justify-center items-center">
                  {row.directory === false ? (
                    <X className="text-red-400" size={18} />
                  ) : (
                    <span className="text-[#6B7A99] text-sm">{row.directory}</span>
                  )}
                </div>
                <div className="p-4 flex justify-center items-center">
                  <Check className="text-[#13B58E]" size={18} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Implementation Features */}
      <section className="py-20 px-6 lg:px-12 bg-[#0F1A19]" data-testid="implementation-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {implementationFeatures.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className={`rounded-2xl p-6 ${i === 0 ? 'bg-gradient-to-br from-[#13B58E] to-[#0F2A5C] text-white' : 'bg-white/5 border border-white/10 text-white'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${i === 0 ? 'bg-white/20' : 'bg-[#13B58E]/20'}`}>
                  <span className={i === 0 ? 'text-white' : 'text-[#13B58E]'}>{feature.icon}</span>
                </div>
                <h3 className="font-bold mb-2" style={{ fontFamily: 'Raleway' }}>{feature.title}</h3>
                <p className={`text-sm ${i === 0 ? 'text-white/80' : 'text-white/60'}`}>{feature.desc}</p>
                {i === 0 && (
                  <button 
                    onClick={onContactClick}
                    className="mt-4 text-sm font-semibold hover:underline"
                  >
                    Learn Our Process →
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className="py-20 px-6 lg:px-12 bg-white" data-testid="onboarding-section">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Raleway' }}>
              Onboard in 5 business days
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#6B7A99]">
              Rapid deployment without interrupting your service.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-6"
            >
              {onboardingSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#13B58E] flex items-center justify-center text-white font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1A1A] mb-1" style={{ fontFamily: 'Raleway' }}>{step.title}</h3>
                    <p className="text-sm text-[#6B7A99]">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] rounded-2xl p-8"
            >
              <h3 className="font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: 'Raleway' }}>
                Book your discovery call
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-7 gap-2">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={i} className="text-center text-xs text-[#6B7A99] font-medium">{day}</div>
                  ))}
                  {[...Array(31)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`text-center py-2 text-sm rounded-lg cursor-pointer transition-colors ${i === 14 ? 'bg-[#13B58E] text-white' : 'hover:bg-gray-200'}`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={onContactClick}
                  className="w-full py-3 rounded-full font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #13B58E, #22C9A5)', fontFamily: 'Raleway' }}
                >
                  Schedule Meeting
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 lg:px-12" style={{ background: 'linear-gradient(135deg, #13B58E 0%, #0F2A5C 100%)' }} data-testid="partner-cta-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Raleway' }}>
              1,200+ Providers Have Already<br />Made the Move
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join the future of healthcare delivery. Your patients are waiting for you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={onContactClick}
              className="px-8 py-4 bg-white text-[#13B58E] rounded-full font-bold text-lg"
              style={{ fontFamily: 'Raleway' }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default PartnerContent;
