import React from "react";

type props = {
  title?: string;
  heading?: string;
  description?: string;
}

const ExperiencesCard = ({title, heading, description}: props) => {
  return (
    <div className="border shadow-xl rounded-[5px] px-5 max-[450px]:px-4 py-4 flex flex-col gap-3 transation-all duration-500 hover:scale-105 bg-white">
      <p className="bg-[#bfa8ff] text-white text-[15px] max-[850px]:text-[13px] px-4 py-2 rounded-full w-max">{heading}</p>
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256"><path fill="currentColor" d="M134 72v46.29l39.32-19.66a6 6 0 0 1 5.36 10.74l-48 24A6 6 0 0 1 122 128V72a6 6 0 0 1 12 0m-6 146a90 90 0 1 1 90-90a6 6 0 0 0 12 0a102 102 0 1 0-102 102a6 6 0 0 0 0-12m101.8 4.46a6 6 0 0 1-11.6 3.08C215.14 214 204.37 206 192 206s-23.14 8-26.2 19.54A6 6 0 0 1 160 230a6.3 6.3 0 0 1-1.54-.2a6 6 0 0 1-4.26-7.34A38.1 38.1 0 0 1 172.72 199a30 30 0 1 1 38.56 0a38.1 38.1 0 0 1 18.52 23.46M174 176a18 18 0 1 0 18-18a18 18 0 0 0-18 18" /></svg>
        <div>
          <p className="text-[18px] max-[750px]:text-[16px] font-[500]">{title}</p>
          <p className="text-[15px] max-[750px]:text-[13px] text-[gray]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesCard;