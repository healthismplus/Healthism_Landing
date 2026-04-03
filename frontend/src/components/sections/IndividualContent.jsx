import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const IndividualContent = ({ onContactClick }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const providerTypes = [
    { label: "Hospitals", icon: "/assets/providersection/hospital.svg" },
    { label: "Doctors", icon: "/assets/providersection/doc.svg" },
    { label: "Pharmacies", icon: "/assets/providersection/pharmacy.svg" },
    { label: "Labs", icon: "/assets/providersection/labs.svg" },
    { label: "Yoga Centres", icon: "/assets/providersection/yoga.svg" },
    { label: "Clinics", icon: "/assets/providersection/clinic.svg" },
    { label: "Gym", icon: "/assets/providersection/gym.svg" },
    { label: "Experts", icon: "/assets/providersection/expert.svg" },
  ];

  const challengeStages = [
    {
      stage: 1,
      title: "Water Challenge",
      steps: "7,000 steps",
      time: "30 mins",
    },
    {
      stage: 2,
      title: "Dump the Sugar",
      steps: "7,500 steps",
      time: "35 mins",
    },
    {
      stage: 8,
      title: "Intuitive Eating",
      steps: "9,500 steps",
      time: "50 mins",
    },
    { stage: 12, title: "Walk It Off", steps: "12,500 steps", time: "60 mins" },
  ];

  const discounts = [
    { value: "20%+", label: "Pharmacies & Clinics" },
    { value: "10-50%", label: "Diagnostic Centers" },
    { value: "50%", label: "Wellness Services" },
    { value: "70%", label: "Post-plan Diagnostics" },
  ];
  const plans = [
    {
      name: "Health Save Pro",
      price: "₹17,700",
      period: "/year",
      tag: "Most Popular",
      highlight: true,
      features: [
        "Access to Platform: Full Access",
        "Gamification: Full Access",
        "Virtual Diet Consultation: Unlimited",
        "Virtual GP Consultation: 12 session/ Annually, post that ₹99 per session",
        "Dental & Eye: ₹499/session",
        "Pharmacy Services (Delivery 96h/ Same Day): 20% off on all meds and 15% off insulin",
        "Pharmacy Services (Same Day): 12% off meds on all meds and 10% off on insulin",
        "Virtual Wellness Expert (Psychologist / Physiotherapist), Specialized Doctor Consultation, Supplement Market Place, Hospital Network, OPD network, Other Market Place: at Discount Price",
        "Booking : Through App / WhatsApp / Call Center",
      ],
      tests: [
        "Blood Glucose Fasting",
        "Complete Hemogram",
        "Vitamin B12 Cyanocobalamin",
        "Vitamin D Total-25 Hydroxy",
        "Kidney Function Test",
        "Thyroid Profile-Total (T3, T4 & TSH Ultra-sensitive)",
        "Urine Routine & Microscopy Extended",
        "HbA1c",
      ],
    },
    {
      name: "Health Save Max",
      price: "₹17700",
      period: "/year",
      tag: "Best Value",
      highlight: true,
      features: [
        "Access to Platform: Full Access",
        "Gamification: Full Access",
        "Virtual Diet Consultation: Unlimited",
        "Virtual GP Consultation: Unlimited",
        "Dental & Eye: ₹499/session",
        "Pharmacy Services (Delivery 96h/ Same Day): 20% off on all meds and 15% off insulin",
        "Pharmacy Services (Same Day): 12% off meds on all meds and 10% off on insulin",
        "Virtual Wellness Expert (Psychologist / Physiotherapist) , Specialized Doctor Consultation, Supplement Market Place, Hospital Network, OPD network, Other Market Place: at Discount Price",
        "Booking : Through App / WhatsApp / Call Center",
      ],
      tests: [
        "CBC",
        "Urine Routine",
        "ESR",
        "FBS",
        "PPBS",
        "HbA1C",
        "Total Cholesterol",
        "HDL",
        "LDL",
        "Triglycerides",
        "VLDL",
        "Total Protien",
        "Albumin",
        "Globulin",
        "Bilirubin",
        "SGOT",
        "SGPT",
        "Alkaline Phosphatase",
        "GGTP",
        "BUM",
        "S. Creatinine",
        "S. Electrolytes",
        "S. Uric Acid",
        "S. Calcium",
        "T3",
        "T4",
        "TSH",
        "ECG",
        "Stress Test or 2D Echo",
        "Chest X-Ray",
        "USG Abdomen & Pelvis",
        "Pap Smear",
        "Mammography",
        "PSA",
        "PFT",
        "Physician",
        "Gynecologist",
      ],
    },

    {
      name: "Health Save Plus",
      price: "₹5,900",
      period: "/year",
      tag: null,
      highlight: false,
      features: [
        "Access to Platform: Full Access",
        "Gamification: Full Access",
        "Virtual Diet Consultation: 6 Sessions Free then ₹149 per session",
        "Virtual GP Consultation: ₹99/ session",
        "Dental & Eye: ₹499/session",
        "Pharmacy Services (Delivery 96h/ Same Day): 20% off on all meds and 15% off insulin",
        "Pharmacy Services (Same Day): 12% off meds on all meds and 10% off on insulin",
        "Virtual Wellness Expert (Psychologist / Physiotherapist) , Specialized Doctor Consultation, Supplement Market Place, Hospital Network, OPD network, Other Market Place - at Discount Price",
        "Booking : Through App / WhatsApp",
      ],
      tests: [
        "Calcium",
        "Cholesterol",
        "SGPT",
        "SGOT",
        "TSH",
        "RBS",
        "Diabetes Panel and HBA1C",
      ],
    },

    {
      name: "Health Save Prime",
      price: "₹11,800",
      period: "/year",
      tag: null,
      highlight: false,
      features: [
        "Access to Platform: Full Access",
        "Gamification: Full Access",
        "Virtual Diet Consultation: 12 Sessions / Annually, then ₹149 per session",
        "Virtual GP Consultation: 6 session / Annually, then ₹99 per session",
        "Dental & Eye: ₹499/session",
        "Pharmacy Services (Delivery 96h/ Same Day): 20% off on all meds and 15% off insulin",
        "Pharmacy Services (Same Day): 12% off meds on all meds and 10% off on insulin",
        "Virtual Wellness Expert (Psychologist / Physiotherapist) , Specialized Doctor Consultation, Supplement Market Place, Hospital Network, OPD network, Other Market Place - at Discount Price",
        "Booking : Through App / WhatsApp",
      ],
      tests: [
        "Blood Glucose Fasting",
        "Complete Hemogram",
        "Kidney Function Test",
        "Lipid Profile",
        "Liver Function Test",
        "Urine Routine & Microscopy Extended",
        "TSH Ultra - Sensitive",
        "Vitamin B12 Cyanocobalamin",
        "Vitamin D Total-25 Hydroxy",
      ],
    },

    {
      name: "Health Save Pro Plus",
      price: "₹23,600",
      period: "/year",
      tag: null,
      highlight: false,
      features: [
        "Access to Platform: Full Access",
        "Gamification: Full Access",
        "Virtual Diet Consultation: Unlimited",
        "Virtual GP Consultation: Unlimited",
        "Dental & Eye: ₹499/session",
        "Pharmacy Services (Delivery 96h/ Same Day): 20% off on all meds and 15% off insulin",
        "Pharmacy Services (Same Day): 12% off meds on all meds and 10% off on insulin",
        "Virtual Wellness Expert (Psychologist / Physiotherapist) , Specialized Doctor Consultation, Supplement Market Place, Hospital Network, OPD network, Other Market Place - at Discount Price",
        "Booking : Through App / WhatsApp / Call Centre",
      ],
      tests: [
        "Blood Glucose Fasting",
        "Complete Hemogram",
        "Kidney Function Test",
        "Lipid Profile",
        "Liver Function Test",
        "Urine Routine & Microscopy Extended",
        "Thyroid Profile - Total (T3, T4 & TSH Ultra - Sensitive)",
        "Vitamin B12 Cyanocobalamin",
        "Vitamin D Total-25 Hydroxy",
      ],
    },
    {
      name: "Health Save",
      price: "₹2,360",
      period: "/year",
      tag: null,
      highlight: false,
      features: [
        "Access to Platform: Full Access",
        "Gamification: Full Access",
        "Virtual Diet Consultation: 3 sessions free then ₹149/session",
        "Virtual GP Consultation: ₹99/session",
        "Dental & Eye: ₹499/session",
        "Pharmacy Services(Delivery 96h/Same Day): 20% off on all meds and 15% off insulin",
        "Pharmacy Services(Same Day): 12% off on all meds and 10% off insulin",
        "Virtual Wellness Expert (Psychologist/ Physiotherapist), Specialised Doctor COnsultation, Supplement Market Place, Hospital Network , OPD network , Other Market Place: at Discount Price ",
        "Booking: Through App / WhatsApp ",
      ],
      tests: ["Cholesterol, Calcium , SGPT, SGOT , TSH , RBS"],
    },
  ];

  const aiFeatures = [
    {
      icon: <img src="/assets/aiHealth/diet.svg" alt="foods" />,
      title: "AI Dietician",
      desc: "Instant meal analysis and personalized nutrition plans.",
    },
    {
      icon: <img src="/assets/aiHealth/pres.svg" alt="prescription" />,
      title: "Prescription AI",
      desc: "Understand your medication with deep clinical insights.",
    },
    {
      icon: <img src="/assets/aiHealth/report.svg" alt="activity" />,
      title: "Health Report AI",
      desc: "Predictive analysis of your long-term health trends.",
    },
    {
      icon: <img src="/assets/aiHealth/tracker.svg" alt="calorie" />,
      title: "Calorie Tracker AI",
      desc: "Log your daily activities with just a photo.",
    },
  ];
  const PricingCard = ({ plan, isActive, onContactClick }) => {
    return (
      <motion.div
        animate={{ scale: isActive ? 1.03 : 0.95 }}
        transition={{ duration: 0.3 }}
        className={`
        rounded-2xl p-10 mt-10 mb-14 relative h-full flex flex-col justify-between
        transition-all duration-300
        ${
          isActive
            ? "bg-white border-2 border-[#006B5A] shadow-xl z-10"
            : "bg-white border border-gray-200 opacity-70"
        }
      `}
      >
        {/* TAG */}
        {plan.tag && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span
              className={`
              text-white text-[10px] px-3 py-1 rounded-full font-bold tracking-wide
              ${plan.tag === "Most Popular" ? "bg-[#006B5A]" : "bg-[#2E3A8C]"}
            `}
            >
              {plan.tag.toUpperCase()}
            </span>
          </div>
        )}

        {/* CONTENT */}
        <div>
          {/* TITLE */}
          <h3 className="text-[16px] font-bold text-[#1A1A1A] mb-2">
            {plan.name}
          </h3>

          {/* PRICE */}
          <div className="mb-4">
            <span className="text-[32px] font-extrabold text-[#1A1A1A]">
              {plan.price}
            </span>
            <span className="text-[12px] text-[#6B7A99] ml-1">
              {plan.period}
            </span>
          </div>

          {/* FEATURES */}
          <div>
            <p className="text-[10px] font-semibold text-gray-400 mb-2">
              FEATURES:
            </p>

            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2 text-[12px]">
                  <Check className="text-[#13B58E] mt-0.5" size={14} />
                  <span className="text-[#6B7A99] leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* BLOOD TESTS */}
          {plan.tests && (
            <div className="bg-[#F3F6F7] p-3 rounded-lg text-[11px] text-[#6B7A99] mb-4">
              <p className="text-[10px] font-semibold text-gray-400 mb-1">
                BLOOD TESTS:
              </p>
              {plan.tests.join(", ")}
            </div>
          )}
        </div>

        {/* BUTTON */}
        <button
          onClick={onContactClick}
          className={`
          w-full py-3 rounded-lg text-sm font-semibold transition
          ${
            isActive
              ? "bg-[#006B5A] text-white"
              : "border border-gray-300 text-[#1A1A1A] bg-white hover:border-[#006B5A] hover:text-[#006B5A]"
          }
        `}
        >
          Select Plan
        </button>
      </motion.div>
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Everything Your Health Needs - Bento Grid */}
      <section
        className="py-16 px-6 lg:px-12 bg-[#F8FAFB]"
        data-testid="services-section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-2"
            >
              Everything Your Health
            </motion.h2>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A]"
            >
              Needs, <span className="text-[#006B5A]"> In One App.</span>
            </motion.h2>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-12 gap-6 mt-12">
            {/* LEFT CARD */}
            <div className="col-span-12 md:col-span-4 bg-white rounded-[24px] p-6">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm">
                <img src="/assets/book.svg" alt="book" />
              </div>

              <h3 className="text-[18px] font-bold text-[#191C1D] mb-2">
                Book Instantly
              </h3>

              <p className="text-[14px] text-[#3D4945] leading-relaxed mb-6">
                Skip the queue. Book appointments with top doctors across our
                1,200+ partner network in seconds.
              </p>

              <button className="bg-[#2AA787] text-white text-[14px] px-5 py-2.5 rounded-[12px] font-medium">
                Book Appointment
              </button>
            </div>

            {/* BIG RIGHT CARD */}
            <div className="col-span-12 md:col-span-8 relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0F3D3A] to-[#0B2E2B] p-8 flex items-center">
              {/* TEXT */}
              <div className="max-w-[320px] z-10 mt-10">
                <h3 className="text-[22px] font-semibold text-white mb-3">
                  Order Medicines & Tests
                </h3>

                <p className="text-[14px] text-white/70 mb-6 leading-relaxed">
                  Quality healthcare delivered to your doorstep. Genuine
                  medicines and NABL-accredited lab tests.
                </p>

                <button className="bg-white text-[#006B5A] px-5 py-2.5 rounded-[12px] text-[14px] font-bold">
                  Order Now
                </button>
              </div>

              {/* IMAGE */}
              <img
                src="/assets/medical-supplies.png"
                className="absolute right-0 bottom-0 h-full object-contain opacity-90"
              />
            </div>

            {/* BOTTOM LEFT */}
            <div className="col-span-12 md:col-span-4 bg-white rounded-[24px] p-6">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm">
                <img
                  src="/assets/healthlocker.svg"
                  alt="digital health locker"
                />
              </div>

              <h3 className="text-[18px] font-bold text-[#191C1D] mb-2">
                Digital Health Locker
              </h3>

              <p className="text-[14px] text-[#3D4945] leading-relaxed">
                Securely store and share your medical reports and prescriptions
                24/7.
              </p>
            </div>

            {/* BOTTOM MIDDLE */}
            <div className="col-span-12 md:col-span-4 bg-white rounded-[24px] p-6">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm">
                <img src="/assets/fitness.svg" alt="fitness" />
              </div>

              <h3 className="text-[18px] font-bold text-[#191C1D] mb-2">
                Fitness Challenges
              </h3>

              <p className="text-[14px] text-[#3D4945] leading-relaxed">
                Water intake tracking, step goals, and gamified health journeys
                with rewards.
              </p>
            </div>

            {/* BOTTOM RIGHT */}
            <div className="col-span-12 md:col-span-4 bg-white rounded-[24px] p-6">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm">
                <img src="/assets/talk.svg" alt="video call" />
              </div>

              <h3 className="text-[18px] font-bold text-[#191C1D] mb-2">
                Talk to an Expert
              </h3>

              <p className="text-[14px] text-[#3D4945] leading-relaxed">
                Instant access to Doctors and Nutritionists via seamless chat or
                HD video calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Network - Stats Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#070B0C]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between mb-16 ">
            <div>
              {/* Heading */}
              <h2 className="text-[44px] md:text-[56px] font-bold leading-[1.1] text-white">
                1,200+ Providers.
              </h2>

              <h2 className="text-[44px] md:text-[56px] font-bold leading-[1.1] text-[#7FE3CF] mb-6">
                One Membership.
              </h2>

              {/* Subtext */}
              <p className="text-white/50 text-[15px] leading-relaxed max-w-[520px]">
                From emergency services to routine wellness, our network is
                carefully curated to bring you the best in medical care.
              </p>
            </div>
            {/* FLOATING BADGE */}
            <div>
              <div className=" bg-[#0F2F2C] border border-[#1E5F58] px-6 py-4 rounded-xl shadow-lg">
                <div className="text-[26px] font-bold text-[#7FE3CF]">
                  50,000+
                </div>
                <div className="text-[10px] text-[#7FE3CF]/70 tracking-widest uppercase mt-1">
                  Active Users
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {providerTypes.map((type, i) => (
              <div
                key={i}
                className="bg-[#121617] border border-[#1F2A2C] rounded-[18px] py-8 flex flex-col items-center justify-center transition-all hover:border-[#2AA787] hover:shadow-[0_0_20px_rgba(42,167,135,0.15)]"
              >
                {/* ICON */}
                <img src={type.icon} alt={type.label} />

                {/* LABEL */}
                <div className="text-[12px] text-white/70 tracking-wide pt-3">
                  {type.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fad 2 Fit & Kart */}
      <section className="py-24 px-6 lg:px-12 bg-[#F2F6F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-start">
            {/* LEFT */}
            <div>
              {/* Heading */}
              <div className="mb-10">
                <span className="text-[12px] text-[#006B5A] font-semibold tracking-[0.2em] uppercase">
                  12-WEEK JOURNEY
                </span>

                <h3 className="text-[38px] leading-[1.2] font-extrabold text-[#191C1D] mt-4">
                  Fad 2 Fit <span className="text-[#006B5A]">Challenge</span>
                </h3>
              </div>

              {/* Stages */}
              <div className="space-y-7">
                {challengeStages.map((stage, i) => (
                  <div key={i} className="flex items-start gap-5">
                    {/* Circle */}
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold
                ${
                  i === 0
                    ? "bg-[#006B5A] text-white"
                    : "bg-[#006B5A33] text-[#006B5A]"
                }`}
                    >
                      {stage.stage}
                    </div>

                    {/* Text */}
                    <div>
                      <p className="text-[15px] font-semibold text-[#191C1D]">
                        Stage {stage.stage}: {stage.title}
                      </p>

                      <p className="text-[13px] text-[#64748B] mt-1">
                        {stage.steps} • {stage.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                onClick={onContactClick}
                className="mt-12 w-[380px] py-3.5 rounded-[12px] bg-[#239882] text-white font-semibold text-[14px] hover:opacity-95 transition"
              >
                Take Challenge
              </button>
            </div>

            {/* RIGHT */}
            <div className="bg-[#F7FAF9] rounded-3xl p-10">
              {/* Heading */}
              <div className="mb-8">
                <h3 className="text-[34px] leading-[1.2] font-extrabold text-[#191C1D]">
                  HealthismPlus <span className="text-[#006B5A]">Kart.</span>
                </h3>

                <p className="text-[#3D4945] text-[14px] mt-2">
                  Save on Everything Health & Wellness
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-2 gap-7">
                {discounts.map((discount, i) => (
                  <div
                    key={i}
                    className="bg-[#EEF3F2] rounded-2xl py-10 text-center"
                  >
                    <div className="text-[36px] font-extrabold text-[#006B5A]">
                      {discount.value}
                    </div>

                    <div className="text-[12px] text-[#3D4945] font-bold mt-1 tracking-wide">
                      {discount.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Slider */}
      <section className="py-16 px-6 lg:px-12 bg-[#EDF3F4]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-[#191C1D]  font-extrabold text-[40px]">
            Choose Your Health Save Plan
          </h2>
          <p className="text-[16px] text-[#3D4945] mt-2">
            Simple, transparent pricing for every lifestyle.
          </p>
        </div>

        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {plans.map((plan, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <PricingCard
                  plan={plan}
                  isActive={isActive}
                  onContactClick={onContactClick}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* AI Health Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#EDF3F4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT */}
            <div>
              <h2 className="text-[38px] leading-[1.15] font-extrabold text-[#0F172A]">
                Your Personal <br />
                AI Health Team. <br />
                <span className="text-[#006B5A]">Always On.</span>
              </h2>

              {/* FEATURES */}
              <div className="grid grid-cols-2 gap-5 mt-10">
                {aiFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#E2E8F0] hover:shadow-sm transition"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3">
                      {feature.icon}
                    </div>

                    <div className="font-semibold text-[#0F172A] text-[14px] mb-1">
                      {feature.title}
                    </div>

                    <div className="text-[12px] text-[#64748B] leading-relaxed">
                      {feature.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative w-full h-full  rounded-[32px] bg-[#2E3132] flex items-center justify-center flex-col gap-10">
              {/* Glow Circle */}
              <div className="absolute w-28 h-28 rounded-full bg-[#006B5A] blur-2xl opacity-40"></div>

              {/* Icon Circle */}
              <div className="relative w-32 h-32 rounded-full bg-[#006B5A] flex items-center justify-center text-white text-2xl shadow-lg">
                <img src="/assets/aiHealth/brain.svg" alt="brain" />
              </div>

              {/* Quote */}
              <div className="px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-center max-w-[260px]">
                <p className="text-white text-[14px] ">
                  "Your recovery is ahead of schedule. Keep it up!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default IndividualContent;
