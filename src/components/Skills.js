import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode,faGraduationCap, faFlask, faUsers, faComments, faClock, faBookOpen, faChartLine, faTools, faCalendarCheck, faPalette, faChartColumn, faPersonChalkboard, faCamera, faUser } from '@fortawesome/free-solid-svg-icons';
import './Skills.css'
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: 'Programming & Development',
      des: 'HTML, CSS, JavaScript, React, TypeScript, Python, C',
      icon: faLaptopCode,
    },
    {
      name: 'Data Analysis',
      des: 'SPSS, Microsoft Excel, data cleaning, visualization, and interpretation',
      icon: faChartLine,
    },
    {
      name: 'Graphic Design',
      des: 'Canva (Advanced), Adobe Photoshop (Basic), visual storytelling, brand consistency',
      icon: faPalette,
    },
    {
      name: 'Digital Tools & Office Management',
      des: 'Google Workspace, Microsoft Office, Zoom, Google Meet, documentation and collaboration',
      icon: faTools,
    },
    {
      name: 'Editorial & Publication Work',
      des: 'Editing and reviewing magazine content, publication coordination',
      icon: faBookOpen,
    },
    {
      name: 'Scientific Writing & Research',
      des: 'Scientific article writing, research analysis, and documentation',
      icon: faFlask,
    },
    {
      name: 'Event Management',
      des: 'Event planning, coordination, execution, logistics, and time management',
      icon: faCalendarCheck,
    },
    {
      name: 'Photography',
      des: 'Visual storytelling, photo editing, and post-processing',
      icon: faCamera,
    },
    {
      name: 'Communication & Outreach',
      des: 'Public speaking, presentations, networking, stakeholder engagement',
      icon: faComments,
    },
    {
      name: 'Leadership & Teamwork',
      des: 'Team management, motivation, and collaborative execution',
      icon: faUsers,
    },
    {
      name: 'Time Management & Organization',
      des: 'Task planning, prioritization, scheduling, and deadline management',
      icon: faClock,
    },
    {
      name: 'Continuous Learning',
      des: 'Actively improving skills and staying updated with industry trends',
      icon: faGraduationCap,
    },
  ]);

  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Developer and designer with strong skills in HTML & CSS , JavaScript , React , Typescript , Python , C as well as expertise in graphic design, data analysis, and photography. Adept at problem-solving, communication, and teamwork, I combine technical proficiency with creativity to deliver impactful projects and innovative solutions.
      </div>

      <div className="list">
        {/* TECHNICAL SKILLS Heading */}
        <h2 className="technical-skills">TECHNICAL SKILLS</h2>
        <div className='new-list'>
          {listSkills.slice(0, 8).map((value, key) => (
            <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
              {value.icon && <FontAwesomeIcon icon={value.icon} />}
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
            </div>
          ))}
        </div>

        {/* SOFT SKILLS Heading */}
        <h2 className="soft-skills">SOFT SKILLS</h2>
        <div className='new-list'>
          {listSkills.slice(8).map((value, key) => (
            <div className="item" key={key} ref={(el) => el && divs.current.push(el)}>
              {value.icon && <FontAwesomeIcon icon={value.icon} />}
              {value.name && <h3>{value.name}</h3>}
              <div className="des">{value.des}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
