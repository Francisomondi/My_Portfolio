import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
I am a passionate software developer dedicated to building high-performance, user-focused web applications. 
With expertise in the MERN stack (MongoDB, Express, React, Node.js), I thrive in collaborative environments, 
solving complex challenges and creating seamless digital experiences.
`;

export const ABOUT_TEXT = `
I specialize in crafting high-quality web applications with a strong focus on user experience, performance, and scalability. 
My expertise spans:
- Designing and developing responsive, high-performance applications.
- Building and integrating APIs with third-party services.
- Ensuring security, maintainability, and best practices in software development.
- Leading and collaborating with teams to transform ideas into fully functional products.
`;

export const ABOUT_TEXT2 = `
My goal is to lead and mentor a development team, leveraging my expertise to create cutting-edge web solutions. 
I thrive in dynamic environments where I can continuously learn, adapt to emerging technologies, and drive innovation.
`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Freelance Software Developer",
    company: "Freelancer",
    description: `Developing and maintaining web applications using JavaScript, React.js, and Node.js. 
    Implementing RESTful APIs and integrating with MongoDB databases. Collaborating with stakeholders to define project 
    requirements and deliver scalable solutions.`,
    technologies: ["Node.js", "React.js", "Next.js", "MongoDB", "PostgreSQL"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "ULA Africa",
    description: `Designed and developed user interfaces for web applications using Next.js and React. 
    Worked closely with backend developers to integrate frontend components with Node.js APIs. 
    Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React", "Tailwind CSS", "Next.js", "MySQL", "MongoDB"],
  },
  {
    year: "2021 - 2022",
    role: "Web Developer",
    company: "Mawimbi Seafood Restaurant",
    description: `Developed and maintained a dynamic web application for restaurant operations using React.js, Node.js, 
    and MongoDB. Designed RESTful APIs for order management and reservations. 
    Collaborated with designers to create a seamless user experience.`,
    technologies: ["React", "Node.js", "MongoDB", "PostgreSQL"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Shantec Systems",
    description: `Contributed to the development of enterprise web applications using JavaScript, React.js, and Node.js. 
    Managed databases and implemented efficient data storage solutions using MongoDB. 
    Worked closely with product managers to prioritize features and improvements.`,
    technologies: ["Node.js", "React", "Git", "MongoDB", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "LeeMart Enterprises",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Cloudinary", "Tailwind CSS", "Node.js", "MongoDB"],
    liveLink: "https://leemart-complete-4z1h.vercel.app/",  // Replace with actual URL
    githubLink: "https://github.com/Francisomondi/My_Portfolio",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "A task and project management system with task creation, assignment, and progress tracking.",
    technologies: ["Angular", "Firebase", "HTML", "CSS"],
    liveLink: "https://taskmanager.com",
    githubLink: "https://github.com/Francisomondi/task-manager",
  },
  {
    title: "Personal Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "MongoDB"],
    liveLink: "https://francisomondi.vercel.app/",
    githubLink: "https://github.com/Francisomondi/portfolio",
  },
  {
    title: "Mawimbi Seafood Web Application",
    image: project4,
    description:
      "An online platform for Mawimbi restaurant to accept orders and make reservations.",
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
