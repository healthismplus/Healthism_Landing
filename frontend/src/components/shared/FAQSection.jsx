import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQSection = ({ variant = "individual" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    individual: [
      {
        question: "When will my subscription start? And for how long is it valid?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Your subscription will be activated immediately after the welcome call. The plan will be valid for one year from the date of activation.",
            },
          ],
        },
      },
      {
        question: "How can I find labs near my location and book tests?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "You can easily search and book nearby labs through:",
            },
            {
              type: "list",
              items: [
                "The Healthism Plus App",
                "WhatsApp support",
                "Our Call Center",
              ],
            },
          ],
        },
      },
      {
        question: "How do I book a dietician or doctor’s virtual consultation?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Appointments for dieticians and doctors can be booked via:",
            },
            {
              type: "list",
              items: [
                "The Healthism Plus App",
                "WhatsApp support",
                "Our Call Center",
              ],
            },
          ],
        },
      },
      {
        question: "Can I buy the subscription as a gift?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Yes, you can purchase the subscription as a gift and even buy multiple plans. However, the recipient must activate the plan by:",
            },
            {
              type: "list",
              items: [
                {
                  prefix: "Calling us at ",
                  bold: "8691019117",
                },
                {
                  prefix: "Emailing us at ",
                  bold: "info@healthismplus.com",
                },
              ],
            },
          ],
        },
      },
      {
        question: "Who owns the subscription plan?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "The subscription plan is exclusively designed, printed, and marketed by HealthismPlus Technologies Pvt. Ltd.",
            },
          ],
        },
      },
      {
        question: "What if I face any issues while using my subscription plan?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "If you face any difficulty in availing discounts or booking services, you can:",
            },
            {
              type: "list",
              items: [
                {
                  prefix: "Call us at ",
                  bold: "8691019117",
                },
                {
                  prefix: "Email us at ",
                  bold: "info@healthismplus.com",
                },
              ],
            },
            {
              type: "paragraph",
              text: "Our support team is available Monday to Saturday during working hours and will be happy to assist you.",
            },
          ],
        },
      },
      {
        question: "Is the subscription plan transferable?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "No, the plan is non-transferable.",
            },
            {
              type: "paragraph",
              text: "It can be used only by the individual subscriber and their immediate family members.",
            },
          ],
        },
      },
      {
        question: "Can I use my subscription in other cities?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Yes, the subscription is valid across India.",
            },
          ],
        },
      },
      {
        question: "Can I encash the subscription benefits?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "No. The benefits included in your subscription are for usage only and cannot be converted into cash.",
            },
          ],
        },
      },
    ],

    corporate: [
      {
        question: "When will my subscription start? For how long is it valid?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Corporate subscriptions are activated within 5 business days of contract signing. Plans are typically annual with options for multi-year agreements at discounted rates.",
            },
          ],
        },
      },
      {
        question: "How can I find labs near my location and book tests?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Employees can use the white-labeled app to find nearby partner labs. HR admins can also schedule bulk health camps at office locations.",
            },
          ],
        },
      },
      {
        question: "How do I book a dietician or doctor's virtual consultation?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Employees book through the corporate wellness app. Companies can also arrange dedicated consultation slots for their workforce.",
            },
          ],
        },
      },
      {
        question: "Can I buy the subscription as a gift?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Corporate plans can be extended to employees' family members at discounted rates. Contact your account manager for family add-on options.",
            },
          ],
        },
      },
      {
        question: "Who owns the subscription plan?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "The company owns the corporate subscription, and benefits are extended to enrolled employees as per the agreement terms.",
            },
          ],
        },
      },
      {
        question: "What if I face any issues while using my subscription plan?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Corporate clients have dedicated account managers and priority support. Issues are typically resolved within 4 hours during business hours.",
            },
          ],
        },
      },
      {
        question: "Is the subscription plan transferable?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Employee benefits can be transferred when staff changes, subject to company policy. Contact your HR admin for the process.",
            },
          ],
        },
      },
      {
        question: "Can I use my subscription in other cities?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Yes, corporate subscriptions work across all our partner locations nationwide, perfect for companies with distributed teams.",
            },
          ],
        },
      },
      {
        question: "Can I encash the subscription benefits?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Benefits are non-encashable but fully utilizable. Unused credits do not roll over to the next subscription period.",
            },
          ],
        },
      },
    ],

    partner: [
      {
        question: "When will my subscription start? For how long is it valid?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Partner onboarding takes 5 business days. Your partnership agreement is typically annual with auto-renewal options.",
            },
          ],
        },
      },
      {
        question: "How can I track my referral patients or bookings?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Access your dedicated partner dashboard to view real-time analytics on patient referrals, bookings, and revenue generated through the platform.",
            },
          ],
        },
      },
      {
        question: "How do I receive payments for services rendered?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Payments are processed weekly via direct bank transfer. You can track all transactions in your partner portal's finance section.",
            },
          ],
        },
      },
      {
        question: "Can I integrate my existing HMS/EMR system?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Yes! HealthismPlus offers API integrations with most major HMS/EMR systems. Our technical team will assist with seamless integration.",
            },
          ],
        },
      },
      {
        question: "Who manages the partner account?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "You'll have a dedicated Key Account Manager who handles all aspects of your partnership, from onboarding to ongoing support.",
            },
          ],
        },
      },
      {
        question: "What if I face any technical issues?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Partners have 24/7 priority technical support. Critical issues are escalated immediately and resolved within 2 hours.",
            },
          ],
        },
      },
      {
        question: "Is the partnership exclusive to one location?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "No, you can register multiple locations under a single partnership agreement. Each location gets its own dashboard access.",
            },
          ],
        },
      },
      {
        question: "Can I use HealthismPlus branding in my clinic?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Yes, partners receive co-branded marketing materials and can display the HealthismPlus partner badge at their facilities.",
            },
          ],
        },
      },
      {
        question: "How do I upgrade my partnership tier?",
        answer: {
          type: "rich",
          content: [
            {
              type: "paragraph",
              text: "Contact your account manager to discuss tier upgrades. Higher tiers offer additional benefits like featured listings and priority referrals.",
            },
          ],
        },
      },
    ],
  };

  // const faqs = faqData[variant] || faqData.individual;
  const faqs = faqData.individual;

  const subtitles = {
    individual: "Everything you need to know about Healthism+ for individuals.",
    corporate: "Everything you need to know about Healthism+ for businesses.",
    partner: "Everything you need to know about partnering with Healthism+.",
  };

  const renderAnswerBlock = (block, index) => {
    if (block.type === "paragraph") {
      return (
        <p
          key={index}
          className="text-[13px] sm:text-[14px] text-[#4B5563] leading-[1.55] mb-2 last:mb-0"
        >
          {block.text}
        </p>
      );
    }

    if (block.type === "list") {
      return (
        <ul
          key={index}
          className="list-disc pl-5 space-y-0.5 text-[13px] sm:text-[14px] text-[#4B5563] leading-[1.55] mb-2"
        >
          {block.items.map((item, i) => (
            <li key={i}>
              {typeof item === "string" ? (
                item
              ) : (
                <>
                  {item.prefix}
                  <strong className="font-semibold text-[#1A1A1A]">
                    {item.bold}
                  </strong>
                  {item.suffix || ""}
                </>
              )}
            </li>
          ))}
        </ul>
      );
    }

    return null;
  };

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-12 bg-[#F8F9FA]"
      data-testid="faq-section"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2
            className="text-[28px] sm:text-[34px] md:text-[40px] font-extrabold text-[#1A1A1A] mb-3 sm:mb-4"
            style={{ fontFamily: "Raleway" }}
          >
            Common Questions
          </h2>

          <p className="text-[#6B7A99] text-[13px] sm:text-sm max-w-2xl mx-auto leading-relaxed">
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
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span
                  className="font-semibold text-[#1A1A1A] text-[14px] sm:text-[15px] md:text-[16px] pr-2 leading-snug"
                  style={{ fontFamily: "Raleway" }}
                >
                  {faq.question}
                </span>

                <span className="flex-shrink-0 text-[#6B7A99]">
                  {openIndex === index ? (
                    <Minus size={18} />
                  ) : (
                    <Plus size={18} />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-4 sm:px-6 pb-4 sm:pb-5 border-t border-[#EEF2F4]"
                      style={{ fontFamily: "Merriweather" }}
                    >
                      <div className="pt-4">
                        {faq.answer.content.map((block, i) =>
                          renderAnswerBlock(block, i)
                        )}
                      </div>
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