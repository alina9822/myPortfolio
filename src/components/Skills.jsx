import React from 'react'
import SkillsList from "../data/Skills.json";

const Skills = () => {
  return (
    <section id="skills" className="h-screen flex justify-center items-center ">
      <div className="h-full  w-full flex flex-col md:flex-row">
        <div className="basis-1/2 shadow-2xl flex  justify-center items-center">
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
        <div className="w-5/6  flex justify-center items-center">
          <div className="flex flex-col gap-12">
           
            {SkillsList.map((skill) => (
              <div className="flex flex-col gap-4 border-b-2 border-b-gray-500">
                <span className="font-roboto text-xl">{skill.type}</span>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  {skill.list.map((tech) => (
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <img className="h-12" src={tech.image}></img>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills