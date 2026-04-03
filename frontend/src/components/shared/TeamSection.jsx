import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TeamSection = () => {
  const navigate = useNavigate();
  
  const teamMembers = [
    {
      name: "Kashyap Thakkar",
      role: "Founder & CEO",
      photo: "/team/kashyaap.jpeg"
    },
    {
      name: "Yamini Dove",
      role: "COO",
      photo: "/team/yamini.jpeg"
    },
    {
      name: "Rachna Doshi",
      role: "Head of Operations",
      photo: "/team/Rachna.jpeg"
    }
  ];

  return (
    <section className="py-16 px-6 lg:px-12 bg-white" data-testid="team-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-3"
        >
          <p className="text-xs text-[#13B58E] font-semibold tracking-wider uppercase" style={{ fontFamily: 'Raleway' }}>
            Meet Our Leadership
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-6 md:gap-12 mb-6"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="text-center cursor-pointer"
              onClick={() => navigate('/team')}
              data-testid={`team-member-${i}`}
            >
              <div className="relative inline-block mb-3">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 md:w-44 md:h-44 rounded-2xl object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-bold text-[#1A1A1A] text-sm mb-0.5" style={{ fontFamily: 'Raleway' }}>
                {member.name}
              </h3>
              <p className="text-xs text-[#6B7A99]">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            onClick={() => navigate('/team')}
            className="text-sm font-semibold text-[#13B58E] hover:underline"
            style={{ fontFamily: 'Raleway' }}
          >
            View All Team Members →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
