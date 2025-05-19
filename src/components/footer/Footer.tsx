import React from "react";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative bg-[#101010]">
      <div className="py-14 max-[450px]:py-8 px-[200px] max-[1200px]:px-[130px] max-[1050px]:px-[50px] max-[450px]:px-[20px] flex flex-col gap-8">
        <div className="grid grid-cols-4 max-[800px]:grid-cols-3 max-[650px]:grid-cols-2 max-[450px]:grid-cols-1 gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[#ffffff] font-[500] text-[20px] max-[20px]:text-[14px] mb-3 max-[800px]:mb-2">RUBNAWAZ</p>
            <p className="text-[#ffffff] text-[18px] max-[1500px]:text-[13px]">Crafting seamless web experiences with clean code and modern technologies.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#ffffff] text-[18px] max-[1500px]:text-[17px] font-[600] mb-4 max-[800px]:mb-2">SENT MAIL</h2>
            <p className="text-[#ffffff] text-[18px] max-[1500px]:text-[13px]">rubnawazansari01@gmail.com</p>
            <p className="text-[#ffffff] text-[18px] max-[1500px]:text-[13px]">rubnawazrafiq66@gmail.com</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#ffffff] text-[18px] max-[1500px]:text-[17px] font-[600] mb-4 max-[800px]:mb-2">MAKE CALL</h2>
            <p className="text-[#ffffff] text-[18px] max-[1500px]:text-[13px]">+92 323 1416830</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[#ffffff] text-[18px] max-[1500px]:text-[17px] font-[600] mb-4 max-[800px]:mb-2">GET IN TOUCH</h2>
            <p className="text-[#ffffff] text-[18px] max-[1500px]:text-[13px]">New City Kasur</p>
          </div>
        </div>
      </div>
      <div className="bg-[#101010] border-t border-[#2a2a2a] py-5 max-[450px]:py-3 px-[200px] max-[1200px]:px-[130px] max-[1050px]:px-[50px] max-[450px]:px-[20px] flex justify-between gap-2 max-[600px]:flex-col-reverse max-[600px]:items-center">
        <p className="text-[#ffffff] font-[600] text-[20px] max-[1500px]:text-[16px] max-[450px]:text-[15px]">© Portfolio by Muhammad Rubnawaz</p>
        <ul className="flex items-center gap-3 max-[500px]:gap-2">
          <li>
            <a href="https://www.linkedin.com/in/muhammad-rubnawaz-a4a152163/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="max-[450px]:w-[26px] max-[450px]:h-[26px]" viewBox="0 0 24 24">
                <path fill="white" fill-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4zM2.57 21.83h4V8.799h-4zM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.57 2.57 0 0 1-1.82.748a2.6 2.6 0 0 1-1.818-.747A2.55 2.55 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.58 2.58 0 0 1 4.571 2c.682 0 1.336.269 1.819.747s.753 1.126.753 1.803" clip-rule="evenodd" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://x.com/150921e983ec425?s=21" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="max-[450px]:w-[26px] max-[450px]:h-[26px]" viewBox="0 0 24 24">
                <path fill="white" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://github.com/RubnaawazAnsari" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="max-[450px]:w-[26px] max-[450px]:h-[26px]" viewBox="0 0 24 24">
                <path fill="white" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/rubnawaz.rafiq.1" target="_blank">
              <svg width="30" height="30" className="max-[450px]:w-[26px] max-[450px]:h-[26px]" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.51528 15.2288H9.34862V9.55509H11.9014L12.1819 6.73592H9.34862V5.31217C9.34862 5.12431 9.42324 4.94415 9.55608 4.81131C9.68892 4.67847 9.86909 4.60384 10.0569 4.60384H12.1819V1.77051H10.0569C9.11764 1.77051 8.2168 2.14365 7.55261 2.80784C6.88842 3.47203 6.51528 4.37287 6.51528 5.31217V6.73592H5.09862L4.81812 9.55509H6.51528V15.2288Z" fill="white" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://wa.me/+923231416830" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="max-[450px]:w-[26px] max-[450px]:h-[26px]" viewBox="0 0 24 24">
                <path fill="white" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <Link href="#" className="h-[50px] w-[50px] flex justify-center items-center bg-[#754ef9] rounded-full absolute top-[-26px] right-12 max-[500px]:right-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
          <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17 14l-5-5l-5 5" />
        </svg>
      </Link>
    </div>
  );
};

export default Footer;