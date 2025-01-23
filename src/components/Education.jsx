import React from "react";
import EducationList from "../data/Education.json";

const Education = () => {
  return (
    <section
      id="education"
      className="h-screen flex justify-center items-center bg-heroBg "
    >
      <div className="h-full w-full flex justify-end items-center flex-col-reverse md:flex-row-reverse ">
        <div className="mx-7 md:mx-0 md:w-5/6 flex items-center justify-center ">
          <ul className="md:w-5/6 list-none ">
            {EducationList.map((education) => (
              <li>
                <div className="flex flex-row ">
                  <div className="items-center flex flex-col justify-around">
                    <div className="bg-black  rounded-full h-4 w-4 flex "></div>
                    <div className="border-l-[3px] h-full border-black  flex-grow"></div>
                  </div>
                  <div className="flex-auto flex flex-col -mt-2 pb-6 pr-6 ">
                    <div className="ml-4 lg:text-lg mb-1 w-full flex  justify-between ">
                      <span className="font-bold">{education.school}</span>
                      <span className="text-yellow-600">
                        {education.graduation}
                      </span>
                    </div>
                    <div class=" ml-4 text-sm md:text-base font-semibold mb-2 w-full flex justify-between ">
                      <span>{education.degree}</span>
                      <span className="text-yellow-600 font-normal ">
                        {education.grade}
                      </span>
                    </div>
                    {education.highlight.map((highlight) => (
                      <div class="ml-4 mb-2 font-mono flex flex-col">
                        <span className="font-semibold text-yellow-600">
                          {highlight.title}
                        </span>
                        <ul>
                          {highlight.list.map((list) => (
                            <li>{list}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:basis-1/2 flex justify-center items-center  md:shadow-2xl md:h-screen py-10"> 
          <div>
            <img
              src="/myPortfolio/assets/images/graduation-hat.png"
              className="h-32 md:h-60 mx-auto hidden md:block"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-center font-kalam pt-5">
              Education{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
