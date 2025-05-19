import React from "react";

type props = {
  type: string;
  label: string;
  className?: string;
}

const LabelInput = ({label, type, className}: props) => {
  return (
    <div className={`${className} relative w-full group border-[2px] rounded-[10px]`}>
      <input
        type={type}
        id="myInput"
        className="peer w-full h-full border-b-2 border-transparent focus:outline-none text-black placeholder-transparent h-[45px] px-3 rounded-[10px] z-10"
      />
      <label
        htmlFor="myInput"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 transition-all duration-1000 peer-focus:top-[-2px] peer-focus:left-[10px] peer-focus:text-[13px] bg-white px-2 z-10"
      >
        {label}
      </label>
    </div>
  );
};

export default LabelInput;