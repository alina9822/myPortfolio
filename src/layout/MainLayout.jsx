import React from 'react'

import Navbar from '../components/Navbar'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


function MainLayout() {
    
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default MainLayout
