import React from 'react'

const Education = () => {
  return (
    <section
      id="education"
      className="h-screen flex justify-center items-center bg-heroBg "
    >
      <div className="h-full w-full flex justify-end items-center flex-col-reverse lg:flex-row-reverse ">
        <div className="w-5/6 flex items-center justify-center ">
          <ul className="w-5/6 list-none ">
            <li>
              <div className="flex flex-row ">
                <div className="items-center flex flex-col justify-around">
                  <div className="bg-black  rounded-full h-4 w-4 flex "></div>
                  <div className="border-l-[3px] h-full border-black  flex-grow"></div>
                </div>
                <div className="flex-auto flex flex-col -mt-2 pb-6 pr-6 ">
                  <div className="ml-4 text-lg mb-1 w-full flex  justify-between ">
                    <span className="font-bold">
                      Bangladesh University of Engineering and Technology
                    </span>
                    <span className="text-yellow-600">2020 - 2025</span>
                  </div>
                  <div class=" ml-4 text-md font-semibold mb-2 w-full flex justify-between ">
                    <span>B.Sc. in Computer Science and Engineering</span>
                    <span className="text-yellow-600 font-normal text-lg">
                      CGPA: 3.47/4.00
                    </span>
                  </div>
                  <div class="ml-4 mb-2 font-mono flex flex-col">
                    <span className="font-semibold text-yellow-600">
                      Notable Couces
                    </span>
                    <ul>
                      <li>CSE 307 - Software Engineering</li>
                      <li>CSE 321 - Computer Networks</li>
                      <li>CSE 405 - Computer Security</li>
                      <li>CSE 463 - Introduction to Bioinformatics</li>
                      <li>cse 421 - Graph Theory</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <div className="items-center flex flex-col justify-around">
                  <div className="bg-black  rounded-full h-4 w-4 flex "></div>
                  <div className="border-l-[3px] h-full border-black  flex-grow"></div>
                </div>
                <div className="flex-auto flex flex-col -mt-2 pb-6 pr-6 ">
                  <div className="ml-4 text-lg mb-1 w-full flex  justify-between">
                    <span className="font-bold">
                      SHAHEED BIR UTTAM LT ANWAR GIRLS’ COLLEGE
                    </span>
                    <span className="text-yellow-600">2019</span>
                  </div>
                  <div class="ml-4 text-md font-semibold mb-2 w-full flex  justify-between">
                    <span>Higher Secondary Certificate (HSC)</span>
                    <span className="text-yellow-600 font-normal text-lg">
                      GPA : 5.00/5.00
                    </span>
                  </div>
                  <div class="ml-4 mb-2 font-mono flex flex-col">
                    <span className="font-semibold text-yellow-600">
                      {/* Notable Couces */}
                    </span>
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-row">
                <div className="items-center flex flex-col justify-around">
                  <div className="bg-black  rounded-full h-4 w-4 flex "></div>
                  <div className="border-l-[3px] h-full border-black  flex-grow"></div>
                </div>
                <div className="flex-auto flex flex-col -mt-2 pb-6 pr-6 ">
                  <div className="ml-4 text-lg mb-1 w-full flex justify-between">
                    <span className="font-bold">
                      Agargaon Taltola Govt. Colony High School and College
                    </span>
                    <span className="text-yellow-600">2017</span>
                  </div>
                  <div class="ml-4 text-md font-semibold mb-2 w-full flex justify-between">
                    <span>Secondary School Certificate (SSC)</span>
                    <span className="text-yellow-600 font-normal text-lg">
                      GPA : 5.00/.500
                    </span>
                  </div>
                  <div class="ml-4 mb-2 font-mono flex flex-col">
                    <span className="font-semibold text-yellow-600">
                      {/* Notable Couces */}
                    </span>
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:basis-1/2  flex justify-center items-center   shadow-2xl h-screen ">
          <div>
            <img
              src="/myPortfolio/assets/images/graduation-hat.png"
              className="h-32 md:h-60 mx-auto "
            />
            <h1 className="text-4xl font-bold text-center font-kalam ">
              Education{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education