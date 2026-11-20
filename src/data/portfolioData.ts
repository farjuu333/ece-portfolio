export interface ProjectItem {
  id: string;
  title: string;
  category: "power" | "iot" | "automation" | "robotics" | "electronics";
  subtitle: string;
  description: string;
  keyComponents: string[];
  youtubeId?: string;
  youtubeUrl?: string;
  videoLink?: string;
  imageLink?: string;
  isChampion?: boolean;
  awardText?: string;
  featured?: boolean;
}

export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  duration: string;
  credentialId?: string;
  levelBadge?: string;
  category: "technical" | "networking" | "robotics" | "general" | "solar";
  topics: string[];
  certificateUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  highlight: string;
  details: string;
  iconName: string;
  referenceId?: string;
}

export interface VolunteerItem {
  id: string;
  role: string;
  organization: string;
  duration?: string;
  responsibilities: string[];
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  timeline: string;
  statusDetails?: string;
  board?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  category: string;
  skills: { name: string; highlight?: boolean }[];
}

export const PORTFOLIO_INFO = {
  name: "Md. Morsalin Khan Noyon",
  headline: "Engineering Hardware, Embedded Systems & IoT Innovations",
  careerObjective:
    "Committed to advancing electronics hardware engineering. Enthusiastic ECE student aspiring to work in a progressive company where I can enhance my technical and analytical skills while contributing to cutting-edge electronics and communication technologies. To obtain a responsible and challenging position as a Hardware Design Engineer that will allow me to apply my theoretical knowledge and practical experience in electrical and electronic components, maintenance, digital electronics, analog circuits, and embedded systems. I aim to work in an innovative environment where I can design, develop, and test hardware systems that meet industry standards, and at the same time enhance my own professional growth.",
  address: "Mirpur-1, Dhaka, Bangladesh",
  phoneNumbers: ["01777045300", "01518932839"],
  email: "mknoyon.ece@gmail.com",
  secondaryEmail: "contact@nexhardtech.com",
  company: {
    name: "Nexhardtech Power Ltd., Dhaka, Bangladesh",
    role: "Founder & Managing Director",
    description:
      "A comprehensive hardware & power engineering enterprise providing end-to-end solutions for electrical, solar, and electronic project supplies, research materials, university defense project resources, thesis books, project manuals, and technical guidance.",
    services: [
      "Electrical, solar, and electronic project supplies & components",
      "University defense project resources, thesis books & project manuals",
      "Hybrid solar power integration & green energy backup systems",
      "Industrial 3-phase motor control distribution & conduit wiring",
      "Custom embedded prototyping, schematic drafting & technical guidance",
    ],
  },
  education: [
    {
      degree: "Bachelor of Science (Honours), Electronics and Communication Engineering (ECE)",
      institution: "Institute of Science and Technology (IST), National University Bangladesh",
      timeline: "2022 – Running",
      statusDetails: "4th Year, 7th Semester (Department 1st in 1st Semester)",
    },
    {
      degree: "Higher Secondary Certificate (HSC), Science",
      institution: "Daulatpur College, Kushtia",
      timeline: "Passing Year: 2021",
      board: "Science Group",
    },
    {
      degree: "Secondary School Certificate (SSC), Science",
      institution: "Daulatpur Government Pilot Model High School, Kushtia",
      timeline: "Passing Year: 2019",
      board: "Science Group",
    },
  ] as EducationItem[],
  socials: {
    email: "mailto:mknoyon.ece@gmail.com",
    linkedin: "https://www.linkedin.com/in/md-morsalin-khan-noyon-b28918282/",
    github: "https://github.com/mdmorsalinkhannoyon",
    youtube: "https://www.youtube.com/@Nexhardtech",
    portfolio: "https://www.youtube.com/@Nexhardtech",
  },
};

