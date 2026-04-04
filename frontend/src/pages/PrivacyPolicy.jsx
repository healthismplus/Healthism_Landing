import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= DUMMY PRIVACY DATA ================= */
const PRIVACY_DATA = [
  {
    title: "Personal Identification Information",
    sections: [
      {
        type: "paragraph",
        content:
          "If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Identification Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.",
      },
      {
        type: "paragraph",
        content:
          "The personal information you provide on HealthismPlus Platform when you fill out your profile is Private, such as your name, location, gender, profile picture. This is hereinafter called Public Profile. Your Public Profile can:",
      },

      {
        type: "paragraph",
        content:
          "We may collect Personal Identification Information of users including the information that is available on the internet, such as from Facebook, LinkedIn, Twitter and Google, or publicly available information that we acquire from service providers. We collect this information to identify users for better communication, processing and personalization of the Services provided by HealthismPlus.",
      },
    ],
  },
  {
    title: "Non-Personal Identification Information",
    sections: [
      {
        type: "paragraph",
        content:
          "We may collect non-personal identification information about users whenever they interact with our site. Non-personal identification information may include the type of mobile phone and technical information about users, such as the operating system and the Internet service providers utilized including IP address and other similar information.",
      },
    ],
  },

  {
    title: "Usage and Technical Information",
    sections: [
      {
        type: "paragraph",
        content:
          "We collect the information about how you interact with our Service. This information may include your IP address, geographical location, browser type, referral source, length of visit, pages viewed and items clicked.",
      },
    ],
  },
  {
    title: "Information Collection",
    sections: [
      {
        type: "paragraph",
        content:
          "For a better experience, while using our Service, you are required to provide us with certain personally identifiable information for your Private Profile, including but not limited to:",
      },
      {
        type: "list",
        items: [
          "Identity information, such as your first name, last name, gender, username and/or similar as may be verified by voter ID card, PAN or driving license;",
          "Contact information, such as your mobile number, postal address, email address and telephone number;",
          "Feedback and correspondence, such as information you provide when you respond to surveys, participate in market research activities, report a problem with Service, receive customer support or otherwise correspond with us;",
          "Usage information, such as information about how you use the Service and interact with us; and",
          "Marketing information, such as your preferences for receiving marketing communications and details about how you engage with them."
        ],
      },
      {
        type: "paragraph",
        content:
          "Healthism Plus Platform’s mission is committed to be transparent about the data we collect about you, how it is used and with whom it is shared.",
      },
      {
        type: "paragraph",
        content:
          "When you use the services of our customers and partners, such as Doctors, Lab or Other Services, we share your Public Profile (e.g., Name, Mobile no to Partner) with prospective  to enable you to get Service proper time and informed.",
      },
    ],
  },
  {
    title: "Information We Collect",
    sections: [
      {
        type: "list",
        items: [
          "Contacts List"
        ],
      },
      {
        type: "paragraph",
        content:
          "When you sync your contacts with our Services, we import and store the contacts list to our servers. You have the option to deny us the access to your contacts list.",
      },
      {
        type: "paragraph",
        content:
          "We also receive personal data (including contact information) about you when others import or sync their contacts with our Services.",
      },

      {
        type: "list",
        items: [
          "Local Information"
        ],
      },
      {
        type: "paragraph",
        content:
          "When you give location permission, we access information derived from your GPS. We may use third-party cookies and similar technologies to collect some of this information.",
      },

      {
        type: "list",
        items: [
          "Storage"
        ],
      },
      {
        type: "paragraph",
        content:
          "When you opt-in for storage permission, we access your device storage like gallery photos.",
      },

      {
        type: "list",
        items: [
          "Camera"
        ],
      },
      {
        type: "paragraph",
        content:
          "Granting camera permission allows us to access the photo that you click to be displayed on a lab report, or medicine prescription.",
      },

       {
        type: "list",
        items: [
          "Microphone"
        ],
      },
      {
        type: "paragraph",
        content:
          "Voice and audio information when you use audio features. How we use it",
      },      
    ],
  },

  {
    title: "How we use it",
    sections: [
      {
        type: "list",
        items: [
          "Contacts List"
        ],
      },
      {
        type: "paragraph",
        content:
          "We collect your contacts to help you keep adding members in your subscription who connect with family and friends.",
      },

      {
        type: "list",
        items: [
          "Local Information"
        ],
      },
      {
        type: "paragraph",
        content:
          "To provide you with location-based services like finding Listing near you.",
      },

      {
        type: "list",
        items: [
          "Storage"
        ],
      },
      {
        type: "paragraph",
        content:
          "To allow you to select your profile picture from your existing photos in the gallery. A good Medicine Prescription, Profile, Lab Report photo helps a doctor or lab assist you better.",
      },

      {
        type: "list",
        items: [
          "Camera"
        ],
      },
      {
        type: "paragraph",
        content:
          "To allow you to click your profile picture A good Medicine Prescription, Profile, Lab Report photo helps a doctor or lab assist you better.",
      },

      {
        type: "list",
        items: [
          "Microphone"
        ],
      },
      {
        type: "paragraph",
        content:
          "To allow you to send audio messages within the app.",
      },    
      
      {
        type: "list",
        items: [
          "Call"
        ],
      },
      {
        type: "paragraph",
        content:
          "To enable the Call to Our IVR feature of the app. ",
      }, 
      {
        type: "paragraph",
        content:
          "To effectively provide and introduce any new Services to you, we collect and use certain information, including, but not limited to, such as:",
      }, 
      {
        type: "list",
        items: [
          "We log your visits and use of our Services. ",
          "We receive data from your devices and networks, including location data. ",
          "We may further request and store additional information. ",
          "To monitor usage or traffic patterns (including to track users’ movements around the Services) and gather demographic information. ",
          "To communicate directly with you, including by sending you information about new products and services. ",
          "To deliver you a personalized experience. May come in the form of messages, delivering tailor-made ads based on your interest and browsing history. ",
        ],
      },
      {
        type: "paragraph",
        content:
          "To the extent permitted by the applicable law, we may record and monitor your communications with us to ensure compliance with our legal and regulatory obligations and our internal policies. This may include the recording of telephone conversations.",
      }, 
    ],
  },
  {
    title: "How we protect your information?",
    sections: [
      {
        type: "paragraph",
        content:
          "We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our app. The data is stored securely on our servers – Server 1 & Server 2 .",
      },
    ],
  },
  {
    title: "Sharing your personal information",
    sections: [
      {
        type: "paragraph",
        content:
          "We do not sell, trade, or rent users personal identification information to any third party. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.",
      },
      {
        type: "paragraph",
        content:
          "The app does use third-party services that may collect information used to identify you.",
      },
      {
        type: "paragraph",
        content:
          "Link to privacy policy of third-party service providers used by the app",
      },
      {
        type: "list",
        items: [
          "Google Play Services",
          "Firebase Analytics"
        ],
      },
      {
        type: "paragraph",
        content:
          "We do not disclose, transfer or share your personal information with others except with:",
      },
      {
        type: "list",
        items: [
          "Third parties including enforcement, regulatory and judicial authorities, if we determine that disclosure of your personal information is required to a) respond to court orders, or legal process, or to establish or exercise our legal rights or defend against legal claims; or b) investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of our Terms of Service or as otherwise required by law;",
          "In the event of a merger, acquisition, financing, or sale of assets or any other situation involving the transfer of some or all of our business assets we may disclose personal information to those involved in the negotiation or transfer.",
          "Third party service providers and marketing partners that we engage to a) provide services over the Platform on our behalf; b) maintain the Platform and mailing lists; or c) communicate with you on our behalf about offers relating to its products and/or services. We will take reasonable steps to ensure that these third-party service providers are obligated to protect your personal information and are also subject to appropriate confidentiality / non-disclosure obligations."
        ],
      },
      {
        type: "paragraph",
        content:
          "You, hereby agree and acknowledge that you will use the information shared with you only for the purpose of the Services. You shall not use such information for any personal or other business purposes. In the event you are found to be misusing the information shared with you, we shall, at our sole discretion, delete your account with immediate effect and you will be blocked from using/ accessing HealthismPlus Platform in future.",
      },
    ],
  },
  {
    title: "Log Data",
    sections: [
      {
        type: "paragraph",
        content:
          "Whenever you use our Service, including our sites, app and platform technology, such as when you view or click on content (e.g., learning video) or perform a search, install or update one of our mobile apps, post messages or apply for Listing and in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as log-ins, cookies, your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics to identify you and log your use.",
      },
    ],
  },
  {
    title: "Cookies",
    sections: [
      {
        type: "paragraph",
        content:
          "Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device’s internal memory.",
      },
      {
        type: "paragraph",
        content:
          "This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.",
      },
    ],
  },
  {
    title: "Service Providers",
    sections: [
      {
        type: "paragraph",
        content:
          "We may use third-party services for analytics, payment processing, and communication.",
      },
      {
        type: "paragraph",
        content:
          "To facilitate our Service; To provide the Service on our behalf; To perform Service-related services; or To assist us in analyzing how our Service is used. We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.To facilitate our Service; To provide the Service on our behalf; To perform Service-related services; or To assist us in analyzing how our Service is used. We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.",
      },
    ],
  },

  {
    title: "One-to-one messages",
    sections: [
      {
        type: "paragraph",
        content:
          "HealthismPlus has access to the one-to-one messages of users of the app and we review these messages periodically for moderation of trust and safety related concerns. However, HealthismPlus never shares this data with any third-party.",
      },
    ],
  },
  {
    title: "Grievance Officer",
    sections: [
      {
        type: "paragraph",
        content:
          "In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:",
      },
      {
        type: "paragraph",
        content:
          "Designation: Senior Manager",
      },
      {
        type: "paragraph",
        content:
          "HEALTHISMPLUS TECHNOLOGIES PRIVATE LIMITED.",
      },
      {
        type: "paragraph",
        content:
          "JITO House,",
      },
      {
        type: "paragraph",
        content:
          "Plot no. A-56 Road No 1 MIDC Marol,",
      },
      {
        type: "paragraph",
        content:
          "next to The International by Tunga Hotel, Mulgaon,",
      },
      {
        type: "paragraph",
        content:
          "Andheri East,",
      },
      {
        type: "paragraph",
        content:
          "Mumbai,",
      },
      {
        type: "paragraph",
        content:
          "Maharashtra 400093",
      },
      {
        type: "paragraph",
        content:
          "Email: info@healthismplus.com",
      },
      {
        type: "paragraph",
        content:
          "Time: Mon – Sat (9:00 – 18:00)",
      },
    ],
  },
   {
    title: "Customer Support",
    sections: [
      {
        type: "paragraph",
        content:
          "You can reach our customer support team to address any of your queries or complaints related to product and services by clicking the link or email us at",
      },
      {
        type: "paragraph",
        content:
          "info@healthismplus.com",
      },
    ],
  },
   {
    title: "Queries related to Privacy Policy",
    sections: [
      {
        type: "paragraph",
        content:
          "If you have a query, concern, or complaint in relation to the collection or usage of your personal information under this Privacy Policy, please contact us at info@healthismplus.com.",
      },
    ],
  },
];

/* ================= COMPONENT ================= */
const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate(`/?section=${sectionId}`);
  };

  return (
    <div>
      <Navigation
        onSectionClick={scrollToSection}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* HEADER */}
      <section className="bg-[#EDF3F4] py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[32px] font-bold text-[#0F172A] mb-4">
            Privacy Policy
          </h1>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          {PRIVACY_DATA.map((block, i) => (
            <div key={i}>
              {/* Title */}
              <h2 className="text-[18px] font-semibold text-[#006B5A] mb-2">
                {block.title}
              </h2>

              {/* Sections */}
              <div className="space-y-4 text-[#5E6574]">
                {block.sections.map((sec, idx) => {
                  if (sec.type === "paragraph") {
                    return <p key={idx}>{sec.content}</p>;
                  }

                  if (sec.type === "list") {
                    return (
                      <ul key={idx} className="list-disc pl-5 space-y-2">
                        {sec.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer
        onSectionClick={scrollToSection}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default PrivacyPolicy;