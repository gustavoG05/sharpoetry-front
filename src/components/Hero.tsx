import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import Image from "next/image";
import sharpoetryLogo from "../assets/sharpoetryLogo.svg";
import HeroCarousel from "./HeroCarousel";

const handleBotao = () => {
  return console.log("CLICASTE NO BOTAO");
};

const Hero = () => {
  return (
    <div className="flex flex-col py-4 items-center justify-start  w-full">
      <div className="px-20 mx-auto flex items-center gap-10 font-belda text-3xl w-full">
        <div className=" w-2/3 mx-auto">
          <div className="flex flex-col ">
            <div className="sm:w-full text-center sm:py-8">
              <div className="h-full w-11/12 aspect-[4/3] mt-3 rounded-3xl inline-flex items-center justify-center bg-gray-800 text-gray-600">
              <HeroCarousel/>
              </div>
              
            </div>
          </div>
        </div>

        <div className="font-josefin flex flex-col  items-start font-semibold text-3xl w-1/3">
          <div className="p-10 w-full flex items-center justify-center">
            <Image src={sharpoetryLogo} alt="a" width={150} />
          </div>
          <h1>
            Top Class Mens Haircuts, With the Style you desire by a consultation
            that fits your lifestyle.
          </h1>
          <div className="w-12 h-1 bg-primary rounded mt-2 mb-1"></div>
          <div className="w-12 h-1 bg-secondary rounded mb-4"></div>
          <div className="flex gap-10 w-full">
            <a className="drop-shadow-[-7px_12px_3px_rgba(170,29,78,0.35)] active:drop-shadow-none transition-all duration-500">
              <button
                className="bg-primary p-4  rounded-br-3xl hover:bg-secondary transition-all duration-700 hover:ease-out hover:border-primary border-solid border-4 border-transparent font-zilla active:translate-y-3 active:drop-shadow-[0_5px_0px_rgba(170,29,78,1)] drop-shadow-[0_12px_0px_rgba(138,23,63,1)] hover:drop-shadow-[0_12px_0px_rgba(170,29,78,1)] "
                onClick={handleBotao}
              >
                BOOK NOW
              </button>
            </a>
            <div className=" items-center flex">
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center px-20">
        <div className="w-2/3 flex flex-col items-center text-center justify-start black">
          <div className="border-b-[6px] border-solid border-secondary rounded-2xl pb-[2px]">
            <h2 className=" font-zilla font-bold title-font mt-4 leading-snug tracking-wider  rounded-2xl text-black text-5xl border-b-[6px] border-solid border-primary mb-1">
              SHARPOETRY
            </h2>
          </div>
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
  );
};

export default Hero;
