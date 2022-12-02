import React from "react";

const NavbarItems = () => {
  return (
    <div className="container px-1  flex flex-wrap items-center justify-center">
      <div className="flex justify-center w-full md:w-auto">
        <ul className="flex gap-5 list-none">
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
    </div>
  );
};

export default NavbarItems;
