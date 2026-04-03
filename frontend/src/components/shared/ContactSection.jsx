import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      await axios.post(`${API}/contact`, formData);
      setFormStatus({
        type: "success",
        message: "Thank you! We'll be in touch soon."
      });
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again or email us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-[#F8F9FA]" data-testid="contact-section">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Raleway' }}>
            Get in Touch
          </h2>
          <p className="text-[#6B7A99]">
            Have questions about our healthcare solutions? Our team is here to help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
          data-testid="contact-form"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl text-[#1A1A1A] text-sm focus:outline-none focus:border-[#13B58E] focus:ring-2 focus:ring-[#13B58E]/10 transition-all"
                  data-testid="contact-input-name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl text-[#1A1A1A] text-sm focus:outline-none focus:border-[#13B58E] focus:ring-2 focus:ring-[#13B58E]/10 transition-all"
                  data-testid="contact-input-email"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl text-[#1A1A1A] text-sm focus:outline-none focus:border-[#13B58E] focus:ring-2 focus:ring-[#13B58E]/10 transition-all"
                  data-testid="contact-input-company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl text-[#1A1A1A] text-sm focus:outline-none focus:border-[#13B58E] focus:ring-2 focus:ring-[#13B58E]/10 transition-all"
                  data-testid="contact-input-phone"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-[#1A1A1A] mb-2" style={{ fontFamily: 'Raleway' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your inquiry..."
                required
                rows="4"
                className="w-full px-4 py-3 bg-[#F8F9FA] border border-gray-200 rounded-xl text-[#1A1A1A] text-sm focus:outline-none focus:border-[#13B58E] focus:ring-2 focus:ring-[#13B58E]/10 transition-all resize-none"
                data-testid="contact-input-message"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 disabled:opacity-70 text-sm"
              style={{ background: 'linear-gradient(135deg, #13B58E, #22C9A5)', fontFamily: 'Raleway' }}
              data-testid="contact-submit-button"
            >
              {isSubmitting ? "Sending..." : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </motion.button>

            {formStatus.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-6 text-center p-4 rounded-xl text-sm ${
                  formStatus.type === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
                data-testid="contact-form-status"
              >
                {formStatus.message}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
