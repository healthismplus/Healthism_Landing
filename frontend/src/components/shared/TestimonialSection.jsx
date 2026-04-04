import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const sharedTestimonial = {
  author: "Neha Agarwal",
  company: "Halo Designs",
  quote: `I had a fantastic experience with Rachna and her company, Healthism. I needed a specialized test, HLA-
B27, for my back, and her app made the process incredibly seamless. Not only did it offer the most
competitive rates compared to all the pathology labs I checked, but Rachna personally guided me through
the app, making it easy to navigate and book the test.

The efficiency of the service was remarkable - the agent arrived early to collect the sample, and the results
were delivered the very next day. Rachna's proactive assistance and the smooth operation of Healthism
truly set a high standard for medical testing services. I would highly recommend their platform to anyone
looking for reliable, affordable, and prompt blood test services. Thankyou, rachna, for your dedication and
excellent customer support!`,
};
const extraTestimonial = {
  author: "Deepali Mistry",
  company: "Vivaa Seating Systems",
  quote: `I recently availed of a blood test service from Healthism, and I must say, I’m impressed. They arrived on time, as promised, and delivered the reports within the committed timeframe. Their professionalism and efficiency are commendable. I highly recommend Healthism for reliable and hassle-free healthcare services.`,
};
const TestimonialSection = ({ variant = "individual" }) => {
  const testimonials = {
    individual: [sharedTestimonial, extraTestimonial],
    corporate: [sharedTestimonial, extraTestimonial],
    partner: [sharedTestimonial, extraTestimonial],
  };

  const testimonialList = testimonials[variant] || testimonials.individual;
  return (
    <section data-testid="testimonial-section">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className=" rounded-[4px] px-6 md:px-14 py-10 md:py-14"
        >
          {/* Quote Icon */}
          <div className="text-[#B9D9D2] text-[64px] leading-none font-serif mb-6 md:mb-8 select-none">
            &ldquo;
          </div>

          {/* Card */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 4000 }}
          >
            {testimonialList.map((testimonial, i) => {
              const initial =
                testimonial.author?.charAt(0)?.toUpperCase() || "N";

              return (
                <SwiperSlide key={i}>
                  <div className="max-w-7xl mx-auto bg-[#F8F8F8] border border-[#D8D8D8] rounded-[14px] px-6 md:px-7 py-6 md:py-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-11 h-11 rounded-full bg-[#118A6A] text-white flex items-center justify-center text-base font-semibold">
                        {initial}
                      </div>

                      <div>
                        <h3 className="text-[13px] md:text-[14px] font-semibold text-[#333333]">
                          {testimonial.author}
                        </h3>
                        <p className="text-[12px] text-[#8A8A8A] mt-[2px]">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="text-[#3F3F3F] text-[15px] md:text-[16px] leading-[1.45] whitespace-pre-line italic">
                      "{testimonial.quote}"
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
