import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const TeamMemberCard = ({ member, category }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -8, scale: 1.03 }}
    className="bg-white rounded-3xl overflow-hidden card-hover shimmer"
    style={{ border: "1px solid rgba(26, 172, 139, 0.15)" }}
    data-testid={`team-member-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
  >
    <div
      className="h-20"
      style={{
        background: "linear-gradient(135deg, #0A2725 0%, #0F3D3A 100%)",
      }}
    ></div>
    <div className="px-5 pb-5 text-center -mt-12">
      {member.photo ? (
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src={member.photo}
          alt={member.name}
          className={`w-36 h-36 mx-auto rounded-full object-cover border-4 border-white mb-3 ${member.imagePosition === "center" ? "object-center" : "object-top"}`}
        />
      ) : (
        <motion.div
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-36 h-36 mx-auto rounded-full flex items-center justify-center text-4xl font-extrabold border-4 border-white mb-3"
          style={{
            background: "white",
            color: "#1AAC8B",
            fontFamily: "Raleway",
          }}
        >
          {member.initials}
        </motion.div>
      )}
      <h3
        className="text-lg font-bold mb-1"
        style={{ fontFamily: "Raleway", color: "#091A3A" }}
      >
        {member.name}
      </h3>
      <p className="text-xs mb-2" style={{ color: "#1AAC8B" }}>
        {member.role}
      </p>
      {member.bio && (
        <p className="text-xs text-[#6B7A99] leading-relaxed mb-3">
          {member.bio}
        </p>
      )}
      {member.linkedin && (
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white transition-all"
          style={{ background: "linear-gradient(135deg, #1AAC8B, #22C9A5)" }}
          data-testid={`linkedin-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <Linkedin size={14} />
          Connect on LinkedIn
        </motion.a>
      )}
    </div>
  </motion.div>
);

