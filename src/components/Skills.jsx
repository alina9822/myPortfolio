import React from 'react'

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
            <div className="flex flex-col gap-4 border-b-2 border-b-gray-500">
              <span className="font-roboto text-xl">Languages</span>
              <div className="flex flex-wrap gap-4 mb-4">
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/C.svg"
                  ></img>
                  <span>C</span>
                </div>
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/C++.svg"
                  ></img>
                  <span>C++</span>
                </div>
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/java.svg"
                  ></img>
                  <span>Java</span>
                </div>
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/python.svg"
                  ></img>
                  <span>Python</span>
                </div>
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/javascript.svg"
                  ></img>
                  <span>Java Script</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-b-2 border-b-gray-500">
              <span className="font-roboto text-xl ">Technologies</span>
              <div className="flex flex-wrap gap-4 mb-4 text-sm">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/react.svg"
                  ></img>
                  <span>React</span>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/node-js.svg"
                  ></img>
                  <span>Nodejs</span>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/spring.svg"
                  ></img>
                  <span>Spring Boot</span>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/oracle.svg"
                  ></img>
                  <span>Oracle DB</span>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/postgresql.svg"
                  ></img>
                  <span>Postgre SQL</span>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center font-mono">
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/tailwind-css.svg"
                  ></img>
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center font-mono">
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/git.svg"
                  ></img>
                  <span>Git</span>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center font-mono">
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/linux.svg"
                  ></img>
                  <span>Linux</span>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center font-mono">
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/bash.svg"
                  ></img>
                  <span>Bash</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 border-b-2 border-b-gray-500">
              <span className="font-roboto text-xl">Libraries</span>
              <div className="flex flex-wrap gap-4 mb-4">
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/scikit-learn.png"
                  ></img>
                  <span>Scikit Learn</span>
                </div>
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/keras.jpeg"
                  ></img>
                  <span>Keras</span>
                </div>
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/pytorch.svg"
                  ></img>
                  <span>Pytorch</span>
                </div>
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/numpy.svg"
                  ></img>
                  <span>Numpy</span>
                </div>
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/pandas.png"
                  ></img>
                  <span>Pandas</span>
                </div>
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/matplotlib.png"
                  ></img>
                  <span>Matplotlib</span>
                </div>
                <div>
                  <img
                    className="h-12"
                    src="/myPortfolio/assets/images/seaborn.png"
                  ></img>
                  <span>Seaborn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills