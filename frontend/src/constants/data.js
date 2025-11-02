import project1 from "../assets/ams-dashboard.png";
import project2 from "../assets/netflix.png";
import project3 from "../assets/foundry.png";
import project4 from "../assets/gym.jpg";
import project5 from "../assets/employe.jpg";
import project6 from "../assets/cloud.jpg";
import CMTI_LOGO_Image from '../assets/CMTILogo.png'

export const HERO_CONTENT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly 
web applications that solve real-world industrial challenges. With 1.10 year of professional experience at CMTI (Central Manufacturing 
Technology Institute), I have worked with a variety of technologies, including React.js, Jest,
Next.js, JavaScript, Redux, Tailwind CSS, Bootstrap, MySQL, and MongoDB, specializing in IoT-integrated monitoring systems and real-time data visualization.`;

export const ABOUT_TEXT = `I'm a Frontend Developer with 1.10 years of experience building high-performance, IoT-integrated web applications at CMTI. I specialize in React.js and Next.js, transforming complex industrial data into intuitive real-time dashboards that drive operational efficiency.
My expertise implementing in a architecting and developing scalable monitoring systems with real-time sensor integration and advanced data visualization. I've successfully delivered enterprise-grade solutions using React, Next.js, TypeScript, Tailwind CSS, and modern animation libraries, consistently meeting performance benchmarks and business requirements.
I specialize in building industrial monitoring systems that handle live sensor data, FFT analysis, and predictive maintenance alerts. My approach combines technical excellence with user-centric design, focusing on creating responsive applications that solve real-world challenges.
I thrive on solving challenging problems at the intersection of frontend development and IoT technology. Whether it's optimizing React component architecture, implementing sophisticated data visualization, or integrating RESTful APIs for real-time monitoring, I'm passionate about building applications that make a measurable impact.`

export const experiences = [
  {
    title: "Project Assistant - 2 (Frontend Developer)",
    company_name: "Central Manufacturing Technology Institute – Govt. of India",
    icon: CMTI_LOGO_Image,
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    technologies: ["Javascript", "React.js", "NextJS", "SQL", "MongoDB", "MySQL", "Docker", "MySQL", "Tailwind.CSS",],
    points: [
      "Architected and delivered 3 high-performance client applications using React.js and Next.js microservices architecture, meeting all business requirements while reducing deployment time by 30%.",
      "Led development of microservices-based web applications with optimized component architecture, reducing initial load times by 40% and enhancing overall system performance.",
      "Engineered responsive user interfaces utilizing React, Next.js, and Tailwind CSS that increased user engagement metrics by 30% and improved cross-device compatibility across 95% of target browsers.",
      "Collaborated cross-functionally with R&D teams to identify and integrate emerging technologies, driving continuous improvement in software development practices.",
    ],

  },
  {
    title: "Graduate Apprentice (Frontend Developer)",
    company_name: "Central Manufacturing Technology Institute – Govt. of India",
    icon: CMTI_LOGO_Image,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Feb 2025",
    technologies: ["Javascript", "React.js", "NextJS", "SQL", "MongoDB", "MySQL", "Docker", "MySQL", "Tailwind.CSS", "Redux", "Bootstrap"],
    points: [
      "Contributed to frontend development initiatives by designing and implementing responsive UI components using React.js, enhancing user interface consistency across multiple client applications.",
      "Assisted in database integration projects by developing efficient data fetching mechanisms and API integrations, improving data retrieval performance by 27% through optimized query implementations.",
      "Supported senior developers in building user-centric interfaces using React, JavaScript, and CSS frameworks, contributing to 1 successful project deliveries that met client specifications.",
    ],
  },

];



export const EXPERIENCES = [
  {
    year: "Feb-2024 - Present",
    role: "Frontend Developer",
    company: "CMTI - [Ministry of Heavy Indurstries govt. of India]",
    description: `
Designed and developed user interfaces for web applications using React and Tailwind CSS Bootstrap.
Implemented robust user validation techniques to enhance security and the user experience, ensuring intuitive navigation and fast loading times. 
Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "NextJS", "Python", "MongoDB", "MySQL", "Bootstrap", "Redux", "Tailwind.CSS",],
  },
];
export const PROJECTS = [
  {
    title: "Integrated Smart Foundry 4.0",
    image: project3,
    description: "An Integrated Smart Foundry 4.0 dashboard, providing real-time monitoring and control of foundry operations, including equipment status, process parameters, and production metrics. It features data visualization, predictive maintenance alerts, and integration with IoT devices ",
    technologies: ["React", "CSS", "JavaScript", "Tailwind CSS", "Form Validation", "Animation Library", "Material UI", "React-Charts"],
    link: "https://ifoundry.online/"
  },
  {
    title: "AMS INDIA DASHBOARD",
    image: project1,
    description: "A fully functional AMS India Dashboard, with features like temperature monitoring, vibration analysis, energy management, OEE calculation, sensor monitoring, digital-Etop monitoring. and user authentication",
    technologies: ["React", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Mysql", "Php", "Form Validation", "Animation Library,", "React-Charts"],
    link: "https://cmti-smddc-dashboard.com/dashboard"
  },
  {
    title: "Netflix Clone",
    image: project2,
    description: "A fully functional Netflix Clone, featuring user authentication, movie and TV show browsing, dynamic search functionality, video streaming, personalized user recommendations, and a responsive design",
    technologies: ["React", "CSS", "JavaScript", "Redux", "React-Hook-Form", "Bootstrap", "Tailwind CSS", "Form Validation"],
    link: "https://github.com/Harshithshetty07/Netflix-clone"
  },

  {
    title: "Responsive Gym Website",
    image: project4,
    description:
      "A responsive gym website with features like an eye-catching showcase for gym plans, sections for reviews, gallery, and trainers, ensuring compatibility across various devices and screen sizes.",
    technologies: ["HTML", "CSS", "Bootstrap", "React"],
    link: "https://responsive-gym-website-xi.vercel.app/"
  },
  {
    title: "Employee Data Table",
    image: project5,
    description:
      "An application for managing employee records, with features such as record creation, search, editing, and deletion, enhancing the application's functionality.",
    technologies: ["React", "Bootstrap", "Express.js", "MongoDB"],
    link: ""
  },

  {
    title: "Machine To Cloud Connecting EDGE Device Dashboard",
    image: project6,
    description: "A Machine to Cloud Connecting EDGE Device Dashboard, enabling seamless data transfer from industrial machines to the cloud. It offers real-time monitoring, data analytics, and remote control of machine operations. The dashboard features customizable widgets, alert notifications, and secure data encryption",
    technologies: ["React", "CSS", "JavaScript", "Tailwind CSS", "React-Charts"],
    link: "https://edge-device.netlify.app/"
  },

];
