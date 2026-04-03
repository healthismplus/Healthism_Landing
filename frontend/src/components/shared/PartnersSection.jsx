import { motion } from "framer-motion";

const PartnersSection = () => {
  const partners = ["APOLLO", "MAX HEALTH", "FORTIS", "MEDANTA", "TATA 1MG"];

  return (
    <section id="partners" className="py-12 px-6 lg:px-12 bg-white border-t border-gray-100" data-testid="partners-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs text-[#13B58E] font-semibold tracking-wider uppercase mb-6" style={{ fontFamily: 'Raleway' }}>
            Our Trusted Partner Network
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {partners.map((partner, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-base md:text-lg font-bold text-[#C4C9D4] hover:text-[#13B58E] transition-all cursor-pointer"
                style={{ fontFamily: 'Raleway' }}
                data-testid={`partner-${i}`}
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
