import React, { useState } from "react";

const Sidebar = ({ isOpen, onClose, homeClick, aboutClick, servicesClick, experiencesClick, testimonialClick, skillsClick }: any) => {

  const [active, setActive] = useState("home");

  const handleClick = (section: string, callback: () => void) => {
    setActive(section);
    callback();
  };

  return (
    <>
      <div className={`fixed top-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-700 ease-in w-[250px] h-full bg-white z-[1000]`}>
        <div className="flex justify-between items-center bg-[gray]/10 p-4">
          <p className="text-[20px] font-[500]">Portfolio</p>
          <button onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 256 256">
              <path fill="#9b9a9c" d="M224.319 17.102c6.28 5.496 7.018 14.97 1.745 21.367l-.3.352l-77.707 88.791l77.707 88.791c5.599 6.397 4.951 16.121-1.445 21.72c-6.28 5.496-15.769 4.972-21.41-1.103l-.31-.343l-74.996-85.694l-74.995 85.694c-5.599 6.396-15.323 7.044-21.72 1.445c-6.28-5.496-7.018-14.97-1.745-21.366l.3-.353l77.706-88.79L29.443 38.82c-5.599-6.397-4.951-16.121 1.446-21.72c6.28-5.496 15.768-4.972 21.41 1.103l.309.344l74.995 85.692L202.6 18.548c5.598-6.397 15.322-7.045 21.719-1.446" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-1">
          <li onClick={() => handleClick("home", homeClick)} className={`text-[18px] font-[500] cursor-pointer py-3 px-4 ${active === "home" ? "bg-[#754ef9] text-[#ffffff]" : "text-[#a1a0a2] hover:bg-[#754ef9] hover:text-[#ffffff]"} flex items-center gap-2 group`}>
            <svg xmlns="http://www.w3.org/2000/svg" stroke="#a1a0a2" className={`${active === "home" ? "stroke-[#ffffff]" : "stroke-[#a1a0a2] group-hover:stroke-[#ffffff]"}`} width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z" /><path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21" /></g></svg>
            <div>Home</div>
          </li>
          <li onClick={() => handleClick("about", aboutClick)} className={`text-[18px] font-[500] cursor-pointer py-3 px-4 ${active === "about" ? "bg-[#754ef9] text-[#ffffff]" : "text-[#a1a0a2] hover:bg-[#754ef9] hover:text-[#ffffff]"} flex items-center gap-2 group`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#a1a0a2" className={`${active === "about" ? "fill-[#ffffff]" : "fill-[#a1a0a2] group-hover:fill-[#ffffff]"}`} width="30" height="30" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M256 42.667C138.18 42.667 42.667 138.179 42.667 256c0 117.82 95.513 213.334 213.333 213.334c117.822 0 213.334-95.513 213.334-213.334S373.822 42.667 256 42.667m0 384c-94.105 0-170.666-76.561-170.666-170.667S161.894 85.334 256 85.334c94.107 0 170.667 76.56 170.667 170.666S350.107 426.667 256 426.667m26.714-256c0 15.468-11.262 26.667-26.497 26.667c-15.851 0-26.837-11.2-26.837-26.963c0-15.15 11.283-26.37 26.837-26.37c15.235 0 26.497 11.22 26.497 26.666m-48 64h42.666v128h-42.666z" /></svg>
            <div>About</div>
          </li>
          <li onClick={() => handleClick("services", servicesClick)} className={`text-[18px] font-[500] cursor-pointer py-3 px-4 ${active === "services" ? "bg-[#754ef9] text-[#ffffff]" : "text-[#a1a0a2] hover:bg-[#754ef9] hover:text-[#ffffff]"} flex items-center gap-2 group`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#a1a0a2" className={`${active === "services" ? "fill-[#ffffff]" : "fill-[#a1a0a2] group-hover:fill-[#ffffff]"}`} width="30" height="30" viewBox="0 0 32 32"><path d="m22.505 11.637l-5.989-3.5a1 1 0 0 0-1.008-.001l-6.011 3.5A1 1 0 0 0 9 12.5v7a1 1 0 0 0 .497.864l6.011 3.5A.96.96 0 0 0 16 24c.174 0 .36-.045.516-.137l5.989-3.5A1 1 0 0 0 23 19.5v-7a1 1 0 0 0-.495-.863m-6.494-1.48l4.007 2.343l-4.007 2.342l-4.023-2.342zM11 14.24l4 2.33v4.685l-4-2.33zm6 7.025v-4.683l4-2.338v4.683z" /><path d="M16 1a1 1 0 0 0-.504.136l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l11-6.417l-1.008-1.727L16 28.842L5 22.426V9.575l11-6.417l11 6.416V17h2V9a1 1 0 0 0-.496-.864l-12-7A1 1 0 0 0 16 1" /></svg>
            <div>Services</div>
          </li>
          <li onClick={() => handleClick("experiences", experiencesClick)} className={`text-[18px] font-[500] cursor-pointer py-3 px-4 ${active === "experiences" ? "bg-[#754ef9] text-[#ffffff]" : "text-[#a1a0a2] hover:bg-[#754ef9] hover:text-[#ffffff]"} flex items-center gap-2 group`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#a1a0a2" className={`${active === "experiences" ? "fill-[#ffffff]" : "fill-[#a1a0a2] group-hover:fill-[#ffffff]"}`} width="30" height="30" viewBox="0 0 2048 2048"><path d="M1185 1179q-88-75-195-115t-222-40q-88 0-170 23t-153 64t-129 100t-100 130t-65 153t-23 170H0q0-120 35-231t101-205t156-167t204-115q-113-74-176-186t-64-248q0-106 40-199t109-163T568 40T768 0t199 40t163 109t110 163t40 200q0 66-16 129t-48 119t-75 103t-101 83q65 25 124 61t111 81zM384 512q0 80 30 149t82 122t122 83t150 30q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30q-80 0-149 30t-122 82t-83 123t-30 149m1344 256q66 0 124 25t101 69t69 102t26 124t-25 124t-69 102t-102 69t-124 25q-23 0-45-3l-587 587q-27 27-62 41t-74 15q-40 0-75-15t-61-41t-41-61t-15-75q0-38 14-73t42-63l587-587q-3-22-3-45q0-66 25-124t68-101t102-69t125-26m0 512q40 0 75-15t61-41t41-61t15-75q0-41-19-82l-146 146h-91v-91l146-146q-41-19-82-19q-40 0-75 15t-61 41t-41 61t-15 75q0 41 19 82l-640 641q-19 19-19 45t19 45t45 19t45-19l641-640q41 19 82 19" /></svg>
            <div>Experiences</div>
          </li>
          <li onClick={() => handleClick("testimonial", testimonialClick)} className={`text-[18px] font-[500] cursor-pointer py-3 px-4 ${active === "testimonial" ? "bg-[#754ef9] text-[#ffffff]" : "text-[#a1a0a2] hover:bg-[#754ef9] hover:text-[#ffffff]"} flex items-center gap-2 group`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#a1a0a2" className={`${active === "testimonial" ? "fill-[#ffffff]" : "fill-[#a1a0a2] group-hover:fill-[#ffffff]"}`} width="30" height="30" viewBox="0 0 32 32"><path d="M29 26a2.97 2.97 0 0 0-1.855.66L25 25.423v-1.606a3 3 0 1 0-2 0v1.606l-2.145 1.239A2.97 2.97 0 0 0 19 26a3.02 3.02 0 1 0 2.925 2.353L24 27.155l2.075 1.198A2.998 2.998 0 1 0 29 26m-10 4a1 1 0 1 1 1-1a1 1 0 0 1-1 1m5-10a1 1 0 1 1-1 1a1 1 0 0 1 1-1m5 10a1 1 0 1 1 1-1a1 1 0 0 1-1 1" /><circle cx="7" cy="20" r="2" /><path d="M14 20a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2" /><circle cx="21" cy="12" r="2" /><path d="M13.02 28.272L3 22.426V9.574l11-6.416l11.496 6.706l1.008-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7A1 1 0 0 0 1 9v14a1 1 0 0 0 .496.864L12.013 30Z" /></svg>
            <div>Testimonial</div>
          </li>
          <li onClick={() => handleClick("skills", skillsClick)} className={`text-[18px] font-[500] cursor-pointer py-3 px-4 ${active === "skills" ? "bg-[#754ef9] text-[#ffffff]" : "text-[#a1a0a2] hover:bg-[#754ef9] hover:text-[#ffffff]"} flex items-center gap-2 group`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#a1a0a2" className={`${active === "skills" ? "fill-[#ffffff]" : "fill-[#a1a0a2] group-hover:fill-[#ffffff]"}`} width="30" height="30" viewBox="0 0 100 100"><path fill="none" d="M32.092 55.916h14.575c1.087 0 2.563 2.496 4.734 4.039v-1.776s-.07-1.053.348-1.69c.424-.639 1.308-.809 1.584-.809h14.575s4.401-.74 9.294-3.044l-53.794.514c4.642 2.082 8.684 2.766 8.684 2.766" /><path d="M16.868 55.111a25 25 0 0 1-1.061-.855c.247.396.609.703 1.061.855m2.67-39.55h60.708v35.516c2.128-1.18 3.271-1.984 4.054-2.499v-35.05a2.03 2.03 0 0 0-2.03-2.028H17.508c-1.123 0-2.033.91-2.033 2.028v35.14c.771.486 1.878 1.301 4.063 2.52z" /><path d="M87.791 47.978c-.523-.417-1.247-.415-2.396 0c-.335.122-.674.325-1.095.6c-.783.515-1.925 1.319-4.054 2.499c-.657.36-1.373.748-2.241 1.183c-.272.136-.534.247-.803.377c-4.893 2.304-9.294 3.044-9.294 3.044H53.333c-.276 0-1.16.17-1.584.809c-.418.638-.348 1.69-.348 1.69v1.776c.526.373 1.082.707 1.695.918c4.394 1.498 7.367.192 8.664-1.628c1.517-2.134 2.289-3.329 3.955-2.705s0 4.68-2.08 6.763c-2.085 2.084-4.584 3.749-8.12 3.749c-1.486 0-2.926-.223-4.114-.476v15.131c0 4.27 4.538 6.552 7.658 6.552s9.367-1.768 12.387-9.263c3.017-7.493-.205-17.381-.205-17.381s4.888-2.191 9.991-5.414c5.098-3.225 6.455-6.246 6.559-6.67c.1-.427.516-1.136 0-1.554" /><path d="M63.635 63.303c2.08-2.083 3.746-6.139 2.08-6.763s-2.438.571-3.955 2.705c-1.297 1.82-4.27 3.126-8.664 1.628c-.613-.211-1.169-.545-1.695-.918c-2.17-1.543-3.647-4.039-4.734-4.039H32.092s-4.043-.684-8.684-2.766c-.466-.21-.935-.418-1.411-.657a59 59 0 0 1-2.459-1.306c-2.185-1.219-3.292-2.033-4.063-2.52c-.321-.203-.593-.355-.871-.455c-1.144-.416-1.873-.416-2.394 0c-.518.418-.104 1.128 0 1.553c.08.325.913 2.184 3.596 4.49a26 26 0 0 0 2.963 2.181c5.098 3.227 9.991 5.412 9.991 5.412s-3.227 9.886-.205 17.381c3.018 7.494 9.263 9.27 12.385 9.27c3.123 0 7.661-2.297 7.661-6.564V65.804s1.152.42 2.799.771c1.188.253 2.628.476 4.114.476c3.537.001 6.036-1.664 8.121-3.748m-2.618-28.922a9.06 9.06 0 0 0-9.058 9.057c0 4.999 4.055 9.056 9.058 9.056c4.998 0 9.052-4.057 9.052-9.056c0-5-4.054-9.057-9.052-9.057" /><path d="M39.544 34.381c-5 0-9.053 4.057-9.053 9.057c0 4.999 4.052 9.056 9.053 9.056c5.003 0 9.058-4.057 9.058-9.056c0-5-4.055-9.057-9.058-9.057" /></svg>
            <div>Skills</div>
          </li>
        </ul>
      </div>
      {isOpen &&
        <div onClick={onClose} className="fixed top-0 left-0 w-full h-full bg-black/60 z-[999]" />
      }
    </>
  );
};

export default Sidebar;