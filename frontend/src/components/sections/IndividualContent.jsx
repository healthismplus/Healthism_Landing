import { motion } from "framer-motion";
import { Calendar, Pill, FolderHeart, Dumbbell, Video, Check, FileText, Apple, Activity, MessageSquare, ArrowRight } from "lucide-react";

const IndividualContent = ({ onContactClick }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const providerTypes = [
    { label: "Hospitals", icon: "🏥" },
    { label: "Doctors", icon: "👨‍⚕️" },
    { label: "Pharmacies", icon: "💊" },
    { label: "Labs", icon: "🔬" },
    { label: "Yoga Centres", icon: "🧘" },
    { label: "Clinics", icon: "🏨" },
    { label: "Gym", icon: "💪" },
    { label: "Experts", icon: "👩‍⚕️" }
  ];

  const challengeStages = [
    { stage: 1, title: "Water Challenge", steps: "7,000 steps", time: "30 mins" },
    { stage: 2, title: "Dump the Sugar", steps: "7,500 steps", time: "35 mins" },
    { stage: 8, title: "Intuitive Eating", steps: "9,500 steps", time: "50 mins" },
    { stage: 12, title: "Walk It Off", steps: "12,500 steps", time: "60 mins" }
  ];

  const discounts = [
    { value: "20%+", label: "Pharmacies & Clinics" },
    { value: "10-50%", label: "Diagnostic Centers" },
    { value: "50%", label: "Wellness Services" },
    { value: "70%", label: "Post-plan Diagnostics" }
  ];

  const plans = [
    {
      name: "Health Save",
      price: "₹2,360",
      period: "/year",
      features: [
        "Access to Platform: Full Access",
        "Gamification: Full Access",
        "Virtual Diet Consultation: 3 Sessions Free",
        "Virtual GP Consultation: ₹99/session",
        "20% off on medicines",
        "Basic Blood Tests Included",
        "Digital Health Card: Free",
        "Family Plan add ons: Annual ₹499"
      ],
      featured: false
    },
    {
      name: "Health Save Pro",
      price: "₹17,700",
      period: "/year",
      features: [
        "Access to Platform: Full Access",
        "Gamification: Full Access",
        "Virtual Diet Consultation: Unlimited",
        "Virtual GP Consultation: 12 sessions/year",
        "Comprehensive Blood Panel",
        "Priority Booking",
        "Digital Health Card: Free",
        "Annual Physical Health Test Included"
      ],
      featured: true
    },
    {
      name: "Health Save Max",
      price: "₹17,700",
      period: "/year",
      features: [
        "Access to Platform: Full Access",
        "Gamification: Full Access",
        "Virtual Diet Consultation: Unlimited",
        "Virtual GP Consultation: Unlimited",
        "Full Body Health Checkup",
        "Specialist Consultations",
        "24/7 Priority Support",
        "Accidental Insurance up to ₹10,00,000"
      ],
      featured: false
    }
  ];

  const aiFeatures = [
    { icon: <MessageSquare size={18} />, title: "AI Dietician", desc: "Instant meal analysis and personalized nutrition plans." },
    { icon: <FileText size={18} />, title: "Prescription AI", desc: "Understand your medication with deep clinical insights." },
    { icon: <Activity size={18} />, title: "Health Report AI", desc: "Predictive analysis of your long-term health trends." },
    { icon: <Apple size={18} />, title: "Calorie Tracker AI", desc: "Log your daily activities with just a photo." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Everything Your Health Needs - Bento Grid */}
      <section className="py-16 px-6 lg:px-12 bg-white" data-testid="services-section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>
              Everything Your Health Needs,
            </motion.h2>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]" style={{ fontFamily: 'Raleway' }}>
              In One App.
            </motion.h2>
          </motion.div>

          {/* Bento Grid Layout */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-12 gap-4"
          >
            {/* Book Instantly - spans 4 cols */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="col-span-12 md:col-span-4 bg-[#F8FAFB] rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                <Calendar className="text-[#13B58E]" size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>Book Instantly</h3>
              <p className="text-sm text-[#6B7A99] mb-4 leading-relaxed">Skip the queue. Book appointments with top doctors across our 1,200+ partner network in seconds.</p>
              <button onClick={onContactClick} className="text-sm font-semibold text-[#13B58E] hover:underline inline-flex items-center gap-1">
                Book Appointment <ArrowRight size={14} />
              </button>
            </motion.div>

            {/* Order Medicines - Dark Card - spans 4 cols */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="col-span-12 md:col-span-4 bg-[#0D1B1A] rounded-2xl p-6 text-white relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <Pill className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Raleway' }}>Order Medicines & Tests</h3>
                <p className="text-sm text-white/60 mb-4 leading-relaxed">Quality healthcare delivered to your doorstep. Genuine medicines and NABL-accredited lab tests.</p>
                <button onClick={onContactClick} className="text-sm font-semibold text-[#13B58E] hover:underline inline-flex items-center gap-1">
                  Order Now <ArrowRight size={14} />
                </button>
              </div>
              <div className="absolute right-2 bottom-2 w-20 h-20 opacity-20">
                <img src="/assets/medical-supplies.png" alt="" className="w-full h-full object-contain" />
              </div>
            </motion.div>

            {/* Talk to Expert - spans 4 cols */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="col-span-12 md:col-span-4 bg-[#F8FAFB] rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                <Video className="text-[#13B58E]" size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>Talk to an Expert</h3>
              <p className="text-sm text-[#6B7A99] mb-4 leading-relaxed">Instant access to Doctors and Nutritionists via seamless chat or HD video calls.</p>
              <button onClick={onContactClick} className="text-sm font-semibold text-[#13B58E] hover:underline inline-flex items-center gap-1">
                Consult Now <ArrowRight size={14} />
              </button>
            </motion.div>

            {/* Digital Health Locker - spans 6 cols */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="col-span-12 md:col-span-6 bg-[#F8FAFB] rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                <FolderHeart className="text-[#13B58E]" size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>Digital Health Locker</h3>
              <p className="text-sm text-[#6B7A99] leading-relaxed">Securely store and share your medical reports and prescriptions 24/7.</p>
            </motion.div>

            {/* Fitness Challenges - spans 6 cols */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="col-span-12 md:col-span-6 bg-[#F8FAFB] rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                <Dumbbell className="text-[#13B58E]" size={20} />
              </div>
              <h3 className="text-lg font-bold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>Fitness Challenges</h3>
              <p className="text-sm text-[#6B7A99] leading-relaxed">Water intake tracking, step goals, and gamified health journeys with rewards.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Provider Network - Stats Section */}
      <section className="py-16 px-6 lg:px-12 bg-[#0D1B1A]" data-testid="providers-section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-1" style={{ fontFamily: 'Raleway' }}>
                1,200+ Providers.
              </h2>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5" style={{ fontFamily: 'Raleway' }}>
                One Membership.
              </h2>
              <p className="text-white/50 mb-8 max-w-md text-sm leading-relaxed">
                From emergency services to routine wellness, our network is carefully curated to bring you the best in medical care.
              </p>
              <div>
                <div className="text-4xl font-extrabold text-[#13B58E]" style={{ fontFamily: 'Raleway' }}>50,000+</div>
                <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Active Users</div>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-4 gap-3"
            >
              {providerTypes.map((type, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  className="bg-white/5 border border-white/10 rounded-xl p-3 text-center transition-all"
                >
                  <div className="text-xl mb-1">{type.icon}</div>
                  <div className="text-[10px] text-white/50 font-medium">{type.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fad 2 Fit & Kart */}
      <section className="py-16 px-6 lg:px-12 bg-white" data-testid="challenge-section">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Fad 2 Fit Challenge */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-5">
                <span className="text-xs text-[#13B58E] font-semibold tracking-wider uppercase">12-Week Program</span>
                <h3 className="text-2xl font-extrabold text-[#1A1A1A] mt-1" style={{ fontFamily: 'Raleway' }}>
                  Fad 2 Fit Challenge
                </h3>
              </motion.div>

              <div className="space-y-2">
                {challengeStages.map((stage, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 bg-[#F8FAFB] rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#0D1B1A] flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                      {stage.stage}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-[#13B58E] font-semibold uppercase tracking-wider">
                        Stage {stage.stage}: {stage.title}
                      </div>
                      <div className="text-xs text-[#6B7A99] mt-0.5">{stage.steps} • {stage.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                onClick={onContactClick}
                className="mt-5 px-5 py-2.5 rounded-full font-semibold text-white text-sm"
                style={{ background: '#13B58E', fontFamily: 'Raleway' }}
              >
                Take Challenge
              </motion.button>
            </motion.div>

            {/* HealthismPlus Kart */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-5">
                <h3 className="text-2xl font-extrabold text-[#1A1A1A]" style={{ fontFamily: 'Raleway' }}>
                  HealthismPlus Kart<span className="text-[#13B58E]">.</span>
                </h3>
                <p className="text-[#6B7A99] text-sm mt-1">Save on Everything Health & Wellness</p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 gap-3"
              >
                {discounts.map((discount, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#F8FAFB] rounded-xl p-4 text-center"
                  >
                    <div className="text-2xl font-extrabold text-[#13B58E] mb-0.5" style={{ fontFamily: 'Raleway' }}>
                      {discount.value}
                    </div>
                    <div className="text-[10px] text-[#6B7A99] font-medium">{discount.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-6 lg:px-12 bg-[#F8FAFB]" data-testid="pricing-section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>
              Choose Your Health Save Plan
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#6B7A99] text-sm">
              Simple, transparent pricing for every lifestyle.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-5"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-6 relative ${plan.featured ? 'bg-[#0D1B1A] text-white' : 'bg-white border border-gray-100'}`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider bg-[#13B58E]">
                    Most Popular
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Raleway' }}>{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-extrabold" style={{ fontFamily: 'Raleway' }}>{plan.price}</span>
                  <span className={`text-sm ${plan.featured ? 'text-white/50' : 'text-[#6B7A99]'}`}>{plan.period}</span>
                </div>
                <ul className="space-y-2 mb-5">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs">
                      <Check className="text-[#13B58E] flex-shrink-0 mt-0.5" size={14} />
                      <span className={plan.featured ? 'text-white/70' : 'text-[#6B7A99]'}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={onContactClick}
                  className={`w-full py-2.5 rounded-full font-semibold text-sm ${plan.featured ? 'bg-[#13B58E] text-white' : 'border border-gray-200 text-[#1A1A1A] hover:border-[#13B58E] hover:text-[#13B58E]'}`}
                  style={{ fontFamily: 'Raleway' }}
                >
                  Select Plan
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Health Team */}
      <section className="py-16 px-6 lg:px-12 bg-white" data-testid="ai-section">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight" style={{ fontFamily: 'Raleway' }}>
                Your Personal<br />
                AI Health Team.<br />
                <span className="text-[#13B58E]">Always On.</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-3 mt-8">
                {aiFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="p-4 bg-[#F8FAFB] rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#13B58E]/10 flex items-center justify-center text-[#13B58E] mb-2">
                      {feature.icon}
                    </div>
                    <div className="font-semibold text-[#1A1A1A] text-sm mb-0.5" style={{ fontFamily: 'Raleway' }}>{feature.title}</div>
                    <div className="text-xs text-[#6B7A99] leading-relaxed">{feature.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex justify-center"
            >
              <div className="bg-[#0D1B1A] rounded-3xl p-8 w-full max-w-xs">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="/assets/ai-health-icon.png" 
                    alt="AI Health Assistant" 
                    className="w-36 h-36 object-contain mb-4"
                  />
                  <p className="text-white/60 text-sm italic" style={{ fontFamily: 'Merriweather' }}>
                    "Your recovery is ahead of schedule. Keep it up!"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default IndividualContent;
