import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-row px-20 py-10 items-center justify-center">
      <div className=" font-belda text-3xl w-1/2">
        <div className="container px-4 mx-auto flex">
          <div className="lg:w-full mx-auto  ">
            <div className="flex flex-col ">
              <div className="sm:w-full text-center sm:py-8">
                <div className="w-[24%] aspect-[11/16] mt-3 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600"></div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium font-Nunito title-font mt-4 text-white text-xl">
                    João Pedro Portes
                  </h2>

                  <div className="sm:w-full sm:py-8 sm:border-t border-sky-300 sm:border-l-0 border-t mt-4 pt-4 sm:mt-0 text-center "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="font-josefin font-semibold text-3xl w-1/2">
            <h1>
              Top Class Mens Haircuts, With the Style you desire by a
              consultation that fits your lifestyle.
            </h1>
            <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
            <SocialMediaIcons />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
