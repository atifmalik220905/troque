export interface ServiceItem {
  id: string;
  title: string;
  category: 'rto' | 'safety' | 'insurance' | 'license';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tag: string;
  turnaroundTime: string;
  documents: string[];
  keyBenefits: string[];
  highlight?: boolean;
}

export const BUSINESS_INFO = {
  name: "Torque Auto Advisor",
  tagline: "Premier Automotive & RTO Advisory in Morbi",
  subTagline: "Authorized, hassle-free vehicle documentation, RTO compliance, insurance, and licensing services with fast turnaround.",
  phone1: "+91 8000 811 331",
  phone2: "+91 87588 12526",
  whatsapp: "+91 8000 811 331",
  whatsappUrl: "https://wa.me/918000811331?text=Hello%20Torque%20Auto%20Advisor,%20I%20need%20assistance%20with%20RTO%20services",
  email1: "info@torqueautoadvisor.com",
  email2: "myattar@yahoo.com",
  address: "2nd Floor, Zeel Complex, Behind Old Bus Stand, Ayodhyapuri Main Road, Morbi - 363641, Gujarat, India",
  googleMapsUrl: "https://maps.google.com/?q=Zeel+Complex+Behind+Old+Bus+Stand+Morbi+Gujarat",
  timings: "Monday - Saturday: 9:30 AM - 7:30 PM",
  sunday: "Sunday: By Appointment",
  foundedYear: 2010,
  experienceYears: "15+",
  satisfiedClients: "14,500+",
  rtoClearanceRate: "99.8%",
  avgProcessingDays: "2-3 Days"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "vehicle-insurance",
    title: "Vehicle Insurance",
    category: "insurance",
    tag: "Instant Policy",
    shortDesc: "Comprehensive & Third-Party insurance with maximum NCB transfer, cash-less claims & best renewal discounts.",
    fullDesc: "Protect your two-wheeler, private car, taxi, or commercial transport fleet with tailored insurance policies. We partner with India's top insurers (ICICI Lombard, HDFC ERGO, Bajaj Allianz, Tata AIG, New India Assurance) to provide zero-depreciation coverage, engine protector add-ons, 24x7 roadside assistance, and instant policy issuance.",
    iconName: "ShieldCheck",
    turnaroundTime: "Within 15 Minutes",
    highlight: true,
    documents: [
      "Previous Insurance Policy Copy",
      "Vehicle RC Book (Smart Card / Digital)",
      "Owner Aadhaar Card & PAN Card",
      "Pollution Under Control (P.U.C.) Certificate"
    ],
    keyBenefits: [
      "Up to 50% No Claim Bonus (NCB) transfer",
      "Instant cashless network garage access in Morbi & Gujarat",
      "Zero-Depreciation & Engine Protector add-ons available",
      "Quick claim endorsement & survey coordination"
    ]
  },
  {
    id: "vehicle-passing",
    title: "Vehicle Passing / Parsing",
    category: "safety",
    tag: "RTO Approved",
    shortDesc: "End-to-end commercial & private vehicle fitness passing, physical inspection guidance, and green clearance.",
    fullDesc: "Mandatory RTO fitness inspection and passing for commercial trucks, tempos, buses, tractors, and 15+ year private cars. We handle pre-inspection mechanical checklist verification, token generation, slot booking, and full liaison with the Morbi / Gujarat RTO officials.",
    iconName: "FileCheck",
    turnaroundTime: "24 - 48 Hours",
    highlight: true,
    documents: [
      "Original RC Book",
      "Valid Insurance Policy",
      "Valid P.U.C. Certificate",
      "Speed Governor & Reflector Compliance Slip",
      "Tax Clearance Receipt"
    ],
    keyBenefits: [
      "Complete pre-inspection vehicle readiness audit",
      "Morbi RTO slot booking & document file creation",
      "Speed governor & retro-reflective tape verification",
      "Hassle-free clearance without repeated RTO visits"
    ]
  },
  {
    id: "fitness-certificate",
    title: "Fitness Certificate (FC)",
    category: "safety",
    tag: "Mandatory Compliance",
    shortDesc: "Timely Fitness Certificate renewal & fresh certification for all transport and commercial vehicles.",
    fullDesc: "Ensure commercial compliance and avoid heavy MV Act penalties. We process FC renewals, structural safety endorsements, and environmental emission audits, ensuring all government transport norms are certified and registered on the Parivahan portal.",
    iconName: "Award",
    turnaroundTime: "1 - 2 Business Days",
    documents: [
      "Original Registration Certificate (RC)",
      "Road Tax Payment Proof",
      "Valid Commercial Insurance",
      "National / State Permit Copy",
      "Driver / Owner KYC Documents"
    ],
    keyBenefits: [
      "Official Parivahan portal record updates",
      "Penalty prevention with proactive renewal alerts",
      "Doorstep document pickup across Morbi & nearby areas",
      "Clear tracking throughout the inspection cycle"
    ]
  },
  {
    id: "permit-services",
    title: "Permit Services (State & National)",
    category: "rto",
    tag: "Commercial Transport",
    shortDesc: "All India Tourist Permits (AITP), Goods Carrier Permits, Taxi/Cab Permits & counter-signature endorsements.",
    fullDesc: "Seamless licensing for inter-state and intra-state transportation. Whether you operate heavy multi-axle freight trucks, ceramic transport fleets, tourist cabs, or local autorickshaws, Torque Auto Advisor processes stage carriage, contract carriage, and national goods permits effortlessly.",
    iconName: "Truck",
    turnaroundTime: "2 - 4 Days",
    documents: [
      "Vehicle RC Book",
      "Valid Fitness Certificate (FC)",
      "Valid Insurance & Green PUC",
      "Proof of Registered Transport Business / Aadhaar",
      "Previous Permit Copy (if renewing)"
    ],
    keyBenefits: [
      "All-India National Permit (AITP) authorization",
      "Authorisation fee payment & tax reciprocity support",
      "Morbi ceramic industrial fleet priority handling",
      "Endorsement of temporary permits for interstate routes"
    ]
  },
  {
    id: "puc-certification",
    title: "Pollution Under Control (P.U.C.)",
    category: "safety",
    tag: "Instant Digital",
    shortDesc: "Certified emission level testing, instant online Parivahan QR code PUC certificate & renewal reminders.",
    fullDesc: "Get your vehicle tested at government-calibrated digital emission testing points. We issue official computerized PUC certificates with QR codes for petrol, diesel, and CNG vehicles that sync automatically with mParivahan and Digilocker.",
    iconName: "CheckCircle",
    turnaroundTime: "10 Minutes",
    documents: [
      "Vehicle Registration Number",
      "Vehicle Engine & Chassis Last 5 Digits"
    ],
    keyBenefits: [
      "Instant 6-month & 1-year valid digital certificates",
      "Automatic sync with mParivahan & traffic e-challan systems",
      "Avoid ₹10,000 traffic fine under Section 190(2) MV Act",
      "SMS & WhatsApp reminder before expiry"
    ]
  },
  {
    id: "vehicle-name-transfer",
    title: "Vehicle Name Transfer (Ownership)",
    category: "rto",
    tag: "Buyer & Seller Legal",
    shortDesc: "Complete ownership transfer, seller liability discharge, Form 29/30 processing & new RC delivery.",
    fullDesc: "Selling or buying a pre-owned car or motorcycle? Protect yourself from legal disputes and hit-and-run liabilities. We draft and process Form 29, Form 30, NOC, affidavit stamp papers, seller sign-off verification, and Morbi RTO transfer submission.",
    iconName: "Users",
    turnaroundTime: "5 - 7 Days",
    highlight: true,
    documents: [
      "Original RC Book (Smart Card)",
      "Form 29 & Form 30 (Signed by Buyer & Seller)",
      "Buyer Aadhaar Card, PAN Card & Passport Photo",
      "Seller Aadhaar Card & Identity Proof",
      "Valid Insurance & PUC Certificate"
    ],
    keyBenefits: [
      "Immediate legal indemnity for sellers upon agreement",
      "Smart Card RC delivered directly to your doorstep",
      "Inter-district & inter-state NOC assistance",
      "Zero paperwork confusion with guided document signing"
    ]
  },
  {
    id: "hsrp-number-plate",
    title: "HSRP RTO Number Plate",
    category: "rto",
    tag: "Govt Mandatory",
    shortDesc: "High Security Registration Plate booking, laser-etched code stamping & laser tamper-proof fitment.",
    fullDesc: "Official booking, replacement of damaged or faded plates, and authorized fitment of laser-branded HSRP plates with third-registration colour-coded hologram stickers compliant with Central Motor Vehicle Rules.",
    iconName: "CreditCard",
    turnaroundTime: "3 - 5 Days",
    documents: [
      "Vehicle RC Copy",
      "Chassis Number & Engine Number Proof",
      "Owner Mobile Number (for OTP verification)"
    ],
    keyBenefits: [
      "Authorized OEM-grade aluminium embossed plates",
      "Laser security branding with non-reusable snap locks",
      "Color-coded fuel hologram sticker included",
      "Compliant with Morbi RTO and traffic surveillance cameras"
    ]
  },
  {
    id: "cng-cylinder-testing",
    title: "CNG Cylinder Hydro Re-Testing",
    category: "safety",
    tag: "Certified Safety",
    shortDesc: "Govt-approved hydro-static pressure testing for CNG cylinders with 3-year safety compliance plate.",
    fullDesc: "By law, vehicle CNG cylinders must be hydro-tested every 3 years. We provide cylinder degasification, hydrostatic pressure testing up to 300 bar, internal ultrasonic inspection, certified brass valve testing, and fitment of the legal aluminium compliance plate.",
    iconName: "Gauge",
    turnaroundTime: "24 Hours",
    highlight: true,
    documents: [
      "RC Book with CNG Endorsement",
      "Previous Hydro Test Certificate (if available)",
      "Valid Vehicle Insurance & PUC"
    ],
    keyBenefits: [
      "PESO approved testing facility certification",
      "Official 3-year metal compliance plate riveting",
      "Mandatory requirement for CNG pump refilling",
      "Complete safety inspection against micro-cracks & leaks"
    ]
  },
  {
    id: "driving-license",
    title: "Driving License Services",
    category: "license",
    tag: "All Classes",
    shortDesc: "Learner's license, permanent 2/4 wheeler DL, commercial heavy transport badge, international permit & renewals.",
    fullDesc: "Comprehensive assistance for LL slot booking, computer test preparation, biometrics appointment scheduling, driving track trial guidance, DL renewal, international driving permits (IDP), and address/name corrections on your Sarathi portal.",
    iconName: "FileText",
    turnaroundTime: "Fast-Track Scheduling",
    documents: [
      "Aadhaar Card with Updated Mobile Number",
      "Age Proof (10th Marksheet, Birth Certificate, or Passport)",
      "Medical Certificate (Form 1A) for applicants over 40 or commercial DL",
      "Passport Size Photographs"
    ],
    keyBenefits: [
      "Sarathi Parivahan online test guidance & question bank",
      "Track trial appointment slot booking in Morbi RTO",
      "Renewal of expired DL without penalty complications",
      "Commercial transport endorsement & hazardous material badge"
    ]
  },
  {
    id: "hp-cancellation",
    title: "HP Loan Cancellation (Hypothecation Removal)",
    category: "insurance",
    tag: "Clear Title RC",
    shortDesc: "Remove bank loan lien from RC book after final EMI payoff with Bank Form 35 submission.",
    fullDesc: "Once your car or bike loan is paid off, the financier retains legal lien on the vehicle until formally cancelled at the RTO. We submit your Bank NOC, Form 35, and update the Parivahan database so you get a 100% clean, unencumbered Smart Card RC.",
    iconName: "KeyRound",
    turnaroundTime: "3 - 5 Days",
    documents: [
      "Original Smart Card RC",
      "Bank Loan Clearance NOC (2 Copies)",
      "Signed Form 35 (2 copies with Bank Seal)",
      "Valid Insurance & PUC Copy",
      "Owner Aadhaar Card"
    ],
    keyBenefits: [
      "Full ownership title transfer without future bank delays",
      "Mandatory if you plan to sell or transfer your vehicle",
      "Updated status on mParivahan app & Parivahan server",
      "New clean Smart Card delivered to your hands"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "15+ Years Morbi RTO Expertise",
    desc: "Established local presence with deep knowledge of Gujarat transport policies, rules, and expedited processing channels.",
    icon: "ShieldAlert"
  },
  {
    title: "Doorstep Document Collection",
    desc: "No need to leave your office or home in Morbi. Our executive collects your papers and delivers completed RTO Smart Cards.",
    icon: "Home"
  },
  {
    title: "100% Transparent Govt Pricing",
    desc: "Clear upfront quote with detailed breakdown of government fees, challans, and professional consulting charges.",
    icon: "Banknote"
  },
  {
    title: "Zero Waiting, Zero Bureaucracy",
    desc: "We skip long government queues for you, managing appointments, Parivahan paperwork, and token clearances proactively.",
    icon: "Clock"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Contact & Free Consultation",
    desc: "Call or WhatsApp us your vehicle requirement. We verify your vehicle details and provide exact document checklist."
  },
  {
    step: "02",
    title: "Document Submission",
    desc: "Share digital copies over WhatsApp or hand over hard copies at our Morbi office / doorstep pickup service."
  },
  {
    step: "03",
    title: "RTO Verification & Processing",
    desc: "Our senior consultants prepare Form sets, pay official government challans, and complete Parivahan portal submissions."
  },
  {
    step: "04",
    title: "Clearance & Delivery",
    desc: "Receive your updated Smart Card RC, official permit, fitness paper, or insurance certificate securely."
  }
];

