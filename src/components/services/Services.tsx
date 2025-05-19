import React from "react";

import Image from "next/image";

import threeDot from "../../png/three-dot-img.png";
import ServicesCard from "@/components/card/ServicesCard";

const Services = () => {
  return (
    <div className="px-[200px] max-[1200px]:px-[130px] max-[1050px]:px-[50px] max-[450px]:px-[20px] flex flex-col items-center gap-4 max-[450px]:gap-2">
      <p className="font-[500] text-[#8e6ffa] bg-[#f1edff] py-2 px-5 text-center w-[150px] rounded-full">MY SERVICES</p>
      <h2 className="text-[35px] max-[450px]:text-[25px] font-[500] leading-10 max-[360px]:leading-7">My Provided Features</h2>
      <div className="relative grid grid-cols-3 max-[850px]:grid-cols-2 max-[600px]:grid-cols-1 gap-5 mt-10 max-[650px]:mt-4">
        <ServicesCard
          title="Front End"
          description="HTML, CSS, Tailwind CSS, Bootstrap, React.js, Next.js"
          image={
            <svg xmlns="http://www.w3.org/2000/svg" stroke="#754ef9" className="group-hover:stroke-[#ffffff]" width="45" height="45" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" color="currentColor"><path d="M11.003 2h-.997c-3.282 0-4.922 0-6.086.814a4.5 4.5 0 0 0-1.106 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081c.302.43.676.804 1.106 1.105C5.084 18 6.724 18 10.006 18h4.003c3.282 0 4.923 0 6.086-.814c.43-.3.805-.675 1.106-1.105c.615-.877.765-1.987.799-3.081" /><path d="M18 9.714V11m0-1.286a3.36 3.36 0 0 1-2.774-1.43M18 9.713a3.36 3.36 0 0 0 2.774-1.43M18 3.285c1.157 0 2.176.568 2.774 1.43M18 3.287a3.36 3.36 0 0 0-2.774 1.43M18 3.287V2m4 1.929l-1.226.788M14 9.07l1.226-.788M14 3.93l1.226.788M22 9.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566M11 15h2m-1 3v4m-4 0h8" /></g></svg>
          }
        />
        <ServicesCard
          title="Full Stack"
          description="React.js, Next.js, Nest.js, JavaScript, TypeScript, C++, GitHub, GitLab, Bitbucket, AWS, Cognito, Vercel, Nginx, Redis, Redux, Netlify, HTML, CSS"
          image={
            <svg xmlns="http://www.w3.org/2000/svg" fill="#754ef9" className="group-hover:fill-[#ffffff]" width="45" height="45" viewBox="0 0 20 20"><g stroke-width="0.2" color="currentColor"><path d="M4.704 2.71a.5.5 0 0 0-.731-.626l-.002.001l-.003.002l-.009.006l-.03.02l-.102.075a6 6 0 0 0-.33.269c-.252.22-.577.547-.808.937a4.7 4.7 0 0 0-.482 1.032C2.087 4.785 2 5.174 2 5.5c0 .853.316 1.58.809 2.026l-.064.074c-.28.344-.443.79-.545 1.23c-.2.87-.2 1.916-.2 2.645v.025c0 2.787.379 4.368.796 5.272c.21.455.433.745.626.927c.097.092.185.155.258.198a1 1 0 0 0 .133.067S3.926 18 4 18s.187-.036.187-.036a1 1 0 0 0 .133-.067a1.5 1.5 0 0 0 .258-.198c.193-.183.416-.472.626-.927c.417-.904.796-2.485.796-5.272v-.025c0-.73 0-1.775-.2-2.645c-.102-.44-.265-.886-.545-1.23l-.064-.074C5.684 7.08 6 6.353 6 5.5c0-.697-.141-1.176-.396-1.559a2.8 2.8 0 0 0-.39-.453l-.17-.16c-.061-.057-.117-.109-.19-.182c-.15-.15-.167-.27-.167-.333a.3.3 0 0 1 .017-.103M5 5.5c0 1.07-.614 1.499-.998 1.5H4c-.385 0-1-.428-1-1.5c0-.173.052-.447.156-.757a3.7 3.7 0 0 1 .389-.833c.087-.147.2-.29.322-.421q.102.184.28.365c.073.073.168.161.249.237l.124.116c.105.102.186.191.251.29c.12.179.229.45.229 1.003M3.175 9.055c.086-.374.204-.65.345-.823A.57.57 0 0 1 3.998 8H4c.21 0 .354.078.48.232c.141.173.26.449.345.823c.173.748.175 1.688.175 2.445c0 2.713-.371 4.132-.704 4.853c-.11.237-.213.395-.296.5a2.4 2.4 0 0 1-.296-.5C3.371 15.632 3 14.213 3 11.5c0-.757.002-1.697.175-2.445M9 13c-.715 0-1.396-.15-2.01-.42q.02-.534.02-1.11A4 4 0 0 0 9 12v-2a2 2 0 0 1 2-2h2a4 4 0 0 0-6.082-3.416a3.3 3.3 0 0 0-.338-.96A5 5 0 0 1 14 8h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm4.9-4a5.01 5.01 0 0 1-3.9 3.9V15a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-1.026 0H11a1 1 0 0 0-1 1v1.874A4.01 4.01 0 0 0 12.874 9" /></g></svg>
          }
        />
        <ServicesCard
          title="Back End"
          description="Nest.js, Node.js, Express.js, MongoDB, AWS, PostgreSQL, MySQL"
          image={
            <svg xmlns="http://www.w3.org/2000/svg" stroke="#754ef9" className="group-hover:stroke-[#ffffff]" width="45" height="45" viewBox="0 0 24 24"><g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M6.818 22v-2.857C6.662 17.592 5.633 16.416 4.682 15m9.772 7v-1.714c4.91 0 4.364-5.714 4.364-5.714s2.182 0 2.182-2.286l-2.182-3.428c0-4.572-3.709-6.816-7.636-6.857c-2.2-.023-3.957.53-5.27 1.499"/><path d="m13 7l2 2.5l-2 2.5M5 7L3 9.5L5 12m5-6l-2 7"/></g></svg>
          }
        />
        <Image src={threeDot} alt="threedot" className="absolute top-16 left-[-40px] max-[450px]:hidden" />
      </div>
    </div>
  );
};

export default Services;