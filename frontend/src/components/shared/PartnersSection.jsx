import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section
      id="partners"
      className="py-16 px-6 lg:px-12 bg-white"
      data-testid="partners-section"
    >
      <div className="max-w-7xl mx-auto space-y-16">
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

          <div className="w-full py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
              {/* Heading */}

              {/* Top Row (3 logos) */}
              <div className="grid grid-cols-3 gap-10 md:gap-16 items-center justify-items-center mb-10">
                <img
                  src="/assets/associates/adityabirla.jpg"
                  alt="Aditya Birla Wellness"
                  className="h-14 md:h-40 object-fit opacity-80 hover:opacity-100 transition duration-300"
                />

                <img
                  src="/assets/associates/essar.png"
                  alt="Essar"
                  className="h-14 md:h-28 object-contain opacity-80 hover:opacity-100 transition duration-300"
                />

                <img
                  src="/assets/associates/idfc.jpeg"
                  alt="IDFC"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>

              {/* Bottom Row (2 logos centered) */}
              <div className="flex justify-center gap-12 md:gap-20 items-center">
                <img
                  src="/assets/associates/bimakart_logo.png"
                  alt="Bima Kart"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition duration-300"
                />

                <img
                  src="/assets/associates/havmore.png"
                  alt="Havmor"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>
            </div>
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
