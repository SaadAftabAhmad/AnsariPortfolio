import React from "react";

type props = {
  title?: string;
  description?: string;
}

const ImageCard = ({title, description}: props) => {
  return(
    <div className="relative flex flex-col items-center gap-4 max-[450px]:gap-2 border-[1px] px-4 max-[800px]:px-3 max-[400px]:px-2 py-6 max-[700px]:py-4 max-[450px]:py-3 bg-white h-full">
      <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-5 h-[180px] bg-[#744df9]" />
      <p className="text-[22px] max-[850px]:text-[18px] max-[450px]:text-[16px] font-[700]">{title}</p>
      <p className="text-[15px] max-[850px]:text-[14px] max-[450px]:text-[12px] text-[gray] text-center">{description}</p>
      <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-5 h-[180px] bg-[#744df9]" />
    </div>
  );
};

export default ImageCard;