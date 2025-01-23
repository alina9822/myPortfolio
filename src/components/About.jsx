import React from "react";
import about from "../data/About.json";

const About = () => {
  const [show, setShow] = React.useState(false);
  return (
    <section
      id="about"
      className="h-screen flex justify-center items-center bg-gradient-to-br from-[#4E5745] to-[#6C7461]"
    >
      <div className="h-full pt-10 w-full flex flex-col items-center text-justify">
        <div className="md:mb-8">
          <img
            src="/myPortfolio/assets/images/eating.png"
            className="w-36 mx-auto hidden md:block"
            alt="Alina Zaman"
          />
          <h1 className="text-3xl font-bold text-center text-heroBg font-kalam mt-5">
            About Me
          </h1>
        </div>
        <div className="mx-8 md:mx-20 xl:mx-48">
          <p className="text-heroBg lg:text-base  text-sm ">
            {about.map((about) => (
              <>
                {about}
                <br></br>
                <br></br>
              </>
            ))}
            Explore my portfolio to learn more about me!
            <span
              className="duration-300"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              🍞 &nbsp;
            </span>
            <span className={`${!show && "hidden"} font-kalam `}>
              PS: I loooooove bread.🤗
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
