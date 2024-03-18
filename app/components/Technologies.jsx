import React from 'react';
import TechnologyIcon from './TechnologyIcon';
import html from "../../public/html.svg";
import css from "../../public/css.svg";
import sass from "../../public/sass.svg";
import js from "../../public/js.svg";
import angular from "../../public/angular.svg";
import python from "../../public/python.svg";

const Technologies = () => {
  return (
    <div className="flex justify-center pt-20 pb-20 flex-col md:flex-row bg-Azul items-center md:pl-40 md:pr-40 ">
    <div className="w-full md:w-1/2 flex flex-col justify-center p-4 flex-1 "> 
      <h2 className="text-3xl font-medium text-white mb-6 tracking-wide">We use cutting edge technology</h2>
      <p className="text-Celeste leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat.
      </p>
    </div>
    <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 p-4 justify-center items-center flex-1">
      <TechnologyIcon name="html" icon={html}/>
      <TechnologyIcon name="css" icon={css}/>
      <TechnologyIcon name="sass" icon={sass}/>
      <TechnologyIcon name="js" icon={js}/>
      <TechnologyIcon name="angular" icon={angular}/>
      <TechnologyIcon name="python" icon={python}/>
    </div>
  </div>
  );
}

export default Technologies;