import React from "react";

import Image from "next/image";

import Button from "../button/Button";
import ansari from "../../png/Ansari.png";
import threeDot from "../../png/three-dot-img.png";

const About = () => {
  return (
    <div className="px-[200px] max-[1200px]:px-[130px] max-[1050px]:px-[50px] max-[450px]:px-[20px] grid grid-cols-2 max-[600px]:grid-cols-1 gap-5 max-[700px]:gap-3">
      <div className="flex flex-col gap-8 max-[900px]:gap-4 max-[500px]:gap-3">
        <p className="font-[500] text-[#8e6ffa] bg-[#f1edff] py-2 px-5 text-center w-[130px] rounded-full">ABOUT ME</p>
        <h2 className="text-[35px] max-[775px]:text-[25px] max-[450px]:text-[20px] font-[500] leading-10 max-[775px]:leading-8 max-[360px]:leading-6">Why hire me for your next project?</h2>
        <p className="text-[gray] text-[14px] max-[775px]:text-[12px]">"I'm a Senior Software Engineer with over 5 years of experience in the MERN stack. I focus on solving real business problems, not just writing code."</p>
        <p className="text-[gray] text-[14px] max-[775px]:text-[12px]">"I specialize in JavaScript, TypeScript, React.js, Nest.js, Next.js, Node.js, MySQL, and MongoDB. What sets me apart is my commitment to quality, reliability, and open communication."</p>
        <a href="/Rubnawaz_Ansari_Resume.pdf" download className="w-max">
          <Button title="GET RESUME" className="w-max text-[12px] text-[#ffffff] flex justify-center px-6 py-[10px]" />
        </a>
      </div>
      <div className="relative">
        <div className="border bg-[#101010] h-[30rem] max-[900px]:h-[25rem] max-[700px]:h-[18rem] overflow-hidden">
          <Image src={ansari} alt="ansari" className="w-full object-cover" />
        </div>
        <Image src={threeDot} alt="threeDot" className="absolute top-[120px] max-[750px]:top-[80px] right-[-33px] max-[450px]:hidden" />
      </div>
    </div>
  );
};

export default About;