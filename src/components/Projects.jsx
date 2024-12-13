import React from "react";
import { GrGithub } from "react-icons/gr";

function Projects() {
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
            <div className="max-w-sm w-full flex-shrink-0 bg-heroBg border-b-2 hover:scale-105 duration-300 border-black  hover:shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a className="h-[250px] flex " href="#">
                <img
                  className="rounded-2xl w-[400px]"
                  src="/myPortfolio/assets/images/eggCatch.png"
                  alt=""
                />
              </a>

              <div className="p-5 h-[250px] flex flex-col ">
                <div className="flex items-center justify-between">
                  <a href="#">
                    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Catch the Egg
                    </h5>
                  </a>
                  <a href="https://github.com/alina9822/Catch-the-Egg">
                    <GrGithub className="h-6 w-6 text-stone-600 hover:text-black dark:text-white" />
                  </a>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <img
                    className="h-5"
                    src="/myPortfolio/assets/images/layers.svg"
                  ></img>
                  <span className="font-semibold bg-slate-100 px-2 rounded-md">
                    C
                  </span>
                </div>

                <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
                  It’s a simple yet fun IGraphics game where players use a
                  basket to catch falling eggs. Each egg type either adds or
                  deducts points. There are others things like bombs, large
                  basket, and extra time that can help or hurt the player. C
                  filesystem is used to store the game state and score.
                </p>
                {/* <div className="flex gap-5 mt-auto ">
                  <a
                    href="#"
                    className="min-w-20 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Details
                  </a>
                  <a
                    href="#"
                    className="min-w-20 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Git Repo
                  </a>
                </div> */}
              </div>
            </div>
            <div className="max-w-sm h-[500px] w-[400p] flex-shrink-0 bg-heroBg border-b-2 border-black hover:scale-105 duration-300  hover:shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a className="h-[250px] flex " href="#">
                <img
                  className="rounded-2xl w-[400px]"
                  src="/myPortfolio/assets/images/footballManager.png"
                  alt=""
                />
              </a>
              <div className="p-5 h-[250px] flex flex-col">
                <div className="flex items-center justify-between">
                  <a href="#">
                    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      FootBall Manager
                    </h5>
                  </a>
                  <a href="https://github.com/alina9822/Football-Manager">
                    <GrGithub className="h-6 w-6 text-stone-600 hover:text-black dark:text-white" />
                  </a>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <img
                    className="h-5"
                    src="/myPortfolio/assets/images/layers.svg"
                  ></img>
                  <span className="font-semibold bg-slate-100 px-2 rounded-md">
                    Java
                  </span>
                  <span className="font-semibold bg-slate-100 px-2 rounded-md">
                    Java fxml
                  </span>
                </div>
                <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
                  A Football Management app built with Java and FXML, utilizing
                  advanced features like networking and threading. It manages
                  player databases with powerful search, filter, buy, and sell
                  options, delivering a seamless and interactive user
                  experience.
                </p>
                {/* <div className="flex gap-5 mt-auto ">
                  <a
                    href="#"
                    className="min-w-20 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Details
                  </a>
                  <a
                    href="#"
                    className="min-w-20 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Git Repo
                  </a>
                </div> */}
              </div>
            </div>
            <div className="max-w-sm h-[500px] w-[400p] flex-shrink-0 bg-heroBg border-b-2 border-black hover:scale-105 duration-300 hover:shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a className="h-[250px] flex " href="#">
                <img
                  className="rounded-2xl w-[400px]"
                  src="/myPortfolio/assets/images/labInventory.png"
                  alt=""
                />
              </a>
              <div className="p-5 h-[250px] flex flex-col">
                <div className="flex items-center justify-between">
                  <a href="#">
                    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Lab Inventory Management
                    </h5>
                  </a>
                  <a href="https://github.com/alina9822/Lab-Inventory-Frontend">
                    <GrGithub className="h-6 w-6 text-stone-600 hover:text-black dark:text-white" />
                  </a>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <img
                    className="h-5"
                    src="/myPortfolio/assets/images/layers.svg"
                  ></img>
                  <span className="font-semibold bg-slate-100 px-2 rounded-md">
                    Node.js
                  </span>
                  <span className="font-semibold bg-slate-100 px-2 rounded-md">
                    React
                  </span>
                  <span className="font-semibold bg-slate-100 px-2 rounded-md">
                    PostgreSQL
                  </span>
                </div>
                <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
                  Our final year project automates CSE lab management through a
                  role-based system, streamlining equipment borrowing,
                  clearance, dues tracking, and stock management, enhancing
                  efficiency and reducing manual effort.
                </p>
                {/* <div className="flex gap-5 mt-auto ">
                  <a
                    href="#"
                    className="min-w-20 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Details
                  </a>
                  <a
                    href="#"
                    className="min-w-20 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Git Repo
                  </a>
                </div> */}
              </div>
            </div>
            <div className="max-w-sm h-[500px] w-[400p] flex-shrink-0 bg-heroBg border-b-2 border-black hover:shadow-md hover:scale-105 duration-300 dark:bg-gray-800 dark:border-gray-700">
              <a className="h-[250px] flex " href="#">
                <img
                  className="rounded-2xl w-[400px]"
                  src="/myPortfolio/assets/images/thoughts.png"
                  alt=""
                />
              </a>
              <div className="p-5 h-[250px] flex flex-col">
                <div className="flex items-center justify-between">
                  <a href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Thoughts
                    </h5>
                  </a>
                  <a href="https://github.com/alina9822/Thoughts-Frontend">
                    <GrGithub className="h-6 w-6 text-stone-600 hover:text-black dark:text-white" />
                  </a>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <img
                    className="h-5"
                    src="/myPortfolio/assets/images/layers.svg"
                  ></img>
                  <span className="font-semibold bg-slate-100 px-2 rounded-md">
                    Spring Boot
                  </span>
                  <span className="font-semibold bg-slate-100 px-2 rounded-md">
                    React
                  </span>
                  <span className="font-semibold bg-slate-100 px-2 rounded-md">
                    PostgreSQL
                  </span>
                </div>
                <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
                  I built this website to support individuals in tough times,
                  connecting them with Bengali-speaking therapists and offering
                  a safe space to share struggles. Featuring a LLaMA 3.2
                  chatbot, it’s a work in progress where I’ve gained experience
                  with Spring Boot, React, Ollama, and Socket.
                </p>

                {/* <div className="flex gap-5 mt-auto ">
                  <a
                    href="#"
                    className="min-w-20 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Details
                  </a>
                  <a
                    href="#"
                    className="min-w-20 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Git Repo
                  </a>
                </div> */}
              </div>
            </div>{" "}
            {/* Add more cards here */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