export const TESTIMONIALS = [
  {
    name: "Rajeshbhai Patel",
    role: "Ceramic Factory Fleet Owner, Morbi",
    comment: "We manage 18 commercial freight trucks for ceramic tile dispatch across Maharashtra and Rajasthan. Torque Auto Advisor handles all our National Permits, Annual Fitness passing, and Insurance renewals without a single day of downtime. Unbeatable service!",
    rating: 5,
    service: "National Permits & Fleet Fitness"
  },
  {
    name: "Dr. Mehul Shah",
    role: "Private Car Owner, Morbi",
    comment: "I bought a pre-owned Creta from Ahmedabad. The name transfer and HP hypothecation removal seemed daunting with government offices, but Torque took care of everything in 6 days. Clean Smart Card delivered right to my clinic.",
    rating: 5,
    service: "Vehicle Name Transfer & HP Removal"
  },
  {
    name: "Farhan Attar",
    role: "Logistics Operator, Morbi",
    comment: "Got our 4 commercial pickup vans tested for CNG hydro cylinder compliance and renewed all PUCs within 24 hours. Very courteous staff, fair charges, and clear receipts. Highly recommended RTO advisor in Morbi.",
    rating: 5,
    service: "CNG Hydro Testing & PUC"
  },
  {
    name: "Pooja Varma",
    role: "Resident, Ayodhyapuri Road",
    comment: "Helped me secure my permanent 4-wheeler driving license. They helped me with slot booking at the Morbi track, gave clear mock test tips, and coordinated the whole process smoothly. Five stars!",
    rating: 5,
    service: "Driving License Assistance"
  }
];

