import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="h-screen  flex flex-col justify-center items-center bg-heroBg  "
    >
      <div className="h-full w-full pt-10 my-5 flex flex-row-reverse   justify-between items-center  ">
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
            <div className="max-w-sm h-[500px] w-[400p] flex-shrink-0 bg-heroBg border-2 border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <a className="h-[250px] flex " href="#">
                <img
                  className="rounded-t-lg w-[400px]"
                  src="/myPortfolio/assets/images/eggCatch.png"
                  alt=""
                />
              </a>
              <div className="p-5 h-[250px] flex flex-col">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Project 1
                  </h5>
                </a>
                <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
                  A short description of Project 1.
                </p>
                <div className="flex gap-5 mt-auto ">
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
                </div>
              </div>
            </div>
            <div className="max-w-sm h-[500px] w-[400p] flex-shrink-0 bg-heroBg border-2 border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <a className="h-[250px] flex " href="#">
                <img
                  className="rounded-t-lg w-[400px]"
                  src="/myPortfolio/assets/images/footballManager.png"
                  alt=""
                />
              </a>
              <div className="p-5 h-[250px] flex flex-col">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Project 1
                  </h5>
                </a>
                <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
                  A short description of Project 1.
                </p>
                <div className="flex gap-5 mt-auto ">
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
                </div>
              </div>
            </div>
            <div className="max-w-sm h-[500px] w-[400p] flex-shrink-0 bg-heroBg border-2 border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <a className="h-[250px] flex " href="#">
                <img
                  className="rounded-t-lg w-[400px]"
                  src="/myPortfolio/assets/images/labInventory.png"
                  alt=""
                />
              </a>
              <div className="p-5 h-[250px] flex flex-col">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Project 1
                  </h5>
                </a>
                <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
                  A short description of Project 1.
                </p>
                <div className="flex gap-5 mt-auto ">
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
                </div>
              </div>
            </div>
            <div className="max-w-sm h-[500px] w-[400p] flex-shrink-0 bg-heroBg border-2 border-gray-200 rounded-xl shadow-xl dark:bg-gray-800 dark:border-gray-700">
              <a className="h-[250px] flex " href="#">
                <img
                  className="rounded-t-lg w-[400px]"
                  src="/myPortfolio/assets/images/thoughts.png"
                  alt=""
                />
              </a>
              <div className="p-5 h-[250px] flex flex-col">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Project 1
                  </h5>
                </a>
                <p className="mb-3  font-normal text-gray-700 dark:text-gray-400">
                  A short description of Project 1.
                </p>
                <div className="flex gap-5 mt-auto ">
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
                </div>
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
