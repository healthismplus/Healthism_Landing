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
    {
      stage: 12,
      title: "Walk It Off",
      steps: "12,500 steps",
      time: "60 mins",
    },
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
      price: "₹29,500",
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
      icon: (
        <img
          src="/assets/aiHealth/diet.svg"
          alt="foods"
          className="w-7 h-7 object-contain"
        />
      ),
      title: "AI Dietician",
      desc: "Instant meal analysis and personalized nutrition plans.",
    },
    {
      icon: (
        <img
          src="/assets/aiHealth/pres.svg"
          alt="prescription"
          className="w-7 h-7 object-contain"
        />
      ),
      title: "Prescription AI",
      desc: "Understand your medication with deep clinical insights.",
    },
    {
      icon: (
        <img
          src="/assets/aiHealth/report.svg"
          alt="activity"
          className="w-7 h-7 object-contain"
        />
      ),
      title: "Health Report AI",
      desc: "Predictive analysis of your long-term health trends.",
    },
    {
      icon: (
        <img
          src="/assets/aiHealth/tracker.svg"
          alt="calorie"
          className="w-7 h-7 object-contain"
        />
      ),
      title: "Calorie Tracker AI",
      desc: "Log your daily activities with just a photo.",
    },
  ];

  const PricingCard = ({ plan, isActive, onContactClick }) => {
    return (
      <motion.div
        animate={{ scale: isActive ? 1.02 : 0.96 }}
        transition={{ duration: 0.3 }}
        className={`
          rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10
          mt-8 sm:mt-10 mb-10 sm:mb-14 relative h-full flex flex-col justify-between
          transition-all duration-300
          ${
            isActive
              ? "bg-white border-2 border-[#006B5A] shadow-xl z-10"
              : "bg-white border border-gray-200 opacity-80"
          }
        `}
      >
        {plan.tag && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span
              className={`text-white text-[10px] px-3 py-1 rounded-full font-bold tracking-wide ${
                plan.tag === "Most Popular" ? "bg-[#006B5A]" : "bg-[#2E3A8C]"
              }`}
            >
              {plan.tag.toUpperCase()}
            </span>
          </div>
        )}

        <div>
          <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1A1A1A] mb-2">
            {plan.name}
          </h3>

          <div className="mb-4">
            <span className="text-[28px] sm:text-[30px] md:text-[32px] font-extrabold text-[#1A1A1A] break-words">
              {plan.price}
            </span>
            <span className="text-[12px] text-[#6B7A99] ml-1">
              {plan.period}
            </span>
          </div>

          <div>
            <p className="text-[12px] font-semibold text-[#3D4945] mb-2">
              FEATURES:
            </p>

            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-[12px] sm:text-[13px]"
                >
                  <Check className="text-[#13B58E] mt-0.5 shrink-0" size={14} />
                  <span className="text-[#191C1D] font-bold leading-relaxed break-words">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {plan.tests && (
            <div className="bg-[#F3F6F7] p-3 rounded-lg text-[11px]  font-semibold text-[#3D4945] mb-4 leading-relaxed break-words">
              <p className="text-[10px] font-bold text-[#006B5A] mb-1">
                BLOOD TESTS:
              </p>
              {plan.tests.join(", ")}
            </div>
          )}
        </div>

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
      {/* Everything Your Health Needs */}
      <section
        className="py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#F8FAFB]"
        data-testid="services-section"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-8 sm:mb-10"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold text-[#1A1A1A] mb-2 leading-tight"
            >
              Everything Your Health
            </motion.h2>
            <motion.h2
              variants={fadeUp}
              className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold text-[#1A1A1A] leading-tight"
            >
              Needs, <span className="text-[#006B5A]">In One App.</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-8 sm:mt-10">
            <div className="col-span-12 md:col-span-4 bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center mb-4 sm:mb-5 shadow-sm">
                <img
                  src="/assets/book.svg"
                  alt="book"
                  className="max-w-full max-h-full"
                />
              </div>

              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191C1D] mb-2">
                Book Instantly
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#3D4945] leading-relaxed mb-5 sm:mb-6">
                Skip the queue. Book appointments with top doctors across our
                1,200+ partner network in seconds.
              </p>

              <a
                href="https://play.google.com/store/apps/details?id=com.healthismplus.customer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#2AA787] text-white text-[14px] px-5 py-2.5 rounded-[12px] font-medium"
              >
                Book Appointment
              </a>
            </div>

            <div className="col-span-12 md:col-span-8 relative overflow-hidden rounded-[22px] sm:rounded-[28px] bg-gradient-to-br from-[#0F3D3A] to-[#0B2E2B] p-5 sm:p-7 md:p-8 flex items-center min-h-[280px] sm:min-h-[320px]">
              <div className="max-w-[320px] z-10 mt-0 sm:mt-6 md:mt-10 pr-16 sm:pr-24">
                <h3 className="text-[20px] sm:text-[22px] font-semibold text-white mb-3 leading-tight">
                  Order Medicines & Tests
                </h3>

                <p className="text-[13px] sm:text-[14px] text-white/70 mb-6 leading-relaxed">
                  Quality healthcare delivered to your doorstep. Genuine
                  medicines and NABL-accredited lab tests.
                </p>

                <a
                  href="https://play.google.com/store/apps/details?id=com.healthismplus.customer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-[#006B5A] px-5 py-2.5 rounded-[12px] text-[14px] font-bold"
                >
                  Order Now
                </a>
              </div>

              <img
                src="/assets/medical-supplies.png"
                alt="medical supplies"
                className="absolute right-0 bottom-0 h-[70%] sm:h-[78%] md:h-full max-w-[45%] object-contain opacity-90"
              />
            </div>

            <div className="col-span-12 md:col-span-4 bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center mb-4 sm:mb-5 shadow-sm">
                <img
                  src="/assets/healthlocker.svg"
                  alt="digital health locker"
                  className="max-w-full max-h-full"
                />
              </div>

              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191C1D] mb-2">
                Digital Health Locker
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#3D4945] leading-relaxed">
                Securely store and share your medical reports and prescriptions
                24/7.
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center mb-4 sm:mb-5 shadow-sm">
                <img
                  src="/assets/fitness.svg"
                  alt="fitness"
                  className="max-w-full max-h-full"
                />
              </div>

              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191C1D] mb-2">
                Fitness Challenges
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#3D4945] leading-relaxed">
                Water intake tracking, step goals, and gamified health journeys
                with rewards.
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 bg-white rounded-[20px] sm:rounded-[24px] p-5 sm:p-6">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center mb-4 sm:mb-5 shadow-sm">
                <img
                  src="/assets/talk.svg"
                  alt="video call"
                  className="max-w-full max-h-full"
                />
              </div>

              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#191C1D] mb-2">
                Talk to an Expert
              </h3>

              <p className="text-[13px] sm:text-[14px] text-[#3D4945] leading-relaxed">
                Instant access to Doctors and Nutritionists via seamless chat or
                HD video calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Network */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#070B0C]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-10 mb-10 sm:mb-12 md:mb-16">
            <div>
              <h2 className="text-[30px] sm:text-[38px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] text-white">
                1,200+ Providers.
              </h2>

              <h2 className="text-[30px] sm:text-[38px] md:text-[48px] lg:text-[56px] font-bold leading-[1.1] text-[#7FE3CF] mb-5 sm:mb-6">
                One Membership.
              </h2>

              <p className="text-white/50 text-[14px] sm:text-[15px] leading-relaxed max-w-[520px]">
                From emergency services to routine wellness, our network is
                carefully curated to bring you the best in medical care.
              </p>
            </div>

            <div className="self-start lg:self-auto">
              <div className="bg-[#0F2F2C] border border-[#1E5F58] px-5 sm:px-6 py-4 rounded-xl shadow-lg">
                <div className="text-[22px] sm:text-[26px] font-bold text-[#7FE3CF]">
                  50,000+
                </div>
                <div className="text-[10px] text-[#7FE3CF]/70 tracking-widest uppercase mt-1">
                  Active Users
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {providerTypes.map((type, i) => (
              <div
                key={i}
                className="bg-[#121617] border border-[#1F2A2C] rounded-[16px] sm:rounded-[18px] py-6 sm:py-8 px-3 flex flex-col items-center justify-center text-center transition-all hover:border-[#2AA787] hover:shadow-[0_0_20px_rgba(42,167,135,0.15)]"
              >
                <img
                  src={type.icon}
                  alt={type.label}
                  className="h-10 sm:h-auto object-contain"
                />
                <div className="text-[11px] sm:text-[12px] text-white/70 tracking-wide pt-3">
                  {type.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fad 2 Fit & Kart */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#F2F6F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div>
              <div className="mb-8 sm:mb-10">
                <span className="text-[11px] sm:text-[12px] text-[#006B5A] font-semibold tracking-[0.2em] uppercase">
                  12-WEEK JOURNEY
                </span>

                <h3 className="text-[28px] sm:text-[34px] md:text-[38px] leading-[1.2] font-extrabold text-[#191C1D] mt-4">
                  Fad 2 Fit <span className="text-[#006B5A]">Challenge</span>
                </h3>
              </div>

              <div className="space-y-6 sm:space-y-7">
                {challengeStages.map((stage, i) => (
                  <div key={i} className="flex items-start gap-4 sm:gap-5">
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${
                        i === 0
                          ? "bg-[#006B5A] text-white"
                          : "bg-[#006B5A33] text-[#006B5A]"
                      }`}
                    >
                      {stage.stage}
                    </div>

                    <div>
                      <p className="text-[14px] sm:text-[15px] font-semibold text-[#191C1D] leading-snug">
                        Stage {stage.stage}: {stage.title}
                      </p>

                      <p className="text-[12px] sm:text-[13px] text-[#64748B] mt-1">
                        {stage.steps} • {stage.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://fad2fit.co.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-8 sm:mt-10 md:mt-12 w-full sm:w-auto sm:min-w-[260px] md:min-w-[320px] px-6 py-3.5 rounded-[12px] bg-[#239882] text-white font-semibold text-[14px] hover:opacity-95 transition">
                  Take Challenge
                </button>
              </a>
            </div>

            <div className="bg-[#F7FAF9] rounded-[24px] sm:rounded-3xl p-5 sm:p-7 md:p-10">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-[28px] sm:text-[30px] md:text-[34px] leading-[1.2] font-extrabold text-[#191C1D]">
                  HealthismPlus <span className="text-[#006B5A]">Kart.</span>
                </h3>

                <p className="text-[#3D4945] text-[13px] sm:text-[14px] mt-2">
                  Save on Everything Health & Wellness
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
                {discounts.map((discount, i) => (
                  <div
                    key={i}
                    className="bg-[#EEF3F2] rounded-xl sm:rounded-2xl py-6 sm:py-8 md:py-10 px-3 text-center"
                  >
                    <div className="text-[24px] sm:text-[30px] md:text-[36px] font-extrabold text-[#006B5A] leading-none">
                      {discount.value}
                    </div>

                    <div className="text-[11px] sm:text-[12px] text-[#3D4945] font-bold mt-2 tracking-wide leading-snug">
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
      <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-12 bg-[#EDF3F4]">
        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-[#191C1D] font-extrabold text-[28px] sm:text-[34px] md:text-[40px] leading-tight">
            Choose Your Health Save Plan
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#3D4945] mt-2">
            Simple, transparent pricing for every lifestyle.
          </p>
        </div>

        <Swiper
          spaceBetween={16}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1.05, spaceBetween: 14 },
            480: { slidesPerView: 1.1, spaceBetween: 16 },
            640: { slidesPerView: 1.25, spaceBetween: 16 },
            768: { slidesPerView: 1.6, spaceBetween: 18 },
            1024: { slidesPerView: 2.3, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 20 },
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
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#EDF3F4]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
            <div>
              <h2 className="text-[28px] sm:text-[34px] md:text-[38px] leading-[1.15] font-extrabold text-[#0F172A]">
                Your Personal <br />
                AI Health Team. <br />
                <span className="text-[#006B5A]">Always On.</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10">
                {aiFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#E2E8F0] hover:shadow-sm transition"
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

            <div className="relative w-full min-h-[280px] sm:min-h-[320px] md:min-h-[380px] rounded-[24px] sm:rounded-[32px] bg-[#2E3132] flex items-center justify-center flex-col gap-8 sm:gap-10 px-6 py-10 overflow-hidden">
              <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#006B5A] blur-2xl opacity-40"></div>

              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-[#006B5A] flex items-center justify-center text-white text-2xl shadow-lg">
                <img
                  src="/assets/aiHealth/brain.svg"
                  alt="brain"
                  className="w-12 sm:w-14 md:w-auto"
                />
              </div>

              <div className="px-4 sm:px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-center max-w-[260px] sm:max-w-[300px]">
                <p className="text-white text-[13px] sm:text-[14px] leading-relaxed">
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
