import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCircleQuestion, faEarthAmericas, } from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";
import { icon } from "@fortawesome/fontawesome-svg-core";
import './Projects.css';

const getLanguageIcon = (lang) => {
  const l = lang.trim().toLowerCase();
  const iconMap = {
    "html": "/html.png",
    "css": "/css.png",
    "tailwind css": "/Tailwind CSS.webp",
    "javascript": "/js.png",
    "python": "/python.png",
    "react": "/react.png",
    "typescript": "/typescript.png",
    "weatherapi": "/weatherapi.png",
  };
  console.log("Looking for icon:", l, iconMap[l]);
  return (<img src={iconMap[l]} alt={lang} style={{ width: "24px", height: "24px", objectFit: "contain" }}
  />

  );

}

function Projects() {
  const [listProjects] = useState([

    {
      name: "Kaizen SUST Portal",
      des: "Designed and developed a comprehensive web portal for Kaizen SUST to manage organizational activities, showcase events, weekly tasks, team members, and publications with a modern, responsive, and user-friendly interface.",
      mission:
        "To create a centralized digital platform that strengthens communication, improves accessibility to information, and supports the growth and professionalism of the Kaizen SUST community.",
      language: "React, TypeScript, Tailwind CSS",
      images: "kaizen-portal.png",
      imgClass: "img-kaizen",
    },

    {
      name: "SkyView Weather App",
      des: "Developed a modern weather application with real-time climate data, dynamic UI updates, and a clean Windows-style interface featuring temperature, wind, humidity, pressure, and air-quality insights.",
      mission:
        "To build intuitive and visually appealing interfaces that simplify complex data, enhance user experience, and make everyday information accessible and delightful.",
      language: "HTML, CSS, JavaScript, WeatherAPI",
      images: "weather-app.png",
      imgClass: "img-weather",
    },
    {
      name: "Neon Gradient Calculator",
      des: "Created an interactive calculator featuring a modern neon-glass UI, gradient buttons, real-time expression handling, and smooth responsive interactions for basic arithmetic operations.",
      mission:
        "To design visually striking and intuitive tools that merge elegant UI aesthetics with practical everyday functionality, improving user engagement and experience.",
      language: "HTML, CSS, JavaScript",
      images: "calculator.png",
      imgClass: "img-calculator",
    },
    {
      name: "WhatsApp Chat Analyzer",
      des: "Developed a tool that analyzes WhatsApp chat data to extract insights such as message frequency, user activity, and word usage patterns using data visualization and text analysis.",
      mission:
        "To simplify chat data interpretation through automation and visualization, helping users understand communication behavior and engagement trends.",
      language: "Python",
      images: "WhatsApp Chat Analyzer.png",
      imgClass: "img-two",
    },

    {
      name: "Tic-Tac-Toe",
      des: "Built an interactive Tic-Tac-Toe game featuring responsive design, turn-based logic, and automatic win detection.",
      mission:
        "To combine creativity, technology, and problem-solving to build meaningful digital experiences that inspire, connect, and create positive impact.",
      language: "React, TypeScript, HTML, CSS",
      images: "tic-tac-toe.png",
      imgClass: "img-one",
    },

    {
      name: "Track Phone Number Location",
      des: "Built a Python-based tool that validates phone numbers, detects their location, and identifies carrier information across multiple countries.",
      mission:
        "To build a reliable tool for identifying and verifying phone numbers efficiently while ensuring accuracy and privacy.",
      language: "Python",
      images: "Track Phone Number Location.png",
      imgClass: "img-three",
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="projects" ref={scrollTab}>
      <div
        className="title"
        ref={(el) => el && divs.current.push(el)}
      >
        These are my projects
      </div>

      <div
        className="des"
        ref={(el) => el && divs.current.push(el)}
      >
        These projects demonstrate a strong combination of problem-solving skills,
        UI/UX design, data analysis capabilities, and algorithmic thinking. They
        reflect proficiency in front-end development, Python programming, and core
        computer science principles.
      </div>

      <div className="list">
        {listProjects.map((project, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className={`images ${project.imgClass}`}>
              <img src={project.images} alt={project.name} />
            </div>

            <div className="content">
              <h3>{project.name}</h3>
              <div className="des">{project.des}</div>

              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{project.mission}</div>
                </div>
              </div>

              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div className="icon">
                  <h4>Languages</h4>
                  <div className="tech-badge-container">

                    {project.language.split(", ").map((lang, index) => (
                      <div key={index} className="tech-badge">
                        {getLanguageIcon(lang)}
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
