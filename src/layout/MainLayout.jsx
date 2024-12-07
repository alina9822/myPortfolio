import React from 'react'

import Navbar from '../components/Navbar'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'


function MainLayout() {
    
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

export default MainLayout
