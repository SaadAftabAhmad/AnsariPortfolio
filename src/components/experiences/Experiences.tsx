import React from "react";

import ExperiencesCard from "@/components/card/ExperiencesCard";

const Experiences = () => {
  return(
    <div className="px-[200px] max-[1200px]:px-[130px] max-[1050px]:px-[50px] max-[450px]:px-[20px] flex flex-col items-center gap-4 max-[450px]:gap-2">
      <p className="font-[500] text-[#8e6ffa] bg-[#f1edff] py-2 px-5 text-center w-[150px] rounded-full">EXPERIENCES</p>
      <h2 className="text-[35px] max-[450px]:text-[25px] font-[500] leading-10 max-[360px]:leading-7">My Experiences</h2>
      <div className="mt-5 max-[450px]:mt-2 grid grid-cols-2 max-[600px]:grid-cols-1 gap-5 w-full">
        <ExperiencesCard heading="Jan 2024 - Present" title="HarazCo Ltd." description="Technical Lead-Full Stack Engineer"/>
        <ExperiencesCard heading="May 2021 - Jan 2024" title="The Dev Corporate" description="Senior Software Engineer"/>
        <ExperiencesCard heading="Nov 2020 - May 2021" title="Qwerty Experts" description="Software Engineer"/>
        <ExperiencesCard heading="Apr 2019 - Sep 2020" title="The Dev Corporate" description="Junior Software Engineer"/>
      </div>
    </div>
  );
};

export default Experiences;