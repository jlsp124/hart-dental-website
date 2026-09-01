export type ServiceSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  navTitle: string;
  title: string;
  h1: string;
  category: "Prevent" | "Restore" | "Comfort";
  description: string;
  short: string;
  intro: string;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  related: string[];
  sourceUrl?: string;
};

export const services: Service[] = [
  {
    slug: "childrens-dentistry-prince-george",
    navTitle: "Children’s Dentistry",
    title: "Children’s Dentistry in Prince George | Hart Dental",
    h1: "Prince George Children’s Dentistry",
    category: "Prevent",
    description:
      "Children’s dental care at Hart Dental in Prince George, with a focus on early visits, prevention, education and a calm introduction to the dental office.",
    short: "Early visits, prevention and a calm start to lifelong oral health.",
    intro:
      "A child’s earliest appointments can shape how dental care feels for years to come. Hart Dental focuses on age-appropriate explanations, prevention and a pace that helps young patients feel more familiar with the office.",
    sections: [
      {
        title: "Start before there is a problem",
        paragraphs: [
          "The Canadian Dental Association recommends a first assessment within six months of the first tooth appearing, or by one year of age. An early visit gives parents practical guidance and lets a dentist check development before discomfort brings a child to the office."
        ]
      },
      {
        title: "Prevention grows with your child",
        paragraphs: [
          "Regular examinations, professional cleaning when appropriate, home-care coaching and nutrition conversations can help reduce the risk of cavities. The timing of visits and X-rays depends on each child’s needs."
        ],
        bullets: ["Age-appropriate examinations", "Brushing and flossing guidance", "Fluoride and sealant discussions", "Monitoring how teeth and bites develop"]
      },
      {
        title: "A gentler introduction",
        paragraphs: [
          "Children can be curious, cautious or worried. The team explains what will happen in simple language and gives families room to ask questions. If a child needs additional support, the dentist will discuss appropriate options after an assessment."
        ]
      }
    ],
    faqs: [
      {
        question: "When should my child first see a dentist?",
        answer:
          "The Canadian Dental Association recommends an assessment within six months of the first tooth appearing or by age one. If you notice pain, injury, swelling or another concern, call sooner."
      },
      {
        question: "How often should children have dental visits?",
        answer:
          "Visit frequency is based on the child’s oral health and risk factors. Many families are advised to return about every six months, but the dentist may recommend a different schedule."
      },
      {
        question: "What can I do before the first visit?",
        answer:
          "Use calm, simple language and treat the appointment as a normal part of health care. Bring questions about brushing, fluoride, feeding habits or anything you have noticed."
      }
    ],
    related: ["oral-hygienecleaning-prince-george", "sports-guards-prince-george", "wisdom-teeth-removal-prince-george"],
    sourceUrl: "https://prod.cda-adc.ca/for-the-public/understanding-your-oral-health/dental-care-children/first-visit"
  },
  {
    slug: "cosmetic-dentistry-prince-george",
    navTitle: "Cosmetic Dentistry",
    title: "Cosmetic Dentistry in Prince George | Hart Dental",
    h1: "Prince George Cosmetic Dentistry",
    category: "Restore",
    description:
      "Explore cosmetic dentistry at Hart Dental in Prince George, including veneers, bonding, contouring and tooth-coloured restorative options.",
    short: "Thoughtful options for shape, colour and balance—planned around your smile.",
    intro:
      "Cosmetic dentistry begins with a conversation about what you would like to change and what is realistic for your teeth. Hart Dental’s current service offering includes options that can address colour, shape, proportion and small areas of damage.",
    sections: [
      {
        title: "Plan first",
        paragraphs: [
          "A cosmetic consultation includes an examination of your teeth, gums and bite. The dentist can then explain suitable options, limitations, maintenance and whether oral-health treatment should come first."
        ]
      },
      {
        title: "Conservative changes",
        paragraphs: [
          "Bonding and contouring may be considered for selected chips, gaps or shape concerns. Veneers or ceramic restorations may be discussed when a more substantial change is appropriate."
        ],
        bullets: ["Bonding and contouring", "Veneer consultations", "Ceramic crowns where restorative care is also needed", "Professional whitening options"]
      },
      {
        title: "A result that still feels like you",
        paragraphs: [
          "Treatment planning should consider your facial features, existing teeth and long-term care—not a one-size-fits-all smile. No outcome can be guaranteed before an examination."
        ]
      }
    ],
    faqs: [
      {
        question: "Which cosmetic treatment is right for me?",
        answer: "That depends on your goals, oral health, bite and existing restorations. A dentist can compare appropriate options after an examination."
      },
      {
        question: "Will cosmetic work look natural?",
        answer: "Shade, shape and proportion are planned to work with your existing smile. Ask to discuss the intended appearance, material and maintenance before treatment."
      },
      {
        question: "Does cosmetic dentistry require maintenance?",
        answer: "Yes. Restorations and whitening results need ongoing home care and professional follow-up. The specific maintenance depends on the treatment."
      }
    ],
    related: ["teeth-whitening-prince-george", "dental-restoration-prince-george", "orthodontics-invisalign-prince-george"]
  },
  {
    slug: "dental-emergencies-prince-george",
    navTitle: "Dental Emergencies",
    title: "Dental Emergencies in Prince George | Hart Dental",
    h1: "Prince George Dental Emergencies",
    category: "Comfort",
    description:
      "Call Hart Dental for urgent dental concerns in Prince George, including tooth pain, dental injuries, swelling and broken teeth or restorations.",
    short: "Pain, swelling or a dental injury? Call first so the team can guide you.",
    intro:
      "Dental pain and injuries are easier to navigate when you can speak with a person. Call Hart Dental as soon as possible. The team will ask what happened, explain the next step and advise on appointment availability.",
    sections: [
      {
        title: "When to call",
        paragraphs: [
          "Call for severe or persistent tooth pain, swelling, a broken or knocked-out tooth, a lost restoration, bleeding that concerns you, or a dental injury. Even when the office cannot diagnose by phone, the details help the team triage the situation."
        ]
      },
      {
        title: "Bring the right information",
        paragraphs: [
          "Tell the team when symptoms began, whether there was an injury and whether you have swelling, fever, bleeding or difficulty opening your mouth. Do not send private medical details through the website form."
        ],
        bullets: ["Call 250-962-5351", "Keep a broken or knocked-out permanent tooth safe", "Follow the team’s instructions", "Bring medication and health information to the appointment"]
      },
      {
        title: "Medical emergencies",
        paragraphs: [
          "Call 911 or seek emergency medical care for trouble breathing or swallowing, uncontrolled bleeding, major facial trauma, or other life-threatening symptoms. The website cannot assess an emergency."
        ]
      }
    ],
    faqs: [
      {
        question: "Can Hart Dental see me the same day?",
        answer: "Hart Dental’s current site describes same-day emergency care. Availability varies, so call as early as possible and the team will explain what can be arranged."
      },
      {
        question: "What should I do with a knocked-out permanent tooth?",
        answer: "Handle it by the crown, not the root. If it is dirty, rinse gently without scrubbing. Place it back in the socket only if safe, or keep it in milk, and seek care immediately."
      },
      {
        question: "Should I use the appointment form for an emergency?",
        answer: "No. Call 250-962-5351. Forms may not be read immediately and should never contain sensitive medical information."
      }
    ],
    related: ["endodontics-prince-george", "dental-restoration-prince-george", "wisdom-teeth-removal-prince-george"],
    sourceUrl: "https://www.healthlinkbc.ca/healthwise/mouth-and-dental-injuries"
  },
  {
    slug: "dental-implants-prince-george",
    navTitle: "Dental Implants",
    title: "Dental Implants in Prince George | Hart Dental",
    h1: "Prince George Dental Implants",
    category: "Restore",
    description:
      "Learn about dental implant assessment and treatment at Hart Dental in Prince George for replacing one or more missing teeth.",
    short: "A stable replacement option for missing teeth, planned one step at a time.",
    intro:
      "A dental implant replaces a missing tooth root and supports a replacement tooth. The right plan depends on your health, gums, available bone, bite and goals, so treatment begins with an examination and imaging.",
    sections: [
      {
        title: "Assessment before treatment",
        paragraphs: [
          "The dentist reviews the space, neighbouring teeth, gums and jaw. Imaging helps determine whether an implant is appropriate or whether another option—such as a bridge or denture—should be considered."
        ]
      },
      {
        title: "A staged process",
        paragraphs: [
          "Implant treatment commonly includes placement of the implant, a healing period, connection of an abutment and fabrication of the final tooth. Timing and the professionals involved vary by case."
        ],
        bullets: ["Examination and imaging", "Personalized treatment sequence", "Healing and follow-up", "Final restoration and maintenance plan"]
      },
      {
        title: "Care continues afterward",
        paragraphs: [
          "Implants still require daily cleaning and regular dental examinations. The team will explain how to clean around the restoration and monitor the gums, bite and implant over time."
        ]
      }
    ],
    faqs: [
      {
        question: "Am I a candidate for a dental implant?",
        answer: "Only an examination can answer that. General health, gum health, available bone, smoking and other factors can affect the recommendation."
      },
      {
        question: "How long does implant treatment take?",
        answer: "It often takes several visits over a number of months because tissues need time to heal. Your sequence may be shorter or longer depending on the case."
      },
      {
        question: "Are there alternatives?",
        answer: "Depending on the number and location of missing teeth, alternatives may include a bridge, partial denture or complete denture. The dentist can compare options."
      }
    ],
    related: ["dental-restoration-prince-george", "periodontics-prince-george", "oral-hygienecleaning-prince-george"],
    sourceUrl: "https://www.cda-adc.ca/en/oral_health/procedures/dental_implants/"
  },
  {
    slug: "dental-restoration-prince-george",
    navTitle: "Dental Restoration",
    title: "Dental Restoration in Prince George | Hart Dental",
    h1: "Prince George Dental Restoration",
    category: "Restore",
    description:
      "Dental restorations at Hart Dental in Prince George include fillings, crowns, inlays, onlays and bridges selected for each tooth and bite.",
    short: "Repair damaged teeth and rebuild comfortable everyday function.",
    intro:
      "A restoration repairs or replaces damaged tooth structure. Hart Dental’s current service offering includes fillings, crowns, inlays, onlays and bridges, with the choice guided by how much tooth remains and how the tooth functions.",
    sections: [
      {
        title: "Choose the least complicated sound option",
        paragraphs: [
          "Small areas of damage may be restored with a filling. When a tooth needs more coverage, the dentist may discuss an inlay, onlay or crown. A bridge may be considered to replace a missing tooth."
        ]
      },
      {
        title: "What the appointment involves",
        paragraphs: [
          "The dentist examines the tooth, may take an X-ray and explains the recommended material and steps. Some restorations are completed in one visit; others require a laboratory stage and a temporary restoration."
        ],
        bullets: ["Assessment and imaging where needed", "Removal of damaged or decayed material", "Protection and shaping of the tooth", "Bite and comfort check"]
      },
      {
        title: "Protect the work",
        paragraphs: [
          "Restorations can wear or break. Daily cleaning, regular examinations and addressing clenching or grinding where relevant can help protect both the restoration and the remaining tooth."
        ]
      }
    ],
    faqs: [
      { question: "Do I need a filling or a crown?", answer: "That depends on the location and extent of the damage, the remaining tooth and the forces on it. The dentist will explain the most suitable options after an examination." },
      { question: "How long do restorations last?", answer: "There is no fixed lifespan. Material, size, bite, home care and habits all matter. Regular examinations help identify wear or leakage early." },
      { question: "What if a restoration breaks?", answer: "Call the office. Avoid chewing on that area and bring any loose piece if you have it. Pain, swelling or trauma may require more urgent assessment." }
    ],
    related: ["endodontics-prince-george", "cosmetic-dentistry-prince-george", "dental-implants-prince-george"]
  },
  {
    slug: "endodontics-prince-george",
    navTitle: "Endodontics",
    title: "Endodontics in Prince George | Hart Dental",
    h1: "Prince George Endodontics",
    category: "Restore",
    description:
      "Root canal treatment at Hart Dental in Prince George may help retain a tooth when the tissue inside it is inflamed, injured or infected.",
    short: "Treat the inside of a damaged tooth with the goal of keeping it.",
    intro:
      "Root canal treatment, also called endodontic treatment, removes inflamed or infected tissue from inside a tooth. The cleaned space is filled and sealed so the tooth can be restored and used again.",
    sections: [
      {
        title: "Why it may be recommended",
        paragraphs: [
          "Deep decay, a crack, trauma or repeated dental work can affect the pulp inside a tooth. Symptoms vary, and some teeth have few symptoms, so an examination and imaging are needed before treatment is recommended."
        ]
      },
      {
        title: "What treatment generally includes",
        paragraphs: [
          "The tooth is numbed and isolated. The dentist creates an opening, removes affected pulp, cleans and shapes the canals, then fills and seals them. A filling or crown is used to restore the tooth afterward."
        ],
        bullets: ["Local anaesthetic", "Isolation of the tooth", "Cleaning, shaping and sealing", "Final restoration and follow-up"]
      },
      {
        title: "Some cases need a specialist",
        paragraphs: [
          "Complex anatomy, retreatment or surgical needs may require referral to an endodontist. The recommendation depends on the tooth and the clinical findings."
        ]
      }
    ],
    faqs: [
      { question: "Does a root canal remove the tooth?", answer: "No. The treatment removes tissue from inside the tooth and is intended to retain the natural tooth when that is a sound option." },
      { question: "Will the tooth need a crown?", answer: "Many back teeth need a crown after root canal treatment because they carry substantial chewing forces. The dentist will recommend a restoration based on the remaining tooth." },
      { question: "What if I have severe tooth pain?", answer: "Call the office promptly. Pain can have many causes and cannot be diagnosed from a web page or form." }
    ],
    related: ["dental-emergencies-prince-george", "dental-restoration-prince-george", "oral-hygienecleaning-prince-george"],
    sourceUrl: "https://www.cda-adc.ca/en/oral_health/talk/procedures/root_canal/"
  },
  {
    slug: "oral-hygienecleaning-prince-george",
    navTitle: "Oral Hygiene & Cleaning",
    title: "Oral Hygiene/Cleaning in Prince George | Hart Dental",
    h1: "Prince George Oral Hygiene/Cleaning",
    category: "Prevent",
    description:
      "Preventive dental examinations, hygiene care, cleaning and oral-health guidance at Hart Dental in Prince George.",
    short: "Preventive visits built around your teeth, gums and home-care needs.",
    intro:
      "Preventive care is not a one-size schedule. Examinations and hygiene visits help the team monitor teeth and gums, remove deposits that home care cannot, and adjust advice to your current risk and health.",
    sections: [
      {
        title: "Examination and monitoring",
        paragraphs: [
          "A dental examination may include your teeth, gums, bite, soft tissues and existing restorations. X-rays are recommended only when the expected information is useful for your care."
        ]
      },
      {
        title: "Professional hygiene care",
        paragraphs: [
          "A hygienist removes plaque and hardened deposits, assesses gum health and reviews brushing and interdental cleaning. The visit plan depends on inflammation, buildup and your health history."
        ],
        bullets: ["Gum-health measurements", "Removal of plaque and calculus", "Polishing where appropriate", "Practical home-care coaching"]
      },
      {
        title: "Intervals are personal",
        paragraphs: [
          "Some people benefit from six-month visits; others need a different schedule. Your dentist and hygienist will recommend timing based on current findings rather than insurance limits alone."
        ]
      }
    ],
    faqs: [
      { question: "How often should I have a cleaning?", answer: "The interval depends on your gum health, buildup, home care and other risks. The team can recommend a schedule after assessing you." },
      { question: "Do I need X-rays at every visit?", answer: "No. The need and timing depend on age, history, symptoms and risk. Ask what information a recommended X-ray is intended to provide." },
      { question: "What should I bring to a first appointment?", answer: "Bring identification, insurance information if applicable, a list of medications and relevant health information. Do not send private medical information through the website form." }
    ],
    related: ["periodontics-prince-george", "childrens-dentistry-prince-george", "sports-guards-prince-george"]
  },
  {
    slug: "orthodontics-invisalign-prince-george",
    navTitle: "Orthodontics & Invisalign®",
    title: "Orthodontics & Invisalign® in Prince George | Hart Dental",
    h1: "Prince George Orthodontics & Invisalign®",
    category: "Restore",
    description:
      "Orthodontic assessment, braces and Invisalign clear aligners at Hart Dental in Prince George for selected children, teens and adults.",
    short: "Braces and clear aligners planned for alignment, bite and long-term care.",
    intro:
      "Orthodontic treatment uses controlled force to move teeth over time. Hart Dental’s current services include metal braces and Invisalign® clear aligners; an assessment determines whether either approach fits your needs.",
    sections: [
      {
        title: "Start with the bite",
        paragraphs: [
          "The consultation looks beyond straight front teeth. The dentist reviews the bite, available space, jaw relationships, gum health and how well you can keep the teeth clean during treatment."
        ]
      },
      {
        title: "Two different tools",
        paragraphs: [
          "Braces use fixed brackets and wires. Clear aligners use a planned series of removable trays and depend on consistent wear. Each can be appropriate for selected cases and each has limitations."
        ],
        bullets: ["Records and treatment planning", "Scheduled progress visits", "Home-care guidance", "Retention after active treatment"]
      },
      {
        title: "Retention matters",
        paragraphs: [
          "Teeth can move after treatment. A retainer plan and ongoing follow-up are part of protecting the result. The team will explain wear and replacement instructions for the chosen retainer."
        ]
      }
    ],
    faqs: [
      { question: "Are clear aligners right for every case?", answer: "No. Tooth movement, bite, age, oral health and the ability to wear aligners as instructed all affect suitability." },
      { question: "How long will treatment take?", answer: "Timing varies with the planned movement and response to treatment. A personalized estimate follows records and assessment." },
      { question: "Do I still need dental cleanings during orthodontics?", answer: "Yes. Braces and aligners can change how plaque collects, so home care and professional preventive care remain important." }
    ],
    related: ["childrens-dentistry-prince-george", "sports-guards-prince-george", "oral-hygienecleaning-prince-george"]
  },
  {
    slug: "periodontics-prince-george",
    navTitle: "Periodontics",
    title: "Periodontics in Prince George | Hart Dental",
    h1: "Prince George Periodontics",
    category: "Prevent",
    description:
      "Gum-health assessment and periodontal care at Hart Dental in Prince George, including non-surgical treatment and ongoing maintenance where appropriate.",
    short: "Care for the gums and bone that support every tooth.",
    intro:
      "Periodontal care focuses on the tissues that support the teeth. Bleeding, swelling, recession and bone loss can have different causes and levels of severity, so the first step is a careful gum-health assessment.",
    sections: [
      {
        title: "Measure what is happening",
        paragraphs: [
          "The team may record gum-pocket depths, bleeding, recession, tooth mobility and bone levels. These findings help distinguish gingivitis from more advanced periodontal disease and guide the care plan."
        ]
      },
      {
        title: "Treatment and maintenance",
        paragraphs: [
          "Non-surgical care can include detailed cleaning above and below the gumline, home-care coaching and review of contributing factors. Advanced or complex needs may be referred to a periodontist."
        ],
        bullets: ["Periodontal charting", "Scaling and root planing where indicated", "Individual home-care plan", "Maintenance and reassessment"]
      },
      {
        title: "Consistency is part of treatment",
        paragraphs: [
          "Periodontal disease is often managed over time. Recommended maintenance intervals depend on the condition of your gums and response to care."
        ]
      }
    ],
    faqs: [
      { question: "Are bleeding gums normal?", answer: "Bleeding can be a sign of inflammation and deserves assessment, especially if it persists. It may have more than one cause." },
      { question: "Can gum disease be cured?", answer: "Early inflammation can often improve with effective cleaning and home care. More advanced disease is usually managed with treatment and ongoing maintenance." },
      { question: "Will I need a specialist?", answer: "Some advanced, surgical or complex cases benefit from periodontal specialist care. Your dentist can recommend referral based on the findings." }
    ],
    related: ["oral-hygienecleaning-prince-george", "dental-implants-prince-george", "sports-guards-prince-george"]
  },
  {
    slug: "sedation-dentistry-prince-george",
    navTitle: "Sedation Dentistry",
    title: "Sedation Dentistry in Prince George | Hart Dental",
    h1: "Prince George Sedation Dentistry",
    category: "Comfort",
    description:
      "Discuss oral sedation and nitrous oxide options at Hart Dental in Prince George if dental anxiety or treatment needs make appointments difficult.",
    short: "Options that may help an anxious visit feel more manageable.",
    intro:
      "Dental anxiety is common and worth discussing. Hart Dental’s current service offering includes oral sedation and nitrous oxide. The appropriate option depends on your health, medications, treatment and level of anxiety.",
    sections: [
      {
        title: "Tell us what makes care difficult",
        paragraphs: [
          "Past experiences, sounds, loss of control, a strong gag reflex or worry about discomfort can all affect an appointment. A clear conversation lets the team adapt communication and discuss whether sedation should be considered."
        ]
      },
      {
        title: "Assessment comes first",
        paragraphs: [
          "Sedation is not selected from a website. The dentist reviews your health history, medications, the planned procedure and practical needs such as transportation. You will receive specific preparation and after-care instructions."
        ],
        bullets: ["Oral sedation discussion", "Nitrous oxide discussion", "Plain-language preparation instructions", "Monitoring and recovery guidance"]
      },
      {
        title: "Comfort also comes from communication",
        paragraphs: [
          "Sedation can be one part of care. Agreed signals, pauses, step-by-step explanations and a predictable plan can also help make treatment feel more manageable."
        ]
      }
    ],
    faqs: [
      { question: "Will I be asleep?", answer: "Sedation options have different effects and are not the same as general anaesthesia. The dentist will explain the expected level of awareness for the option being considered." },
      { question: "Can I drive afterward?", answer: "Some sedation requires a responsible adult escort and no driving for a specified period. Follow the exact instructions given for your appointment." },
      { question: "Is sedation appropriate for everyone?", answer: "No. Health conditions, medications, pregnancy, age and the planned care can affect suitability. A dentist must review your history first." }
    ],
    related: ["dental-emergencies-prince-george", "wisdom-teeth-removal-prince-george", "childrens-dentistry-prince-george"]
  },
  {
    slug: "sports-guards-prince-george",
    navTitle: "Sports Guards & Bite Appliances",
    title: "Guards, Bite Appliances in Prince George | Hart Dental",
    h1: "Prince George Sports Guards",
    category: "Prevent",
    description:
      "Custom sports guards and night bite appliances at Hart Dental in Prince George can help protect teeth from impact or selected effects of grinding.",
    short: "Custom protection for sport—and for selected nighttime wear concerns.",
    intro:
      "A custom appliance is made from an impression or scan of your teeth. Compared with a generic guard, it can be shaped for a more secure fit, comfortable breathing and the protection your dentist recommends.",
    sections: [
      {
        title: "Sports guards",
        paragraphs: [
          "A sports guard helps cushion teeth and soft tissues during activities where contact or falls are possible. Young athletes need fit checks as their mouths change."
        ]
      },
      {
        title: "Night bite appliances",
        paragraphs: [
          "Clenching and grinding can contribute to tooth wear, fractures or muscle discomfort, but symptoms can have other causes. An examination helps determine whether a bite appliance is appropriate."
        ],
        bullets: ["Custom fit", "Material selected for the intended use", "Bite and comfort adjustment", "Cleaning and replacement guidance"]
      },
      {
        title: "Bring it to checkups",
        paragraphs: [
          "Appliances wear and mouths change. Bring yours to dental visits so the team can check the fit, cleanliness and signs of damage."
        ]
      }
    ],
    faqs: [
      { question: "Why choose a custom sports guard?", answer: "A custom guard is shaped to your mouth, which can improve fit, retention and comfort. No guard prevents every injury." },
      { question: "Does a night guard stop grinding?", answer: "A guard is mainly intended to protect teeth and manage selected effects; it may not stop the underlying habit. Assessment is important." },
      { question: "How do I clean an appliance?", answer: "Rinse after use, clean it as directed, allow it to dry and store it in a ventilated case. Avoid heat that could distort it." }
    ],
    related: ["tmj-prince-george", "oral-hygienecleaning-prince-george", "childrens-dentistry-prince-george"]
  },
  {
    slug: "teeth-whitening-prince-george",
    navTitle: "Teeth Whitening",
    title: "Teeth Whitening in Prince George | Hart Dental",
    h1: "Prince George Teeth Whitening",
    category: "Restore",
    description:
      "Professional at-home and in-office teeth whitening options at Hart Dental in Prince George, selected after an oral-health assessment.",
    short: "Professional whitening options with an examination and realistic plan first.",
    intro:
      "Teeth can darken from food, drinks, tobacco, age, injury or medication. Professional whitening can lighten many natural teeth, but fillings, crowns and veneers do not whiten in the same way.",
    sections: [
      {
        title: "Check the cause first",
        paragraphs: [
          "An examination helps identify decay, gum concerns, cracks, exposed roots or restorations that could affect comfort or the final colour. It also helps set a realistic expectation for the type of staining."
        ]
      },
      {
        title: "At-home and in-office options",
        paragraphs: [
          "Hart Dental’s current service page lists both take-home and in-office whitening. The dentist can explain the process, expected pace, sensitivity considerations and how each option fits your goals."
        ],
        bullets: ["Oral-health check", "Shade and restoration review", "Instructions for the selected system", "Plan for sensitivity and maintenance"]
      },
      {
        title: "Results vary",
        paragraphs: [
          "Whitening is not permanent and the degree of change varies. Coffee, tea, red wine, tobacco and natural aging can affect how long the colour lasts."
        ]
      }
    ],
    faqs: [
      { question: "Will whitening change my fillings or crowns?", answer: "No. Existing restorations do not lighten like natural enamel, which can affect colour matching. The dentist will review visible restorations first." },
      { question: "Can whitening cause sensitivity?", answer: "Temporary tooth or gum sensitivity can occur. Follow the product instructions and contact the office if symptoms are strong or persist." },
      { question: "Is store-bought whitening the same?", answer: "Products differ in strength, fit and instructions. A dental assessment can identify concerns and help you choose a safer, more predictable approach." }
    ],
    related: ["cosmetic-dentistry-prince-george", "dental-restoration-prince-george", "oral-hygienecleaning-prince-george"]
  },
  {
    slug: "tmj-prince-george",
    navTitle: "TMJ Care",
    title: "TMJ in Prince George | Hart Dental",
    h1: "Prince George TMJ",
    category: "Comfort",
    description:
      "Assessment for jaw-joint and muscle symptoms at Hart Dental in Prince George, with conservative treatment or referral based on the findings.",
    short: "A careful assessment for jaw pain, movement and bite-related concerns.",
    intro:
      "The temporomandibular joints and surrounding muscles help you speak, chew and yawn. Pain, clicking, limited opening and headaches can have many causes, so symptoms need assessment rather than a web diagnosis.",
    sections: [
      {
        title: "Look at the whole pattern",
        paragraphs: [
          "The dentist may ask when symptoms started, what makes them better or worse, and whether there was trauma. The examination can include jaw movement, muscles, joints, bite and signs of tooth wear."
        ]
      },
      {
        title: "Begin conservatively",
        paragraphs: [
          "Advice may include temporary changes to habits, self-care, monitoring or a custom bite appliance for selected patients. Persistent or complex symptoms may require medical, physiotherapy or specialist referral."
        ],
        bullets: ["History and movement assessment", "Muscle and joint examination", "Review of clenching or grinding signs", "Individual care or referral plan"]
      },
      {
        title: "Urgent symptoms need urgent care",
        paragraphs: [
          "Seek prompt assessment after major trauma, with severe swelling, fever, difficulty swallowing or breathing, or other acute symptoms."
        ]
      }
    ],
    faqs: [
      { question: "Does clicking mean I have a disorder?", answer: "Not necessarily. Joint sounds can occur without pain or loss of function. An assessment is most useful when symptoms are painful, worsening or limiting movement." },
      { question: "Will a night guard fix jaw pain?", answer: "A bite appliance helps selected patients but is not appropriate for every cause. The dentist should assess the pattern first." },
      { question: "Can jaw pain come from somewhere else?", answer: "Yes. Muscles, joints, teeth, sinuses and other health conditions can produce overlapping symptoms. Referral may be needed." }
    ],
    related: ["sports-guards-prince-george", "dental-emergencies-prince-george", "oral-hygienecleaning-prince-george"]
  },
  {
    slug: "wisdom-teeth-removal-prince-george",
    navTitle: "Wisdom Teeth Removal",
    title: "Wisdom Teeth Removal in Prince George | Hart Dental",
    h1: "Prince George Wisdom Teeth Removal",
    category: "Comfort",
    description:
      "Wisdom tooth assessment and extraction services at Hart Dental in Prince George, with referral when a case needs specialist care.",
    short: "Assessment, clear options and a plan for wisdom teeth that need attention.",
    intro:
      "Wisdom teeth are the last molars to develop. Some come in without difficulty; others remain partly or fully impacted, are hard to clean, or affect nearby tissues. Imaging and an examination guide the recommendation.",
    sections: [
      {
        title: "Removal is not automatic",
        paragraphs: [
          "The dentist considers symptoms, position, available space, cleaning access, decay, gum health and effects on neighbouring teeth. Monitoring can be appropriate when there is no current problem."
        ]
      },
      {
        title: "Plan the procedure and recovery",
        paragraphs: [
          "If removal is recommended, the team explains the procedure, anaesthetic or sedation considerations, expected recovery and warning signs. More complex cases may be referred to an oral and maxillofacial surgeon."
        ],
        bullets: ["Examination and imaging", "Review of health and medications", "Written preparation and after-care", "Follow-up or referral where needed"]
      },
      {
        title: "Call if symptoms change",
        paragraphs: [
          "Pain, swelling, a bad taste, limited opening or fever deserves prompt advice. Call rather than using the website form for an urgent concern."
        ]
      }
    ],
    faqs: [
      { question: "Does everyone need wisdom teeth removed?", answer: "No. The recommendation depends on position, health, symptoms and future risk. Some wisdom teeth can be monitored." },
      { question: "Will I need sedation?", answer: "Not every extraction requires sedation. The dentist will discuss anaesthetic and sedation options after reviewing the procedure and your health." },
      { question: "How long is recovery?", answer: "Recovery varies with the number and complexity of teeth removed and your health. Follow the written instructions and contact the office about concerning symptoms." }
    ],
    related: ["sedation-dentistry-prince-george", "dental-emergencies-prince-george", "childrens-dentistry-prince-george"]
  }
];

export const servicesBySlug = new Map(services.map((service) => [service.slug, service]));

export const serviceGroups = ["Prevent", "Restore", "Comfort"].map((category) => ({
  category,
  services: services.filter((service) => service.category === category)
}));

export function servicePath(service: Service | string) {
  const slug = typeof service === "string" ? service : service.slug;
  return `/services/${slug}`;
}
