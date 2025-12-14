import React, { useRef } from "react";
import CustomHook from "./CustomHook";
import './Experiences.css'
const experiences = [
    {
        title: "Publication & Graphic Design Secretary",
        company: "Kaizen SUST",
        location: "Sylhet, Bangladesh",
        date: "2025 – Present",
        responsibilities: [
            "Lead digital marketing and promotional campaigns for student engagement.",
            "Design and manage social media content to increase brand awareness.",
        ],
    },
    {
        title: "Assistant Office & Publication Secretary",
        company: "Association of Chandpur",
        location: "Sylhet, Bangladesh",
        date: "2025 – Present",
        responsibilities: [
            "Coordinate official documentation and oversee publication tasks.",
            "Organize and promote student-focused events.",
        ],
    },
    {
        title: "Working Group Member, Peace & Security Group & Technical Mechanism Group",
        company: "Conflict of Interest Task Force, YOUNGO",
        location: "UNFCCC",
        date: "2025 – Present",
        responsibilities: [
            "Participated in policy development and advocacy at UNFCCC.",
            "Contributed research and reports on peace and security impacts of climate change.",
        ],
    },
    // {
    //     title: "Executive Member",
    //     company: "International Leadership Competition",
    //     location: "Sylhet, Bangladesh",
    //     date: "2025 – Present",
    //     responsibilities: [
    //         "Successfully managed university events, increasing student participation.",
    //         "Promoted learning initiatives through digital and offline media.",
    //     ],
    // },
];

export default function Experiences() {
    const divs = useRef([]);
    const scrollTab = useRef();
    CustomHook(scrollTab, divs);

    return (
        <section className="experiences" ref={scrollTab}>
            <h2 className="title">Experience</h2>
            {experiences.map((exp, index) => (
                <div className="experience-card" key={index} ref={(el) => el && divs.current.push(el)}>
                    <h3 className="role">{exp.title}</h3>
                    <div className="company">
                        {exp.company} — <span className="location">{exp.location}</span>
                    </div>
                    <div className="date">{exp.date}</div>
                    <ul className="responsibilities">
                        {exp.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
