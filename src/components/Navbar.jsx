import React from "react";

function Navbar() {
  return (
    <div className="bg-white bg-opacity-70 px-10 min-h-16 w-full font-semibold flex flex-col text-xs gap-5 lg:text-base md:flex-row justify-between items-center fixed top-0 left-0 ">
      <div className="pt-3 md:pt-0">mode</div>
      <div className="flex gap-10 md:gap-14">
        <a href="#about" className="nav-link text-gray-700 hover:text-stone-400">
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
        <a
          href="#contact"
          className="nav-link text-gray-700 hover:text-stone-400"
        >
          Contact
        </a>
      </div>
      <div className="pb-3 md:pb-0">profiles</div>
    </div>
  );
}

export default Navbar;
