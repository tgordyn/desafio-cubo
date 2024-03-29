import React from "react";
import Image from "next/image";
import rectangle from "../../public/rectangle.svg";

const Navbar = () => {
    return (
      <nav className="flex flex-col md:flex-row items-center justify-between pt-4 pb-4 md:pl-40 md:pr-40">
        <div className="flex items-center justify-center md:justify-start">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-white">compleet Labs</h1>
        </div>
        <div className="md:flex flex-col md:flex-row items-center justify-center md:justify-end mt-4 md:mt-0">
          <ul className="md:flex md:space-x-8">
            <li>
              <a href="/" className="hover:text-Gris text-white font-medium focus:outline-none focus:text-Azul text-sm md:text-base">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-Gris text-Gris-claro focus:outline-none focus:text-Azul text-sm md:text-base">
                Services
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-Gris text-Gris-claro focus:outline-none focus:text-Azul text-sm md:text-base">
                Technology
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-Gris text-Gris-claro focus:outline-none focus:text-Azul text-sm md:text-base">
                Case studies
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-Gris text-Gris-claro focus:outline-none focus:text-Azul text-sm md:text-base">
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-Gris text-white font-medium flex items-center focus:outline-none focus:text-Azul text-sm md:text-base"
              >
                <span className="mr-2">
                  <Image
                    className=""
                    src={rectangle}
                    alt="Hire us"
                    width={20}
                    height={20}
                  />
                </span>
                Hire us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;