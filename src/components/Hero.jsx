import React from "react";
import TypingText from "./TypingText";


function Hero() {
  return (
    <section className="h-screen">
      <div className="h-full md:mt-0 w-full  ">
        <div className="flex flex-col items-center lg:flex-row-reverse bg-heroBg ">
          <img
            className="mt-14 md:mt-0 w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-fit xl:h-screen"
            src="/myPortfolio/assets/images/profile2.jpg"
          ></img>

          <div className="h-full flex items-center basis-1/2 text-center lg:text-left px-7 md:pl-14 md:pr-20  ">
            <div className="flex flex-col gap-y-3 md:gap-y-5">
              <div className="font-mono mb-2 text-sm md:text-base">
                &nbsp;&nbsp; Welcome to my portfolio website!
              </div>
              <div className="text-5xl lg:text-6xl font-bold  font-kalam">
                Hello I'm <br></br>
                
                <TypingText
                  text="Alina Zaman"
                  speed={100}
                  eraseSpeed={50}
                  delay={1500}
                />
              </div>
              <div className="font-mono text-gray-500 text-sm lg:text-base">
                It was fun building this portfolio from scratch using React and
                Tailwind CSS. I hope this website provides you with an overview
                of my qualifications, skills, and the projects I worked on
                during my undergrad.
              </div>
              <div className="mt-2 md:mt-3">
                <a
                  href="/myPortfolio/Resume.pdf" // Path to the file in the public folder
                  download="Resume_of_Alina_Zaman.pdf" // Suggested filename when downloaded
                  className="px-4 lg:px-6 py-2 md:py-3 text-sm lg:text-base  bg-stone-200 text-stone-500 font-semibold rounded-3xl shadow-xl hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-opacity-75"
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
