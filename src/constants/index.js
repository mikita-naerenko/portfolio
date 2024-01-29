
import React from '../assets/reactAbout.png'
import Nextjs from '../assets/nextjs.png'
import Ts from '../assets/ts.png'
import Js from '../assets/js.png'
import teamwork from '../assets/teamwork.png'
import performance from '../assets/performance.png'
import html from '../assets/html.png'
import framework from '../assets/framework.png'
import panorama from '../assets/panorama.png'
import bitswap from '../assets/bitswap.png'
import petsinkorea from '../assets/petsinkorea.png'
import admindashboard from '../assets/admindashboard.png'


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
    title: "JavaScript",
    icon: Js,
  },
  {
    title: "TypeScript",
    icon: Ts,
  },
  {
    title: "React",
    icon: React,
  },
  {
    title: "Next.js",
    icon: Nextjs,
  },
];


const experiences = [
  {
    title: "Good team player",
    company_name: "",
    icon: teamwork,
    iconBg: "#383E56",
    date: "",
    points: [
      "Collaboration in Agile Environment",
      "Communication with cross-functional teams and stake holders",
      "Participating in Scrum meetings sprint planning and retrospectives",
      "Working in a fast-paced dynamic environment",
    ],
  },
  {
    title: "Experience in improving application performance",
    company_name: "",
    icon: performance,
    iconBg: "#383E56",
    date: "",
    points: [
      "Create fast and efficient applications from scratch",
      "Improve the performance of existing code",
      "Find original solutions to complex problems",
      "Solve problems with users in mind",
    ],
  },
  {
    title: "Strong Knowledge of HTML and CSS",
    company_name: "",
    icon: html,
    iconBg: "#383E56",
    date: "",
    points: [
      "I create semantically correct layouts",
      "Ability to create web applications that adapt and perform well across various devices ",
      "Passionate about creating inclusive user interfaces, implementing accessibility features",
      "With a deep understanding of CSS, I leverage its full potential to create visually stunning and functionally robust interfaces",
    ],
  },
  {
    title: "Proficiency in modern frameworks and libraries",
    company_name: "",
    icon: framework,
    iconBg: "#383E56",
    date: "",
    points: [
      "React.js",
      "Next.js",
      "Material-UI",
      "Tailwind-CSS",
      "Redux",
      "Axios",
      "Prisma",
    ],
  },
];


const projects = [
  {
    name: "Sale 3D panoramas",
    description:
      "Portfolio for the creator of aerial panoramas and 3D panoramas of objects. Original and creative main page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: panorama,
    source_code_link: "https://github.com/mikita-naerenko/panorama_v2",
  },
  {
    name: "Crypto Exchange",
    description:
      "Functionality of a cryptocurrency exchange. Monitor real-time prices, buy, sell, set price alerts, and enable automatic purchasing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: bitswap,
    source_code_link: "https://github.com/mikita-naerenko/bitswap",
  },
  {
    name: "Pets in Korea",
    description:
      "Information resource for pet owners in South Korea in Russian. News, articles, feedback and selection of recommendations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
    ],
    image: petsinkorea,
    source_code_link: "https://github.com/",
  },
  {
    name: "Admin Dashboard",
    description:
      "CMS for the Pets in Korea resource. Authorization, roles, adding, deleting, and editing content, built-in text editor, as well as the concept of soft deletion + backend + REST API.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: admindashboard,
    source_code_link: "https://github.com/mikita-naerenko/pets-in-korea-AD",
  },
];

export { services, experiences, projects };
