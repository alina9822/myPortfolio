import React from "react";



function Hero() {
  return (
    <section className="h-screen">
      <div className="h-full md:mt-0 w-full  ">
        <div className="flex flex-col border items-center lg:flex-row-reverse bg-heroBg ">
          <img
            className="w-[250px] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:h-screen xl:w-fit shadow-3xl"
            src="/myPortfolio/assets/images/profile.jpg"
          ></img>

          <div className="h-full flex items-center basis-1/2 text-center lg:text-left px-7 md:pl-14 md:pr-20  ">
            <div className="flex flex-col gap-y-3 md:gap-y-5">
              <div className="font-mono mb-2 text-sm md:text-md">
                &nbsp;&nbsp; Welcome to my portfolio website!
              </div>
              <div className="text-5xl lg:text-6xl font-bold  font-kalam">
                Hello I'm <br></br> <span className="">Alina Zaman</span>
              </div>
              <div className="text-sm md:text-md font-mono">
                It was fun building this portfolio from scratch using React and
                Tailwind CSS. I hope this website provides you with an overview
                of my qualifications, skills, and the projects I completed
                during my undergrad.
              </div>
              <div className="md:mt-3 ml-1">
                <a
                  href="/myPortfolio/Resume.pdf" // Path to the file in the public folder
                  download="Resume_of_Alina_Zaman.pdf" // Suggested filename when downloaded
                  className="px-6 py-3  bg-stone-200 text-stone-500 font-semibold rounded-3xl shadow-xl hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-75"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
