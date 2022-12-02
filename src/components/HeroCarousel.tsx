import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";

import sharpoetryLogo from "../assets/sharpoetryLogo.svg";

const HeroCarousel = () => {
  return (
    <div className="">
      <div className="w-full h-auto ">
        <Carousel indicators={false}>
            <Image src={sharpoetryLogo} alt="a" width={150} />
          
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;
