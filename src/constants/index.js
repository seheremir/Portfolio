import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mobile App Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [ 
  {
    title: "Product Tracking with Real-Time Imaging in Industrial Automation",
    company_name: "TUBITAK",
    iconBg: "#383E56",
    points: [
      "Developed an object detection system for real-time tracking in industrial automation.",
      "Utilized YOLO (You Only Look Once) for object detection and real-time processing.",
      "Trained Python-based AI models for efficient tracking and processing.",
    ],
  },
  {
    title: "Personal Portfolio",
    company_name: "Self-Project",
    iconBg: "#E6DEDD",
    points: [
      "Developed a frontend-based portfolio using React.js and Node.js.",
      "Implemented state management and responsive design with Tailwind CSS.",
      "Focused on showcasing skills and projects with a clean, modern design.",
    ],
  },
  {
    title: "Alchemist’s Fire - Animation-Focused Blog and Information Platform",
    company_name: "Self-Project",
    iconBg: "#383E56",
    points: [
      "Built a full-stack blog platform using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Implemented database management, authentication, and authorization for a smooth user experience.",
      "Created an interactive platform for sharing animation insights and developments.",
    ],
  },
  {
    title: "Alchemist’s Fire Mobile - Mobile Version",
    company_name: "Self-Project",
    iconBg: "#E6DEDD",
    points: [
      "Developed the mobile version of the Alchemist’s Fire platform using React Native and Astro.",
      "Optimized performance for cross-platform functionality and ensured smooth user experience.",
      "Focused on mobile-specific UI/UX improvements and responsive design.",
    ],
  },
  {
    title: "Game-based Language Learning Mobile Application",
    company_name: "Ongoing Project",
    iconBg: "#383E56",
    points: [
      "Researching the development of a mobile language learning application with a game-based approach.",
      "Users interact with in-game objects to learn languages through gameplay mechanics.",
      "Focusing on mobile application development and enhancing engagement through gamification.",
    ],
  },
  {
    title: "AI-supported Animation Development Tool",
    company_name: "Ongoing Project",
    iconBg: "#E6DEDD",
    points: [
      "Exploring AI, Machine Learning, and Image Processing for animation development.",
      "Developing tools that leverage AI to automate and enhance animation creation processes.",
      "Researching ways to integrate AI models for improved animation workflows.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
