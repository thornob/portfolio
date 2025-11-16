import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faVuejs, faLaravel } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: 'Programming',
      des: 'React, TypeScript, HTML & CSS, Python (NumPy, Pandas, Matplotlib, Turtle), C',
      
    },
    {
      name: 'Graphic Design',
      des: 'Adobe Illustrator (Primary); Canva (Advanced)',
      
    },
    {
      name: 'Data Analysis',
      des: 'MS Excel (Advanced)',
      
    },
    {
      name: 'Documentation & Presentation',
      des: 'MS Word (Advanced Formatting), MS PowerPoint (Professional Design)',
      
    },
    {
      name: 'Photography',
      des: 'Creative photography, image editing, visual storytelling',
      
    },
    {
      name: '',
      des: 'Communication (Verbal & Written), Leadership & Teamwork, Problem Solving & Critical Thinking, Time Management & Adaptability, People Management & Delegation, Public Speaking & Networking, Conflict Resolution, Decision Making',
      
    }
  ]);

  return (
    <section className='skills' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Developer and designer with strong skills in React, TypeScript, HTML & CSS, Python, and C, as well as expertise in graphic design, data analysis, and photography. Adept at problem-solving, communication, and teamwork, I combine technical proficiency with creativity to deliver impactful projects and innovative solutions.
      </div>

      <div className="list">
        {/* TECHNICAL SKILLS Heading */}
        <h2 className="technical-skills">TECHNICAL SKILLS</h2>
        {listSkills.slice(0, 5).map((value, key) => (
          <div className={'item'} key={key} ref={(el) => el && divs.current.push(el)}>
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}

        {/* SOFT SKILLS Heading */}
        <h2 className="soft-skills">SOFT SKILLS</h2>
        {listSkills.slice(5).map((value, key) => (
          <div className={'item'} key={key} ref={(el) => el && divs.current.push(el)}>
            <FontAwesomeIcon icon={value.icon} />
            {value.name && <h3>{value.name}</h3>}
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
