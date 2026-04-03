import { motion } from "framer-motion";
import {
  FolderHeart,
  Video,
  Smartphone,
  Dumbbell,
  Stethoscope,
  BarChart3,
  ArrowUpRight,
  Brain,
  Apple,
  Sparkles,
  CalendarDays,
  CircleCheck,
} from "lucide-react";

const CorporateContent = ({ onContactClick }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const corporateSolutions = [
    {
      icon: <FolderHeart size={18} />,
      title: "Digital Health Locker",
      desc: "ABHA-integrated personal health records for all employees",
      color: "text-[#F5A338]",
    },
    {
      icon: <Smartphone size={18} />,
      title: "Telehealth Capabilities",
      desc: "Virtual consultations with certified healthcare professionals",
      color: "text-[#5EA2FF]",
    },
    {
      icon: <Sparkles size={18} />,
      title: "Co-branded Ecosystem",
      desc: "White-labeled mobile app with your company branding",
      color: "text-[#3CD6A0]",
    },
    {
      icon: <Dumbbell size={18} />,
      title: "Corporate Wellness Programs",
      desc: "Customized fitness challenges and lifestyle interventions",
      color: "text-[#FFD24A]",
    },
    {
      icon: <Stethoscope size={18} />,
      title: "Health Checkup Camps",
      desc: "On-site and virtual health screening camps for teams",
      color: "text-[#7DB8FF]",
    },
    {
      icon: <BarChart3 size={18} />,
      title: "Health Analytics Dashboard",
      desc: "Data-driven insights on employee wellness metrics",
      color: "text-[#C58BFF]",
    },
  ];

  const wellnessPillars = [
    {
      icon: <ArrowUpRight size={18} />,
      title: "Physical Health",
      desc: "Custom workout plans, step challenges, and gym memberships.",
      active: false,
    },
    {
      icon: <Brain size={18} />,
      title: "Mental Well-Being",
      desc: "1-on-1 counseling, stress management, and mindfulness sessions.",
      active: true,
    },
    {
      icon: <Apple size={18} />,
      title: "Nutrition",
      desc: "Dietician consultations, meal planning, and gut health experts.",
      active: false,
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.75 20C4.125 20 3.59375 19.7812 3.15625 19.3438C2.71875 18.9062 2.5 18.375 2.5 17.75C2.5 17.3125 2.625 16.901 2.875 16.5156C3.125 16.1302 3.45833 15.8542 3.875 15.6875L8.75 13.75V10.9375C7.625 12.25 6.31771 13.2552 4.82812 13.9531C3.33854 14.651 1.72917 15 0 15V12.5C1.41667 12.5 2.70312 12.2083 3.85938 11.625C5.01562 11.0417 6.0625 10.2083 7 9.125L8.6875 7.125C8.9375 6.83333 9.22917 6.61458 9.5625 6.46875C9.89583 6.32292 10.25 6.25 10.625 6.25H11.875C12.25 6.25 12.6042 6.32292 12.9375 6.46875C13.2708 6.61458 13.5625 6.83333 13.8125 7.125L15.5 9.125C16.4375 10.2083 17.4844 11.0417 18.6406 11.625C19.7969 12.2083 21.0833 12.5 22.5 12.5V15C20.7708 15 19.1615 14.651 17.6719 13.9531C16.1823 13.2552 14.875 12.25 13.75 10.9375V13.75L18.625 15.6875C19.0417 15.8542 19.375 16.1302 19.625 16.5156C19.875 16.901 20 17.3125 20 17.75C20 18.375 19.7812 18.9062 19.3438 19.3438C18.9062 19.7812 18.375 20 17.75 20H8.75V19.375C8.75 18.8333 8.92708 18.3854 9.28125 18.0312C9.63542 17.6771 10.0833 17.5 10.625 17.5H14.375C14.5625 17.5 14.7135 17.4427 14.8281 17.3281C14.9427 17.2135 15 17.0625 15 16.875C15 16.6875 14.9427 16.5365 14.8281 16.4219C14.7135 16.3073 14.5625 16.25 14.375 16.25H10.625C9.75 16.25 9.01042 16.5521 8.40625 17.1562C7.80208 17.7604 7.5 18.5 7.5 19.375V20H4.75ZM11.25 5C10.5625 5 9.97396 4.75521 9.48438 4.26562C8.99479 3.77604 8.75 3.1875 8.75 2.5C8.75 1.8125 8.99479 1.22396 9.48438 0.734375C9.97396 0.244792 10.5625 0 11.25 0C11.9375 0 12.526 0.244792 13.0156 0.734375C13.5052 1.22396 13.75 1.8125 13.75 2.5C13.75 3.1875 13.5052 3.77604 13.0156 4.26562C12.526 4.75521 11.9375 5 11.25 5Z" fill="#27A28B"/>
</svg>
,
      title: "Yoga & Zen",
      desc: "Guided yoga routines and breathing exercises for daily rejuvenation.",
      active: false,
    },
  ];

  const campFeatures = [
    "Pre-Employment Screenings",
    "Vaccination Drives",
    "Eye & Dental Checkups",
  ];

  const results = [
    {
      value: "-30%",
      label: "Reduced Absenteeism",
      desc: "Proactive care prevents long-term sick leaves and productivity dips.",
      valueColor: "text-[#27A28B]",
    },
    {
      value: "85%",
      label: "Higher Participation",
      desc: "Engaging digital tools ensure maximum enrollment across teams.",
      valueColor: "text-[#3B82F6]",
    },
    {
      value: "15%",
      label: "Insurance Savings",
      desc: "Healthier pools lead to lower premiums and corporate healthcare costs.",
      valueColor: "text-[#0F1F3D]",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-[#F5F6F8]"
    >
      {/* HERO */}
      <section className="px-4 md:px-8 lg:px-10 py-14 md:py-16 bg-[#F5F5F6]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[34px] md:text-[44px] leading-[1.08] font-bold text-[#17243F]"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Healthier Employees.
              <br />
              <span className="text-[#29B393]">Stronger Business.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-[14px] md:text-[15px] leading-7 text-[#74809A] max-w-md"
            >
              Your workforce&apos;s health directly impacts your bottom line.
              HealthismPlus for Corporates is a comprehensive, co-branded wellness
              platform that keeps your employees engaged, healthy, and performing
              at their best — without the administrative headache.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7">
              <button
                onClick={onContactClick}
                className="px-6 py-3 rounded-md bg-[#29B393] text-white text-sm font-semibold shadow-sm hover:opacity-95 transition"
              >
                Talk to our Corporate Team
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[370px] rounded-[16px] bg-[#E9EAEC] p-3 shadow-[0_8px_18px_rgba(15,23,42,0.06)]">
              <div className="rounded-[12px] overflow-hidden bg-[#CAD2D9] aspect-[1.34/0.9]">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80"
                  alt="Corporate healthcare"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CORPORATE WELLNESS SOLUTIONS */}
      <section className="px-4 md:px-8 lg:px-10 py-14 md:py-16 bg-[#0A192F]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[28px] md:text-[38px] font-bold text-white"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Corporate Wellness Solutions
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[13px] text-white/45 mt-2"
            >
              Transform employee health with our comprehensive B2B platform
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {corporateSolutions.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-[12px] border border-white/6 bg-[#16253A] px-5 py-6 min-h-[124px] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]"
              >
                <div className={`mb-4 ${item.color}`}>{item.icon}</div>
                <h3 className="text-[15px] md:text-[16px] font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[12.5px] leading-5 text-white/45 max-w-[250px]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WELLNESS PILLARS */}
      <section className="px-4 md:px-8 lg:px-10 py-14 md:py-16 bg-[#F5F5F6]">
        <div className=" mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-10"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[28px] md:text-[38px] font-bold text-[#17243F]"
            >
              Wellness That&apos;s Built Around Your People
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[13px] text-[#17243F] mt-2"
            >
              A holistic strategy covering every facet of life and health.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {wellnessPillars.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`rounded-[14px] px-5 py-6 min-h-[170px] border ${item.active
                  ? "bg-[#F2F4F7] border-[#E7EAEE]"
                  : "bg-[#F2F4F7] border-[#E7EAEE]"
                  }`}
              >
                <div className="text-[#2EB49A] mb-6">{item.icon}</div>
                <h3 className="text-[15px] md:text-[16px] font-bold text-[#17243F] mb-2">
                  {item.title}
                </h3>
                <p className="text-[12.5px] leading-5 text-[#8C96A8]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CAMPS */}
      <section className="px-4 md:px-8 lg:px-10 py-12 md:py-14 bg-[#F5F6F8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[560px_420px] justify-center gap-20 lg:gap-42 items-center">
            {/* Left Image/Card */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="w-full flex justify-center lg:justify-start"
            >
              <div className="w-full max-w-[520px] -ml-2 lg:-ml-4">
                <img
                  src="/assets/Container.png"
                  alt="Saffe camp"
                  className="w-full h-auto object-contain scale-[1.18] origin-center drop-shadow-[0_28px_45px_rgba(0,0,0,0.18)]"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="w-full max-w-[420px]"
            >
              <motion.h3
                variants={fadeUp}
                className="text-[32px] md:text-[40px] leading-[0.98] font-bold text-[#17243F] tracking-[-0.03em]"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Camps That Come to Your Campus
              </motion.h3>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-[14px] md:text-[15px] leading-[1.7] text-[#8D97A8] max-w-[395px]"
              >
                We transform your office into a center for clinical excellence,
                minimizing downtime while maximizing health awareness.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-6 space-y-3">
                {campFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0">
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.16667 12.1667L13.0417 6.29167L11.875 5.125L7.16667 9.83333L4.79167 7.45833L3.625 8.625L7.16667 12.1667ZM8.33333 16.6667C7.18056 16.6667 6.09722 16.4479 5.08333 16.0104C4.06944 15.5729 3.1875 14.9792 2.4375 14.2292C1.6875 13.4792 1.09375 12.5972 0.65625 11.5833C0.21875 10.5694 0 9.48611 0 8.33333C0 7.18056 0.21875 6.09722 0.65625 5.08333C1.09375 4.06944 1.6875 3.1875 2.4375 2.4375C3.1875 1.6875 4.06944 1.09375 5.08333 0.65625C6.09722 0.21875 7.18056 0 8.33333 0C9.48611 0 10.5694 0.21875 11.5833 0.65625C12.5972 1.09375 13.4792 1.6875 14.2292 2.4375C14.9792 3.1875 15.5729 4.06944 16.0104 5.08333C16.4479 6.09722 16.6667 7.18056 16.6667 8.33333C16.6667 9.48611 16.4479 10.5694 16.0104 11.5833C15.5729 12.5972 14.9792 13.4792 14.2292 14.2292C13.4792 14.9792 12.5972 15.5729 11.5833 16.0104C10.5694 16.4479 9.48611 16.6667 8.33333 16.6667Z" fill="#27A28B" />
                      </svg>

                    </div>
                    <span className="text-[13px] md:text-[13.5px] font-medium text-[#49566B]">
                      {feature}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-8 w-full max-w-[370px] rounded-[12px] border border-[#E9EDF2] bg-white px-4 py-3 shadow-[0_8px_18px_rgba(15,23,42,0.05)] flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.08em] text-[#5E86FF]">
                    Available Nationwide
                  </p>
                  <p className="mt-1 text-[15px] font-semibold text-[#17243F] leading-tight">
                    Book a camp for your office
                  </p>
                </div>

                <button
                  onClick={onContactClick}
                  className="w-10 h-10 rounded-[10px] bg-[#386BFF] text-white flex items-center justify-center shrink-0 hover:opacity-95 transition"
                >
                  <CalendarDays size={18} />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REAL RESULTS */}
      <section className="px-4 md:px-8 lg:px-10 py-12 md:py-16 bg-[#F5F5F6]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-10"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[28px] md:text-[38px] font-bold text-[#17243F]"
            >
              Real Results
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[13px] text-[#17243F] mt-2"
            >
              The impact of HealthismPlus on organizational efficiency and bottom line.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-4 flex items-center gap-2"
            >
              {/* <div className="h-[3px] w-10 rounded-full bg-[#31B39A]" /> */}
              {/* <div className="h-[2px] w-7 rounded-full bg-[#D3D9E2]" /> */}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-5"
          >
            {results.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-[#F1F3F6] border border-[#ECEFF3] rounded-[14px] px-6 py-8 text-center min-h-[160px]"
              >
                <div
                  className={`text-[34px] md:text-[38px] font-bold mb-2 ${item.valueColor}`}
                >
                  {item.value}
                </div>
                <div className="text-[16px] font-bold text-[#17243F] mb-2">
                  {item.label}
                </div>
                <p className="text-[12.5px] leading-5 text-[#64748B] max-w-[220px] mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default CorporateContent;