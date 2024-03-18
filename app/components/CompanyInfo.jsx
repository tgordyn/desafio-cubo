"use client"
import React from "react";
import LearnBtn from "./LearnBtn";
import { customAlert } from "@/app/utils/customAlert";

const CompanyInfo = () => {
  return (
    <div className="w-full pl-4 pr-4 text-center md:text-left mt-8 md:w-3/5 md:mt-60 mx-auto md:ml-0 md:pl-40 md:pr-40">
      <h2 className="text-2xl md:text-4xl font-medium mb-4 text-white leading-relaxed">
        We build beautiful and reliable web solutions
      </h2>
      <p className="mb-10 text-md text-Gris-claro leading-relaxed">
        We strongly believe that communication, trust and transparency are
        essential elements of successful business relationship. Ready for the
        journey?
      </p>
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <LearnBtn />
        <button
        onClick={customAlert}
        className="mt-2 md:mt-0 bg-Azul text-white px-6 py-2 rounded-sm hover:bg-blue-600 flex items-center font-medium">
          <span className="mr-2">Our Projects</span>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default CompanyInfo;
