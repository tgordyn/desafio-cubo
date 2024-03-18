"use client"
import React from "react";
import { customAlert } from "@/app/utils/customAlert";

const LearnBtn = () => {
  return (
    <button
      onClick={customAlert}
      className="border border-Gris hover:border-Azul hover:text-Azul focus:border-Azul focus:text-Azul text-Gris py-2 px-5 rounded-sm outline-none transition duration-300 ease-in-out font-medium"
    >
      Learn More
    </button>
  );
};

export default LearnBtn;
