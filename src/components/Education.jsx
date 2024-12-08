import React from 'react'

const Education = () => {
  return (
    <section
      id="education"
      className="h-screen flex justify-center items-center bg-heroBg "
    >
      <div className="h-full  w-full flex justify-end items-center flex-col-reverse lg:flex-row ">
        <div className="md:basis-10/12 flex-1 flex items-center justify-center">
          <ul class="list-none md:ml-24 ml-10">
            <li class="rounded-lg ">
              <div class="flex flex-row">
                <div class="items-center flex flex-col justify-around">
                  <div class="bg-black  rounded-full h-5 w-4 flex "></div>
                  <div class="border-l-[3px] h-full border-black  flex-grow"></div>
                </div>
                <div class="flex flex-col -mt-2 pb-6 pr-6 ">
                  <div class="ml-4 text-lg mb-1 flex gap-10 md:gap-28 justify-between">
                    <span className="font-bold">
                      Bangladesh University of Engineering and Technology
                    </span>
                    <span className="text-yellow-600">Feb 2020-Feb 2025</span>
                  </div>
                  <div class="ml-4 text-md font-semibold mb-2 flex gap-10 md:gap-28 justify-between">
                    <span>B.Sc. in Computer Science and Engineering</span>
                    <span className="text-yellow-600 font-normal text-lg">
                      CGPA: 3.47/4
                    </span>
                  </div>
                  <div class="ml-4 mb-2 font-mono text-gray-700">
                    24 Oct 12:42 - 27 Oct 12:15
                  </div>
                </div>
              </div>
            </li>
            <li class="rounded-lg ">
              <div class="flex flex-row">
                <div class="items-center flex flex-col justify-around">
                  <div class="bg-black  rounded-full h-5 w-4 flex "></div>
                  <div class="border-l-[3px] h-full border-black  flex-grow"></div>
                </div>
                <div class="flex flex-col -mt-2 pb-6 pr-6 ">
                  <div class="ml-4 text-lg mb-1 flex gap-10 md:gap-28 justify-between">
                    <span className="font-bold">
                      Bangladesh University of Engineering and Technology
                    </span>
                    <span className="text-yellow-600">Feb 2020-Feb 2025</span>
                  </div>
                  <div class="ml-4 text-md font-semibold mb-2 flex gap-10 md:gap-28 justify-between">
                    <span>B.Sc. in Computer Science and Engineering</span>
                    <span className="text-yellow-600 font-normal text-lg">
                      CGPA: 3.47/4
                    </span>
                  </div>
                  <div class="ml-4 mb-2 font-mono text-gray-700">
                    24 Oct 12:42 - 27 Oct 12:15
                  </div>
                </div>
              </div>
            </li>
            <li class="rounded-lg ">
              <div class="flex flex-row">
                <div class="items-center flex flex-col justify-around">
                  <div class="bg-black  rounded-full h-5 w-4 flex "></div>
                  <div class="border-l-[3px] h-full border-black  flex-grow"></div>
                </div>
                <div class="flex flex-col -mt-2 pb-6 pr-6 ">
                  <div class="ml-4 text-lg mb-1 flex gap-10 md:gap-28 justify-between">
                    <span className="font-bold">
                      Bangladesh University of Engineering and Technology
                    </span>
                    <span className="text-yellow-600">Feb 2020-Feb 2025</span>
                  </div>
                  <div class="ml-4 text-md font-semibold mb-2 flex gap-10 md:gap-28 justify-between">
                    <span>B.Sc. in Computer Science and Engineering</span>
                    <span className="text-yellow-600 font-normal text-lg">
                      CGPA: 3.47/4
                    </span>
                  </div>
                  <div class="ml-4 mb-2 font-mono text-gray-700">
                    24 Oct 12:42 - 27 Oct 12:15
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:basis-1/2 flex justify-center items-center">
          <div>
            <img
              src="/myPortfolio/assets/images/graduation-hat.png"
              className="h-52 md:h-60 mx-auto"
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