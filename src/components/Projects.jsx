import React from "react";
import ProjectList from "../data/Projects.json";
import { GrGithub } from "react-icons/gr";

function Projects() {
  console.log(ProjectList);
  return (
    <section
      id="projects"
      className="h-screen  flex flex-col justify-center items-center bg-heroBg  "
    >
      <div className="h-full w-full pt-10 my-5 flex   justify-between items-center  ">
        <div className="basis-1/2 flex flex-col gap-4 justify-center items-center  shadow-2xl h-full">
          <img
            src="/myPortfolio/assets/images/coding.png"
            className="h-32 md:h-48  "
          />
          <h1 className="text-4xl font-bold  text-center font-kalam">
            My Projects
          </h1>
        </div>
        <div className="w-5/6 ml-14 h-full overflow-y-auto scrollbar-thin ">
          <div className="wi-full flex flex-wrap px-5 gap-x-10 gap-y-16 pb-5 mt-16">
            {ProjectList.map((project) => (
              <div className="max-w-sm w-full flex-shrink-0 bg-heroBg border-b-2 hover:scale-105 duration-300 border-black  hover:shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a className="h-[250px] flex " href="#">
                  <img
                    className="rounded-2xl w-[400px]"
                    src={`${project.image}`}
                    alt=""
                  />
                </a>

                <div className="p-5 h-[250px] flex flex-col ">
                  <div className="flex items-center justify-between">
                    <a href="#">
                      <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {project.name}
                      </h5>
                    </a>
                    <a href={`${project.link}`} >
                      <GrGithub className="h-6 w-6 text-stone-600 hover:text-black dark:text-white" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <img
                      className="h-5"
                      src="/myPortfolio/assets/images/layers.svg"
                    ></img>
                    {project.stack.map((tech) => (
                      <span className="font-semibold bg-slate-100 px-2 rounded-md">
                        {tech}
                      </span>
                    ))}
                  
                  </div>
  
                  <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
               
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
