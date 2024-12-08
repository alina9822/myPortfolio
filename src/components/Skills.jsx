import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="h-screen flex justify-center border items-center ">
      <div className="h-full mt-52 md:mt-0  w-full flex ">
        <div className="basis-1/2 bg-aboutBG flex justify-center items-center">
          <div>
            <img
              src="/myPortfolio/assets/images/worker.png"
              className="h-60 mx-auto"
              alt="Alina Zaman"
            />
            <h1 className="text-4xl font-bold text-center font-kalam mt-5">
              Education{" "}
            </h1>
          </div>
        </div>
        <div className="basis-1/2 bg-heroBg"></div>
      </div>
    </section>
  );
}

export default Skills