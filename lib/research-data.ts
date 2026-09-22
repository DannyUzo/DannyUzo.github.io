export type ResearchLink = {
  label: string
  href: string
}

export type ResearchUpdate = {
  date: string
  label: string
  text: string
  highlights?: string[]
}

export type Publication = {
  id?: string
  title: string
  authors: string
  status: string
  accessLabel: string
  accessHref: string
  contribution: string
  links: ResearchLink[]
}

export type CurrentWork = {
  title: string
  description: string
  status: string
  details: string[]
  url: string
}

export type ServiceRecord = {
  label: string
  title: string
  description: string
  href?: string
}

export type TechnicalPost = {
  title: string
  date: string
  category: string
  url: string
  summary?: string
}

export const researchProfile = {
  name: "Daniel Uzodinma",
  eyebrow: "",
  title: "Undergraduate Researcher in Mechatronics",
  bio: "Hi! I'm Daniel and I'm a MTE undergrad at FUNAAB. My research is focused on hardware-software co-design for resource-constrained systems: how signal conditioning, careful architecture, and compute avoidance can result in better performance from commodity components. My development toolkit is focused on real-time embedded systems, microcontroller firmware, and ROS2 for robotic control and multi-sensor integration. Beyond research, I write technical deep-dives on robotics, embedded systems, and sustainable computing for the AMTES Blog.",
  portrait: {
    src: "/images/IMG_6969_me.jpg",
    alt: "Daniel Uzodinma",
  },
  links: [
    { label: "GitHub", href: "https://github.com/DannyUzo" },
    { label: "LinkedIn", href: "https://linkedin.com/in/daniel-uzodinma-6ba3b7293" },
    { label: "Email", href: "mailto:uzodinmadaniel42@gmail.com" },
  ] satisfies ResearchLink[],
  location: "Abeokuta, Nigeria",
}

export const researchUpdates: ResearchUpdate[] = [
  {
    date: "Aug 2026",
    label: "Research Work",
    text: "Finalized two research manuscripts and submitted a compute-avoidance framework to IEEE Sensors Letters, currently under review.",
    highlights: ["two research manuscripts", "IEEE Sensors Letters", "under review"],
  },
  {
    date: "Jun 2026",
    label: "Green Computing",
    text: "Selected as one of five departmental delegates for the Green and Sustainable Software Engineering Summer School at the University of Lagos (UNILAG), focused on energy-efficient applications and sustainable AI workloads.",
    highlights: ["one of five departmental delegates", "University of Lagos (UNILAG)"],
  },
  {
    date: "May 2026",
    label: "Robotics Competitions",
    text: "Managed technical coordination and logistics for the inaugural Mechatronics Inter-Varsity Robotics & AI Competition, featuring projects from nine universities across Nigeria.",
    highlights: ["Mechatronics Inter-Varsity Robotics & AI Competition", "nine universities across Nigeria"],
  },
  {
    date: "Apr 2026",
    label: "Machine Learning Infrastructure",
    text: "As Robotics Lead at RAIN-INN FUNAAB, partnered with Nvidia to deliver three technical workshops, including a session on Multimodal AI Agents and RAG systems.",
    highlights: ["Robotics Lead at RAIN-INN FUNAAB", "Nvidia", "three technical workshops", "Multimodal AI Agents and RAG systems"],
  },
  {
    date: "Oct 2025",
    label: "Academic Honors",
    text: "Awarded Best Student in Engineering Drawing III.",
    highlights: ["Academic Student of the Year (300L)", "Best Student in Engineering Drawing III"],
  },
]

