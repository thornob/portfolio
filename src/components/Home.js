import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>NURE TAHSIN MIA</span>
            </div>
            <div className="des">              
                Hi, I’m Tahsin Ornob — a Physics undergrade at SUST and an aspiring entrepreneur. I build creative, functional web experiences with React, TypeScript, HTML & CSS, and code in Python and C. I’m also into AI, design & photography. 🚀
            </div>

            <div className='cv-row'>
            <a href="Nure_Tahsin_Mia_CV.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My CV
            </a>
            <a href="Tahsin's Resume (Frontend Developer).pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My Resume
            </a>
            <a href="Tahsin's Resume (Corporate).pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                Download My Resume
            </a>
            </div>

        </div>
        <div className="avatar">
            <div className="card">
                <img src="Tahsin formal1.jpg" alt="" />
                <div className="info">
                    <div>Frontend Developer</div>
                    <div>Bangladesh</div>
                    <div>01/06</div>
                    <div>Male</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home