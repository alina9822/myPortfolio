import React from "react";

const About = () => {
  const [show, setShow] = React.useState(false);
  return (
    <section
      id="about"
      className="h-screen flex justify-center items-center bg-gradient-to-br from-[#4E5745] to-[#6C7461]"
    >
      <div className="h-full pt-10 w-full flex flex-col items-center text-justify">
        <div className="md:mb-12">
          <img
            src="/myPortfolio/assets/images/eating.png"
            className="h-40 mx-auto"
            alt="Alina Zaman"
          />
          <h1 className="text-4xl font-bold text-center text-heroBg font-kalam mt-5">
            About Me
          </h1>
        </div>
        <div className="w-5/6">
          <p className="text-heroBg t">
            Hi, I’m Alina Zaman—a final-year undergraduate student at BUET with
            a passion for technology, innovation, and lifelong learning. I enjoy
            turning ideas into impactful projects through creative solutions and
            hands-on development. <br></br>
            <br></br>
            My academic journey has been a mix of challenges and growth. While
            some subjects were tough early on, my final two years were
            transformative. I developed a strong interest in areas like software
            engineering, computer architecture, microprocessors, networking,
            bioinformatics, security, graph theory, algorithms, and machine
            learning. This shift not only reignited my enthusiasm but also
            reflected positively in my results—a rewarding academic comeback.
            <br></br>
            <br></br> In project teams, I’ve always aimed to give my best.
            Though perfection wasn’t always possible, I consistently ranked
            among the top 70% of my teammates, demonstrating reliability and
            dedication to collaborative success. I’m proficient in C++, Java,
            JavaScript, and Python, with experience developing several solo and
            group projects using these languages. My technical foundation has
            been strengthened through hands-on coding and collaborative
            development.<br></br>
            <br></br> Beyond academics, I’ve embraced the vibrant cultural life
            at BUET. I’ve actively participated in numerous performances and
            flash mobs, adding energy and color to my university experience.
            These moments have allowed me to connect with others, express
            creativity, and make lasting memories alongside my academic journey.
            <br></br> Explore my portfolio to learn more about me!
            <span className="duration-300"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              🍞 &nbsp;
            </span>
            <span className={`${!show && "hidden"} font-kalam `}>
              I loooooove eating bread.🤗
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