export const HERO_BADGES = [
  "Founder @ Nexhardtech Power Ltd",
  "ECE Student @ IST (4th Year, 7th Sem)",
  "NSDA Level-3 Certified",
  "CCNA Certified",
  "Basic Networking",
  "Consumer Electronics",
  "Mobile Servicing",
  "IoT, Robotics & Automation",
  "Research & Tech Enthusiast",
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Hardware (Electrical)",
    subtitle: "Mains Power, Distribution & Motor Automation",
    category: "electrical",
    skills: [
      { name: "House wiring (council conduit, surface, clit wiring)", highlight: true },
      { name: "Motor Controlling (DOL, Reverse & Forward, Star & Delta)", highlight: true },
      { name: "CCTV Connection, Configuration & Operation", highlight: true },
      { name: "Solar system Connection, Sizing & Operation", highlight: true },
      { name: "IPS Connection, Inverter Configuration & Operation", highlight: true },
      { name: "Earth resistance test & Grounding systems", highlight: true },
      { name: "Motor Testing & Insulation diagnosis", highlight: true },
      { name: "Change Over Switch (AC & DC control)", highlight: true },
      { name: "Three Phase Meter Connection & Conduit Pipe wiring", highlight: true },
    ],
  },
  {
    title: "Hardware (Electronics)",
    subtitle: "Microcontrollers, Sensors & Prototyping",
    category: "electronics",
    skills: [
      { name: "IoT Based Projects & Cloud Telemetry", highlight: true },
      { name: "Precision PCB Soldering & Component mounting", highlight: true },
      { name: "Circuit design & Simulation (Proteus Design Suite)", highlight: true },
      { name: "Electronics Project Making & Thesis Prototyping", highlight: true },
      { name: "Microcontrollers (Arduino Uno/Nano, ESP32, ESP8266)", highlight: true },
      { name: "Sensors (Fire, Obstacle, Motion, Light, Ultrasonic, Raindrop, MAX30102 Pulse)", highlight: true },
      { name: "Actuators, Servo Motors (SG90) & DC Motor drivers", highlight: true },
      { name: "Displays (16x2 I2C LCD, OLED, 7-Segment)", highlight: true },
      { name: "Solar cells & Battery management (Li-ion, Lead-Acid)", highlight: true },
      { name: "Mobile hardware servicing & component parts diagnosis", highlight: true },
    ],
  },
  {
    title: "Programming & Networking",
    subtitle: "Embedded Firmware & Cisco Network Architecture",
    category: "programming-networking",
    skills: [
      { name: "HTML", highlight: true },
      { name: "C Programming (Embedded logic)", highlight: true },
      { name: "Networking (CCNA - Routing, Switching, IP Services)", highlight: true },
      { name: "IPv4 & IPv6 Subnetting & Address Management", highlight: true },
      { name: "VLAN Segmentation & Inter-VLAN Routing", highlight: true },
      { name: "Network Access, Security, LAN, WAN & VPN", highlight: true },
      { name: "Embedded C++ in Arduino IDE", highlight: true },
    ],
  },
  {
    title: "Operating Systems & Tools",
    subtitle: "Engineering Software & Simulation Suites",
    category: "tools",
    skills: [
      { name: "Windows 10 / 11 Administration", highlight: true },
      { name: "Matlab", highlight: true },
      { name: "Cisco Packet Tracer (Topology simulation)", highlight: true },
      { name: "AnyDesk Remote Management & Support", highlight: true },
      { name: "GitHub Version Control & Repositories", highlight: true },
      { name: "Microsoft Office (Word, Excel, PowerPoint)", highlight: true },
      { name: "Microsoft Teams Collaboration", highlight: true },
      { name: "AutoCAD 2007 (Electrical & Technical Drafting)", highlight: true },
      { name: "Proteus Design Suite (Circuit simulation)", highlight: true },
      { name: "Arduino IDE", highlight: true },
      { name: "Emu-8086 (Microprocessor 8086 Assembly)", highlight: true },
    ],
  },
  {
    title: "Soft Skills & Management",
    subtitle: "Leadership, Communication & Project Delivery",
    category: "soft-skills",
    skills: [
      { name: "Technical Communication & Negotiation", highlight: true },
      { name: "Cross-Functional Collaboration", highlight: true },
      { name: "Problem Solving & Analytical Ability", highlight: true },
      { name: "Tech Savvy & Rapid Adaptability", highlight: true },
      { name: "Organizational & Project Planning", highlight: true },
      { name: "Public Presentation & Thesis Defense", highlight: true },
      { name: "Engineering Documentation & Manual Writing", highlight: true },
      { name: "Time Management & Sprint Execution", highlight: true },
      { name: "Money & Component Budget Management", highlight: true },
    ],
  },
  {
    title: "Driving With Auto-Mechanics",
    subtitle: "Mechanical Diagnostics & BRTA Professional Driving",
    category: "driving",
    skills: [
      { name: "Car Internal Combustion Engine Working Principle", highlight: true },
      { name: "Basic Auto-Mechanics & Fault Diagnosis", highlight: true },
      { name: "Driving Simulation & Defensive Navigation", highlight: true },
      { name: "Manual & Automatic Car Driving (BRTA Licensed)", highlight: true },
      { name: "Vehicle Electrical Systems & Battery Testing", highlight: true },
      { name: "Cooling & Transmission Mechanical Maintenance", highlight: true },
    ],
  },
];

