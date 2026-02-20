import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
I am a results-driven software developer focused on building scalable, high-performance, and user-centric web applications.
With strong expertise in the MERN stack (MongoDB, Express, React, Node.js), I enjoy solving complex problems, designing clean architectures,
and delivering reliable digital products that create real business value.
`;

export const ABOUT_TEXT = `
I specialize in designing and developing modern web applications with a strong emphasis on performance, scalability, and user experience.

My core strengths include:
- Building responsive, production-ready web applications.
- Designing and integrating secure RESTful APIs and third-party services.
- Implementing best practices for security, maintainability, and performance.
- Collaborating effectively with teams to turn ideas into scalable solutions.
`;

export const ABOUT_TEXT2 = `
My long-term goal is to grow into a technical leader who mentors teams and architects impactful software solutions.
I thrive in fast-paced environments that challenge me to continuously learn, adapt to emerging technologies,
and build systems that scale with business growth.
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Freelance Software Developer",
    company: "Freelance",
    description: `
Designing, developing, and maintaining full-stack web applications using JavaScript, React.js, and Node.js.
Building RESTful APIs, integrating databases, and collaborating closely with clients to deliver scalable,
secure, and high-quality software solutions.
    `,
    technologies: ["Node.js", "React.js", "Next.js", "MongoDB", "PostgreSQL"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "ULA Africa",
    description: `
Developed modern and responsive user interfaces using React and Next.js.
Worked closely with backend teams to integrate frontend components with Node.js APIs,
optimized application performance, and ensured consistent user experience across devices.
    `,
    technologies: ["React", "Tailwind CSS", "Next.js", "MySQL", "MongoDB"],
  },
  {
    year: "2021 - 2022",
    role: "Web Developer",
    company: "Mawimbi Seafood Restaurant",
    description: `
Built and maintained a web application supporting restaurant operations such as orders and reservations.
Designed RESTful APIs, managed databases, and collaborated with designers to deliver a smooth and intuitive user experience.
    `,
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Shantec Systems",
    description: `
Contributed to the development of enterprise-level web applications using JavaScript, React, and Node.js.
Worked on database design, feature implementation, and system improvements in collaboration with product and engineering teams.
    `,
    technologies: ["Node.js", "React", "Git", "MongoDB", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Leemart Enterprises",
    image: project1,
    description:
      "A full-featured e-commerce platform with product management, shopping cart functionality, secure authentication, and M-Pesa payment integration.",
    technologies: ["React", "Cloudinary", "Tailwind CSS", "Node.js", "MongoDB", "M-Pesa Daraja API"],
    liveLink: "https://leemart.co.ke",
    githubLink: "https://github.com/Francisomondi/My_Portfolio",
  },
  {
    title: "Church Donation Web App",
    image: project2,
    description:
      "A modern donation platform that enables churches and faith-based organizations to collect tithes, offerings, and project contributions via M-Pesa STK Push in a secure and mobile-friendly way.",
    technologies: ["React (Vite)", "MongoDB", "Node.js", "Tailwind CSS", "M-Pesa Daraja API"],
    liveLink: "https://churchdonation.onrender.com",
    githubLink: "https://github.com/Francisomondi/churchDonation/",
  },
  {
    title: "Africa’s Talking USSD Airtime Purchase API",
    image: project3,
    description:
      "A USSD-based application that allows users to purchase airtime using a USSD code and complete payments through M-Pesa STK Push.",
    technologies: ["Node.js", "MongoDB", "Africa’s Talking API", "M-Pesa Daraja API"],
    githubLink: "https://github.com/Francisomondi/Airtime-Ussd-Daraja",
  },
  {
    title: "Mawimbi Seafood Web Application",
    image: project4,
    description:
      "A restaurant web platform that enables customers to place orders, make reservations, and interact with the business online.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    liveLink: "https://mawimbiseafood.com",
    githubLink: "https://github.com/Francisomondi/mawimbi",
  },
];

export const CONTACT = {
  address: "Outer Ring Road, Embakasi, Nairobi",
  phoneNo: "+254 740 694770",
  email: "francisomondi17@gmail.com",
};