"use client"

import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

import twoDot from "../../png/two-dot-img.png";
import Button from "@/components/button/Button";
import { Progress } from "@/components/ui/progress";

const Expertise = ({ contactClick }: any) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleClick = (section: string, callback: () => void) => {
    callback();
  };

  return (
    <div className="relative">
      <div ref={sectionRef} className="px-[200px] max-[1200px]:px-[130px] max-[1050px]:px-[50px] max-[450px]:px-[20px] flex flex-col items-center gap-4 max-[450px]:gap-2">
        <p className="font-[500] text-[#8e6ffa] bg-[#f1edff] py-2 px-5 text-center w-[150px] rounded-full">SKILL</p>
        <h2 className="text-[35px] max-[450px]:text-[25px] font-[500] leading-10 max-[360px]:leading-7">My Expertise</h2>
        <div className="grid grid-cols-4 max-[950px]:grid-cols-3 max-[750px]:grid-cols-2 max-[400px]:grid-cols-1 gap-5 max-[550px]:gap-3 my-10 max-[1000px]:my-5 max-[550px]:my-1 w-full">
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[25px] max-[550px]:text-[23px] font-[600]">90%</h2>
            <Progress value={inView ? 90 : 0} />
            <div>
              <p className="text-[16px] max-[550px]:text-[14px] font-[500]">Web Development</p>
              <p className="text-[gray] text-[13px] max-[550px]:text-[12px]">HTML, CSS, JavaScript</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[25px] max-[550px]:text-[23px] font-[600]">89%</h2>
            <Progress value={inView ? 89 : 0} />
            <div>
              <p className="text-[16px] max-[550px]:text-[14px] font-[500]">Web Design</p>
              <p className="text-[gray] text-[13px] max-[550px]:text-[12px]">Figma, Adobe XD</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[25px] max-[550px]:text-[23px] font-[600]">81%</h2>
            <Progress value={inView ? 81 : 0} />
            <div>
              <p className="text-[16px] max-[550px]:text-[14px] font-[500]">Development Tools</p>
              <p className="text-[gray] text-[13px] max-[550px]:text-[12px]">VS Code, Git & GitHub</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[25px] max-[550px]:text-[23px] font-[600]">87%</h2>
            <Progress value={inView ? 87 : 0} />
            <div>
              <p className="text-[16px] max-[550px]:text-[14px] font-[500]">Agile Methodologies</p>
              <p className="text-[gray] text-[13px] max-[550px]:text-[12px]">Scrum, Kanban</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[25px] max-[550px]:text-[23px] font-[600]">76%</h2>
            <Progress value={inView ? 76 : 0} />
            <div>
              <p className="text-[16px] max-[550px]:text-[14px] font-[500]">Problem Solving</p>
              <p className="text-[gray] text-[13px] max-[550px]:text-[12px]">Brainstorming, SWOT Analysis</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[25px] max-[550px]:text-[23px] font-[600]">75%</h2>
            <Progress value={inView ? 75 : 0} />
            <div>
              <p className="text-[16px] max-[550px]:text-[14px] font-[500]">Application Development</p>
              <p className="text-[gray] text-[13px] max-[550px]:text-[12px]">React Native, Android Studio</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[25px] max-[550px]:text-[23px] font-[600]">72%</h2>
            <Progress value={inView ? 72 : 0} />
            <div>
              <p className="text-[16px] max-[550px]:text-[14px] font-[500]">API Integration</p>
              <p className="text-[gray] text-[13px] max-[550px]:text-[12px]">Postman, Axios</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="text-[25px] max-[550px]:text-[23px] font-[600]">75%</h2>
            <Progress value={inView ? 75 : 0} />
            <div>
              <p className="text-[16px] max-[550px]:text-[14px] font-[500]">E-commerce Development</p>
              <p className="text-[gray] text-[13px] max-[550px]:text-[12px]">Shopify, WooCommerce</p>
            </div>
          </div>
        </div>
        <Button title="HIRE ME" className="bg-[#8e6ffa] text-white flex justify-center py-2 w-[100px] text-[12px]" onClick={() => handleClick("contact", contactClick)}/>
      </div>
      <Image src={twoDot} alt="twoDot" className="absolute bottom-0 right-4 max-[450px]:hidden" />
    </div>
  );
};

export default Expertise;