import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialSection = ({ variant = "individual" }) => {
  const testimonials = {
    individual: {
      quote: "I had a fantastic experience with Rachna and her company, Healthism. I needed a specialized test, HLA-B27, for my back, and her app made the process incredibly seamless. Not only did it offer the most competitive rates compared to all the pathology labs I checked, but Rachna personally guided me through the app, making it easy to navigate and book the test. The efficiency of the service was remarkable - the agent arrived early to collect the sample, and the results were delivered the very next day.",
      author: "Neha Agarwal",
      company: "Halo Designs",
      image: "/team/naina.jpeg"
    },
    corporate: {
      quote: "Implementing HealthismPlus for our 500+ employees was seamless. Within 3 months, we saw a 25% reduction in sick leaves and significantly improved employee morale. The dedicated account management team made the entire process effortless. Our HR team loves the analytics dashboard - it provides actionable insights we never had before.",
      author: "Rahul Sharma",
      company: "TechCorp India",
      image: "/team/piyush.jpeg"
    },
    partner: {
      quote: "Partnering with HealthismPlus transformed our clinic's patient acquisition. We've seen a 40% increase in new patients within the first quarter. The HMS integration was smooth, and their technical support is exceptional. The verified lead generation and patient engagement tools have become essential to our practice.",
      author: "Dr. Priya Mehta",
      company: "Wellness Clinic Mumbai",
      image: "/team/Rachna.jpeg"
    }
  };

  const testimonial = testimonials[variant] || testimonials.individual;

  return (
    <section className="py-16 px-6 lg:px-12 bg-[#F8FAFB]" data-testid="testimonial-section">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Author Image */}
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={testimonial.image}
              alt={testimonial.author}
              className="w-14 h-14 rounded-full object-cover object-top flex-shrink-0"
            />

            <div className="flex-1">
              {/* Author Info */}
              <div className="mb-4">
                <h3 className="font-bold text-[#1A1A1A] text-sm" style={{ fontFamily: 'Raleway' }}>
                  {testimonial.author}
                </h3>
                <p className="text-xs text-[#13B58E]">{testimonial.company}</p>
              </div>

              {/* Quote */}
              <p className="text-[#6B7A99] leading-relaxed text-sm" style={{ fontFamily: 'Merriweather' }}>
                {testimonial.quote}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
