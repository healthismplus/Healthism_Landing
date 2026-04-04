import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section
      id="partners"
      className="py-16 px-6 lg:px-12 bg-white"
      data-testid="partners-section"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* ================= OUR PARTNERS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Image Grid */}
          <div className="flex justify-center">
            <img
              src={"/assets/associates/partners.jpg"}
              alt="Partners"
              className="w-full max-w-5xl object-contain"
            />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200" />

        {/* ================= OUR CUSTOMERS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            <span className="text-[#1C0C4A]">our </span>
            <span className="text-[#13B58E]">Customers</span>
          </h2>

          <div className="flex justify-center items-center gap-10">
            <img
              src={"/assets/associates/idfc.jpeg"}
              alt="IDFC"
              className="h-12 object-contain"
            />
            <img
              src={"/assets/associates/havmore.png"}
              alt="Havmor"
              className="h-12 object-contain"
            />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200" />

        {/* ================= OUR RECOGNITION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center">
            <img
              src={"/assets/associates/recognition.jpg"}
              alt="Recognition"
              className="w-full max-w-5xl object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
