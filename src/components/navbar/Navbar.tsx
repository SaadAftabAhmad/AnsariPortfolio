'use client';

import React, { useState } from "react";

const Navbar = ({ sidebarOpenClick, homeClick, aboutClick, servicesClick, experiencesClick, testimonialClick, skillsClick }: any) => {

  const [active, setActive] = useState("home");

  const handleClick = (section: string, callback: () => void) => {
    setActive(section);
    callback();
  };

  return (
    <>
      <div className="fixed top-5 max-[600px]:top-3 z-[100] w-full px-[200px] max-[1200px]:px-[130px] max-[1050px]:px-[50px] max-[450px]:px-[20px]">
        <div className="flex justify-between items-center w-full bg-[#754ef9] py-6 max-[750px]:py-4 px-8 max-[450px]:px-5 rounded-full max-[450px]:rounded-[30px]">
          <p className="text-[#ffffff] font-[500] text-[14px]">MUHAMMAD RUBNAWAZ</p>
          <ul className="flex gap-7 max-[850px]:gap-3 max-[750px]:hidden">
            <li className={`text-[14px] font-[500] cursor-pointer ${active === "home" ? "text-[#ccffff]" : "text-[#ffffff]"} hover:text-[#ccffff]`} onClick={() => handleClick("home", homeClick)}>
              Home
            </li>
            <li className={`text-[14px] font-[500] cursor-pointer ${active === "about" ? "text-[#ccffff]" : "text-[#ffffff]"} hover:text-[#ccffff]`} onClick={() => handleClick("about", aboutClick)}>
              About
            </li>
            <li className={`text-[14px] font-[500] cursor-pointer ${active === "services" ? "text-[#ccffff]" : "text-[#ffffff]"} hover:text-[#ccffff]`} onClick={() => handleClick("services", servicesClick)}>
              Services
            </li>
            <li className={`text-[14px] font-[500] cursor-pointer ${active === "experiences" ? "text-[#ccffff]" : "text-[#ffffff]"} hover:text-[#ccffff]`} onClick={() => handleClick("experiences", experiencesClick)}>
              Experiences
            </li>
            <li className={`text-[14px] font-[500] cursor-pointer ${active === "testimonial" ? "text-[#ccffff]" : "text-[#ffffff]"} hover:text-[#ccffff]`} onClick={() => handleClick("testimonial", testimonialClick)}>
              Testimonial
            </li>
            <li className={`text-[14px] font-[500] cursor-pointer ${active === "skills" ? "text-[#ccffff]" : "text-[#ffffff]"} hover:text-[#ccffff]`} onClick={() => handleClick("skills", skillsClick)}>
              Skills
            </li>
          </ul>

          <div className="hidden max-[750px]:flex rounded-[5px] hover:bg-[#754ef9] group cursor-pointer" onClick={sidebarOpenClick}>
            <svg
              width="30"
              height="30"
              fill="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" />
            </svg>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;