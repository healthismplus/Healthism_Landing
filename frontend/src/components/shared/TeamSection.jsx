import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TeamSection = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Kashyap Thakkar",
      role: "Founder & Director",
      photo: "/team/kashyaap.jpeg",
    },
    {
      name: "Yamini Dove",
      role: "Co-Founder & Director",
      photo: "/team/yamini.jpeg",
    },
    {
      name: "Rachna Doshi",
      role: "Co-Founder & COO",
      photo: "/team/Rachna.jpeg",
    },
  ];

  return (
    <section
      className="py-20 px-6 lg:px-12 bg-white"
      data-testid="team-section"
    >
      <div className="max-w-6xl mx-auto">
        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl text-[#191C1D] font-extrabold tracking-wider uppercase">
            {" "}
            Meet Our Leadership{" "}
          </h2>
        </motion.div>

        {/* ===== Team Grid ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            gap-10
          "
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="text-center cursor-pointer group"
              onClick={() => navigate("/team")}
            >
              {/* Image */}
              <div className="relative mb-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="
                    w-40 h-40 
                    sm:w-44 sm:h-44 
                    md:w-52 md:h-52 
                    mx-auto
                    rounded-2xl 
                    object-cover 
                    object-top
                    transition-all duration-500
                    group-hover:shadow-xl
                  "
                />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-[#1A1A1A] text-base md:text-lg">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== CTA ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate("/team")}
            className="
              text-sm font-semibold 
              text-[#13B58E] 
              hover:text-[#0e9f7a]
              transition
            "
          >
            View All Team Members →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
