import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex justify-center items-center bg-aboutBG"
    >
      <div className="h-full mt-52 md:mt-0 pt-10  w-full flex flex-col">
        <div>
          <img
            src="/myPortfolio/assets/images/eating.png"
            className="h-40 mx-auto"
            alt="Alina Zaman"
          />
          <h1 className="text-4xl font-bold text-center text-heroBg font-kalam mt-5">
            About Me
          </h1>
        </div>
      </div>
    </section>
  );
}

export default About