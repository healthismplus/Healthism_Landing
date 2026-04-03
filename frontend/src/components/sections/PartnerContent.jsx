import { motion } from "framer-motion";
import {
  Check,
  X,
  Building2,
  Stethoscope,
  FlaskConical,
  Pill,
  Activity,
  Headphones,
  Settings,
  BarChart3,
  ChevronRight,
  Rocket,
} from "lucide-react";

const PartnerContent = ({ onContactClick }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const providerTypes = [
    { id: "doctors", label: "Doctors", icon: <Stethoscope size={16} /> },
    { id: "clinics", label: "Clinics", icon: <Building2 size={16} /> },
    { id: "hospitals", label: "Hospitals", icon: <Activity size={16} /> },
    { id: "diagnostics", label: "Diagnostics", icon: <FlaskConical size={16} /> },
    { id: "pharmacies", label: "Pharmacies", icon: <Pill size={16} /> },
  ];

  const doctorFeatures = [
    "Get discovered by patients actively searching for specialists in your area through our verified marketplace.",
    "Use AI-powered clinical suggestions and a conversational assistant to support faster, safer decisions.",
    "Accept appointments, manage your schedule, and send automated reminders — all without a receptionist.",
    "Conduct virtual consultations and remote follow-ups through built-in telehealth capabilities.",
    "Write prescriptions by typing, scribbling on a tablet, or simply dictating via voice notes.",
    "Build your reputation with verified patient reviews and ratings that reflect your quality of care.",
  ];

  const comparisonData = [
    { feature: "Verified Lead Generation", directory: false, healthism: true },
    { feature: "Integrated HMS Software", directory: false, healthism: true },
    { feature: "Scanning Appointment Booking", directory: false, healthism: true },
    { feature: "Real-time Revenue Tracking", directory: false, healthism: true },
    { feature: "Network Wide Referrals", directory: "Basic", healthism: true },
    { feature: "Digital Marketing Tools", directory: "Paid Extras", healthism: true },
    { feature: "Dedicated Support Team", directory: false, healthism: true },
  ];

  const onboardingSteps = [
    {
      step: 1,
      title: "Discovery Call",
      desc: "We understand your specific clinical workflows and requirements.",
    },
    {
      step: 2,
      title: "Data Migration & Configuration",
      desc: "Seamless transfer of your existing patient records to the HMS.",
    },
    {
      step: 3,
      title: "Go-Live & Training",
      desc: "Expert-led sessions for your medical and administrative staff.",
    },
  ];

  const calendarDays = [12, 13, 14, 15, 16, 17, 18];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-[#F3F4F6]"
    >
      {/* HERO */}
      <section className="px-4 md:px-8 lg:px-10 py-12 md:py-16 bg-[#EDEFF4]">
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
              className="text-[34px] md:text-[42px] leading-[1.1] font-bold text-[#1F2937]"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              The Platform For
              <br />
              <span className="text-[#2A3077]">HealthCare Providers</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-[14px] md:text-[15px] leading-7 text-[#6B7280] max-w-md"
            >
              Whether you&apos;re an independent doctor, a diagnostic lab, a
              pharmacy, or a hospital — HealthismPlus gives you a platform to
              grow your reach, streamline your operations, and build lasting
              relationships with patients who are already looking for you.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={onContactClick}
                className="px-5 py-3 rounded-md bg-[#2A3077] text-white text-sm font-semibold shadow-sm hover:opacity-95 transition"
              >
                Sign in to HMS
              </button>

              <button
                onClick={onContactClick}
                className="px-5 py-3 rounded-md border border-[#C9D0DD] bg-transparent text-[#2A3077] text-sm font-semibold hover:bg-white transition"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px]">
              <div className="rounded-[18px] border border-white/70 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.10)] p-3">
                <div className="rounded-[14px] overflow-hidden bg-[#BFD7EA] aspect-[1.18/1]">
                  <img
                    src="https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=1000&q=80"
                    alt="Healthcare professionals"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* <div className="absolute bottom-[-14px] right-[-8px] bg-[#8EA0FF] text-white rounded-[12px] shadow-lg px-4 py-3 min-w-[150px]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs">
                    ⛨
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold leading-none">
                      Secure Data
                    </p>
                    <p className="text-[9px] text-white/80 mt-1">
                      HIPAA & GDPR Compliant
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TAILORED SECTION */}
      <section className="px-4 md:px-8 lg:px-10 py-14 md:py-16 bg-[#F5F5F6]">
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
              className="text-[28px] md:text-[34px] font-bold text-[#22252B]"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Tailored for Your Excellence
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[14px] text-[#7B8190] mt-2"
            >
              Specific solutions for every vertical in the healthcare ecosystem.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-[220px_1fr] gap-6 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-2"
            >
              {providerTypes.map((type, i) => {
                const active = i === 0;
                return (
                  <motion.button
                    key={type.id}
                    variants={fadeUp}
                    className={`relative w-full flex items-center justify-between px-4 py-3 rounded-md text-sm transition ${active
                      ? "bg-[#E9F7FF] text-[#2A3077] shadow-sm"
                      : "bg-transparent text-[#5E6574] hover:bg-white"
                      }`}
                  >
                    {/* LEFT ACTIVE STRIP */}
                    {active && (
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-md bg-[#2A3077]" />
                    )}

                    <span className="flex items-center gap-2 font-medium pl-2">
                      {type.label}
                    </span>

                    {active && <ChevronRight size={15} />}
                  </motion.button>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[16px] border border-[#E5E7EB] shadow-[0_8px_20px_rgba(15,23,42,0.06)] p-6 md:p-8"
            >
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                {doctorFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-[#3546A8] text-[#3546A8] flex items-center justify-center flex-shrink-0 mt-[2px]">
                      <Check size={11} strokeWidth={5} />
                    </div>
                    <p className="text-[14px] leading-6 text-[#586070]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="px-4 md:px-8 lg:px-10 py-14 md:py-16 bg-[#EEF1F4]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[30px] md:text-[38px] font-bold text-[#22252B]"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Why HealthismPlus Over Everything Else
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[13px] text-[#7B8190] mt-2"
            >
              We don&apos;t just provide a dashboard, we provide a partnership.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[18px] border border-[#E5E7EB] bg-white shadow-[0_10px_22px_rgba(15,23,42,0.08)]"
          >
            <div className="grid grid-cols-3 bg-[#EDEBFA] text-[13px] font-semibold">
              <div className="px-5 py-4 text-[#4B5563]">Key Features</div>
              <div className="px-5 py-4 text-center text-[#6B7280]">
                Just a Directory
              </div>
              <div className="px-5 py-4 text-center text-[#0E9F8B]">
                HealthismPlus
              </div>
            </div>

            {comparisonData.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-t border-[#EEF0F3] min-h-[58px]"
              >
                <div className="px-5 py-4 text-[13px] text-[#2F3542]">
                  {row.feature}
                </div>

                <div className="px-5 py-4 flex items-center justify-center">
                  {row.directory === false ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.4 15L10 11.4L13.6 15L15 13.6L11.4 10L15 6.4L13.6 5L10 8.6L6.4 5L5 6.4L8.6 10L5 13.6L6.4 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#BA1A1A" />
                    </svg>

                  ) : (
                    <span className="text-[11px] text-[#BA1A1A]">
                      {row.directory}
                    </span>
                  )}
                </div>

                <div className="px-5 py-4 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="#006B5A" />
                  </svg>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="px-4 md:px-8 lg:px-10 py-14 bg-[#F5F6F8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 rounded-[22px] px-6 py-5 md:px-7 md:py-6 text-white bg-[linear-gradient(150deg,#1E2A78_0%,#2F3E9E_15%,#28B4A3_100%)] shadow-[0_10px_24px_rgba(47,62,158,0.22)] min-h-[190px] flex flex-col justify-between"
            >
              <div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center mb-4">
                  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.4 11.9933L8.325 13.2308C8.675 12.5308 9.0375 11.8558 9.4125 11.2058C9.7875 10.5558 10.2 9.90585 10.65 9.25585L8.55 8.84335L5.4 11.9933ZM10.725 15.1058L15 19.3433C16.05 18.9433 17.175 18.3308 18.375 17.5058C19.575 16.6808 20.7 15.7433 21.75 14.6933C23.5 12.9433 24.8688 10.9996 25.8563 8.8621C26.8438 6.7246 27.275 4.75585 27.15 2.95585C25.35 2.83085 23.375 3.2621 21.225 4.2496C19.075 5.2371 17.125 6.60585 15.375 8.35585C14.325 9.40585 13.3875 10.5308 12.5625 11.7308C11.7375 12.9308 11.125 14.0558 10.725 15.1058ZM17.4 12.6683C16.825 12.0933 16.5375 11.3871 16.5375 10.5496C16.5375 9.7121 16.825 9.00585 17.4 8.43085C17.975 7.85585 18.6875 7.56835 19.5375 7.56835C20.3875 7.56835 21.1 7.85585 21.675 8.43085C22.25 9.00585 22.5375 9.7121 22.5375 10.5496C22.5375 11.3871 22.25 12.0933 21.675 12.6683C21.1 13.2433 20.3875 13.5308 19.5375 13.5308C18.6875 13.5308 17.975 13.2433 17.4 12.6683ZM18.1125 24.7058L21.2625 21.5558L20.85 19.4558C20.2 19.9058 19.55 20.3121 18.9 20.6746C18.25 21.0371 17.575 21.3933 16.875 21.7433L18.1125 24.7058ZM29.85 0.218347C30.325 3.24335 30.0312 6.1871 28.9688 9.0496C27.9062 11.9121 26.075 14.6433 23.475 17.2433L24.225 20.9558C24.325 21.4558 24.3 21.9433 24.15 22.4183C24 22.8933 23.75 23.3058 23.4 23.6558L17.1 29.9558L13.95 22.5683L7.5375 16.1558L0.15 13.0058L6.4125 6.70585C6.7625 6.35585 7.18125 6.10585 7.66875 5.95585C8.15625 5.80585 8.65 5.78085 9.15 5.88085L12.8625 6.63085C15.4625 4.03085 18.1875 2.19335 21.0375 1.11835C23.8875 0.0433468 26.825 -0.256653 29.85 0.218347ZM2.8125 20.9183C3.6875 20.0433 4.75625 19.5996 6.01875 19.5871C7.28125 19.5746 8.35 20.0058 9.225 20.8808C10.1 21.7558 10.5312 22.8246 10.5188 24.0871C10.5063 25.3496 10.0625 26.4183 9.1875 27.2933C8.5625 27.9183 7.51875 28.4558 6.05625 28.9058C4.59375 29.3558 2.575 29.7558 0 30.1058C0.35 27.5308 0.75 25.5121 1.2 24.0496C1.65 22.5871 2.1875 21.5433 2.8125 20.9183ZM4.95 23.0183C4.7 23.2683 4.45 23.7246 4.2 24.3871C3.95 25.0496 3.775 25.7183 3.675 26.3933C4.35 26.2933 5.01875 26.1246 5.68125 25.8871C6.34375 25.6496 6.8 25.4058 7.05 25.1558C7.35 24.8558 7.5125 24.4933 7.5375 24.0683C7.5625 23.6433 7.425 23.2808 7.125 22.9808C6.825 22.6808 6.4625 22.5371 6.0375 22.5496C5.6125 22.5621 5.25 22.7183 4.95 23.0183Z" fill="white" />
                  </svg>
                </div>

                <h3 className="text-[22px] md:text-[26px] font-bold leading-tight mb-3">
                  Effortless Implementation
                </h3>

                <p className="text-[13px] md:text-sm text-white/80 max-w-md leading-6">
                  Our team handles the data migration and staff training. You focus on
                  patients, we focus on the transition.
                </p>
              </div>

              <div>
                <button
                  onClick={onContactClick}
                  className="mt-5 px-4 py-2 text-sm font-semibold rounded-md bg-white text-[#2F3E9E]"
                >
                  Learn Our Process
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 rounded-[22px] px-6 py-5 md:px-7 md:py-6 bg-[#ECEDEF] min-h-[190px] flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-[#DDF3EE] text-[#0F8B6D] flex items-center justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="24" fill="#006B5A" fill-opacity="0.1" />
                  <path d="M23 33V31H31V23.9C31 21.95 30.3208 20.2958 28.9625 18.9375C27.6042 17.5792 25.95 16.9 24 16.9C22.05 16.9 20.3958 17.5792 19.0375 18.9375C17.6792 20.2958 17 21.95 17 23.9V30H16C15.45 30 14.9792 29.8042 14.5875 29.4125C14.1958 29.0208 14 28.55 14 28V26C14 25.65 14.0875 25.3208 14.2625 25.0125C14.4375 24.7042 14.6833 24.4583 15 24.275L15.075 22.95C15.2083 21.8167 15.5375 20.7667 16.0625 19.8C16.5875 18.8333 17.2458 17.9917 18.0375 17.275C18.8292 16.5583 19.7375 16 20.7625 15.6C21.7875 15.2 22.8667 15 24 15C25.1333 15 26.2083 15.2 27.225 15.6C28.2417 16 29.15 16.5542 29.95 17.2625C30.75 17.9708 31.4083 18.8083 31.925 19.775C32.4417 20.7417 32.775 21.7917 32.925 22.925L33 24.225C33.3167 24.375 33.5625 24.6 33.7375 24.9C33.9125 25.2 34 25.5167 34 25.85V28.15C34 28.4833 33.9125 28.8 33.7375 29.1C33.5625 29.4 33.3167 29.625 33 29.775V31C33 31.55 32.8042 32.0208 32.4125 32.4125C32.0208 32.8042 31.55 33 31 33H23ZM21 26C20.7167 26 20.4792 25.9042 20.2875 25.7125C20.0958 25.5208 20 25.2833 20 25C20 24.7167 20.0958 24.4792 20.2875 24.2875C20.4792 24.0958 20.7167 24 21 24C21.2833 24 21.5208 24.0958 21.7125 24.2875C21.9042 24.4792 22 24.7167 22 25C22 25.2833 21.9042 25.5208 21.7125 25.7125C21.5208 25.9042 21.2833 26 21 26ZM27 26C26.7167 26 26.4792 25.9042 26.2875 25.7125C26.0958 25.5208 26 25.2833 26 25C26 24.7167 26.0958 24.4792 26.2875 24.2875C26.4792 24.0958 26.7167 24 27 24C27.2833 24 27.5208 24.0958 27.7125 24.2875C27.9042 24.4792 28 24.7167 28 25C28 25.2833 27.9042 25.5208 27.7125 25.7125C27.5208 25.9042 27.2833 26 27 26ZM18.025 24.45C17.9083 22.6833 18.4417 21.1667 19.625 19.9C20.8083 18.6333 22.2833 18 24.05 18C25.5333 18 26.8375 18.4708 27.9625 19.4125C29.0875 20.3542 29.7667 21.5583 30 23.025C28.4833 23.0083 27.0875 22.6 25.8125 21.8C24.5375 21 23.5583 19.9167 22.875 18.55C22.6083 19.8833 22.0458 21.0708 21.1875 22.1125C20.3292 23.1542 19.275 23.9333 18.025 24.45Z" fill="#006B5A" />
                </svg>

              </div>

              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#111827] mb-3 leading-tight">
                Continuous Support
              </h3>

              <p className="text-[13px] md:text-sm text-[#68707F] leading-6">
                24/7 technical assistance and dedicated account managers for premium
                partners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 rounded-[22px] px-6 py-5 md:px-7 md:py-6 bg-[#ECEDEF] min-h-[140px] flex flex-col justify-center"
            >
              <div className="w-10 h-8 rounded-full bg-[#E9EDFF] text-[#3546A8] flex items-center justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="24" fill="#4759A8" fill-opacity="0.1" />
                  <path d="M24 33C21.4833 33 19.3542 32.6125 17.6125 31.8375C15.8708 31.0625 15 30.1167 15 29V19C15 17.9 15.8792 16.9583 17.6375 16.175C19.3958 15.3917 21.5167 15 24 15C26.4833 15 28.6042 15.3917 30.3625 16.175C32.1208 16.9583 33 17.9 33 19V29C33 30.1167 32.1292 31.0625 30.3875 31.8375C28.6458 32.6125 26.5167 33 24 33ZM24 21.025C25.4833 21.025 26.975 20.8125 28.475 20.3875C29.975 19.9625 30.8167 19.5083 31 19.025C30.8167 18.5417 29.9792 18.0833 28.4875 17.65C26.9958 17.2167 25.5 17 24 17C22.4833 17 20.9958 17.2125 19.5375 17.6375C18.0792 18.0625 17.2333 18.525 17 19.025C17.2333 19.525 18.0792 19.9833 19.5375 20.4C20.9958 20.8167 22.4833 21.025 24 21.025ZM24 26C24.7 26 25.375 25.9667 26.025 25.9C26.675 25.8333 27.2958 25.7375 27.8875 25.6125C28.4792 25.4875 29.0375 25.3333 29.5625 25.15C30.0875 24.9667 30.5667 24.7583 31 24.525V21.525C30.5667 21.7583 30.0875 21.9667 29.5625 22.15C29.0375 22.3333 28.4792 22.4875 27.8875 22.6125C27.2958 22.7375 26.675 22.8333 26.025 22.9C25.375 22.9667 24.7 23 24 23C23.3 23 22.6167 22.9667 21.95 22.9C21.2833 22.8333 20.6542 22.7375 20.0625 22.6125C19.4708 22.4875 18.9167 22.3333 18.4 22.15C17.8833 21.9667 17.4167 21.7583 17 21.525V24.525C17.4167 24.7583 17.8833 24.9667 18.4 25.15C18.9167 25.3333 19.4708 25.4875 20.0625 25.6125C20.6542 25.7375 21.2833 25.8333 21.95 25.9C22.6167 25.9667 23.3 26 24 26ZM24 31C24.7667 31 25.5458 30.9417 26.3375 30.825C27.1292 30.7083 27.8583 30.5542 28.525 30.3625C29.1917 30.1708 29.75 29.9542 30.2 29.7125C30.65 29.4708 30.9167 29.225 31 28.975V26.525C30.5667 26.7583 30.0875 26.9667 29.5625 27.15C29.0375 27.3333 28.4792 27.4875 27.8875 27.6125C27.2958 27.7375 26.675 27.8333 26.025 27.9C25.375 27.9667 24.7 28 24 28C23.3 28 22.6167 27.9667 21.95 27.9C21.2833 27.8333 20.6542 27.7375 20.0625 27.6125C19.4708 27.4875 18.9167 27.3333 18.4 27.15C17.8833 26.9667 17.4167 26.7583 17 26.525V29C17.0833 29.25 17.3458 29.4917 17.7875 29.725C18.2292 29.9583 18.7833 30.1708 19.45 30.3625C20.1167 30.5542 20.85 30.7083 21.65 30.825C22.45 30.9417 23.2333 31 24 31Z" fill="#4759A8" />
                </svg>

              </div>

              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#111827] mb-3 leading-tight">
                Scalable Architecture
              </h3>

              <p className="text-[13px] md:text-sm text-[#68707F] leading-6 max-w-[260px]">
                Whether you&apos;re a single clinic or a national chain, our platform
                grows with you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 rounded-[22px] px-6 py-5 md:px-7 md:py-6 bg-[#14191E] text-white min-h-[140px] flex items-center justify-between gap-6"
            >
              <div className="flex-1">
                <h3 className="text-[22px] md:text-[26px] font-bold leading-tight mb-3">
                  Advanced Analytics
                </h3>

                <p className="text-[13px] md:text-sm text-white/70 max-w-md leading-6">
                  Unlock insights into patient demographics, treatment efficiency, and
                  financial health.
                </p>
              </div>

              <div className="w-[78px] h-[78px] md:w-[88px] md:h-[88px] rounded-[10px] bg-[#1E2B5C] flex items-end gap-2 px-3 md:px-4 py-3 md:py-4 shrink-0">
                <div className="w-2.5 h-9 bg-[#28B4A3] rounded-sm" />
                <div className="w-2.5 h-12 bg-[#28B4A3] rounded-sm" />
                <div className="w-2.5 h-7 bg-[#28B4A3] rounded-sm" />
                <div className="w-2.5 h-10 bg-[#28B4A3] rounded-sm" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="px-4 md:px-8 lg:px-10 py-14 md:py-16 bg-[#F5F5F6]">
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
              className="text-[30px] md:text-[38px] font-bold text-[#22252B]"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Onboard in 5 business days
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-[13px] text-[#7B8190] mt-2"
            >
              Rapid deployment without interrupting your service.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              {onboardingSteps.map((step) => (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-md font-semibold shrink-0 ${step.step === 1
                      ? "bg-[#2B3178] text-white"
                      : "bg-[#DADDEA] text-[#2b3178]"
                      }`}
                  >
                    {step.step}
                  </div>

                  <div>
                    <h3 className="text-[18px] font-semibold text-[#21252B] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[13px] leading-6 text-[#6E7685] max-w-md">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md w-full justify-self-center lg:justify-self-end"
            >
              <div className="rounded-[18px] border border-[#E5E7EB] bg-white shadow-[0_10px_22px_rgba(15,23,42,0.10)] p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[16px] font-semibold text-[#20242A]">
                    Book your discovery call
                  </h3>
                  <span className="text-[10px] font-medium px-2 py-1 rounded bg-[#E6F8F2] text-[#0F8B6D]">
                    30 min available
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center mb-5">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                    <div
                      key={i}
                      className="text-[10px] font-medium text-[#98A2B3]"
                    >
                      {day}
                    </div>
                  ))}

                  {calendarDays.map((day, i) => (
                    <div
                      key={day}
                      className={`py-2 rounded-md text-sm ${i === 3
                        ? "bg-[#2B3178] text-white font-semibold"
                        : "text-[#6B7280]"
                        }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <button
                  onClick={onContactClick}
                  className="w-full py-3 rounded-md bg-[#2B3178] text-white text-sm font-semibold shadow-sm hover:opacity-95 transition"
                >
                  Schedule Meeting
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PartnerContent;