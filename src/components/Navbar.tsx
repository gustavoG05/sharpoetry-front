import React from "react";
import Image from "next/image";
import logo from "../../public/sharpoetryLogo.svg";
import BarberPole from "./BarberPole";
import NavbarItems from "./NavbarItems";


const Navbar = () => {
  return (

    <section className="w-full flex justify-center items-center relative mx-auto ">
      <nav className="md:gap-0 gap-10 relative w-full flex  items-center justify-center px-2 ">
        <div className="md:absolute  md:left-0">
          <BarberPole />
        </div>

        {/** MOBILE HAMBURGER */}
        <button className="">
          <div className="md:hidden  space-y-2">
            <span className="block w-8 h-1 bg-primary"></span>
            <span className="block w-8 h-1 bg-secondary"></span>
            <span className="block w-5 h-1 bg-primary"></span>
          </div>
        </button>
        {/** MOBILE HAMBURGER */}

        <div className="absolute hidden md:block right-0">
          <BarberPole />
        </div>
        <div className="hidden md:block">
          <NavbarItems />
        </div>
      </nav>
    </section>

  );
};

export default Navbar;