export const TRAINING_CERTIFICATIONS: TrainingItem[] = [
  {
    id: "nsda-light-engineering-l3",
    title: "Electrical Installation & Maintenance for Light Engineering, Level-3 (NSDA)",
    institution: "Asia Technical Training Center",
    duration: "July 2026",
    levelBadge: "NSDA Level-3",
    category: "technical",
    topics: [
      "Three Phase Meter Connection & Wiring",
      "Solar Panel Operation & Maintenance",
      "Channel Wiring & Conduit Pipe Wiring",
      "3-Phase Motor Controlling (Star-Delta & DOL)",
    ],
    certificateUrl: "https://drive.google.com/file/d/19KX6BaFqSCkSyFS_VQ5MJF2Y2GYmmNTP/view",
  },
  {
    id: "nsda-construction-l3",
    title: "Electrical Installation & Maintenance for Construction, Level-3 (NSDA)",
    institution: "Asia Technical Training Center",
    duration: "January 2026 – March 2026",
    levelBadge: "NSDA Level-3",
    category: "technical",
    topics: [
      "Motor Controlling (DOL, Reverse & Forward, Star & Delta)",
      "AC & DC Control using Change Over Switch",
      "CCTV Connection & Operation",
      "IPS Connection & Operation",
    ],
    certificateUrl: "https://drive.google.com/file/d/1mDhyAmJ046nlD87u8ynmn3ay146X4lX6/view",
  },
  {
    id: "nsda-eim-l2",
    title: "Electrical Installation & Maintenance, Level-2 (NSDA)",
    institution: "Asia Technical Training Center",
    duration: "October 2025 – December 2025",
    levelBadge: "NSDA Level-2",
    category: "technical",
    topics: [
      "House wiring (council conduit, surface conduit, clit wiring)",
      "Earth Resistance Test & Grounding Setup",
      "Motor Test & Insulation Quality Inspection",
      "Solar System Connection & Operation, Electrical Maintenance",
    ],
    certificateUrl: "https://drive.google.com/file/d/15qzljg-n4tu5pxF-vj__rlIryM2suPuu/view",
  },
  {
    id: "ccna-skillforge",
    title: "Cisco Certified Network Associate (CCNA)",
    institution: "Skill Forge Training Center",
    duration: "September 2025 – November 2025",
    credentialId: "ID: 1010630763",
    levelBadge: "Cisco CCNA",
    category: "networking",
    topics: [
      "Network Fundamentals & IP Address Schemes",
      "Network Access & IP Connectivity",
      "IP Services (DHCP, DNS, NAT, VPN)",
      "Routing Protocols & Switching Infrastructure",
      "LAN & WAN Architecture",
    ],
    certificateUrl: "https://drive.google.com/file/d/1DMptqmxGqQP10U0RxoOVjdz3NSeJL-Gv/view",
  },
  {
    id: "solar-energy-guide",
    title: "From Sunlight to Savings: A Simple Guide to Solar Energy System",
    institution: "Specialized Solar Energy Certification",
    duration: "September 2026",
    levelBadge: "Solar Specialist",
    category: "solar",
    topics: [
      "Solar system architecture, solar panels & solar cells",
      "Solar power sizing & load calculation",
      "Grid-to-solar & solar-to-grid switching",
      "DC current generation, off-grid & on-grid systems",
    ],
    certificateUrl: "https://drive.google.com/file/d/1GED-jcUsAFcq6Dgt_lNYUwakoN7W9XGn/view",
  },
  {
    id: "robotics-automation",
    title: "Robotics & Automation",
    institution: "Robotics Camp",
    duration: "July 2023 – December 2023",
    credentialId: "ID: 23082028",
    levelBadge: "Robotics Specialist",
    category: "robotics",
    topics: [
      "Basic digital electronics & automation logic",
      "DC motor controlling & driver modules",
      "Application of multi-sensory detectors",
      "Wireless communications & remote RF control",
    ],
    certificateUrl: "https://drive.google.com/file/d/1eotiCdhNA0UAwknEj79erY8_hiRCfpzB/view",
  },
  {
    id: "digital-security-essentials",
    title: "Digital Security Essential",
    institution: "Online Certified Framework",
    duration: "25th February 2024",
    levelBadge: "Digital Security",
    category: "general",
    topics: [
      "Security of digital devices & operating systems",
      "Security practices when using Facebook, Email, and Internet",
      "Preventing credential theft & privacy hygiene",
    ],
    certificateUrl: "https://drive.google.com/file/d/11XEURCxX9ib4-B5sztXFyAGsUIJS0nIl/view",
  },
  {
    id: "mttc-driving-automechanics",
    title: "Driving With Auto Mechanics",
    institution: "Modern Technical Training Center (MTTC), Dhaka",
    duration: "April 2026 – June 2026",
    levelBadge: "Auto-Mechanics",
    category: "general",
    topics: [
      "Manual car drive & automatic car drive mastery",
      "Mechanical testing & engine maintenance",
      "Road safety, traffic regulations & emergency diagnosis",
    ],
    certificateUrl: "https://drive.google.com/file/d/1NTMw96Pdkldc9KhmD5bCWjbtV2U4DGTp/view",
  },
  {
    id: "daffodil-computer-application",
    title: "Computer Office Application",
    institution: "Daffodil Information Technology Foundation",
    duration: "January 2018 – June 2018",
    levelBadge: "Office IT",
    category: "general",
    topics: [
      "Microsoft Word for professional documentation",
      "Microsoft Excel for data calculation & budgets",
      "Microsoft PowerPoint for engineering presentations",
      "Web browsing, email creating, photo editing & file management",
    ],
    certificateUrl: "https://drive.google.com/file/d/142CPHAeAvJGDsLwE37NjT4zDwSXiDzrT/view",
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ist-rank-1",
    title: "Department 1st in 1st Semester",
    organization: "Institute of Science and Technology (IST), Dhaka",
    highlight: "Academic Premier Rank",
    details:
      "Awarded premier 1st rank across the Electronics & Communication Engineering (ECE) department for outstanding academic performance in core engineering coursework, physics, and circuit theory.",
    iconName: "Medal",
  },
  {
    id: "champion-exhibition-2025",
    title: "Champion of Project Exhibition 2025 in IST",
    organization: "Institute of Science and Technology (IST), Dhaka",
    highlight: "1st Place Winner",
    details:
      "Crowned Champion of the IST Annual Project Exhibition 2025 for developing 'ECO CHARGER' (Intelligent Hybrid Solar & Electric Power Backup System) amidst competitive project submissions across all engineering batches.",
    iconName: "Trophy",
  },
  {
    id: "brta-driving-licence",
    title: "Professional Driving Licence (BRTA)",
    organization: "Dhaka Metro-1, Bangladesh Road Transport Authority (BRTA)",
    highlight: "Professional Grade",
    details:
      "Officially licensed by BRTA Dhaka Metro-1 for professional vehicle operation and road safety regulations.",
    iconName: "ShieldCheck",
    referenceId: "Ref: DM126127P085",
  },
];

