import React, { ReactNode } from "react";

type props = {
  title?: string;
  image?: ReactNode;
  description?: string;
}

const ServicesCard = ({ image, title, description }: props) => {
  return (
    <div className="h-max px-3 max-[900px]:px-3 py-7 max-[600px]:py-7 border rounded-[7px] shadow-2xl group hover:bg-[#754ef9] flex flex-col items-center gap-4 bg-white">
      <div className="border-[2px] border-[#754ef9] group-hover:border-[#ffffff] rounded-full w-[80px] h-[80px] flex justify-center items-center">
        {image}
      </div>
      <div className="flex flex-col">
        <h2 className="text-[28px] max-[360px]:text-[25px] font-[500] text-center group-hover:text-[#ffffff]">{title}</h2>
        <p className="text-[50px] leading-5 text-center text-[#754ef9] group-hover:text-[#ffffff]">- - -</p>
      </div>
      <p className="text-[14px] max-[360px]:text-[13px] text-center text-[gray] group-hover:text-[#ffffff]">{description}</p>
    </div>
  );
};

export default ServicesCard;