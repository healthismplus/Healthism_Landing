import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Building2,
  Stethoscope,
  FlaskConical,
  Pill,
  Activity,
  ChevronRight,
} from "lucide-react";

const PartnerContent = ({ onContactClick }) => {
  const [activeProvider, setActiveProvider] = useState("doctors");

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
    {
      id: "pathology",
      label: "Pathology Labs",
      icon: <FlaskConical size={16} />,
    },
    { id: "pharmacies", label: "Pharmacies", icon: <Pill size={16} /> },
  ];

  const providerFeatures = {
    doctors: [
      "Get discovered by patients actively searching for specialists in your area through our verified marketplace.",
      "Accept appointments, manage your schedule, and send automated reminders — all without a receptionist.",
      "Write prescriptions by typing, scribbling on a tablet, or simply dictating via voice notes.",
      "Use AI-powered clinical suggestions and a conversational assistant to support faster, safer decisions.",
      "Conduct virtual consultations and remote follow-ups through built-in telehealth capabilities.",
      "Build your reputation with verified patient reviews and ratings that reflect your quality of care.",
    ],
    clinics: [
      "List your services on the HealthismPlus marketplace and get discovered by thousands of health-conscious users nearby.",
      "Manage OPD appointments, live queues, and patient records from a single, unified reception panel.",
      "Our AI receptionist handles incoming calls, bookings, and WhatsApp confirmations in Hindi, English, and other Regional languages.",
      "Capture patient details once and access their complete records, prescriptions, and reports anytime.",
      "Issue bills, manage invoices, and process payments without switching between systems.",
      "Access real-time insights on patient load, peak hours, and service performance to run a tighter operation.",
    ],
    hospitals: [
      "Connect reception, doctors, nursing staff, and administration on one platform — eliminating scattered registers and manual coordination.",
      "Configure departments, doctors, rooms, and rate lists from a centralized admin dashboard with role-based access.",
      "Track OPD, IPD, ICU, and OT occupancy in real time with live dashboards visible across departments.",
      "Manage TPA pre-authorizations, approvals, and settlements to plug billing gaps and recover revenue leakage.",
      "Enable bed-wise ward management with real-time dose tracking, shift handover notes, and instant staff requests.",
      "Leverage built-in AI for reception automation, clinical decision support, and operational intelligence on utilisation and staffing.",
    ],
    pathology: [
      "List your tests and health packages on the HealthismPlus marketplace for direct patient discovery and bookings.",
      "Let patients book sample collection or walk-in tests seamlessly through the app — no phone calls needed.",
      "Send automated appointment confirmations and reminders via WhatsApp and SMS to reduce no-shows.",
      "Deliver reports digitally directly to the patient's HealthismPlus health locker — integrated with ABHA.",
      "Offer exclusive discounted rates to HealthismPlus members and tap into a ready network of health-conscious users.",
      "Access booking analytics and patient data insights to understand demand and optimize your service offerings.",
    ],
    pharmacies: [
      "Get listed on HealthismPlus Kart and reach members actively looking for medicines and health products nearby.",
      "Receive medicine orders directly from patient prescriptions uploaded on the platform — reducing friction to zero.",
      "Offer exclusive member discounts of 20%+ and become the preferred pharmacy for a growing user base.",
      "Send order confirmations, dispatch updates, and health reminders through automated WhatsApp and SMS notifications.",
      "Access a steady stream of repeat customers through the platform's omnichannel engagement and reminder system.",
      "Build visibility and trust through verified ratings and reviews from real patients in your area.",
    ],
  };

  const comparisonData = [
    { feature: "Verified Lead Generation", directory: false, healthism: true },
    { feature: "Integrated HMS Software", directory: false, healthism: true },
    {
      feature: "Scanning Appointment Booking",
      directory: false,
      healthism: true,
    },
    {
      feature: "Real-time Revenue Tracking",
      directory: false,
      healthism: true,
    },
    { feature: "Network Wide Referrals", directory: "Basic", healthism: true },

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

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://hms.healthismplus.com/#/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-3 rounded-md bg-[#2A3077] text-white text-sm font-semibold shadow-sm hover:opacity-95 transition"
              >
                Sign in to HMS
              </a>

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

          <div className="grid lg:grid-cols-[240px_1fr] gap-6 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-2"
            >
              {providerTypes.map((type) => {
                const active = activeProvider === type.id;

                return (
                  <motion.button
                    key={type.id}
                    variants={fadeUp}
                    onClick={() => setActiveProvider(type.id)}
                    className={`relative w-full flex items-center justify-between px-4 py-3 rounded-md text-sm transition ${
                      active
                        ? "bg-[#E9F7FF] text-[#2A3077] shadow-sm"
                        : "bg-transparent text-[#5E6574] hover:bg-white"
                    }`}
                  >
                    {active && (
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-md bg-[#2A3077]" />
                    )}

                    <span className="flex items-center gap-2 font-medium pl-2">
                      {type.icon}
                      {type.label}
                    </span>

                    {active && <ChevronRight size={15} />}
                  </motion.button>
                );
              })}
            </motion.div>

            <motion.div
              key={activeProvider}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-[16px] border border-[#E5E7EB] shadow-[0_8px_20px_rgba(15,23,42,0.06)] p-6 md:p-8"
            >
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                {providerFeatures[activeProvider].map((feature, i) => (
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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.4 15L10 11.4L13.6 15L15 13.6L11.4 10L15 6.4L13.6 5L10 8.6L6.4 5L5 6.4L8.6 10L5 13.6L6.4 15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                        fill="#BA1A1A"
                      />
                    </svg>
                  ) : (
                    <span className="text-[11px] text-[#BA1A1A]">
                      {row.directory}
                    </span>
                  )}
                </div>

                <div className="px-5 py-4 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                      fill="#006B5A"
                    />
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
                  <span className="text-2xl">🚀</span>
                </div>

                <h3 className="text-[22px] md:text-[26px] font-bold leading-tight mb-3">
                  Effortless Implementation
                </h3>

                <p className="text-[13px] md:text-sm text-white/80 max-w-md leading-6">
                  Our team handles the data migration and staff training. You
                  focus on patients, we focus on the transition.
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
                <span className="text-xl">🎧</span>
              </div>

              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#111827] mb-3 leading-tight">
                Continuous Support
              </h3>

              <p className="text-[13px] md:text-sm text-[#68707F] leading-6">
                24/7 technical assistance and dedicated account managers for
                premium partners.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 rounded-[22px] px-6 py-5 md:px-7 md:py-6 bg-[#ECEDEF] min-h-[140px] flex flex-col justify-center"
            >
              <div className="w-10 h-8 rounded-full bg-[#E9EDFF] text-[#3546A8] flex items-center justify-center mb-4">
                <span className="text-xl">⚙️</span>
              </div>

              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#111827] mb-3 leading-tight">
                Scalable Architecture
              </h3>

              <p className="text-[13px] md:text-sm text-[#68707F] leading-6 max-w-[260px]">
                Whether you&apos;re a single clinic or a national chain, our
                platform grows with you.
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
                  Unlock insights into patient demographics, treatment
                  efficiency, and financial health.
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
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-md font-semibold shrink-0 ${
                      step.step === 1
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
                      className={`py-2 rounded-md text-sm ${
                        i === 3
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
