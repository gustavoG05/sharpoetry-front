import React from "react";
import Image from "next/image";
import logo from "../../public/sharpoetryLogo.svg";

const Navbar = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-wrap place-items-center ">
        <section className="relative mx-auto w-full">
          <nav className="relative flex flex-wrap items-center justify-between px-2 ">
            <div className="container px-1 mx-auto flex flex-wrap items-center justify-between">
              {/** MOBILE HAMBURGER */}
              <button className="absolute">
                <div className="md:hidden space-y-2">
                  <span className="block w-8 h-1 bg-gray-600"></span>
                  <span className="block w-8 h-1 bg-gray-600"></span>
                  <span className="block w-8 h-1 bg-gray-600"></span>
                </div>
              </button>
              {/** MOBILE HAMBURGER */}
              
              <div className="hidden w-full md:block md:w-auto">
                <ul className="flex gap-5  md:flex-row  list-none ml-auto">
                  <li>
                    <a
                      className="hover:border-secondary border-solid border-2 rounded px-2 text-2xl font-zilla font-medium flex items-center uppercase  text-white "
                      href="#hero"
                    >
                      Discover
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:border-primary border-solid border-2 rounded px-2 text-2xl font-zilla font-medium flex items-center uppercase  text-white "
                      href="#about"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:border-secondary border-solid border-2 rounded px-2 text-2xl font-zilla font-medium flex items-center uppercase  text-white "
                      href="#services"
                    >
                      Setting
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:border-primary border-solid border-2 rounded px-2 text-2xl font-zilla font-medium flex items-center uppercase  text-white "
                      href="#map"
                    >
                      Map
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-wrap">
                <a className="" href="">
                  <Image src={logo} alt="logo" className="w-24 h-20"></Image>
                </a>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
