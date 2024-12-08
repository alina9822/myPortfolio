import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="h-screen flex justify-center items-center ">
      <div className="h-full  w-full flex flex-col md:flex-row">
        <div className="basis-1/2 bg-aboutBG flex  justify-center items-center">
          <div>
            <img
              src="/myPortfolio/assets/images/worker.png"
              className="h-48 md:h-60 mx-auto"
              alt="Alina Zaman"
            />
            <h1 className="text-4xl font-bold text-center font-kalam mt-5">
              Skills{" "}
            </h1>
          </div>
        </div>
        <div className="basis-1/2 md:bg-heroBg  bg-aboutBG"></div>
      </div>
    </section>
  );
}

export default Skills