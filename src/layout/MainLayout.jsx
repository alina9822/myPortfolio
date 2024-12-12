import React from 'react'

import Navbar from '../components/Navbar'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Hero from '../components/Hero'


function MainLayout() {
    
  return (
    <div className='bg-heroBg'>
      <Navbar />
      <Hero/>
      <About />
      <Education />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default MainLayout
