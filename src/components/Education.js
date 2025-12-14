import React, { useRef } from "react";
import CustomHook from "./CustomHook"; // same hook used in Experiences.jsx
import './Education.css';
const educationData = [
  {
    degree: "Bachelor of Science in Physics",
    institution: "Shahjalal University of Science and Technology (SUST)",
    location: "Sylhet, Bangladesh",
    duration: "2022 – Present",
    details: [
      "Specializing in theoretical and experimental physics.",
      "Actively involved in research, student organizations, and outreach activities.",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Kakairtala Janata College",
    location: "Chandpur, Bangladesh",
    duration: "2020 – 2022",
    details: [
      "Completed science stream with distinction.",
      "Engaged in extracurricular activities including debate and academic clubs.",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Jagannathpur Hazi Ershad Miah High School",
    location: "Chandpur, Bangladesh",
    duration: "2018 – 2020",
    details: [
      "Graduated with top results in science group.",
      "Participated in science fairs and creative writing competitions.",
    ],
  },
];

export default function Education() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className="education " ref={scrollTab}>
      <h2 className="title">Education</h2>

      {educationData.map((edu, index) => (
        <article
          key={index}
          className="education-card bg-gray-800 text-gray-100 p-6 rounded-2xl mb-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
          ref={(el) => (divs.current[index] = el)}
        >
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-lg mt-1">
            <span className="font-medium">{edu.institution}</span> —{" "}
            <span className="text-gray-400">{edu.location}</span>
          </p>
          <p className="text-sm text-gray-400 mt-1">{edu.duration}</p>
          <ul className="list-disc list-inside mt-3 space-y-1">
            {/* {edu.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))} */}
          </ul>
        </article>
      ))}
    </section>
  );
}
