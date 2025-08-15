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
  // carrent,
  bamah,
  layer,
  top,
  abdi,
  // jobit,
  // tripguide,
  promptly,
  threejs,
  chatApp,
  lms,
  oli,
  selman,
  healthCare,
  shop,
  FoodDelivery,
  smartify,
} from "../assets";
import henok from "../assets/images/henok.png";
import aauLogo from "/aauLogo.png";
import freelance from "/freelance.png";
import prodgy from "/prodgy.png";
import bam from "/bam.png";
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
    title: "crafting pixel-perfect, fluid, and responsive web applications",
    icon: web,
  },
  {
    title:
      "native mobile with meticulous UI fidelity and cross-device adaptability",
    icon: mobile,
  },
  {
    title:
      "Building scalable and secure server-side architectures,robust back-end APIs",
    icon: backend,
  },
  {
    title: "Bringing ideas to life through design and innovation",
    icon: creator,
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
  // {
  //   title: "CEO",
  //   company_name: "Bamah Technology",
  //   icon: bam,
  //   iconBg: "#383E56",
  //   date: "March 2023 - Now",
  //   points: [
  //     "Spearheaded the development of new digital products, including hospital, pharmacy management, and e-commerce systems.",
  //     "Maintained and updated existing software solutions for optimal performance.",
  //     "Delivered professional-grade websites tailored to client needs.",
  //     "Led full-stack development of web and mobile applications.",
  //     "Drove innovation and growth in software product offerings across multiple domains.",
  //   ],
  // },
  {
    title: "Software Developer & Product Manager",
    company_name:
      "Smart Home Automation Team | Innovation Center, Addis Ababa Technology and Built Environment College",
    icon: aauLogo,
    iconBg: "#383E56",
    date: "Jan 2023 - Now",
    points: [
      "Developed software solutions to streamline daily home activities.",
      "Integrated software with custom hardware for smart home automation.",
      "Led and managed a multidisciplinary development team.",
      "Oversaw quality assurance and usability testing for reliable product delivery.",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company_name: "Prodgy Info Tech | Remote ",
    icon: prodgy,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2025",
    points: [
      "Contributed to the development and maintenance of web applications.",
      "Focused on implementing intuitive and responsive UI/UX.",
      "Worked closely with cross-functional teams to meet project goals.",
      "Ensured consistent design performance across browsers and devices.",
      "Participated in code reviews and shared valuable technical feedback with the team.",
    ],
  },

  {
    title: "MERN Stack & React Native Mobile App Developer (Freelance)",
    company_name: "Remote | Ongoing",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Built pixel-perfect, fully responsive, and fluid modern websites.",
      "Developed and maintained web applications using React.js and the MERN stack.",
      "Collaborated with designers, product managers, and developers to deliver high-quality, user-centric products.",
      "Ensured seamless responsive design and cross-browser compatibility.",
      "Built and integrated robust backend APIs.",
      "Designed and developed cross-platform mobile applications using React Native.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He’s not just a developer, he’s a problem solver. Always exploring new tech to improve our product.",
    name: "Abdisa Teso",
    designation: "CoFounder",
    company: "Bamah Technology StartUp",
    image: abdi,
  },
  {
    testimonial:
      "Ayalk's attention to detail is unmatched — every design was pixel-perfect and flawlessly responsive.",
    name: "Henok K.",
    designation: "Software Engineer.",
    company: "Freelance",
    image: henok,
  },
  {
    testimonial:
      "Our backend was a mess until Ayalk stepped in. Now, it’s fast, secure, and built to scale.",
    name: "Birhanu D.",
    designation: "CEO",
    company: "Top Construction",
    image: oli,
  },
];

const projects = [
  {
    name: "Smartify Innovation Company",
    description:
      "A modern, fully responsive front-end project built with React.js and styled using Tailwind CSS. Features smooth animations powered by Framer Motion, clean code structure, and top-tier code quality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: smartify,
    source_code_link: "https://smartify-solutions.vercel.app/",
  },
  {
    name: "SAAS Landing Page",
    description:
      "A sleek and responsive SaaS landing page built with Next.js, React, Tailwind CSS, and Framer Motion. Combines modern UI design with smooth animations for a high-performance user experience.",
    tags: [
      {
        name: "Next.js and React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: layer,
    source_code_link: "https://mr-ayalksaaslangingpage.netlify.app/",
  },
  {
    name: "Top Construction Company",
    description:
      "A modern, fully responsive front-end project built with React.js and styled using Tailwind CSS. Features smooth animations powered by Framer Motion, clean code structure, and top-tier code quality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
    ],
    image: top,
    source_code_link: "https://top1-construction.netlify.app/",
  },
];

const FullStackprojects = [
  {
    name: "promptly | AI Powered Prompt",
    description:
      "A modern, fully responsive front-end project built with React.js and styled using Tailwind CSS. Features smooth animations powered by Framer Motion, clean code .",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
      {
        name: "Clean and Structured Code",
        color: "yellow",
      },
    ],
    image: promptly,
    source_code_link: "https://ai-prompt-landing-page.vercel.app/",
  },
  {
    name: "Weyyee Chat App | MERN Project",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs,Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDb",
        color: "blue-text-gradient",
      },
    ],
    image: chatApp,
    source_code_link: "https://bamah-chat-app.onrender.com/login",
  },
  {
    name: "NEXT Tutorial LMS | NEXT Tutorial LMS",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Clean and Structured Code",
        color: "yellow",
      },
    ],
    image: lms,
    source_code_link: "https://github.com/mr-Ayalk",
  },
];
const MyProduct = [
  {
    name: "HealthCare Management System | Chapa Payment Method Integrated ",
    description:
      "A modern, fully responsive front-end project built with React.js and styled using Tailwind CSS. Features smooth animations powered by Framer Motion, clean code .",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
      {
        name: "Clean and Structured Code",
        color: "yellow",
      },
    ],
    image: healthCare,
    source_code_link: "https://healthcaremanagement-dow4.vercel.app/",
  },
  {
    name: "E-Commerce App | Local Payment Method Integrated",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs,Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDb",
        color: "blue-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://mernecomerceapp.netlify.app/",
  },
  {
    name: "FoodDelivery Mobile App | Local Payment Method Integrated",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs,Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDb",
        color: "blue-text-gradient",
      },
    ],
    image: FoodDelivery,
    source_code_link: "https://github.com/mr-Ayalk",
  },
];
export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  FullStackprojects,
  MyProduct,
};
