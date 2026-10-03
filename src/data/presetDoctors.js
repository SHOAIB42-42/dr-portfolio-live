import { doctorData } from './doctorData';

export const presetDoctors = [
  doctorData, // Dr. Farooq Anwar Chatha (Primary)

  {
    id: "doc-2",
    name: "Dr. Ayesha Rahman",
    title: "Consultant Cardiologist & Internal Medicine Specialist",
    tagline: "Dedicated to compassionate patient care, cutting-edge cardiovascular diagnostics, and evidence-based clinical medicine.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600",
    medicalRegistration: {
      number: "PMC-74920-P",
      council: "Pakistan Medical Council / General Medical Council (UK)",
      status: "Active & Verified",
      verifiedYear: "2018",
    },
    contact: {
      email: "dr.ayesha.rahman@medcare.org",
      phone: "+92 300 1234567",
      whatsapp: "923001234567",
      address: "Department of Cardiology, Suite 402, Medical Enclave, Lahore",
      emergencyContact: "+92 42 111 222 333",
    },
    socials: {
      linkedin: "https://linkedin.com",
      pubMed: "https://pubmed.ncbi.nlm.nih.gov",
    },
    stats: [
      { label: "Years Experience", value: "7+", icon: "Award" },
      { label: "Patients Treated", value: "8,500+", icon: "Users" },
      { label: "Cardiac Procedures", value: "1,200+", icon: "HeartPulse" },
      { label: "Research Papers", value: "14", icon: "FileText" },
    ],
    about: {
      summary: "Dr. Ayesha Rahman is a Board-Certified Consultant Cardiologist with over 7 years of specialized clinical experience.",
      philosophy: "I believe that clinical excellence begins with listening closely to the patient.",
      languages: ["English", "Urdu"],
      memberships: ["FCPS Cardiology", "MRCP (UK)", "Pakistan Cardiac Society"]
    },
    services: [
      {
        id: "opd-cardio",
        title: "OPD Medical Consultation",
        category: "Cardiology",
        description: "Comprehensive cardiac and internal medicine evaluation.",
        icon: "Stethoscope",
        popular: true
      }
    ],
    education: [
      {
        degree: "FCPS Cardiology",
        institution: "CPSP",
        year: "2022",
        location: "Lahore",
        details: "Specialized in Adult Cardiology.",
        badge: "Fellowship"
      }
    ],
    experience: [
      {
        role: "Consultant Cardiologist",
        hospital: "National Heart Complex",
        period: "2023 - Present",
        location: "Lahore",
        type: "Full-Time",
        description: "Leading Outpatient Cardiology Unit."
      }
    ],
    practiceLocations: [
      {
        id: "loc-1",
        hospitalName: "National Heart Complex",
        address: "Jail Road, Lahore",
        city: "Lahore",
        phone: "+92 42 35789000",
        timing: "Mon, Wed, Fri (05:00 PM - 08:30 PM)",
        fee: "PKR 2,500",
        mapLink: "https://maps.google.com",
        isPrimary: true
      }
    ],
    publications: [],
    testimonials: [],
    faqs: []
  }
];
