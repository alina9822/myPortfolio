import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex justify-center items-center bg-aboutBG"
    >
      <div className="h-full pt-10 w-full flex flex-col items-center text-justify">
        <div className='md:mb-12'>
          <img
            src="/myPortfolio/assets/images/eating.png"
            className="h-40 mx-auto"
            alt="Alina Zaman"
          />
          <h1 className="text-4xl font-bold text-center text-heroBg font-kalam mt-5">
            About Me
          </h1>
        </div>
        <div className='w-2/3'>
          <p className='font-mono text-heroBg text-xl'>
            I’m a final-year undergraduate student passionate about technology,
            innovation, and continuous learning. With hands-on experience in
            developing creative solutions, I love transforming ideas into
            impactful projects. Explore my portfolio to see how I bring ideas to
            life!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About