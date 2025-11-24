import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faPalette, faChartColumn, faPersonChalkboard, faCamera, faUser } from '@fortawesome/free-solid-svg-icons';

import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: 'Programming',
      des: 'HTML , CSS , JavaScript , React , Typescript , Python , C',
      icon: faLaptopCode,
    },
    {
      name: 'Graphic Design',
      des: 'Adobe Illustrator (Primary); Canva (Advanced)',
      icon: faPalette,
    },
    {
      name: 'Data Analysis',
      des: 'SPSS, MS Excel (Advanced)',
      icon: faChartColumn,
    },
    {
      name: 'Documentation & Presentation',
      des: 'MS Word (Advanced Formatting), MS PowerPoint (Professional Design)',
      icon: faPersonChalkboard,
    },
    {
      name: 'Photography',
      des: 'Creative photography, image editing, visual storytelling',
      icon: faCamera,
    },
    {
      name: 'Soft Skills',
      des: 'Communication (Verbal & Written), Leadership & Teamwork, Problem Solving & Critical Thinking, Time Management & Adaptability, People Management & Delegation, Public Speaking & Networking, Conflict Resolution, Decision Making',
      icon: faUser, 
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
          {listSkills.slice(0, 5).map((value, key) => (
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
             {listSkills.slice(5).map((value, key) => (
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
