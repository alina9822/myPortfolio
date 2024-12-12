import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex justify-center items-center bg-gradient-to-br from-[#4E5745] to-[#6C7461]"
    >
      <div className="h-full pt-10 w-full flex flex-col items-center text-justify">
        <div className="md:mb-12">
          <img
            src="/myPortfolio/assets/images/eating.png"
            className="h-40 mx-auto"
            alt="Alina Zaman"
          />
          <h1 className="text-4xl font-bold text-center text-heroBg font-kalam mt-5">
            About Me
          </h1>
        </div>
        <div className="w-5/6">
          <p className="text-heroBg t">
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