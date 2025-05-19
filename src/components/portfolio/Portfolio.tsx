import React from "react";

import chex from "../../png/chex.jpg";
import apex from "../../png/apex.jpg";
import haraz from "../../png/haraz.jpg";
import dentistry99 from "../../png/dentistry99.jpg";
import PortfolioCard from "@/components/card/PortfolioCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Portfolio = () => {
  return (
    <div className="px-[200px] max-[1200px]:px-[130px] max-[1050px]:px-[50px] max-[450px]:px-[20px] flex flex-col items-center gap-4">
      <p className="font-[500] text-[#8e6ffa] bg-[#f1edff] py-2 px-5 text-center w-[150px] rounded-full">PORTFOLIO</p>
      <h2 className="text-[35px] max-[450px]:text-[25px] font-[500] leading-10 max-[360px]:leading-7">My Portfolio</h2>
      {/* <div className="w-full">
        <Tabs defaultValue="all" className="w-full flex flex-col items-center">
          <TabsList className="w-[400px] max-[500px]:w-[300px]">
            <TabsTrigger value="all">ALL</TabsTrigger>
            <TabsTrigger value="ui/ux">UI/UX</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="w-full">
            <div className="grid grid-cols-3 max-[850px]:grid-cols-2 max-[600px]:grid-cols-1 gap-4 w-full mt-7 max-[600px]:mt-2">
              <PortfolioCard
                image={haraz}
                title="Project"
                href="https://www.harazdentalgroup.com"
                className="h-[450px] max-[1650px]:h-[300px]"
                discription="My Role was to development of both front-end and back-end systems and ensuring seamless integration. Managed project timelines and collaborated with cross-functional teams to deliver optimized system architecture."
              />
              <PortfolioCard
                title="Project"
                image={dentistry99}
                href="https://www.dentistry99.com"
                className="h-[450px] max-[1650px]:h-[300px]"
                discription="As Tech Lead, I am responsible for overseeing the development and maintenance of the both front-end and back-end of Dentistry99 platform."
              />
              <PortfolioCard
                image={apex}
                title="Project"
                href="https://www.apexe3.com"
                className="h-[450px] max-[1650px]:h-[300px]"
                discription="My Role was to implementation of pixel-perfect design as the front-end lead and development of back-end APIs."
              />
              <PortfolioCard
                image={chex}
                title="Project"
                href="https://www.chex.ai"
                className="h-[450px] max-[1650px]:h-[300px]"
                discription="I’m a full-stack developer with hands-on experience in TypeScript, React, Nest.js, Postgres, and Redis. I build scalable, efficient solutions tailored to each project’s needs. Driven by curiosity and a commitment to growth, I continuously sharpen my skills to deliver high-impact results."
              />
            </div>
          </TabsContent>
          <TabsContent value="ui/ux" className="w-full">
            <div className="grid grid-cols-3 max-[850px]:grid-cols-2 max-[600px]:grid-cols-1 gap-4 w-full mt-7 max-[600px]:mt-2">
              <PortfolioCard
                image={haraz}
                title="Project"
                href="https://www.harazdentalgroup.com"
                className="h-[450px] max-[1650px]:h-[300px]"
                discription="My Role was to development of both front-end and back-end systems and ensuring seamless integration. Managed project timelines and collaborated with cross-functional teams to deliver optimized system architecture."
              />
            </div>
          </TabsContent>
          <TabsContent value="web" className="w-full">
            <div className="grid grid-cols-3 max-[850px]:grid-cols-2 max-[600px]:grid-cols-1 gap-4 w-full mt-7 max-[600px]:mt-2">
              <PortfolioCard
                image={haraz}
                title="Project"
                href="https://www.harazdentalgroup.com"
                className="h-[450px] max-[1650px]:h-[300px]"
                discription="My Role was to development of both front-end and back-end systems and ensuring seamless integration. Managed project timelines and collaborated with cross-functional teams to deliver optimized system architecture."
              />
              <PortfolioCard
                title="Project"
                image={dentistry99}
                href="https://www.dentistry99.com"
                className="h-[450px] max-[1650px]:h-[300px]"
                discription="As Tech Lead, I am responsible for overseeing the development and maintenance of the both front-end and back-end of Dentistry99 platform."
              />
            </div>
          </TabsContent>
          <TabsContent value="design" className="w-full">
            <div className="grid grid-cols-3 max-[850px]:grid-cols-2 max-[600px]:grid-cols-1 gap-4 w-full mt-7 max-[600px]:mt-2">
              <PortfolioCard
                image={haraz}
                title="Project"
                href="https://www.harazdentalgroup.com"
                className="h-[450px] max-[1650px]:h-[300px]"
                discription="My Role was to development of both front-end and back-end systems and ensuring seamless integration. Managed project timelines and collaborated with cross-functional teams to deliver optimized system architecture."
              />
            </div>
          </TabsContent>
        </Tabs>
      </div> */}

      <div className="grid grid-cols-3 max-[850px]:grid-cols-2 max-[600px]:grid-cols-1 gap-4 w-full mt-7 max-[600px]:mt-2">
        <PortfolioCard
          image={haraz}
          title="Project"
          href="https://www.harazdentalgroup.com"
          className="h-[450px] max-[1650px]:h-[300px]"
          discription="My Role was to development of both front-end and back-end systems and ensuring seamless integration. Managed project timelines and collaborated with cross-functional teams to deliver optimized system architecture."
        />
        <PortfolioCard
          title="Project"
          image={dentistry99}
          href="https://www.dentistry99.com"
          className="h-[450px] max-[1650px]:h-[300px]"
          discription="As Tech Lead, I am responsible for overseeing the development and maintenance of the both front-end and back-end of Dentistry99 platform."
        />
        <PortfolioCard
          image={apex}
          title="Project"
          href="https://www.apexe3.com"
          className="h-[450px] max-[1650px]:h-[300px]"
          discription="My Role was to implementation of pixel-perfect design as the front-end lead and development of back-end APIs."
        />
        <PortfolioCard
          image={chex}
          title="Project"
          href="https://www.chex.ai"
          className="h-[450px] max-[1650px]:h-[300px]"
          discription="I’m a full-stack developer with hands-on experience in TypeScript, React, Nest.js, Postgres, and Redis. I build scalable, efficient solutions tailored to each project’s needs. Driven by curiosity and a commitment to growth, I continuously sharpen my skills to deliver high-impact results."
        />
      </div>
    </div>
  );
};

export default Portfolio;