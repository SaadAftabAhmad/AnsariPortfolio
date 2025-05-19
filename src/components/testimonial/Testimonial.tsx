import React from "react";

import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import threeDot from "../../png/three-dot-img.png";
import ImageCard from "@/components/card/ImageCard";
import {
  Carousel,
  CarouselNext,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonial = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="relative">
      <div className="px-[200px] max-[1200px]:px-[130px] max-[1050px]:px-[50px] max-[450px]:px-[15px] flex flex-col items-center gap-4 max-[450px]:gap-2">
        <p className="font-[500] text-[#8e6ffa] bg-[#f1edff] py-2 px-5 text-center w-[150px] rounded-full">PEOPLE SAY</p>
        <h2 className="text-[35px] max-[450px]:text-[25px] font-[500] leading-10 max-[360px]:leading-7">Valuable Testimonial</h2>
        <Carousel
          plugins={[plugin.current]}
          className="w-full mt-6 max-[450px]:mt-3"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="gap-10 mr-[75px] max-[850px]:mr-[35px] max-[450px]:mr-4 ml-5 max-[450px]:ml-0">
            <CarouselItem className="basis-1/2 max-[850px]:basis-full">
              <ImageCard
                title="Isfand Yar Khan"
                description="It was a privilege to work with Rubnawaz during our time at TDC, where I had the opportunity to lead him as both his team lead and manager. Rubnawaz consistently impressed me with his unwavering dedication, sharp attention to detail, and ability to tackle challenges that others might consider impossible. He has my highest recommendation for any role he pursues and would be an invaluable asset to any team."
              />
            </CarouselItem>
            <CarouselItem className="basis-1/2 max-[850px]:basis-full">
              <ImageCard
                title="Arslan Ali"
                description="I had the opportunity to work with Rabnawaz at TDC, where he was my senior. Though he didn’t manage me directly, I was always impressed by his depth of knowledge and willingness to offer guidance. His expertise and approachability made him a great resource. Rabnawaz is a talented professional with a strong technical foundation and a collaborative spirit, making him a great addition to any team."
              />
            </CarouselItem>
            <CarouselItem className="basis-1/2 max-[850px]:basis-full">
              <ImageCard
                title="Muhammad Mubashar Ali"
                description="I had the pleasure of working with Rabnawaz on multiple projects, and their dedication, leadership, and teamwork were exceptional. They consistently delivered results and were always reliable. I highly recommend him for their professionalism and ability to lead and collaborate effectively."
              />
            </CarouselItem>
            <CarouselItem className="basis-1/2 max-[850px]:basis-full">
              <ImageCard
                title="Haffy Ahmad Khayam"
                description="I had the pleasure of collaborating with Rubnawaz on Fiverr, where his professional qualities truly stood out. His depth of knowledge and willingness to provide guidance were impressive, making him a valuable resource throughout our projects. With a strong technical foundation and a collaborative spirit, Rubnawaz is an exceptional talent and a great asset to any team."
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-[-30px] max-[1050px]:left-[-20px] max-[450px]:left-[-10px]" />
          <CarouselNext className="right-[-30px] max-[1050px]:right-[-20px] max-[450px]:right-[-10px]" />
        </Carousel>
      </div>
      <Image src={threeDot} alt="threeDot" className="absolute top-[-10px] left-2 max-[450px]:hidden" />
    </div>
  );
};

export default Testimonial;