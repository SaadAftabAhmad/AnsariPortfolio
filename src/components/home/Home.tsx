'use client';

import React from "react";

import Image from "next/image";

import mask from "../../svg/mask.svg";
import ansari from "../../png/Ansari.png";
import Button from "@/components/button/Button";
import blacktriangle from "../../svg/black-triangle.svg";

const Home = ({ portfolioClick, contactClick }: any) => {

  const handleClick = (section: string, callback: () => void) => {
    callback();
  };

  return (
    <div className="flex max-[600px]:flex-col max-[600px]:gap-[30px] h-[calc(100vh-0px)] max-h-[100vh] max-[600px]:h-[95vh]">
      <div className="relative bg-[#101010] max-[600px]:bg-white w-[450px] max-[1200px]:w-[300px] bg-img">
        <Image src={mask} alt="mask" className="w-full max-[1200px]:w-[250px] max-[750px]:w-[210px] max-[450px]:w-[190px] absolute left-[150px] max-[1200px]:left-[100px] max-[1000px]:left-[80px] max-[600px]:left-[30px] top-[100px] max-[1000px]:top-[100px] max-[630px]:top-[90px]" />
        <Image
          src={blacktriangle}
          alt="Black Triangle"
          className="absolute left-[180px] max-[1200px]:left-[130px] max-[1000px]:left-[100px] max-[600px]:left-[45px] top-[150px] max-[1000px]:top-[130px] max-[630px]:top-[120px] w-[300px] max-[1200px]:w-[250px] max-[750px]:w-[210px] max-[450px]:w-[190px] z-0"
        />

        <div className="relative left-[170px] max-[1200px]:left-[130px] max-[1000px]:left-[100px] max-[600px]:left-[45px] max-[450px]:left-[35px] top-[100px] max-[1000px]:top-[80px] max-[630px]:top-[73px] w-[300px] max-[1200px]:w-[250px] max-[750px]:w-[215px] max-[450px]:w-[200px] z-10 overflow-hidden"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 67%, 31% 100%, 0% 100%)",
            WebkitClipPath: "polygon(0% 0%, 100% 0%, 100% 67%, 31% 100%, 0% 100%)",
          }}
        >
          <Image
            src={ansari}
            alt="Ansari Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center max-[600px]:items-end max-[600px]:px-7 max-[400px]:px-4 gap-2 max-[900px]:gap-1 w-full max-[800px]:pt-[15rem] max-[600px]:pt-[65px]">
        <h1 className="text-[40px] max-[900px]:text-[30px] max-[630px]:text-[30px] max-[400px]:text-[26px] font-[700] leading-[45px] max-[900px]:leading-[35px]"><span style={{ fontFamily: "serif" }} className="text-[gray]/80 text-[50px] max-[450px]:text-[40px]">This is</span><br /> Muhammad Rubnawaz</h1>
        <p className="text-[gray]/80 text-center text-[20px] max-[800px]:text-[16px]">a full stack developer</p>
        <div className="flex gap-4 mt-4 max-[850px]:mt-3 max-[600px]:pr-5">
          <Button title="CONTACT" className="border border-[#3c3c3d] bg-white flex justify-center py-2 w-[150px] max-[900px]:w-[130px] max-[400px]:w-[110px] text-[12px] max-[850px]:text-[10px]" onClick={() => handleClick("contact", contactClick)} />
          <Button title="VIEW PORTFOLIO" className="bg-[#754ef9] text-[#ffffff] flex justify-center py-2 w-[150px] max-[900px]:w-[130px] max-[400px]:w-[110px] text-[12px] max-[850px]:text-[10px]" onClick={() => handleClick("portfolio", portfolioClick)} />
        </div>
      </div>
    </div>
  );
};

export default Home;