export const technicalPosts: TechnicalPost[] = [
  {
    title: "Why Your Microcontroller Got Burnt (Part 2)",
    date: "2026-09-04",
    category: "Embedded Hardware & Firmware Architecture",
    url: "https://amtes.pages.dev/blog/microcontrollers/episode-5/",
    summary: "A practical analysis of power rails, excessive current draw, overvoltage, ESD, flyback spikes, and reverse polarity.",
  },
  {
    title: "Why Your Microcontroller Got Burnt (Part 1)",
    date: "2026-08-28",
    category: "Embedded Hardware & Firmware Architecture",
    url: "https://amtes.pages.dev/blog/microcontrollers/episode-4/",
    summary: "An engineering guide to diagnosing the failure vectors that quietly destroy embedded hardware.",
  },
  {
    title: "What exactly is PWM?",
    date: "2026-08-21",
    category: "Embedded Hardware & Firmware Architecture",
    url: "https://amtes.pages.dev/blog/microcontrollers/episode-3/",
    summary: "Pulse Width Modulation, duty cycles, and the bridge between digital control and analog behavior.",
  },
  {
    title: "Does this look like a robot?",
    date: "2026-08-13",
    category: "Robotics & Spatial Systems",
    url: "https://amtes.pages.dev/blog/hardware-in-the-trenches/episode-4/",
    summary: "A visual and kinematic deep-dive into RViz, transform frames, links, joints, and coordinate transforms in 2D.",
  },
  {
    title: "ROS, CAD and Research",
    date: "2026-07-28",
    category: "Robotics & Spatial Systems",
    url: "https://amtes.pages.dev/blog/hardware-in-the-trenches/episode-3/",
    summary: "Modular ROS design, web-based CAD modeling with Onshape, and layouts for low-power drone research.",
  },
  {
    title: "A Green Diversion",
    date: "2026-07-11",
    category: "Sustainable Systems",
    url: "https://amtes.pages.dev/blog/hardware-in-the-trenches/episode-2/",
    summary: "How software architecture decisions influence hardware energy consumption and the carbon footprint of code.",
  },
]

export const publications: Publication[] = [
  {
    id: "thermal-tracking",
    title: "Squinting Through Sixty-Four Pixels: Stable Closed-Loop Thermal Tracking with an AMG8833 on a 520KB Microcontroller",
    authors: "Uzodinma Daniel",
    status: "Under review, IEEE Sensors Letters",
    accessLabel: "Preprint available upon request",
    accessHref: "mailto:uzodinmadaniel42@gmail.com?subject=Thermal%20tracking%20preprint",
    contribution: "Develops and evaluates a sparse thermal-array tracking pipeline that combines spatial filtering, quantization-aware regression, and closed-loop actuation on an ESP32-class microcontroller.",
    links: [{ label: "Abstract", href: "#thermal-tracking" }],
  },
  {
    id: "edge-triage",
    title: "Not Every Watt Needs a Neuron: Compute Avoidance as a Sustainability Strategy for Off-Grid Edge Security",
    authors: "Uzodinma Daniel",
    status: "Manuscript in preparation / working paper",
    accessLabel: "Preprint available upon request",
    accessHref: "mailto:uzodinmadaniel42@gmail.com?subject=Edge-Triage%20preprint",
    contribution: "Introduces Edge-Triage, a low-power security architecture for off-grid edge nodes that uses event-driven sensing and a minimal-payload alert path to avoid continuous on-device inference.",
    links: [{ label: "Abstract", href: "#edge-triage" }],
  },
]

export const selectedProject: CurrentWork = {
  title: "Smart Home Energy Management System with Arduino Mega",
  description: "A multi-branch energy monitoring and control system that tracks real-time power consumption, enforces energy budgets, and responds to human presence.",
  status: "In development",
  details: [
    "Arduino Mega 2560 with three PZEM-004T energy meters and relay-controlled circuit branches.",
    "Keypad and ILI9341 TFT dashboard for energy allocation, live readings, and branch status.",
    "PIR and mmWave presence sensing to reduce waste when rooms are unoccupied.",
    "Proportional kWh allocation, per-branch deduction, and EEPROM persistence across power cycles.",
  ],
  url: "https://dannyuzo.vercel.app/work/smart-home-energy-management",
}

export const service: ServiceRecord[] = [
  {
    label: "Technical writing",
    title: "Technical Writer, AMTES Blog",
    description: "Write deep-dives on robotics kinematics, ROS and spatial systems, embedded hardware failure modes, firmware architecture, and sustainable computing for an engineering audience.",
    href: "/blog",
  },
  {
    label: "Community robotics",
    title: "Robotics Lead, RAIN-INN Funaab",
    description: "Coordinated student training and practical workshops spanning robotics, embedded systems, and deep learning. Built the curriculum around making technical concepts testable on real hardware.",
  },
]
