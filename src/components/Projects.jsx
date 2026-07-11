import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "Blood Connect",
    description:
      "A full-stack MERN platform connecting blood donors with recipients during emergencies. Features secure JWT authentication, real-time donor search with location-based filtering, and scalable RESTful APIs for efficient data handling and smooth communication.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/SaurabhTiwari0108/Blood-Connect",
    live: "https://blood-connect-tawny.vercel.app/",
  },

  {
    id: "02",
    title: "AI Interview Platform",
    description:
      "An AI-powered interview preparation platform simulating real-world technical rounds. Includes a multi-stage system for aptitude and DSA practice, dynamic question rendering, evaluation logic, and a scalable, modular architecture.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "AI Integration",
    ],
    github: "https://github.com/SaurabhTiwari0108/Ai-interviwer",
    live: "https://ai-interviwer-xsi9.onrender.com",
  },

  {
    id: "03",
    title: "Sign Language Translator",
    description:
      "An AI-based web application utilizing computer vision to translate sign language gestures into text and speech in real-time. Features camera integration for gesture detection, sign-to-text, and text-to-speech to assist specially-abled users.",
    tech: [
      "React",
      "AI/ML",
      "Computer Vision",
      "Python",
    ],
    github: "https://github.com/SaurabhTiwari0108/Sign-Language-Translator-AI-ML-Web-Computer-Vision-Project-",
    live: "https://sign-language-translator-ai-ml-web.vercel.app/",
  },

  {
    id: "04",
    title: "Real Time Communication App",
    description:
      "A real-time communication and video conferencing application where users can seamlessly host and join meetings. Engineered for low-latency interactions with robust peer-to-peer data streaming.",
    tech: [
      "React",
      "Node.js",
      "WebRTC",
      "Socket.io",
      "Express",
    ],
    github: "https://github.com/SaurabhTiwari0108/Code_Alpha_Real_Time_communication_app",
    live: "https://real-time-meeting.onrender.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">

     

      <div className="projects-top">

        <span className="tag">
          Featured Projects
        </span>

        <h2>
          Work that speaks
          <br />
          for itself
        </h2>

        <p>
          A selection of projects that showcase my expertise in full-stack
          development and modern architecture.
        </p>

      </div>

      <div className="project-list">

        {projects.map((project) => (
          <div className="project-card" key={project.id}>

            <span className="project-label">
              ★ Flagship Project
            </span>

            <div className="project-heading">

              <h3>{project.id}</h3>

              <h1>{project.title}</h1>

            </div>

            <p className="description">
              {project.description}
            </p>

            <div className="tech-stack">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="buttons">

              <a href={project.github}>
                <FaGithub />
                GitHub
              </a>

              <a href={project.live}>
                <FaExternalLinkAlt />
                Live Demo
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}