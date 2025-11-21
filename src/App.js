import './App.css';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Experiences from './components/Experiences';
import Education from './components/Education';

function App() {
  const homeRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const experiencesRef = useRef();
  const educationRef = useRef();
  const contactsRef = useRef();

  const sectionRefs = {
    Home: homeRef,
    Skills: skillsRef,
    Projects: projectsRef,
    Experiences: experiencesRef,
    Education: educationRef,
    Contacts: contactsRef,
  };

  return (
    <main>
      <Navbar refs={sectionRefs} />
      <section ref={homeRef}><Home /></section>
      <section ref={experiencesRef}><Experiences /></section>
      <section ref={projectsRef}><Projects /></section>
      <section ref={skillsRef}><Skills /></section>
      <section ref={educationRef}><Education /></section>
      <section ref={contactsRef}><Contacts /></section>
    </main>
  );
}

export default App;
