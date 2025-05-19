import React from "react";

import Image from "next/image";

import Button from "../button/Button";
import Input from "@/components/input/Input";
import twoDot from "../../png/two-dot-img.png";

const Contact = () => {
  return (
    <div className="relative">
      <div className="px-[200px] max-[1200px]:px-[130px] max-[1050px]:px-[50px] max-[450px]:px-[20px] flex flex-col items-center gap-4 max-[550px]:gap-2">
        <p className="font-[500] text-[#8e6ffa] bg-[#f1edff] py-2 px-5 text-center w-[150px] rounded-full">CONTACT ME</p>
        <h2 className="text-[35px] max-[450px]:text-[25px] font-[500] leading-10 max-[360px]:leading-7">Send Me a Message</h2>
        <div className="grid grid-cols-2 max-[550px]:grid-cols-1 gap-10 max-[800px]:gap-5 my-10 max-[800px]:my-5 w-full">
          <Input label="Name" type="text" className="h-[55px] w-full" />
          <Input label="Email" type="text" className="h-[55px] w-full" />
          <Input label="Phone#" type="text" className="h-[55px] w-full" />
          <Input label="Budget" type="text" className="h-[55px] w-full" />
          <div className="relative col-span-2 max-[550px]:col-span-1 group border-[2px] rounded-[10px] h-[150px]">
            <textarea
              id="myInput"
              className="peer w-full h-full border-b-2 border-transparent focus:outline-none text-black placeholder-transparent p-3 rounded-[10px] z-10"
            />
            <label
              htmlFor="myInput"
              className="absolute left-2 top-4 text-gray-500 transition-all duration-700 peer-focus:top-[-10px] peer-focus:left-[10px] peer-focus:text-[12px] bg-white px-2 z-10"
            >
              Message
            </label>
          </div>
        </div>
        <Button title="SEND MESSAGE" className="text-[#ffffff] text-[13px] px-7 py-[10px]" />
      </div>
      <Image src={twoDot} alt="twoDot" className="absolute bottom-20 right-5 max-[450px]:hidden" />
    </div>
  );
};

export default Contact;