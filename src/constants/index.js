import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
Full-stack software developer with strong experience building scalable, production-ready web applications.
I specialize in JavaScript and the MERN stack, with a focus on clean architecture, performance optimization,
and delivering reliable products for real-world use cases.
`;

export const ABOUT_TEXT = `
I design and build modern web applications with a strong emphasis on scalability, performance, and maintainability.
My experience spans full-stack development, API design, and system integration across diverse business domains.

Core strengths:
- Developing scalable front-end applications using React.
- Designing secure, well-structured RESTful APIs with Node.js.
- Integrating databases and third-party services in production environments.
- Applying best practices in security, testing, and code quality.
- Collaborating with cross-functional teams in remote and agile setups.
`;

export const ABOUT_TEXT2 = `
I am actively growing toward a senior and technical leadership role, where I can contribute to system design,
mentor engineers, and drive engineering best practices. I enjoy working on challenging problems,
learning new technologies, and building systems that scale with user demand.
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Freelance Software Developer",
    company: "Independent",
    description: `
Deliver full-stack web applications for clients, covering system design, development, deployment, and maintenance.
Build RESTful APIs, integrate payment systems, and deliver scalable solutions used in real-world production environments.
    `,
    technologies: ["Node.js", "React", "MongoDB", "PostgreSQL", "Docker"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "ULA Africa",
    description: `
Developed responsive and accessible user interfaces using React and Next.js.
Collaborated closely with backend engineers to integrate APIs, improve performance,
and deliver consistent user experiences across devices.
    `,
    technologies: ["React", "Next.js", "Tailwind CSS", "MySQL", "MongoDB"],
  },
  {
    year: "2021 - 2022",
    role: "Web Developer",
    company: "Mawimbi Seafood Restaurant",
    description: `
Built and maintained a production web application supporting online orders and reservations.
Designed backend APIs, managed data storage, and worked closely with stakeholders to align technical solutions with business needs.
    `,
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Shantec Systems",
    description: `
Contributed to enterprise-level web applications, focusing on feature development, database design,
and improving system reliability in collaboration with engineering and product teams.
    `,
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "Leemart Enterprises",
    image: project1,
    description:
      "Production e-commerce platform with secure authentication, inventory management, and mobile money payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "M-Pesa API"],
    liveLink: "https://leemart.co.ke",
    githubLink: "https://github.com/Francisomondi/My_Portfolio",
  },
  {
    title: "Church Donation Platform",
    image: project2,
    description:
      "Web-based donation system enabling organizations to collect contributions through mobile payments using secure API integrations.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "M-Pesa API"],
    liveLink: "https://churchdonation.onrender.com",
    githubLink: "https://github.com/Francisomondi/churchDonation/",
  },
  {
    title: "USSD Airtime Purchase API",
    image: project3,
    description:
      "Backend service enabling airtime purchases via USSD with mobile payment processing and third-party API integration.",
    technologies: ["Node.js", "MongoDB", "Africa’s Talking API", "M-Pesa API"],
    githubLink: "https://github.com/Francisomondi/Airtime-Ussd-Daraja",
  },
  {
    title: "Restaurant Ordering & Reservation System",
    image: project4,
    description:
      "Full-stack web application for managing online food orders and reservations with a focus on usability and performance.",
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    liveLink: "https://mawimbiseafood.com",
    githubLink: "https://github.com/Francisomondi/mawimbi",
  },
];

export const CONTACT = {
  address: "Nairobi, Kenya",
  phoneNo: "+254 740 694770",
  email: "francisomondi17@gmail.com",
};