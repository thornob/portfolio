import React, { useRef } from "react";
import CustomHook from "./CustomHook";
import './Experiences.css'
const experiences = [
    {
        title: "Organizing Secretary",
        company: "Kaizen SUST",
        location: "Sylhet, Bangladesh",
        date: "2026 – Present",
        responsibilities: [
            "Plan, coordinate and execute organizational events, workshops, and student engagement programs.",
            "Lead event management, team coordination and logistical planning to ensure successful program execution.",
        ],
    },
    {
        title: "Organizing Secretary",
        company: "Association of Chandpur",
        location: "Sylhet, Bangladesh",
        date: "2026 – Present",
        responsibilities: [
            "Coordinate administrative operations, maintain official documentation and manage organizational communications.",
            "Plan and execute events, coordinate team activities and promote student engagement through community initiatives.",
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
    {
        title: "Campus Ambassador",
        company: "Commonwealth Students' Association (CSA)",
        location: "Remote",
        date: "2026 – Present",
        responsibilities: [
            "Represent the association on campus and promote its initiatives, programs, and opportunities.",
            "Coordinate student outreach and encourage participation in Commonwealth-focused activities.",
        ],
    },{
        title: "Campus Ambassador",
        company: "BDStudents",
        location: "Bangladesh",
        date: "2026 – Present",
        responsibilities: [
            "Promote BDStudents programs and events through campus outreach and social media.",
            "Engage students to increase participation and strengthen community involvement.",
        ],
    },{
        title: "Campus Leader",
        company: "Unbolt Academy",
        location: "Bangladesh",
        date: "2026 – Present",
        responsibilities: [
            "Support student leadership and engagement initiatives within the learning community.",
            "Encourage student participation in educational programs and community activities.",
        ],
    },
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
