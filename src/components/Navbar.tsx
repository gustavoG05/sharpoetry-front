import React from "react";


const Navbar = () => {
  return (
    <div className="flex justify-between w-full items-center ">
      <div className="flex gap-10 font-zilla font-bold items-center w-1/3">
        <h1 className="text-white  text-3xl">HOME</h1>
        <h1 className="text-white  text-3xl">MAP</h1>
        <h1 className="text-white  text-3xl">SHOWROOM</h1>
      </div>
      
      <div className="bg-background py-4 px-6 rounded-xl
      bg-opacity-20 backdrop-blur-xs flex gap-10 items-center">
        
      <div className="border-b-[6px] border-solid border-secondary rounded-2xl pb-[2px]">
        <h2 className=" font-zilla font-bold title-font mt-4 leading-snug tracking-wider  rounded-2xl text-black text-5xl border-b-[6px] border-solid border-primary mb-1">
          SHARPOETRY
        </h2>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
