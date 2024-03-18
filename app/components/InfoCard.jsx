"use client"
import React from "react";
import Image from "next/image";
import { customAlert } from "@/app/utils/customAlert";

const InfoCard = ({ title, description, buttonText, imageUrl }) => {
  return (
    <div className="bg-Azul text-white  pl-4 pr-4 rounded-sm flex flex-col md:flex-row w-2/3 md:w-1/2 text-center md:text-start">
      <div className="md:w-2/3 pt-8 pb-8">
        <h3 className="text-2xl font-medium mb-2">{title}</h3>
        <p className="mb-6 text-md text-Gris-claro">{description}</p>
        <div className="mt-auto">
        <button 
        onClick={customAlert}
        className="border border-Gris-claro hover:border-Gris-oscuro hover:text-Gris-oscuro focus:border-Gris-oscuro focus:text-Gris-oscuro focus:outline-none  py-2 px-4 rounded-sm">{buttonText}</button>
        </div>
      </div>
      {imageUrl && (
        <div className="hidden lg:block md:w-1/3 pt-4 md:mt-0 md:ml-4">
          <Image
            src={imageUrl}
            alt="Card Image"
            className="w-full h-full rounded-lg bottom-0"
          />
        </div>
      )}
    </div>
  );
};

export default InfoCard;
