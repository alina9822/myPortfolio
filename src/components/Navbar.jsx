import React from "react";

function Navbar() {
  return (
    <div className="bg-white bg-opacity-75 shadow-md px-7 min-h-16 w-full font-semibold flex flex-col text-xs gap-5 lg:text-base md:flex-row justify-between items-center fixed top-0 left-0 ">
      <div className="pt-3 md:pt-0"><a href="#" className="text-gray-700">Top</a></div>
      <div className="flex gap-10 md:gap-14">
        <a
          href="#about"
          className="nav-link text-gray-700 hover:text-stone-400"
        >
          About me
        </a>
        <a
          href="#education"
          className="nav-link text-gray-700 hover:text-stone-400"
        >
          Educaiton
        </a>
        <a
          href="#skills"
          className="nav-link text-gray-700 hover:text-stone-400"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="nav-link text-gray-700 hover:text-stone-400"
        >
          Projects
        </a>
        {/* <a
          href="#contact"
          className="nav-link text-gray-700 hover:text-stone-400"
        >
          Contact
        </a> */}
      </div>
      <div className="pb-3 md:pb-0 flex gap-4">
        <a href="https://github.com/alina9822">
          <img
            className="w-7"
            src="/myPortfolio/assets/images/github-logo.png"
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/alina-zaman-96ba492a6/">
          <img
            className="w-7"
            src="/myPortfolio/assets/images/linkedin.png"
          ></img>
        </a>
        <a href="mailto:zmalina98@gmail.com">
          <img
            className="w-7"
            src="/myPortfolio/assets/images/communication.png"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
