import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= TERMS DATA ================= */
const TERMS_DATA = [
  {
    title: "User Terms",
    sections: [
      {
        type: "paragraph",
        content:
          "HealthismPlus Technologies Pvt Ltd provides various features and tools that allows users to log into healthismplus.com and buy HealthismPlus Savings Card. Users can use the card and get discounts at various healthcare centers. Users can also upload their medical records and share them with their doctors and family members whenever required. HealthismPlus Technologies Pvt Ltd offers these features and tools at www.healthismplus.com and other websites and applications powered by healthismplus.com (collectively the “Services”). Please read the following Terms of Use before using the Services.",
      },
    ],
  },
  {
    title: "Applicability & Acceptance of These Terms of Use",
    sections: [
      {
        type: "paragraph",
        content:
          "By downloading, viewing, using, accessing, browsing, or submitting any content or material on or to the Services, you agree to these Terms of Use as a binding legal agreement between you and HealthismPlus Technologies Pvt Ltd, without limitation or qualification. The term “you” or “You” shall refer to any person or entity that downloads views, uses, accesses, browses, or submits any content or material to the Services. If you do not agree to these Terms of Use, then you may not use the Services. You agree that each time you access the Services, you shall be subject to the then-current Terms of Use, and continued use of the Services now or following modifications in these Terms of Use confirms that you have read, accepted, and agreed to be bound by such modifications.",
      },
    ],
  },
  {
    title: "User License",
    sections: [
      {
        type: "paragraph",
        content:
          "Scope: HealthismPlus Technologies Pvt Ltd grants you permission (which may be revoked at any time for any reason or no reason) to view the Services and to download, integrate via authorized social media application, email, or print individual pages of the Services in accordance with these Terms of Use and solely for your own personal, non-commercial use, provided you do not remove any trademark, copyright or other notice contained on such pages. No other use is permitted. You may not, for example, incorporate the information, content, or other material from the Services in any database, compilation, archive, or cache.You may not modify, copy, distribute, re-publish, transmit, display, perform, reproduce, publish, reuse, resell, license, create derivative works from, transfer, or sell any information, content, material. ",
      },
      {
        type: "paragraph",
        content:
          "User Conduct: You agree that your use of the Services is subject to all applicable local, state, national and international laws, and regulations. You also agree:",
      },
      {
        type: "list",
        items: [
          "to comply with Indian law and local laws or rules regarding online conduct and acceptable material, and regarding the transmission of technical data exported through the Services from India or the country in which you reside",
          "that you are an adult of age 18 and above and of sound mind. If you are below the age of 18, you are not allowed to register and use the Services of the site www.healthismplus.com",
          "not to use the Services for illegal purposes",
          "not to commit any acts of infringement on the Services or with respect to the Services content",
          "not to use the Services to engage in commercial activities",
          "not to copy any content",
          "not to create or maintain content in connection with the Services for or with any commercial or other purpose or intent that does not in good faith comport with the purpose or spirit of the Services, including but not limited to acquiring, designating, or choosing a website name or title, or website address or URL for resale or rental, depriving any family member or friend of a deceased person from establishing or using the Services in that person’s name, and linking to any commercial or other website from the Services",
          "not to attempt to gain unauthorized access to other computer systems from or through the Services",
          "not to interfere with another person’s use and enjoyment of the Services or another entity’s use and enjoyment of the Services",
          "not to use the Services for chain letters, junk mail, spamming, or use of distribution lists",
          "not to upload or transmit viruses or other harmful, disruptive, or destructive files",
          "not to disrupt, interfere with, or otherwise harm or violate the security of the Services, system resources, accounts, passwords, servers, or networks connected to or accessible through the Services or affiliated or linked sites",
        ],
      },
      {
        type: "paragraph",
        content:
          "Harm from Commercial Use. You agree that the consequences of commercial use or re- publication may be so serious and incalculable that monetary compensation may not be a sufficient or appropriate remedy.",
      },
    ],
  },
  {
    title: "Services Content",
    sections: [
      {
        type: "paragraph",
        content:
          "Nature of User Material Some features of the Services allow you and others to post, upload, transmit, display, publish, distribute, or otherwise submit material (collectively, “Submit”), including, but not limited to, images, information, articles, illustrations, lyrics, photos, audio files, poems, videos, or text (collectively, “Material”). You agree not to Submit any Material that:",
      },

      {
        type: "list",
        items: [
          "contains vulgar, profane, abusive, hateful, or sexually explicit language, epithets or slurs, text or illustrations in poor taste, inflammatory attacks of a personal, sexual, racial or religious nature, or expressions of bigotry, racism, discrimination or hate",
          "is defamatory, threatening, disparaging, inflammatory, false, misleading, deceptive, fraudulent, inaccurate, or unfair, contains gross exaggeration or unsubstantiated claims, violates the privacy rights or right of publicity of any third party, is unreasonably harmful or offensive to any individual or community, contains any actionable statement, or tends to mislead or reflect unfairly on any other person, business or entity",
          "unfairly interferes with any third party’s uninterrupted use and enjoyment of the Services",
          "advertises, promotes or offers to trade any goods or services, except in areas specifically designated for such purpose",
          "is intended primarily to promote a cause or movement, whether political, religious, or other",
          "contains copyrighted content (copyrighted articles, illustrations, images, lyrics, photos, audio, video, poems, text, or other content) without the express permission of the owner of the copyrights in the content",
          "constitutes, promotes or encourages illegal acts, the violation of any right of any individual or entity, the violation of any local, state, national or international law, rule, guideline or regulation, or otherwise creates liability",
          "discloses any personal identifying information relating to or images of a Minor without consent of a parent, guardian or educational supervisor",
          "infringes any copyright, trademark, patent, trade secret, or other intellectual property right",
          "contains viruses or other harmful, disruptive, or destructive files",
          "harms or is inappropriate for minors to view",
          "links to any commercial or other website",
          "is not otherwise in compliance with these Terms of Use.",
        ],
      },
    ],
  },
  {
    title: "User Representations and Warranties",
    sections: [
      {
        type: "paragraph",
        content:
          "Each time you Submit Material to the Services, you represent and warrant that you have the right to Submit the Material, which means: you are the author of the Material, or",
      },
      {
        type: "list",
        items: [
          "the Material is not protected by copyright law, or",
          "you have express permission from the copyright owner to post the Material to the Services, and",
          "you have the right to grant HealthismPlus Technologies Pvt Ltd. the license set out in these Terms of Use, and",
          "the Material you Submit does not violate these Terms of Use",
        ],
      },
    ],
  },
  {
    title: "User License Grant to HealthismPlus Technologies Pvt Ltd",
    sections: [
      {
        type: "paragraph",
        content:
          "You grant HealthismPlus Technologies Pvt Ltd, its affiliates and related entities a royalty- free, perpetual, irrevocable, non-exclusive right and license to use, copy, modify, display, archive, store, publish, transmit, perform, distribute, reproduce and create derivative works from all Material you provide to HealthismPlus Technologies Pvt Ltd in any form, media, software or technology of any kind now existing or developed in the future. Without limiting the generality of the previous sentence, you authorize HealthismPlus Technologies Pvt Ltd to include the Material you provide in a searchable format that may be accessed by users of the Services and other websites. You also grant HealthismPlus Technologies Pvt Ltd and its affiliates and related entities the right to use your name and any other information about you that you provide in connection with the use, reproduction, or distribution of such Material. You also grant HealthismPlus Technologies Pvt Ltd the right to use the Material and any facts, ideas, concepts, know-how or techniques (“Information”) contained in any Material or communication you send to us for any purpose whatsoever, including but not limited to, developing, manufacturing, promoting and/or marketing products and services. You grant all rights described in this paragraph in consideration of your use of the Services without the need for additional compensation of any sort to you. HealthismPlus Technologies Pvt Ltd does not claim ownership of Material you Submit to the Services.",
      },
    ],
  },
  {
    title: "Disclaimer of Responsibility for Material",
    sections: [
      {
        type: "paragraph",
        content:
          "You acknowledge and agree that HealthismPlus Technologies Pvt Ltd does not control user- generated content or Material Submitted to the Services and disclaims any responsibility for such Material. HealthismPlus Technologies Pvt Ltd specifically disclaims any duty, obligation, or responsibility, to review, screen, refuse to post, remove, or edit any such content, or other Material. In addition, HealthismPlus Technologies Pvt Ltd does not represent or warrant that any other content or information accessible via the Services is accurate, complete, or current. Price and availability of information is subject to change without notice. HealthismPlus Technologies Pvt Ltd assumes no responsibility or liability for any errors or omissions in the content of the Services.",
      },
    ],
  },
  {
    title: "Review & Removal of Material",
    sections: [
      {
        type: "paragraph",
        content:
          "HealthismPlus Technologies Pvt Ltd reserves the right (but disclaims any duty, obligation, or responsibility) to review, screen, refuse to post, remove in their entirety, or edit (at any time and without prior notice) any content or any Material available through the Services that HealthismPlus Technologies Pvt Ltd believes, in its absolute and sole discretion, may violate clauses above. HealthismPlus Technologies Pvt Ltd also reserves the right (but disclaims any duty, obligation, or responsibility) to refuse to post, remove in their entirety, or edit (at any time and without prior notice) any content or Material available through or Submitted to the Services for any reason or no reason whatsoever, in its absolute and sole discretion. In cases in which payment has been made in connection with Services content that has been removed for reasons other than the above, HealthismPlus Technologies Pvt Ltd will not refund any fees which has already been paid. If you believe in good faith that content or Material hosted by the Services infringes your copyright under the Indian copyright act and international copy right acts, you (or your agent) may send HealthismPlus Technologies Pvt Ltd a notice requesting that the content or Material be removed, or access to it blocked. The notice must include the following information: (a) a physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed; (b) identification of the copyrighted work claimed to have been infringed (or if multiple copyrighted works are covered by a single notification, a representative list of such works); (c) identification of the material that is claimed to be infringing or the subject of infringing activity, and information reasonably sufficient to allow HealthismPlus Technologies Pvt Ltd. to locate the content or Material within the Services; (d) the name, address, telephone number and email address (if available) of the complaining party; (e) a statement that the complaining party has a good faith belief that use of the content or Material in the manner complained of is not authorized by the copyright owner, its agent or the law; and (f) a statement that the information in the notification is accurate and, under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed. If you believe in good faith that a notice of copyright infringement has been wrongly filed against you, you can send us a counter-notice. Notices and counter-notices with respect to the Service should be sent to contact@healthismplus.com. HealthismPlus Technologies Pvt Ltd suggests that you consult your legal advisor before filing a notice or counter-notice. Also, be aware that there can be penalties for false claims under the copyright acts. We reserve the right to terminate the account of any user who is a copyright infringer.",
      },
    ],
  },
  {
    title: "Proprietary Rights",
    sections: [
      {
        type: "paragraph",
        content:
          "You acknowledge and agree that the Services contain proprietary information and content that is protected by intellectual property and other laws, and may not be used except as provided in these Terms of Use without advance, written permission of HealthismPlus Technologies Pvt Ltd .. All designs, text, graphics, interfaces, and images (and the selection and arrangements thereof), and software, hypertext markup language (“HTML”), scripts, active server pages, and other content and software used in the Services are ©2013 HealthismPlus Technologies Pvt Ltd all rights reserved.",
      },
    ],
  },
  {
    title: "Termination and Modifications to the Services",
    sections: [
      {
        type: "paragraph",
        content:
          "Products & Services reserves the right, in its sole and absolute discretion, to modify, suspend, or discontinue at any time, with or without notice, the Services (or any part thereof), including but not limited to the Services’ features, functions, look and feel.",
      },
    ],
  },
  {
    title: "Indemnity",
    sections: [
      {
        type: "paragraph",
        content:
          "You agree to indemnify and hold HealthismPlus Technologies Pvt Ltd its parents, subsidiaries and affiliates, agents, officers, directors, or other employees harmless from any claim, demand, or damage (whether direct, indirect, or consequential, including reasonable attorneys’ fees, made by anyone in connection with your use of the Services, with Material or Information you Submit on or through the Services, with any alleged infringement of intellectual property or other right of any person or entity relating to the Services, your violation of these Terms of Use, and any other acts or omissions relating to the Services.",
      },
    ],
  },
  {
    title: "DISCLAIMER OF WARRANTIES:",
    sections: [
      {
        type: "paragraph",
        content:
          "The information, content, products, services, and materials provided by the services (whether provided by HealthismPlus Technologies Pvt Ltd you, other users, and other affiliates or third parties), including without limitation, material, text, photos, graphics, audio files, video, and links, are provided “as is” and “as available” without warranties of any kind, either express or implied. To the maximum extent permitted by law, HealthismPlus Technologies Pvt Ltd disclaims all representations and warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, title, non-infringement, freedom from computer virus, and implied warranties arising from course of dealing or course of performance.",
      },
    ],
  },
  {
    title: "LIMITATION OF LIABILITY:",
    sections: [
      {
        type: "paragraph",
        content:
          "In no event shall HealthismPlus Technologies Pvt Ltd be liable to you for any direct, indirect, special, punitive, incidental, exemplary or consequential damages, or any loss or damages whatsoever (even if HealthismPlus Technologies Pvt Ltd has been previously advised of the possibility of such damages), whether in an action under contract, negligence, or any other theory, in any manner arising out of or in connection with the use, inability to use or performance of the services. HealthismPlus Technologies Pvt Ltd assumes no responsibility and shall not be liable for any damages to, or viruses that may infect, your computer equipment or other property on account of your access to, use of, browsing of, or downloading of any material from the services. HealthismPlus Technologies Pvt Ltd assumes no responsibility or liability in any manner arising out of or in connection with any information, content, products, or material available on or through the services, as well as any third-party website pages or additional websites linked to the services, for any error, defamation, libel, slander, omission, falsehood, obscenity, pornography, profanity, danger, or inaccuracy contained therein. These limitations shall apply notwithstanding any failure of essential purpose of any limited remedy. Because some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitations may not apply to you. In no event shall HealthismPlus Technologies Pvt Ltd’s total liability to you for all damages, losses and causes of action, whether in contract, tort (including but not limited to, negligence) or otherwise, exceed (a) the amount paid by you to HealthismPlus Technologies Pvt Ltd or any affiliate, if any, or (b) Rs1000 (whichever is less). You and HealthismPlus Technologies Pvt Ltd agree that the warranty disclaimers and limitations of liability in these terms of use are material, bargained-for bases of this agreement, and that they have been taken into account in determining the consideration to be given by each party under this agreement and in the decision by each party to enter into this agreement. You and HealthismPlus Technologies Pvt Ltd agree that the warranty disclaimers and limitations of liability in these terms of use are fair and reasonable. If you are dissatisfied with the services or do not agree to any provisions of these terms of use, your sole and exclusive remedy is to discontinue using the services.",
      },
    ],
  },
  {
    title: "Refund & Cancellation:",
    sections: [
      {
        type: "paragraph",
        content:
          "Once the card has been paid for, you can cancel the transaction within the next 24 hours. Only when the order is cancelled by the buyer within 24 hours of placing it on the HealthismPlus.co website will HealthismPlus give a full 100% refund. However, once the order has been processed and is ready with your name imprinted on the card, it cannot be cancelled. In case the order has been cancelled by you, the updated status of your refund can be checked by you, or you can write to contact@healthismplus.com CANCELLATION, TERMINATION, TRANSFER, AND EXPIRATION OF ACCOUNT OR SERVICES: You may cancel or terminate your password, account and/or use of the Services, with or without cause at any time, upon providing written notice to HealthismPlus Technologies Pvt Ltd. If you cancel or terminate your account or any Services or upon expiration of your account or service, your cancellation/termination/expiration will take effect immediately. Upon termination, your right to use your account or subject Services immediately ceases. Your notice to HealthismPlus Technologies Pvt Ltd of cancellation or termination must be sent via email or conventional mail to HealthismPlus Technologies Pvt Ltd’s address as set forth in these Terms of Use. HealthismPlus Technologies Pvt Ltd in its sole and absolute discretion, and at any time and with or without prior notice to you may suspend, cancel, transfer, or terminate your password, account, any site within an account and/or use of any Services for any reason whatsoever (including and without limitation, due to lack of use, commercial use, cybersquatting, HealthismPlus Technologies Pvt Ltd’s resolution of any dispute among multiple persons claiming the right to use the same or similar accounts or services, or HealthismPlus Technologies Pvt Ltd’s belief, in its absolute and sole discretion, that you have violated or acted inconsistently with the letter or spirit of these Terms of Use). In the event of a dispute or conflict among, or complaint from, users of the Services about another’s right to establish, use, or maintain an account or Services, HealthismPlus Technologies Pvt Ltd reserves for itself the sole right to determine whether or how to resolve such dispute, conflict, or complaint, with or without factual or other investigation. Upon expiration, or cancellation or termination by either party, of your account, your password, and/or use of any Services, you will have no right to any Material or Information you Submitted, and HealthismPlus Technologies Pvt Ltd may temporarily or permanently block access to, remove, deactivate, delete, and discard all such Material or Information. HealthismPlus Technologies Pvt Ltd accepts no liability for removed or deleted Material or Information. In addition, any contracts (verbal, written, or assumed) with respect to your account, Material or Information you Submit, and/or use of any Services, will be terminated at HealthismPlus Technologies Pvt Ltd’s discretion. You agree that HealthismPlus Technologies Pvt Ltd shall not be liable to you or any third-party for any termination of your access to any Services. Upon suspension, cancellation, or termination of your account or your use of any Service (for whatever reason), there shall be no refund of money you paid to HealthismPlus Technologies Pvt Ltd. HealthismPlus Technologies Pvt Ltd does not screen and is not otherwise obligated to screen Material posted to a Memorial Website. HealthismPlus Technologies Pvt Ltd reserves the right, however, to remove any Material posted to a Memorial Website if said Material does not otherwise comport with these Terms of Use.",
      },
    ],
  },
  {
    title: "PERMANENCE OF MATERIAL:",
    sections: [
      {
        type: "paragraph",
        content:
          "Subject to its suspension, cancellation, and termination rights and rights to remove Material, HealthismPlus Technologies Pvt Ltd represents that the Services content sponsored as “permanent” will remain available through the Services for the duration of HealthismPlus Technologies Pvt Ltd’s existence, unless: (a) the Services ceases to exist in whole or in part during the relevant period; or (b) acts or events beyond the reasonable control of HealthismPlus Technologies Pvt Ltd cause a deletion, loss of data, failure to store, or other interruption in or termination of the availability of the Services content that you sponsored, or any other service to which you subscribed. You may at any time ask HealthismPlus Technologies Pvt Ltd to delete without charge the Services content, or other service that you sponsored or purchased.",
      },
    ],
  },
  {
    title: "MINORS:",
    sections: [
      {
        type: "paragraph",
        content:
          "The consent of a parent, guardian or educational supervisor shall be required before a Minor can use the Services. Use of the Services is confirmation that the person is an adult or a Minor who has received permission from a parent, guardian, or educational supervisor to use the Services. A parent, guardian or educational supervisor will be responsible for any activities of a Minor in connection with the Services regardless of whether the Minor has received permission from the parent, guardian, or educational supervisor to use the Services. HealthismPlus Technologies Pvt Ltd also hereby notifies You that parental control protection (such as computer hardware, software, or filtering services) are commercially available that may assist You in limiting material that is harmful to Minors.",
      },
    ],
  },
  {
    title: "YOUR ACCOUNT, PASSWORD, AND SECURITY:",
    sections: [
      {
        type: "paragraph",
        content:
          "Some features of the Services may require you to register and/or create an account with HealthismPlus Technologies Pvt Ltd. During this process, you must select an account designation and password and provide certain personal information to HealthismPlus Technologies Pvt Ltd including a valid email address. In consideration of the use of HealthismPlus Technologies Pvt Ltd’s Services, you agree to: (a) provide true, accurate, current, and complete information about yourself as prompted by the registration form, and (b) maintain and promptly update the personal information you provide to keep it true, accurate, current, and complete. If you provide any information that is untrue, inaccurate, not current, or incomplete, or HealthismPlus Technologies Pvt Ltd has reasonable grounds to suspect that such information is untrue, inaccurate, not current, or incomplete, HealthismPlus Technologies Pvt Ltd has the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof). You are responsible for maintaining the confidentiality and security of your account and password, and you are fully responsible for all activities that occur under your password or account, and for any other actions taken in connection with the account or password. You agree to (a) immediately notify HealthismPlus Technologies Pvt Ltd of any known or suspected unauthorized use(s) of your password or account, or any known or suspected breach of security, including loss, theft, or unauthorized disclosure of your password or credit card information; and (b) ensure that you exit from your account at the end of each session. HealthismPlus Technologies Pvt Ltd will not be liable for any injury, loss or damage of any kind arising from or relating to your failure to comply with (a) and (b) or for any acts or omissions by you or someone else using your account and/or password.",
      },
    ],
  },
  {
    title: "LINKS AND FARMING:",
    sections: [
      {
        type: "paragraph",
        content:
          "As a courtesy to you, the Services may offer links to other websites. Some of these websites may be affiliated with HealthismPlus Technologies Pvt Ltd while others are not. HealthismPlus Technologies Pvt Ltd is not responsible for the contents of any website pages created and maintained by organizations independent of HealthismPlus Technologies Pvt Ltd. Visiting any such third-party website pages is at your own risk. HealthismPlus Technologies Pvt Ltd has no control of these third-party website pages, nor can it guarantee the accuracy, completeness, or timeliness of information in third-party website pages. Your use of such information is voluntary, and your reliance on such information should be made only after independent review. References to commercial products or services within any such third-party website pages do not constitute or imply an endorsement by HealthismPlus Technologies Pvt Ltd. By using the Services, you acknowledge that HealthismPlus Technologies Pvt Ltd is responsible neither for the availability of, nor the content located on or through any third-party website pages.",
      },
    ],
  },
  {
    title: "TRADEMARKS:",
    sections: [
      {
        type: "paragraph",
        content:
          "HealthismPlus(TM), is a registered trademarks of HealthismPlus Technologies Pvt Ltd. HealthismPlus is a common law trademark of HealthismPlus Technologies Pvt Ltd. Such trademarks and other marks, logos, and names of HealthismPlus Technologies Pvt Ltd used on or in connection with the Services may not be used in connection with any product or service that is not under HealthismPlus Technologies Pvt Ltd’s ownership or control. Furthermore, such trademarks may not be used in any manner that is likely to cause confusion among consumers or in any manner that disparages or discredits HealthismPlus Technologies Pvt Ltd. All other trademarks not owned by HealthismPlus Technologies Pvt Ltd or its affiliates (including its Affiliate Newspapers) that appear in connection with the Services are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by HealthismPlus Technologies Pvt Ltd or its affiliates.",
      },
    ],
  },

  {
    title: "CONSIDERATION:",
    sections: [
      {
        type: "paragraph",
        content:
          "You acknowledge that these Terms of Use are supported by reasonable and valuable consideration, the receipt and adequacy of which are hereby acknowledged. Without limiting the foregoing, you acknowledge that such consideration includes, without limitation, your use of the Services and receipt or use of data, content, products, services, Material and Information available at or through the Services, the possibility of our review, use or display of your user-generated content, and the possibility of publicity and promotion from our review, use or display of your user-generated content.",
      },
    ],
  },
  {
    title: "THIRD PARTY SOFTWARE:",
    sections: [
      {
        type: "paragraph",
        content:
          "If you elect to download or access any third-party software that HealthismPlus Technologies Pvt Ltd makes available in connection with the Services, you understand that you may have to agree to that third party provider’s terms of use or license before you use such software. You also agree that the use of any third-party software or content obtained in connection with the Services does not transfer to you any rights, title, or interest in or to such software or content, and you agree that you will not use any such software except as expressly authorized under that third party provider’s terms of use or license agreement. By downloading software made available through the Services, you are deemed to agree to the third-party provider’s terms of use or license agreement, the terms of which are incorporated by reference herein for the benefit of such third-party providers. If you do not agree to the third party’s terms of use or license agreement, do not download its software.",
      },
    ],
  },
  {
    title: "JURISDICTION, APPLICABLE LAW, AND LIMITATIONS:",
    sections: [
      {
        type: "paragraph",
        content:
          "The Services are created and controlled by HealthismPlus Technologies Pvt Ltd in the State of Gujarat, India. You agree that these Terms of Use will be governed by and construed in accordance with the laws of India and the State of Gujarat, without regard to its conflicts of law provisions. Use of the Services is unauthorized in any jurisdiction that does not give effect to all provisions of these Terms of Use. HealthismPlus Technologies Pvt Ltd makes no claims or assurances that the Services are appropriate or may be downloaded outside India. You agree that all legal proceedings arising out of or in connection with these Terms of Use or the Services must be filed in a local court or state court located in Ahmedabad, Gujarat within one year of the time in which the events giving rise to such claim began, or your claim will be forever waived and barred. You expressly submit to the exclusive jurisdiction of said courts and consent to extraterritorial service of process.",
      },
    ],
  },
  {
    title: "GENERAL:",
    sections: [
      {
        type: "paragraph",
        content:
          "Enforceability: If any portion of these Terms of Use is found to be void, invalid or otherwise unenforceable, then that portion shall be deemed to be superseded by a valid, enforceable provision that matches the intent of the original provision as closely as possible. The remainder of these Terms of Use shall continue to be enforceable and valid according to terms contained herein. Entire Agreement: Except as expressly provided in a particular “Legal Notice” or other notice on particular pages of the Services, these Terms of Use, which hereby incorporate by reference the terms of HealthismPlus Technologies Pvt Ltd’s Privacy Policies, constitute the entire agreement between you and HealthismPlus Technologies Pvt Ltd superseding all prior agreements regarding the Services. No Waiver: The failure of HealthismPlus Technologies Pvt Ltd to exercise or enforce any right or provision of the Terms of Use shall not constitute a waiver of said right or provision. Neither party hereto shall be deemed to be in default of any provision of the Terms of Use or for failure in performance resulting from acts or events beyond the reasonable control of such party and arising without its fault or negligence, including, but not be limited to, acts of God, civil or military authority, interruption of electric or telecommunication services, civil disturbances, acts of war or terrorists, strikes, fires, floods, or other catastrophes. Headings&Construction: The section titles in the Terms of Use are for your convenience only and carry no contractual or legal effect whatsoever. The language in these Terms of Use shall be interpreted in accordance with its fair meaning and shall not be strictly interpreted for or against either party. For purposes of providing notice of cancellation or termination, contact us at contact@healthismplus.com Delivery&ShippingPolicy: Not applicable as of now.",
      },
    ],
  },
  {
    title: "Privacy Policy:",
    sections: [
      {
        type: "paragraph",
        content:
          "GENERAL: In general, you can browse the Services without telling us who you are or revealing any information about yourself to us. healthismplus.com does not collect personally identifiable information about individuals, except when specifically, and knowingly provided by such individuals on interactive areas of the Services. “Personally Identifiable Information” is information that can be used to uniquely identify, contact, or locate a single person, such as name, postal address, email address, phone number, and credit card number, among other information, and that is not otherwise publicly available. Any posting made while using the Services, and any other information that can be viewed by the public and therefore is not considered “personal information” or “Personally Identifiable Information” and is not the type of information covered by this Privacy Policy.",
      },
    ],
  },
  {
    title: "INFORMATION WE COLLECT:",
    sections: [
      {
        type: "paragraph",
        content:
          "Personally Identifiable Information. Examples of Personally Identifiable Information we may collect include name, postal address, email address, credit card number and related information, and phone number. We may also collect your date of birth, geo-location, social networking profile picture and the date of birth and date of death for the deceased person in connection with certain features of the Services. We also maintain a record of all information that you submit to us, including email and other correspondence. We may collect Personally Identifiable Information when you register to receive alerts or offerings, sponsor, access or submit information in connection with certain Services, post other content through the Services, purchase products or other services, opt-in to receive special offers and discounts from us and our selected partners or participate in other activities offered or administered by healthismplus.com.",
      },
      {
        type: "list",
        items: [
          "We may also collect Personally Identifiable Information about your transactions with us and with some of our business partners. This information might include information necessary to process payments due to us from you, such as your credit card number.",
          "We do not intentionally collect Personally Identifiable Information about under the age of 13.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Other Anonymous Information: Like most websites, healthismplus.com also receives and records information on our server logs from your browser automatically and through the use of electronic tools such as cookies. Our server logs automatically receive and record information from your browser (including, for example, your IP address, and the page(s) you visit). The information gathered through these methods is not “personally identifiable;” i.e., it cannot be used to uniquely identify, contact, or locate a single person.",
      },
    ],
  },
  {
    title: "HOW WE USE YOUR INFORMATION:",
    sections: [
      {
        type: "paragraph",
        content:
          "We will use your information only as permitted by law, and subject to the terms of our Privacy Policy Use of Personally Identifiable Information: We do not sell or share your Personally Identifiable Information with unrelated third parties for their direct marketing purposes. Personally Identifiable Information and other personal information you specifically provide may be used:",
      },
      {
        type: "list",
        items: [
          "to provide the Services we offer, to process transactions and billing, for identification and authentication purposes, to communicate with you concerning transactions, security, privacy, and administrative issues relating to your use of the Services, to improve Services, to do something you have asked us to do, or to tell you of Services that we think may be of interest to you",
          "to communicate with you regarding the Services",
          "for the administration of and troubleshooting regarding the Services. Certain third parties who provide technical support for the operation of the Services (our web hosting service, for example), may need to access such information from time to time, but are not permitted to disclose such information to others",
          "We may disclose Personally Identifiable Information about you under the following circumstances",
        ],
      },
      {
        type: "paragraph",
        content:
          "In the course of operating our business, it may be necessary or appropriate for us to provide access to your Personally Identifiable Information to others such as our service providers, contractors, select vendors and Affiliates so that we can operate the Services and our business. Where practical, we will seek to obtain confidentiality agreements consistent with this Privacy Policy and that limit others’ use or disclosure of the information you have shared. We may share your Personally Identifiable Information if we are required to do so by law or we in good faith believe that such action is necessary to: (1) comply with the law or with legal process (such as pursuant to court order, subpoena, or a request by law enforcement officials); (2) protect, enforce, and defend our Terms of Use, rights and property; (3) protect against misuse or unauthorized use of this the Services; or (4) protect the personal safety or property of our users or the public (among other things, this means that if you provide false information or attempt to pose as someone else, information about you may be disclosed as part of any investigation into your actions.) Use of Anonymous Information: Certain information that we collect automatically or with electronic tools or tags (such as cookies) is used to anonymously track and measure user traffic for the Services and to enhance your experience with the Services and our business partners. For example: IP Addresses/Session Information. We occasionally may obtain IP addresses from users depending upon how you access the Services. IP addresses, browser, and session information may be used for various purposes, including helping administer the Services and diagnose and prevent service or other technology problems related to the Services. This information also may be used to estimate the total number of users downloading any App and browsing other Services from specific geographical areas, to help determine which users have access privileges to certain content or services that we offer, and to monitor and prevent fraud and abuse. IP addresses are not linked to Personally Identifiable Information Cookies: A cookie is a small amount of data that often includes an anonymous unique identifier that is sent to your browser from a website’s computers and stored on your computer’s hard drive or comparable storage media on your mobile device. You can configure your browser to accept cookies, reject them, or notify you when a cookie is set. If you reject cookies, you may not be able to use the Services that require you to sign in, or to take full advantage of all our offerings. Cookies may involve the transmission of information either directly to us or to another party we authorize to collect information on our behalf. We use our own cookies to transmit information for a number of purposes, including to:",
      },
      {
        type: "list",
        items: [
          "require you to re-enter your password after a certain period of time has elapsed to protect you against others accessing your account contents",
          "keep track of preferences you specify while you are using the Services",
          "estimate and report our total audience size and traffic",
          "conduct research to improve the content and Services",
        ],
      },
      {
        type: "paragraph",
        content:
          "We let other entities that show advertisements on some of our web pages or assist us with conducting research to improve the content and Services set and access their cookies on your computer or mobile device. Other entities’ use of their cookies is subject to their own privacy policies and not this Privacy Policy. Advertisers or other entities do not have access to our cookies. Page Visit Data. We may record information about certain pages that you visit on our site (e.g., articles etc.) in order to recall that data when you visit one of our partners’ sites. We may share anonymous information aggregated to measure the number of App downloads, number of visits, average time spent on the Services websites, pages viewed, etc. with our partners, advertisers, and others.",
      },
    ],
  },
  {
    title:
      "PRIVACY ALERT: YOUR POSTINGS GENERALLY ARE ACCESSIBLE TO THE PUBLIC:",
    sections: [
      {
        type: "paragraph",
        content:
          "Your own use of the Services may disclose personal information or Personally Identifiable Information to the public. For example: Submissions and other postings to our Services are available for viewing by all our visitors. Please remember that any information disclosed on a non-restricted Service becomes public information and may be collected and used by others without our knowledge. You therefore should exercise caution when disclosing any personal information or Personally Identifiable Information in these forums. When you post a message to the Services via message board, blog, or other public forum available through the Services, your user ID or alias that you are posting under may be visible to other users, and you have the ability to post a message that may include personal information. If you post Personally Identifiable Information online that is accessible to the public, you may receive unsolicited messages from other parties in return. Such activities are beyond the control of healthismplus.com and the coverage of this Privacy Policy. Please be careful and responsible whenever you are online. In addition, although we employ technology and software designed to minimize spam sent to users and unsolicited, automatic posts to message boards, blogs, or other public forums available through the Services (like the CAPTCHA word verification you see on email and registration forms), we cannot ensure such measures to be 100% reliable or satisfactory.",
      },
    ],
  },
  {
    title: "OPT-OUT PROCEDURES:",
    sections: [
      {
        type: "paragraph",
        content:
          "You may opt out of receiving future mailings or other information from healthismplus.com, Inc. If the mailing does not have an email cancellation form, send an email to Contact us detailing the type of information that you no longer wish to receive.",
      },
    ],
  },
  {
    title: "THIRD PARTY ADVERTISING AND AD DELIVERY:",
    sections: [
      {
        type: "paragraph",
        content:
          "This Service contains links to other sites that may be of interest to our visitors. This Privacy Policy applies only to healthismplus.com and not to other companies’ or organizations’ Web sites to which we link. We are not responsible for the content, or the privacy practices employed by other sites. healthismplus.com does not endorse or guarantee on quality of any goods and services that are being promoted by the vendors of such goods and services through the medium of www.healthismplus.com Any transactions with third parties including advertisers on this website or participation in promotions, including the delivery of and the payment for goods and services, and any other terms, conditions, warranties or representations associated with such dealings or promotions, are solely between you and the advertiser or other third party. healthismplus.com shall not be responsible or liable for any part of any such dealings or promotions.",
      },
    ],
  },
  {
    title: "CHANGES TO THIS PRIVACY POLICY::",
    sections: [
      {
        type: "paragraph",
        content:
          "We may periodically edit or update this Privacy Policy. We encourage you to review this Privacy Policy whenever you provide information on this Web site. Your use of the Services after changes of the terms of the Privacy Policy have been posted will mean that you accept the changes.",
      },
    ],
  },
  {
    title: "ADDITIONAL INFORMATION:",
    sections: [
      {
        type: "paragraph",
        content:
          "Questions regarding the healthismplus.com Privacy Policy should be directed to Contact Us at contact@healthismplus.com",
      },
    ],
  },
  {
    title: "Return Policy:",
    sections: [
      {
        type: "paragraph",
        content:
          "HealthismPlus store has a simple return policy under which you can return a product received in a damaged or defective condition. healthism store has 48 hours return policy which means that you can request a return within 48 hours of receiving the product by you. Returns for replacement/refunds/exchange under certain scenarios will NOT be accepted as given below:",
      },

      {
        type: "list",
        items: [
          "Request for return is made after 48 hours of receiving the product by you",
          "Product is used or is not in its original condition.",
          "Products are returned without its original packaging, freebies, or accessories.",
          "Product was damaged after use/opening.",
          "Incidental damage due to malfunctioning of the product.",
          "Products like t shirt do not qualify for replacement, exchanges, or refund.",
          "Any consumable item which has been used or installed.",
          "Product with tampered or missing serial number/IMEI number/UPC number.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Any damage/defect which is not covered under the manufacturer’s warranty. In case of memorial art, signature art, where it is an artistic work which is done in consultation with the buyer over the phone and email with 2-3 sitting/trial is not returnable. For memorial tree and plants, they might be little different from the images shown. They are not returnable unless they are severely damaged due to logistical reasons. How: It’s very simple; within 48 hours of receiving a product, you can request a return via email at info@healthismplus.com or over phone at our customer care number +91-7506942417. between 10 am to 10 pm. Note: Replacement is subject to availability of stock with us or our Business Partner. In case a replacement cannot be made by us, we will initiate a full refund. Do I need to return the product in its original box/packaging? Yes, it’s important that the product is sent back in its original packaging, original manufacturer tags, including the box, manufacturer’s packaging if any, and all other items originally included with the product(s) delivered (including any free or complimentary items).",
      },
      {
        type: "paragraph",
        content:
          "How are returns made in case of returns? In case of a return, possible solutions are:",
      },
      {
        type: "list",
        items: [
          "replacement of the product with a similar product (only if stocks are available with us or our Business Partner)",
          "exchange or",
          "full refund of your money. View our Refund Policy for details",
        ],
      },
      {
        type: "paragraph",
        content:
          "Is there a time frame within which I can return the purchased product for a return/replacement? If you wish to return or exchange a product, you must intimate healthism store within 48 hours of receiving the product by you. However, if any manufacturing defect or damage is reported to us after 48 hours, we would need a certificate/replacement certificate from the respective Brand’s authorized service center to initiate the refund process. Without the certificate/replacement certificate we will not be able to process the replacement or refund. Do I need to send the product or can it be collected from my address? healthism store has a smooth pick-up facility in most cases and most cities. However, there can be a few exceptions to this depending upon the shipping address and the nature of the product. To know whether pickup is available from your shipping address, you can call our customer care number at +91-7506942417 or write to us at info@healthismplus.com In case we are unable to collect the returnable product from your address, you will be required to courier the product to us. Please ensure that the product is in original and unused condition, complete with the original price tags, labels, original packing, and invoice. Replacements are subject to availability of stock with us or our Business Partner. In case a replacement is not available, we will initiate full refund. Will I have to pay any charges for the returns? We do not charge extra for returns and all replacements/pickups by us are done free of cost. Will you refund the courier charges if I send the product back to you at my cost? Yes, absolutely. You do not have to worry about the courier charges at all. In case, you return the product via courier we advise you to use a reputed courier company which allows online consignment tracking. We will reimburse the courier freight charges @ 10% of your order value (with a minimum of Rs. 100) or a maximum of Rs. 750, whichever is lower. The refund of courier freight charges, if applicable, will be paid through cheque in favor of the ‘billing name’ provided at the time of placing the order or by issuing a healthism store Gift Certificate/Voucher of the equivalent value. The courier charges will be reimbursed only after receipt of the product by us or our business partner. In case healthism store can’t collect the product that I wish to return, on which address do I need to courier it? Once you contact our customer care center by e-mail at info@healthismplus.com or phone to +91-7506942417 to confirm whether the product can be collected from your address or not. Our customer care executive will tell you the address where you have to send the courier, in case it can’t be collected from your address with us. Refund Policy: Once a payment has been made for the card, you can cancel the same within the next twenty-four hours’ time. We will not process your order if you cancel the same in the stipulated time-period. But once the order is processed and its ready with your name imprinted on the card and ready for dispatch, the order cannot be cancelled. Refunds are issued by Healthism only when; the order was cancelled by the customer within 24 hours of placing the order on Healthism.co website. Refunds are issued by healthism store only when,",
      },
      {
        type: "list",
        items: [
          "the order was cancelled by the customer or healthism store",
          "the customer returned a product and requested for a refund: See Return Policy: https://www.healthismplus.com/returns-policy/",
        ],
      },
      {
        type: "paragraph",
        content:
          "How can I track the status of my refund after returning a product? Once we have received the returned product, our team will verify the nature of the defect/damage. After validation we will send you an acknowledgement via SMS to your registered mobile number and by email to your registered email id. To check the updated status of your refund you can call our 24×7 customer care number +91-7506942417",
      },
    ],
  },
  {
    title: "Shipping Policy:",
    sections: [
      {
        type: "paragraph",
        content:
          "We are currently only delivering HealthismPlus cards within India. Free shipping does not mean it will take forever. HealthismPlus understands how important it is for you to receive your order on time, so we make every effort to process your order as soon as possible. We are dedicated to delivering your order accurately, in good condition, and on time, as promised on our website. We offer FREE Shipping for all our products on www.healthismplus.com",
      },
      {
        type: "list",
        items: [
          "Each order may only be shipped to a single address specified at the time the order is paid for. If you want to ship products to multiple addresses, you must place multiple orders.",
          "We make every effort to ship each item in your order within 7 working days of receiving the order. However, in some cases, it may take us up to 10 working days to ship the order because we need to obtain it from another store or our suppliers.",
          "We ship on all days of the week (from Monday to Sunday) except public holidays.",
          "We only ship through reputable courier agencies to ensure that your order arrives on time and in good condition.",
          "While we make every effort to ship all items in your order together, due to product characteristics or availability, this may not always be possible.",
          "If you believe the product is not in good condition, or if the packaging has been tampered with or damaged, please refuse delivery of the package and call our helpline +91-7506942417 before accepting delivery. We will make every effort to ensure that a replacement delivery is made to you as soon as possible.",
          "Please keep in mind that all items will be shipped with an invoice stating the price, in accordance with Indian Tax Regulations.",
        ],
      },
    ],
  },
  //   {
  //     title: "GENERAL:",
  //     sections: [
  //       {
  //         type: "paragraph",
  //         content: "",
  //       },
  //     ],
  //   },
  //   {
  //     title: "GENERAL:",
  //     sections: [
  //       {
  //         type: "paragraph",
  //         content: "",
  //       },
  //     ],
  //   },
];

/* ================= COMPONENT ================= */
const TermsAndConditions = () => {
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

      <section className="bg-[#EDF3F4] py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* HEADER */}
          <h1 className="text-[32px] font-bold text-[#0F172A] mb-4">
            Terms & Conditions
          </h1>

          <p className="text-[#475569] text-[14px] mb-8">
            Please read these terms carefully before using HealthismPlus
            services.
          </p>

          {/* TERMS */}
          <div className="space-y-8">
            {TERMS_DATA.map((section, i) => (
              <div key={i}>
                <h2 className="text-[18px] font-semibold text-[#006B5A] mb-2">
                  {section.title}
                </h2>

                {section.sections.map((block, index) => {
                  if (block.type === "paragraph") {
                    return (
                      <p
                        key={index}
                        className="text-[#475569] text-[14px] leading-relaxed mb-3"
                      >
                        {block.content}
                      </p>
                    );
                  }

                  if (block.type === "list") {
                    return (
                      <ul
                        key={index}
                        className="list-disc pl-5 text-[#475569] text-[14px] space-y-1"
                      >
                        {block.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  return null;
                })}
              </div>
            ))}
          </div>

          {/* CONTACT */}
          <div className="mt-12">
            <p className="text-[#475569] text-[14px]">
              For any questions, contact us at:
            </p>
            <p className="text-[#006B5A] font-medium">
              contact@healthismplus.com
            </p>
          </div>
        </div>
      </section>

      <Footer onSectionClick={scrollToSection} setActiveTab={setActiveTab} />
    </div>
  );
};

export default TermsAndConditions;
