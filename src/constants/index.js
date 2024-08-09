import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  areon,
  lbs,
  back_end,
  mysql,
  vue,
  python,
  postgre,
  github,
  docker,
  heroku,
  lisa,
  palugada,
  healthhub

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: back_end,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Postgre",
    icon: postgre,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Heroku",
    icon: heroku,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Development of Tracker Feature to Enhance Mapping Functionality on Mangrovein Platform",
    description: "",
    icon: areon,
    iconBg: "#383E56",
    date: "September 2023 - October 2023",
    points: [
      "Involved in the development and optimization of a sophisticated tracker feature designed to significantly enhance the mapping functionality and overall user experience on the Mangrovein platform.",
    ],
  },
  {
    title: "Contribution to Interactive Map Development for Bandung Regency",
    company_name: "",
    icon: areon,
    iconBg: "#E6DEDD",
    date: "October 2023 - November 2023",
    points: [
      "Contributed to the creation of an interactive map for the Bandung Regency to monitor MSME data, enabling detailed analysis of business conditions within the Bandung Regency area, and providing valuable insights for local economic development.",
    ],
  },
  {
    title: "Research on IoT Application for pH Level Detection in Fish Ponds",
    company_name: "",
    icon: areon,
    iconBg: "#383E56",
    date: "November 2023 - December 2023",
    points: [
      "Actively participated in research on the application of Internet of Things (IoT) technology for detecting pH levels in fish ponds, contributing to the advancement of smart aquaculture practices and improving water quality management.",
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
    name: "Lets Absorb",
    description:
      "I developed an interactive learning website with quizzes, multimedia content, progress tracking, and gamification elements. The site is responsive and secure, enhancing my skills in web development and educational technology.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        progres: "60"
      }
    ],
    image: lbs,
    source_code_link: "https://github.com/",
    progress: 100,
    status: "Complete"
  },

  {
    name: "Palugada",
    description:
      "Palugada is an advanced e-commerce platform that offers a diverse range of products, embodying its tagline, Apa Lu Mau, Gua Ada. It provides a seamless and efficient shopping experience, ensuring customers find exactly what they need.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        progres: "60"
      }
    ],
    image: palugada,
    source_code_link: "https://github.com/",
    progress: 100,
    status: "Complete"
  },

  {
    name: "Lisa",
    description:
      "Lisa is an advanced AI virtual assistant powered by ChatGPT-3, designed to provide intelligent and responsive interactions. She excels at answering diverse questions, offering users accurate and helpful responses with a modern touch.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
      {
        progres: "60"
      }
    ],
    image: lisa,
    source_code_link: "https://github.com/",
    progress: 80,
    status: "Not Complete"
  },
  {
    name: "HealthHub Admin",
    description:
      "HealthHub Admin is the administrative website for the HealthHub application. It is designed to monitor all medication inventory movements, manage doctor appointments, and oversee various administrative functions, streamlining healthcare operations effectively.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        progres: "60"
      }
    ],
    image: healthhub,
    source_code_link: "https://github.com/",
    progress: 100,
    status: "Complete"
  },
];

export { services, technologies, experiences, testimonials, projects };