const TeamPage = () => {
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("");

  const scrollToSection = (sectionId) => {
    navigate(`/?section=${sectionId}`);
  };
  const leadership = [
    {
      name: "Kashyap Thakkar",
      role: "Founder & Director",
      initials: "KT",
      bio: "Serial entrepreneur with multiple startup exits at 6X valuations. Leads business strategy, partnerships & revenue growth with vision to build India's most trusted preventive healthcare ecosystem.",
      linkedin: "https://www.linkedin.com/in/kashyapkthakkar",
      photo: "/team/kashyaap.jpeg",
    },
    {
      name: "Yamini Dove",
      role: "Co-Founder & Director",
      initials: "YD",
      bio: "Dynamic professional with 8+ years operations experience, leading fulfillment, onboarding & service excellence with passion and precision.",
      linkedin: "https://www.linkedin.com/in/yamini-dove-889887224",
      photo: "/team/yamini.jpeg",
    },
    {
      name: "Piyush Kothari",
      role: "Investor & Director",
      initials: "PK",
      bio: "Strategic investor and board member guiding HealthismPlus's growth trajectory and market expansion.",
      linkedin: "https://www.linkedin.com/in/piyushhkothari",
      photo: "/team/piyush.jpeg",
    },
    {
      name: "Sandeep Ahuja",
      role: "Investor & Director",
      initials: "SA",
      bio: "Investor and strategic advisor supporting HealthismPlus's financial strategy and business development.",
      linkedin: null,
      photo: "/team/sandeep.jpeg",
    },
  ];

  const advisors = [
    {
      name: "Chirag Jhumkhawala",
      role: "Strategic Advisor - Technology",
      initials: "CJ",
      bio: "Provides strategic oversight on software integration, cloud infrastructure, and innovative digital solutions that enhance user engagement.",
      linkedin: "https://www.linkedin.com/in/chiragjhumkhawala",
      photo: "/team/Chirag.jpeg",
    },
    {
      name: "Naina Singhania",
      role: "Strategic Advisor & Shareholder",
      initials: "NS",
      bio: "Registered Dietician & Clinical Nutritionist with 10+ years experience. Founder of Fad 2 Fit. Certified Yoga teachers Trainer.",
      linkedin: "https://www.linkedin.com/in/naina-singhania-nutritionist",
      photo: "/team/naina.jpeg",
    },
    {
      name: "Sanam Manchanda",
      role: "Strategic Advisor - Women's Health",
      initials: "SM",
      bio: "Over a decade of expertise in pregnancy, childbirth, maternal and newborn care. Internationally Certified Childbirth Educator, Labor & Birth Doula and Lactation Professional",
      linkedin: "https://www.linkedin.com/in/sanam-manchanda-00711944",
      photo: "/team/sonam.jpeg",
    },
  ];

  const keyPersonnel = [
    {
      name: "Rachna Doshi",
      role: "Co-Founder & COO",
      initials: "RD",
      bio: "Chief Operating Officer building scalable systems, managing teams, and driving operational excellence at HealthismPlus.",
      linkedin: "https://www.linkedin.com/in/rachna-shah-doshi-3b237b59",
      photo: "/team/Rachna.jpeg",
    },
    {
      name: "Sipra Pandey",
      role: "Operations & Partner Onboarding",
      initials: "SP",
      bio: "Oversees end-to-end operations, optimizing resource allocation & enhancing team productivity. Registered Pharmacist with Bachelor's degree.",
      linkedin: "https://www.linkedin.com/in/sipra-pandey-5bb774384",
      photo: "/team/sipra.jpeg",
      imagePosition: "center",
    },
    {
      name: "Rina Dedhia",
      role: "Growth Manager",
      initials: "RD",
      bio: "Spearheads regional expansion by blending local market insight with data-driven strategy to optimize user acquisition.",
      linkedin: null,
      photo: "/team/Rina Dedhia.jpeg",
    },
    {
      name: "Sanskar Dubey",
      role: "Growth Partner",
      initials: "SD",
      bio: "Drives strategic growth initiatives and partnership development to expand business's reach and impact.",
      linkedin: "https://www.linkedin.com/in/sanskar-dubey--/",
      photo: "/team/sanskar.jpg",
    },
  ];

  const itTeam = [
    {
      name: "Raveena Mishra",
      role: "Project Manager",
      initials: "RM",
      bio: "Drives projects from concept to completion with precision & efficiency. Excels at coordinating cross-functional teams and managing timelines.",
      linkedin: "https://www.linkedin.com/in/raveena-mishra-6053421a1",
      photo: "/team/Raveena.jpeg",
    },
    {
      name: "Shreyas Kalate",
      role: "Backend Developer",
      initials: "SK",
      bio: "Builds & maintains core systems powering seamless digital experiences. Specializes in robust, scalable & secure server-side applications.",
      linkedin: "https://www.linkedin.com/in/shreyas-kalate-8aa37b2bb",
      photo: "/team/shreyas.jpeg",
    },

    {
      name: "Ayush Mer",
      role: "Frontend Developer",
      initials: "AM",
      bio: "Frontend developer crafting intuitive user interfaces and seamless user experiences.",
      linkedin: "https://www.linkedin.com/in/ayush-mer-737379226",
      photo: "/team/ayushmer.jpeg",
    },
    {
      name: "Yash Bhatt",
      role: "Frontend Developer",
      initials: "YB",
      bio: "Frontend developer building responsive and engaging web applications.",
      linkedin: "https://www.linkedin.com/in/yashbhatt30",
      photo: "/team/Yashbhatt.jpeg",
    },
    {
      name: "Priyal Mohod",
      role: "Product Designer",
      initials: "PM",
      bio: "Product designer creating beautiful and functional user interfaces that delight users.",
      linkedin: "https://www.linkedin.com/in/priyal-mohod",
      photo: "/team/Priyal mohod.jpeg",
    },
    {
      name: "Durva Amrutkar",
      role: "AI Agent Backend",
      initials: "DA",
      bio: "AI specialist developing intelligent backend systems and automation solutions.",
      linkedin: "https://www.linkedin.com/in/durva-amrutkar",
      photo: "/team/Durva.jpeg",
    },
  ];

  const consultants = [
    {
      name: "Samruddhi Shinde",
      role: "Health & Nutrition Consultant",
      initials: "SS",
      bio: "Focuses on clinical nutrition & holistic wellness, designing customized meal plans & lifestyle interventions.",
      linkedin: "https://www.linkedin.com/in/samruddhi-shinde-324275230",
      photo: "/team/samruddhi.jpeg",
    },
    {
      name: "Jinal Jain",
      role: "Consultant – Lifestyle & Clinical Nutrition",
      initials: "JJ",
      bio: "Brings expertise in dietary planning & performance, educating clients about the powerful link between food and energy.",
      linkedin: null,
      photo: "/team/jinal.jpeg",
    },
    {
      name: "Anjali Rai",
      role: "Wellness Expert",
      initials: "AR",
      bio: "Wellness specialist providing expert guidance on holistic health and preventive care strategies.",
      linkedin: null,
      photo: "/team/anjali.jpeg",
    },
  ];

  return (
    <div>
      <Navigation
        onSectionClick={scrollToSection}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="min-h-screen" style={{ background: "#F8F9FA" }}>
        {/* Header */}
        <div
          className="py-20 px-6 md:px-12"
          style={{
            background: "linear-gradient(135deg, #0A2725 0%, #0F3D3A 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="h-0.5 w-8 bg-[#1AAC8B]"></div>
                <span
                  className="text-xs uppercase tracking-[0.2em] font-semibold"
                  style={{ color: "#1AAC8B" }}
                >
                  OUR PEOPLE
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Meet the HealthismPlus Team
              </h1>
              <p className="text-white/70 text-lg max-w-3xl">
                Passionate professionals dedicated to transforming healthcare
                and wellness across India
              </p>
            </motion.div>
          </div>
        </div>

        {/* Leadership Team */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-12">
                <h2
                  className="text-3xl md:text-4xl font-extrabold mb-2"
                  style={{ fontFamily: "Raleway", color: "#091A3A" }}
                >
                  Leadership Team
                </h2>
                <p className="text-[#6B7A99]">
                  Visionary leaders steering HealthismPlus towards excellence
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {leadership.map((member, i) => (
                  <TeamMemberCard
                    key={i}
                    member={member}
                    category="leadership"
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Advisors */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-12">
                <h2
                  className="text-3xl md:text-4xl font-extrabold mb-2"
                  style={{ fontFamily: "Raleway", color: "#091A3A" }}
                >
                  Strategic Advisors
                </h2>
                <p className="text-[#6B7A99]">
                  Expert advisors providing strategic guidance and domain
                  expertise
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {advisors.map((member, i) => (
                  <TeamMemberCard key={i} member={member} category="advisors" />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Personnel */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-12">
                <h2
                  className="text-3xl md:text-4xl font-extrabold mb-2"
                  style={{ fontFamily: "Raleway", color: "#091A3A" }}
                >
                  Key Personnel
                </h2>
                <p className="text-[#6B7A99]">
                  Core team driving operations and growth
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {keyPersonnel.map((member, i) => (
                  <TeamMemberCard
                    key={i}
                    member={member}
                    category="key-personnel"
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* IT Team */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-12">
                <h2
                  className="text-3xl md:text-4xl font-extrabold mb-2"
                  style={{ fontFamily: "Raleway", color: "#091A3A" }}
                >
                  Technology Team
                </h2>
                <p className="text-[#6B7A99]">
                  Talented developers and designers building the platform
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {itTeam.map((member, i) => (
                  <TeamMemberCard key={i} member={member} category="it-team" />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Consultants */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="mb-12">
                <h2
                  className="text-3xl md:text-4xl font-extrabold mb-2"
                  style={{ color: "#091A3A" }}
                >
                  Health & Wellness Consultants
                </h2>
                <p className="text-[#6B7A99]">
                  Expert consultants providing specialized guidance
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-6"
              >
                {consultants.map((member, i) => (
                  <TeamMemberCard
                    key={i}
                    member={member}
                    category="consultants"
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-16 px-6 md:px-12"
          style={{
            background: "linear-gradient(135deg, #0A2725 0%, #0F3D3A 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-3xl md:text-4xl font-extrabold text-white mb-4"
                style={{ fontFamily: "Raleway" }}
              >
                Join Our Growing Team
              </h2>
              <p className="text-white/60 mb-8">
                We're always looking for talented individuals who share our
                passion for healthcare innovation
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/?section=${"contact"}`)}
                className="px-8 py-4 bg-[#13B58E] text-white rounded-full font-bold text-lg transition-all hover:shadow-xl"
                data-testid="contact-cta"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer onSectionClick={scrollToSection} setActiveTab={setActiveTab} />
    </div>
  );
};

export default TeamPage;
