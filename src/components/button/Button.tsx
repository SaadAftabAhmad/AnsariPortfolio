import React, { useState } from "react";

type props = {
  title?: string;
  className?: string;
  showImage?: boolean;
  onClick?: () => void;
  image?: React.ReactNode;
}

const Button = ({title, className, showImage = false, onClick, image}: props) => {

  const [show, setShow] = useState(showImage);

  return(
    <div onClick={onClick} className={`${className} font-[500] cursor-pointer bg-[#754ef9] rounded-full flex gap-1`}>
      <button>{title}</button>
      {showImage && image}
    </div>
  );
};

export default Button;