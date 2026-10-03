// =========================================================================
// DOCTOR PORTFOLIO CONFIGURATION DATA — DR. FAROOQ ANWAR CHATHA
// =========================================================================

export const doctorData = {
  // --- Personal Information ---
  name: "Dr. Farooq Anwar Chatha",
  fatherName: "Haji Muhammad Afzal Chatha",
  title: "Consultant General Physician & Diabetologist",
  subtitle: "Fellow Post-Doctoral Research in Diabetology • Cardiorenal Metabolic Specialist",
  tagline: "Best Graduate of Class 2025 with 23 Academic Distinctions. Awarded Best House Officer at Mayo Hospital Lahore & CEO at iamdrfarooq.site.",
  avatar: "/dr_farooq.jpeg", // Dr. Farooq's official photo
  heroBgPattern: "medical-grid",

  // --- Official Medical Registrations & Credentials ---
  medicalRegistration: {
    number: "PMDC 952163-01-M",
    council: "Pakistan Medical & Dental Council (PMDC) / RMP",
    status: "Active & PMDC Verified",
    verifiedYear: "2025",
  },

  // --- Quick Contact Details ---
  contact: {
    email: "cmfarooq976@gmail.com",
    phone: "03098382775",
    whatsapp: "923098382775", // Format for direct WhatsApp URL
    address: "Afzal Chatha House, Faisal Town, Mananwala, District Sheikhupura",
    emergencyContact: "03098382775",
    website: "https://iamdrfarooq.site"
  },

  // --- Official Social Media Handles ---
  socials: {
    facebook: "https://www.facebook.com/share/19u6EVjdrB/",
    instagram: "https://www.instagram.com/cmfarooqanwar?stkn=cDAxaXlmNDExeWww",
    website: "https://iamdrfarooq.site",
    whatsapp: "https://wa.me/923098382775"
  },

  // --- Key Impact Statistics ---
  stats: [
    { label: "Academic Distinctions", value: "23", icon: "Award" },
    { label: "Patients Treated", value: "1,200+", icon: "Users" },
    { label: "Specialist Services", value: "10+", icon: "HeartPulse" },
    { label: "Research Papers", value: "1", icon: "FileText" },
  ],

  // --- Bio & Care Philosophy ---
  about: {
    summary: `Dr. Farooq Anwar Chatha (s/o Haji Muhammad Afzal Chatha) is a distinguished General Physician and Post-Doctoral Fellow in Diabetology. Graduated as the Best Graduate of Class 2025 with an extraordinary record of 23 Academic Distinctions across five years of MBBS, he was awarded Best House Officer at Mayo Hospital Lahore. Currently serving as CEO at iamdrfarooq.site and Medical Officer at Mayo Hospital Lahore, Dr. Farooq specializes in Type-2 Diabetes remission therapy, cardiorenal metabolic disorders, hypertension, renal care, and endocrinology.`,
    philosophy: "Diabetes and metabolic disorders are manageable and reversible when treated holistically as cardiorenal metabolic conditions. My mission is a Diabetes-Free Pakistan through evidence-based remission therapy.",
    languages: ["English", "Urdu", "Punjabi"],
    memberships: [
      "Registered Medical Practitioner (RMP) — PMDC",
      "Fellow Post-Doctoral Research in Diabetology",
      "CEO & Clinical Lead — iamdrfarooq.site",
      "Member — Mayo Hospital Doctors Association"
    ]
  },

  // --- Medical Services & Specializations ---
  services: [
    {
      id: "diabetes",
      title: "Diabetes & Type-2 Remission Therapy",
      category: "Endocrinology",
      description: "Advanced diabetes care, HbA1c control, insulin titration, and cardiorenal metabolic remission protocols.",
      icon: "HeartPulse",
      popular: true
    },
    {
      id: "opd",
      title: "General OPD & Internal Medicine",
      category: "Outpatient Care",
      description: "Comprehensive medical examination, diagnostic evaluation, fever management, and chronic illness treatment.",
      icon: "Stethoscope",
      popular: true
    },
    {
      id: "cardiac-ecg",
      title: "Cardiac Issues & ECG Interpretation",
      category: "Diagnostics",
      description: "12-lead ECG analysis, chest pain evaluation, hypertension control, and cardiovascular risk screening.",
      icon: "Activity",
      popular: fontTrue(true)
    },
    {
      id: "renal-bp",
      title: "Renal Problems & Blood Pressure",
      category: "Nephrology",
      description: "Management of kidney dysfunction, proteinuria, fluid retention, and resistant hypertension.",
      icon: "ShieldPlus",
      popular: false
    },
    {
      id: "thyroid-pcos",
      title: "Thyroid Disorders & PCOS Management",
      category: "Metabolic Health",
      description: "Hypothyroidism, hyperthyroidism treatment, PCOS hormone balancing, and weight management.",
      icon: "ClipboardCheck",
      popular: false
    },
    {
      id: "joint-gastric",
      title: "Uric Acid, Joint Pain & Gastric Issues",
      category: "Internal Medicine",
      description: "Gout, arthritis, joint stiffness, acidity, peptic ulcers, and hepatitis screening and management.",
      icon: "Stethoscope",
      popular: false
    }
  ],

  // --- Education & Qualifications ---
  education: [
    {
      degree: "Fellow Post-Doctoral Research in Diabetology",
      institution: "Diabetology Research Institute",
      year: "2025 - Present",
      location: "Lahore, Pakistan",
      details: "Specialized post-doctoral clinical research in Type-2 Diabetes remission and cardiorenal metabolic medicine.",
      badge: "Fellowship"
    },
    {
      degree: "MBBS / MD (Registered Medical Practitioner)",
      institution: "ISM-IUK Bishkek Kyrgyzstan",
      year: "2025",
      location: "Bishkek, Kyrgyzstan",
      details: "Best Graduate of Class 2025. Awarded 23 Academic Distinctions across 5 years of MBBS. Awarded Best House Officer.",
      badge: "Best Graduate"
    }
  ],

  // --- Clinical Work Experience ---
  experience: [
    {
      role: "CEO & Clinical Lead",
      hospital: "iamdrfarooq.site",
      period: "2025 - Present",
      location: "Lahore / Online",
      type: "Executive Position",
      description: "Leading national diabetes awareness campaigns, online tele-consultations, and Type-2 Diabetes remission protocols.",
      highlights: [
        "Founded nationwide digital health platform for diabetes remission",
        "Over 1,000+ diabetes patients under active clinical monitoring"
      ]
    },
    {
      role: "Medical Officer (MO)",
      hospital: "Mayo Hospital Lahore",
      period: "2025 - Present",
      location: "Lahore",
      type: "Full-Time",
      description: "Conducting OPD clinics, emergency medical ward consultations, and internal medicine patient management.",
      highlights: [
        "Managing OPD patients 5 days a week (Mon-Fri 8:00 AM - 3:00 PM)",
        "Specializing in cardiorenal metabolic referrals"
      ]
    },
    {
      role: "Ex-House Physician (Internal Medicine & Endocrinology)",
      hospital: "East Medical Ward, Mayo Hospital Lahore",
      period: "2024 - 2025",
      location: "Lahore",
      type: "Residency Rotation",
      description: "Managed high-volume inpatient medical wards, endocrine emergencies, diabetic ketoacidosis, and renal cases.",
      highlights: [
        "Awarded Best Doctor of Rotation in Internal Medicine & Endocrinology",
        "Awarded Best House Officer of Mayo Hospital Lahore"
      ]
    },
    {
      role: "Ex-House Surgeon & Pediatric Surgery List Incharge",
      hospital: "South Surgical Ward & Pediatric Surgery, Mayo Hospital Lahore",
      period: "2024",
      location: "Lahore",
      type: "Surgical Rotation",
      description: "Managed surgical emergency admissions, minor/major operating lists, and pediatric surgical care.",
      highlights: [
        "Awarded Best Doctor of the Month at South Surgical Ward",
        "Served as List Incharge for Pediatric Surgery department"
      ]
    }
  ],

  // --- Hospital Practice Locations & OPD Schedule ---
  practiceLocations: [
    {
      id: "loc-mayo",
      hospitalName: "Mayo Hospital Lahore (OPD & MO Clinic)",
      address: "Outpatient Department, Mayo Hospital, Hospital Road, Anarkali Bazaar, Lahore",
      city: "Lahore",
      phone: "03098382775",
      timing: "Monday to Friday (08:00 AM - 03:00 PM)",
      fee: "PKR 2,500",
      mapLink: "https://maps.google.com",
      isPrimary: true
    },
    {
      id: "loc-online",
      hospitalName: "iamdrfarooq.site (Online Video Consultation)",
      address: "Online Tele-Consultation & Home Monitoring Protocol",
      city: "Online / Pakistan Wide",
      phone: "03098382775",
      timing: "Evening Slots via WhatsApp Booking",
      fee: "PKR 2,500",
      mapLink: "https://iamdrfarooq.site",
      isPrimary: false
    }
  ],

  // --- Research Publications ---
  publications: [
    {
      title: "Management and Remission Therapy of Diabetes Mellitus Type 2 Solely as Cardiorenal Metabolic Disorder",
      journal: "iamdrfarooq.site Clinical Research & Medical Journal",
      year: "2025",
      role: "Sole Lead Author",
      link: "https://iamdrfarooq.site",
      doi: "10.47391/DFP.2025.01"
    }
  ],

  // --- Patient Reviews & Testimonials ---
  testimonials: [
    {
      quote: "Dr. Farooq Anwar Chatha's diabetes remission protocol changed my life! My HbA1c dropped from 10.2 to 6.1 in 3 months with reduced medication.",
      name: "Chaudhry Tanveer Ahmed",
      relation: "Type-2 Diabetes Patient",
      rating: 5,
      date: "January 2026"
    },
    {
      quote: "One of the brightest young doctors at Mayo Hospital Lahore. Winning 23 academic distinctions reflects his deep medical knowledge.",
      name: "Senior Professor of Medicine",
      relation: "Mayo Hospital Lahore",
      rating: 5,
      date: "December 2025"
    }
  ],

  // --- FAQs for Patients ---
  faqs: [
    {
      question: "How can I consult Dr. Farooq Anwar Chatha at Mayo Hospital Lahore?",
      answer: "Dr. Farooq is available for OPD consultations at Mayo Hospital Lahore Monday through Friday from 08:00 AM to 03:00 PM. You can also book an appointment slot via WhatsApp 03098382775."
    },
    {
      question: "What is Diabetes Remission Therapy?",
      answer: "Diabetes Remission Therapy is a structured, evidence-based protocol aimed at reversing Type-2 Diabetes by treating it as a Cardiorenal Metabolic disorder through targeted clinical nutrition, medication reduction, and organ protection."
    },
    {
      question: "Is online video consultation available for patients outside Lahore?",
      answer: "Yes! Patients across Pakistan and abroad can book an online consultation via WhatsApp or directly on iamdrfarooq.site."
    }
  ]
};

function fontTrue(val) { return val; }