export const VOLUNTEER_EXPERIENCES: VolunteerItem[] = [
  {
    id: "ist-ecrc",
    role: "Robotics Coordinator",
    organization: "Electronics, Communication and Robotics Club of IST",
    duration: "Club Leadership",
    iconName: "Cpu",
    responsibilities: [
      "Served as Robotics Coordinator for the premier tech club at IST.",
      "Organized technology events, tech workshops, and university competitions.",
      "Taught circuit design, circuit simulation (Proteus), and microcontroller programming (Arduino & ESP32).",
      "Prepared assessments, project evaluation guidelines, and mentored engineering project teams.",
    ],
  },
  {
    id: "ist-photography-club",
    role: "Executive Member",
    organization: "IST Photography Club",
    duration: "Media & Event Management",
    iconName: "Camera",
    responsibilities: [
      "Spearheaded photography and visual media coverage for university programs, exhibitions, and guest lectures.",
      "Active participant in event management, backstage logistics, and digital publishing.",
    ],
  },
  {
    id: "teligangdia-foundation",
    role: "Community Volunteer & Lead",
    organization: "Teligangdia Foundation",
    duration: "Rural Development",
    iconName: "HeartHandshake",
    responsibilities: [
      "Dedicated to the rural development of Teligangdia through community empowerment.",
      "Pioneered and donated assistive hardware like the Smart Blind Stick for visually impaired villagers.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "smart-blind-stick",
    title: "Smart Blind Stick",
    category: "iot",
    subtitle: "Assistive Navigation Aid with Multi-Sensory Feedback",
    description:
      "An advanced walking stick for visually impaired individuals utilizing HC-SR04 ultrasonic echo ranging for directional obstacles, haptic buzzer vibration alerts, and water detection probe to prevent slip hazards.",
    keyComponents: ["Ultrasonic HC-SR04", "Arduino Nano", "Vibration Motor", "Piezo Buzzer", "Conductivity Water Probe"],
    youtubeId: "hDwBFrm6Tew",
    youtubeUrl: "https://www.youtube.com/watch?v=hDwBFrm6Tew",
    videoLink: "https://www.youtube.com/watch?v=hDwBFrm6Tew",
    featured: true,
  },
  {
    id: "eco-charger",
    title: "ECO CHARGER (Solar & Electric Power Backup System)",
    category: "power",
    subtitle: "Champion of Project Exhibition 2025 in IST",
    description:
      "Intelligent dual-source energy backup and charging ecosystem combining photovoltaic solar harvesting with grid electricity. Features automatic source switching, fast battery protection, overcharge cutoff, and live voltage telemetry.",
    keyComponents: ["Solar PV Cell", "12V Battery Bank", "Auto Transfer Relay", "Voltage Regulator", "PWM Control"],
    youtubeId: "MqkXpHoPgsE",
    youtubeUrl: "https://www.youtube.com/watch?v=MqkXpHoPgsE",
    videoLink: "https://www.youtube.com/watch?v=MqkXpHoPgsE",
    isChampion: true,
    awardText: "🏆 Champion — IST Project Exhibition 2025",
    featured: true,
  },
  {
    id: "automatic-car-parking",
    title: "Automatic Car Parking System",
    category: "automation",
    subtitle: "Infrared Slot Detection & Automated Barrier Control",
    description:
      "Automated parking architecture with IR obstacle tracking at entry/exit gates, automatic servo boom barriers, and a real-time LCD counter showing available slots to eliminate parking congestion.",
    keyComponents: ["IR Sensors", "Microcontroller", "SG90 Servo Gates", "16x2 I2C LCD", "Status LEDs"],
    youtubeId: "NQ7wAZEfnZA",
    youtubeUrl: "https://www.youtube.com/watch?v=NQ7wAZEfnZA",
    videoLink: "https://www.youtube.com/watch?v=NQ7wAZEfnZA",
    featured: true,
  },
  {
    id: "retractable-clothesline",
    title: "Automatic Retractable Clothesline",
    category: "automation",
    subtitle: "Raindrop Sensor Activated Domestic Automation",
    description:
      "Smart domestic utility that detects precipitation via an analog raindrop sensor and triggers a motorized rack mechanism to automatically pull laundry under roof shelter, returning it when dry.",
    keyComponents: ["Raindrop Sensor", "High-Torque Servo/DC Motor", "Rack & Pinion Mechanism", "Arduino", "Limit Switches"],
    youtubeId: "JSVcn3HLerE",
    youtubeUrl: "https://www.youtube.com/watch?v=JSVcn3HLerE",
    videoLink: "https://www.youtube.com/watch?v=JSVcn3HLerE",
    featured: true,
  },
  {
    id: "heartbeat-monitoring",
    title: "Real-Time Heartbeat Monitoring System",
    category: "electronics",
    subtitle: "MAX30102 Optical PPG Sensor + 16x2 LCD",
    description:
      "Compact health-tech monitoring system utilizing the MAX30102 optical sensor to capture optical pulses from the fingertip, computing real-time beats per minute (BPM) and blood oxygen saturation displayed on an LCD.",
    keyComponents: ["MAX30102 PPG Sensor", "Arduino Uno", "16x2 I2C LCD Display", "BPM Algorithm", "Buzzer Alert"],
    imageLink: "https://media.licdn.com/dms/image/v2/D562DAQE1mAJ1AUiUpA/profile-treasury-image-shrink_1280_1280/B56Z.iX617KAAY-/0/1785135607452?e=1795752000&v=beta&t=ig6j6rJwObLqozgY93SBRNnce0ZdhPQvp0seO-8QI7c",
    featured: true,
  },
  {
    id: "solar-tracker",
    title: "Automatic Solar Tracker",
    category: "power",
    subtitle: "Dual-Axis Maximum Sunlight Harvest Rig",
    description:
      "Dual-axis tracking rig using 4 Light Dependent Resistors (LDRs) and servo motors that continuously aligns solar panels perpendicular to sunlight, increasing energy yield by up to 35%.",
    keyComponents: ["4x LDR Sensors", "Micro-Servos", "Mini Solar Panel", "Comparator Circuit", "Arduino"],
    youtubeId: "qbEHvEDnR90",
    youtubeUrl: "https://www.youtube.com/watch?v=qbEHvEDnR90",
    videoLink: "https://www.youtube.com/watch?v=qbEHvEDnR90",
    featured: false,
  },
  {
    id: "flappy-bird-game",
    title: "Flappy Bird Game on LCD",
    category: "electronics",
    subtitle: "Microcontroller Gaming with Custom Sprites",
    description:
      "Custom programmed arcade game running directly on Arduino with custom bitmap sprites created for 16x2 LCD character blocks, collision detection, and tactile jump button control.",
    keyComponents: ["Arduino Uno", "16x2 HD44780 LCD", "Tactile Push Button", "Custom Bitmaps", "Collision Logic"],
    youtubeId: "brPwX4z6teE",
    youtubeUrl: "https://www.youtube.com/watch?v=brPwX4z6teE",
    videoLink: "https://www.youtube.com/watch?v=brPwX4z6teE",
    featured: false,
  },
  {
    id: "buzz-wire",
    title: "Buzz Wire Game",
    category: "electronics",
    subtitle: "Precision Steady-Hand Electrical Circuit Game",
    description:
      "Interactive steady-hand reflex circuit with instant conductivity detection, strike buzzer, and digital penalty counter.",
    keyComponents: ["Conductive Wire Track", "Transistor Latch", "Piezo Buzzer", "Digital Counter"],
    youtubeId: "NOw_FjMA69A",
    youtubeUrl: "https://www.youtube.com/watch?v=NOw_FjMA69A",
    videoLink: "https://www.youtube.com/watch?v=NOw_FjMA69A",
    featured: false,
  },
  {
    id: "auto-fan-light",
    title: "Automatic Fan & Light On/Off System",
    category: "automation",
    subtitle: "Human Presence Energy Conservation Controller",
    description:
      "Human-presence based room automation that automatically switches 220V AC ceiling fans and LED fixtures on upon entry and cuts power after inactivity.",
    keyComponents: ["PIR Sensor", "Optocoupler Isolated Relays", "220V AC Load", "Delay Timer"],
    youtubeId: "Y8EKjKwmdew",
    youtubeUrl: "https://www.youtube.com/watch?v=Y8EKjKwmdew",
    videoLink: "https://www.youtube.com/watch?v=Y8EKjKwmdew",
    featured: false,
  },
  {
    id: "fire-alarm",
    title: "Automatic Fire Alarm",
    category: "electronics",
    subtitle: "Flame Photodiode & Smoke Emergency Detector",
    description:
      "Rapid-response emergency detector integrating an IR flame detector and gas sensor to trigger localized sirens, visual strobe beacons, and emergency ventilation.",
    keyComponents: ["Flame Sensor", "MQ-2 Sensor", "High-Decibel Siren", "Transistor Driver", "LED Strobe"],
    youtubeId: "nNzBXBWf_kg",
    youtubeUrl: "https://www.youtube.com/watch?v=nNzBXBWf_kg",
    videoLink: "https://www.youtube.com/watch?v=nNzBXBWf_kg",
    featured: false,
  },
  {
    id: "auto-street-lamp",
    title: "Automatic Street / Home Lamp",
    category: "power",
    subtitle: "Dark-Activated Phototransistor Twilight Switch",
    description:
      "Autonomous outdoor lighting system with hysteresis comparator to prevent flicker at dusk, switching on illumination at nightfall and off at sunrise.",
    keyComponents: ["LDR Sensor", "LM358 Op-Amp", "Relay / Triac", "LED Luminaire"],
    youtubeId: "qxILtzay3V0",
    youtubeUrl: "https://www.youtube.com/watch?v=qxILtzay3V0",
    videoLink: "https://www.youtube.com/watch?v=qxILtzay3V0",
    featured: false,
  },
  {
    id: "morning-alarm",
    title: "Automatic Morning Alarm",
    category: "electronics",
    subtitle: "Light-Sensing Circadian Dawn Clock",
    description:
      "Awakens users gradually as natural sunrise enters the room, utilizing ambient optical threshold sensing combined with gentle sound generation.",
    keyComponents: ["LDR Optical Sensor", "Tone Generator", "Volume Potentiometer", "ATtiny/Arduino"],
    youtubeId: "zQZ5OAThotg",
    youtubeUrl: "https://www.youtube.com/watch?v=zQZ5OAThotg",
    videoLink: "https://www.youtube.com/watch?v=zQZ5OAThotg",
    featured: false,
  },
  {
    id: "thief-detector",
    title: "Automatic Thief Detector",
    category: "electronics",
    subtitle: "PIR Motion Security & Anti-Theft Intrusion System",
    description:
      "Security alert module utilizing high-sensitivity pyroelectric motion detection to guard doors and windows, armed with silent triggers and loud siren deterrence.",
    keyComponents: ["PIR Motion Sensor HC-SR501", "555 Timer / Nano", "Buzzer", "Relay Switch"],
    youtubeId: "ry0sTD9ZdnA",
    youtubeUrl: "https://www.youtube.com/watch?v=ry0sTD9ZdnA",
    videoLink: "https://www.youtube.com/watch?v=ry0sTD9ZdnA",
    featured: false,
  },
  {
    id: "auto-indoor-lamp",
    title: "Automatic Indoor Lamp",
    category: "automation",
    subtitle: "Smart Proximity Hand-Wave Optical Gesture Light",
    description:
      "Modern bedside desk light toggled on and off with a simple hand wave over an optical sensor, complete with smooth PWM dimming.",
    keyComponents: ["Proximity Photodiode", "PWM Driver", "12V Warm LED Strip", "Microcontroller"],
    youtubeId: "-6Y3yOryFnc",
    youtubeUrl: "https://www.youtube.com/watch?v=-6Y3yOryFnc",
    videoLink: "https://www.youtube.com/watch?v=-6Y3yOryFnc",
    featured: false,
  },
  {
    id: "auto-irrigation",
    title: "Automatic Irrigation System",
    category: "automation",
    subtitle: "Capacitive Soil Moisture Closed-Loop Watering Controller",
    description:
      "Automated plant watering module that samples soil capacitance, automatically turning on a submersible water pump relay when dryness thresholds are breached and shutting off when saturated.",
    keyComponents: ["Capacitive Soil Moisture Sensor", "5V Relay Module", "Submersible DC Pump", "LED Status Bar"],
    youtubeId: "xuLtyDgHT1I",
    youtubeUrl: "https://www.youtube.com/watch?v=xuLtyDgHT1I",
    videoLink: "https://www.youtube.com/watch?v=xuLtyDgHT1I",
    featured: false,
  },
  {
    id: "auto-hand-sanitizer",
    title: "Automatic Hand Sanitizer",
    category: "automation",
    subtitle: "Touchless Proximity Hygiene Dispenser",
    description:
      "Non-contact hygiene system using proximity infrared reflection to actuate a 5V peristaltic liquid pump, dispensing a precise dosage without surface touch.",
    keyComponents: ["TCRT5000 IR Sensor", "MOSFET Switch", "5V Mini Pump", "Sanitizer Reservoir"],
    imageLink: "https://media.licdn.com/dms/image/sync/v2/D5627AQHJC7rAea4IMw/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1712092503641?e=1795752000&v=beta&t=gw6LaLLD2lXZb8ScGTy16HPLMqX-27X4qsY7BrcJ5uU",
    featured: false,
  },
  {
    id: "object-following-robo-car",
    title: "Object Following Robo Car",
    category: "robotics",
    subtitle: "Autonomous Ultrasonic Target Tracking Vehicle",
    description:
      "Autonomous 2WD vehicle programmed with real-time distance PID-like tracking to follow a moving target at a fixed safe distance while avoiding collisions.",
    keyComponents: ["L298N Motor Driver", "HC-SR04 Sensor", "Chassis & DC Motors", "Arduino Uno", "Li-ion Battery Pack"],
    youtubeId: "sGSRH83Sv58",
    youtubeUrl: "https://www.youtube.com/watch?v=sGSRH83Sv58",
    videoLink: "https://www.youtube.com/watch?v=sGSRH83Sv58",
    featured: false,
  },
];
