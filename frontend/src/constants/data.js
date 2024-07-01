import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";

export const HERO_CONTENT = `I am a passionate frontend developer with a knack for crafting robust and scalable web applications. 
With 6 months of hands-on experience, I have honed my skills in front-end technologies like React, JavaScript and Redux, 
as well as back-end technologies like Node.js, Express.js, and MongoDB. My goal is to leverage my expertise 
to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. 
With 6 months of professional experience, I have worked with a variety of technologies, including React, JavaScript, Redux, Node.js, Express.js, Tailwind CSS, Bootstrap and MongoDB. 
My journey in web development began with a deep curiosity for how things work, and it has evolved into a career 
where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions.
Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "Feb-2024 - Present",
    role: "Frontend Developer",
    company: "CMTI - [Ministry of Heavy Indurstries govt. of India]",
    description: `
Designed and developed user interfaces for web applications using React and Tailwind CSS Bootstrap.
Implemented robust user validation techniques to enhance security and the user experience, ensuring intuitive navigation and fast loading times. 
Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "MongoDB", "Express.js", "Bootstrap", "Redux", "Node.js", "Tailwind.CSS",  ],
  },
];
export const PROJECTS = [
  {
    title: "AMS INDIA DASHBOARD",
    image: project1,
    description:"A fully functional AMS India Dashboard, with features like temperature monitoring, vibration analysis, energy management, OEE calculation, sensor monitoring, digital-Etop monitoring. and user authentication",
    technologies: ["React", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Mysql", "Php", "Form Validation", "Animation Library,"],
    link: "https://cmti-smddc-dashboard.com/dashboard"
  },
  {
    title: "Employee Data Table",
    image: project2,
    description:
      "An application for managing employee records, with features such as record creation, search, editing, and deletion, enhancing the application's functionality.",
    technologies: ["React", "Bootstrap", "Express.js", "MongoDB"],
    link: ""
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: ""
  },
  {
    title: "Responsive Gym Website",
    image: project4,
    description:
      "A responsive gym website with features like an eye-catching showcase for gym plans, sections for reviews, gallery, and trainers, ensuring compatibility across various devices and screen sizes.",
    technologies: ["HTML", "CSS", "Bootstrap"],
    link: "https://responsive-gym-website-xi.vercel.app/"
  },
];