export const FAQS = [
  {
    q: "How long does a vehicle ownership name transfer take in Morbi RTO?",
    a: "Standard vehicle ownership transfer typically takes 5 to 7 working days once all signed documents (Form 29, 30, buyer/seller KYC, valid insurance, and PUC) are submitted to the RTO. We track the Parivahan application daily and hand over the updated Smart Card as soon as printed."
  },
  {
    q: "Why is CNG cylinder hydro-testing mandatory every 3 years?",
    a: "Under the Gas Cylinder Rules and Petroleum and Explosives Safety Organization (PESO) norms, CNG cylinders store methane under extreme pressures (approx. 200 bar). Testing every 3 years verifies cylinder wall strength, prevents microscopic fractures, and grants the official metal compliance plate required for CNG pump refilling."
  },
  {
    q: "What documents are required to remove HP (Hypothecation) from my RC book?",
    a: "You will need: (1) Original RC Book Smart Card, (2) Two signed copies of Form 35 stamped by your financing bank, (3) Official Bank NOC certificate, (4) Valid Vehicle Insurance, and (5) Valid Pollution (P.U.C.) certificate."
  },
  {
    q: "Can I renew my commercial vehicle fitness certificate if tax is unpaid?",
    a: "No, the Parivahan RTO system requires all pending road tax, green tax, or pending traffic e-challans to be cleared before accepting a Fitness inspection token. Torque Auto Advisor audits your vehicle registration number and clears any pending taxes on your behalf."
  },
  {
    q: "Do you offer doorstep pickup for documents in Morbi?",
    a: "Yes! For clients in Morbi city, GIDC, Ayodhyapuri Road, Trajpar, and nearby ceramic industrial belts, we offer doorstep document pickup and delivery for your convenience."
  },
  {
    q: "How can I check if my HSRP number plate is legally registered?",
    a: "Once our team installs your High-Security Registration Plate, the unique laser-etched 10-digit PIN number on both front and rear plates is linked directly to your vehicle's engine and chassis number on the nationwide Vahan portal."
  }
];
