import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQSection = ({ variant = "individual" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    individual: [
      {
        question: "When will my subscription start? For how long is it valid?",
        answer: "Your subscription starts immediately upon successful payment and is valid for 12 months from the date of activation. You'll receive a confirmation email with all the details."
      },
      {
        question: "How can I find labs near my location and book tests?",
        answer: "Simply open the HealthismPlus app, enable location services, and browse the 'Labs' section. You can filter by distance, ratings, and available tests. Booking is instant and you'll receive confirmation within minutes."
      },
      {
        question: "How do I book a dietitian or doctor's virtual consultation?",
        answer: "Navigate to the 'Consultations' section in the app, select your preferred specialist type, choose an available time slot, and confirm your booking. Video consultations are conducted through our secure in-app platform."
      },
      {
        question: "Can I buy the subscription as a gift?",
        answer: "Yes! You can purchase a gift subscription through our app or website. Simply select 'Gift a Plan' at checkout and enter the recipient's details. They'll receive an activation link via email."
      },
      {
        question: "Who owns the subscription plan?",
        answer: "The subscription is owned by the person whose details are registered during signup. It is non-transferable but can include family members under family plans."
      },
      {
        question: "What if I face any issues while using my subscription plan?",
        answer: "Our 24/7 support team is always available. You can reach us through the app's chat feature, email at support@healthismplus.com, or call our helpline. Most issues are resolved within 24 hours."
      },
      {
        question: "Is the subscription plan transferable?",
        answer: "No, individual subscription plans are non-transferable. However, family plans allow you to add eligible family members to share benefits."
      },
      {
        question: "Can I use my subscription in other cities?",
        answer: "Yes! Your HealthismPlus subscription works across all cities where we have partner networks. Our coverage extends to 50+ cities across India."
      },
      {
        question: "Can I encash the subscription benefits?",
        answer: "No, subscription benefits cannot be converted to cash. However, you can fully utilize all services included in your plan throughout the subscription period."
      }
    ],
    corporate: [
      {
        question: "When will my subscription start? For how long is it valid?",
        answer: "Corporate subscriptions are activated within 5 business days of contract signing. Plans are typically annual with options for multi-year agreements at discounted rates."
      },
      {
        question: "How can I find labs near my location and book tests?",
        answer: "Employees can use the white-labeled app to find nearby partner labs. HR admins can also schedule bulk health camps at office locations."
      },
      {
        question: "How do I book a dietitian or doctor's virtual consultation?",
        answer: "Employees book through the corporate wellness app. Companies can also arrange dedicated consultation slots for their workforce."
      },
      {
        question: "Can I buy the subscription as a gift?",
        answer: "Corporate plans can be extended to employees' family members at discounted rates. Contact your account manager for family add-on options."
      },
      {
        question: "Who owns the subscription plan?",
        answer: "The company owns the corporate subscription, and benefits are extended to enrolled employees as per the agreement terms."
      },
      {
        question: "What if I face any issues while using my subscription plan?",
        answer: "Corporate clients have dedicated account managers and priority support. Issues are typically resolved within 4 hours during business hours."
      },
      {
        question: "Is the subscription plan transferable?",
        answer: "Employee benefits can be transferred when staff changes, subject to company policy. Contact your HR admin for the process."
      },
      {
        question: "Can I use my subscription in other cities?",
        answer: "Yes, corporate subscriptions work across all our partner locations nationwide, perfect for companies with distributed teams."
      },
      {
        question: "Can I encash the subscription benefits?",
        answer: "Benefits are non-encashable but fully utilizable. Unused credits do not roll over to the next subscription period."
      }
    ],
    partner: [
      {
        question: "When will my subscription start? For how long is it valid?",
        answer: "Partner onboarding takes 5 business days. Your partnership agreement is typically annual with auto-renewal options."
      },
      {
        question: "How can I track my referral patients or bookings?",
        answer: "Access your dedicated partner dashboard to view real-time analytics on patient referrals, bookings, and revenue generated through the platform."
      },
      {
        question: "How do I receive payments for services rendered?",
        answer: "Payments are processed weekly via direct bank transfer. You can track all transactions in your partner portal's finance section."
      },
      {
        question: "Can I integrate my existing HMS/EMR system?",
        answer: "Yes! HealthismPlus offers API integrations with most major HMS/EMR systems. Our technical team will assist with seamless integration."
      },
      {
        question: "Who manages the partner account?",
        answer: "You'll have a dedicated Key Account Manager who handles all aspects of your partnership, from onboarding to ongoing support."
      },
      {
        question: "What if I face any technical issues?",
        answer: "Partners have 24/7 priority technical support. Critical issues are escalated immediately and resolved within 2 hours."
      },
      {
        question: "Is the partnership exclusive to one location?",
        answer: "No, you can register multiple locations under a single partnership agreement. Each location gets its own dashboard access."
      },
      {
        question: "Can I use HealthismPlus branding in my clinic?",
        answer: "Yes, partners receive co-branded marketing materials and can display the HealthismPlus partner badge at their facilities."
      },
      {
        question: "How do I upgrade my partnership tier?",
        answer: "Contact your account manager to discuss tier upgrades. Higher tiers offer additional benefits like featured listings and priority referrals."
      }
    ]
  };

  const faqs = faqData[variant] || faqData.individual;
  const subtitles = {
    individual: "Everything you need to know about Healthism+ for individuals.",
    corporate: "Everything you need to know about Healthism+ for businesses.",
    partner: "Everything you need to know about partnering with Healthism+."
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#F8F9FA]" data-testid="faq-section">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Raleway' }}>
            Common Questions
          </h2>
          <p className="text-[#6B7A99] text-sm">
            {subtitles[variant]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-[#1A1A1A] text-sm pr-4" style={{ fontFamily: 'Raleway' }}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0 text-[#6B7A99]">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-[#6B7A99] text-sm leading-relaxed" style={{ fontFamily: 'Merriweather' }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
