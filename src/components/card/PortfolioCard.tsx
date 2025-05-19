import React from "react";

import Image, { StaticImageData } from "next/image";

type props = {
  href?: string;
  title?: string;
  className?: string;
  discription?: string;
  image: StaticImageData;
}

const PortfolioCard = ({ href, title, className, image, discription }: props) => {
  return (
    <div className={`${className} relative group overflow-hidden shadow-xl`}>
      <div className="absolute top-0 left-0 w-full h-0 group-hover:h-full bg-[#754ef9]/80 flex flex-col items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 z-10">
        <p className="text-[25px] font-[500]">{title}</p>
        <p className="text-center text-[14px] px-4 max-[450px]:px-3">{discription}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-2 right-2 flex items-center gap-1"
        >
          <p className="text-[10px]">FULL VIEW</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048">
            <path fill="#ffffff" d="M640 640V256h128v512H256V640zm-384 768v-128h512v512H640v-384zm1024 384v-512h512v128h-384v384zm128-1152h384v128h-512V256h128z" />
          </svg>
        </a>
      </div>
      <Image src={image} alt="portfolio" className="w-full h-full object-cover" />
    </div>
  );
};

export default PortfolioCard;