import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-8 mt-12 pl-4 pr-4 md:pl-40 md:pr-40">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h3 className="text-regular mb-8 font-medium">compleet labs</h3>
          <p className="mb-4 text-Gris-claro text-sm leading-relaxed w-full md:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ullamcorper nulla.
          </p>
          <div className="flex items-center space-x-4">
            <i className="bi bi-twitter social-icon"></i>
            <i className="bi bi-dribbble social-icon"></i>
            <i className="bi bi-facebook social-icon"></i>
            <i className="bi bi-instagram social-icon"></i>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-wrap">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xs font-medium">SITEMAP</h4>
            <ul className="mt-2 text-Gris-claro text-sm leading-8">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Technology</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xs font-medium">CASE STUDIES</h4>
            <ul className="mt-2 text-Gris-claro text-sm leading-8">
              <li>
                <a href="#">Swiss Airlines</a>
              </li>
              <li>
                <a href="#">Google</a>
              </li>
              <li>
                <a href="#">Apple</a>
              </li>
              <li>
                <a href="#">Nike</a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h4 className="text-xs font-medium">CONTACT</h4>
            <ul className="mt-2 text-Gris-claro text-sm leading-8">
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Hire Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="text-md mt-10 text-Gris-claro text-center">
      <span>Tomas Gordyn - </span>
      <a href="https://www.linkedin.com/in/tomasgordyn/"><i className="bi bi-linkedin mr-2"></i></a>
      <a href="https://github.com/tgordyn"><i className="bi bi-github"></i></a>
    </div>
  </footer>
  );
};

export default Footer;
