import React from "react";
import Image from "next/image";
import tnw from "../../public/tnw.svg";
import google from "../../public/google.svg";
import nike from "../../public/nike.svg";
import airbnb from "../../public/airbnb.svg";
import itNews from "../../public/it-news2.svg";
import InfoCard from "./InfoCard";
import bcndImage from "../../public/bcndImage.png";

    const Clients = () => {
    return (
        <div className="pl-4 pr-4 md:pl-40 md:pr-40 relative bg-white">
        <div className="pt-20  text-center pb-12 ">
        <h2 className="text-sm font-semibold text-Gris-claro mb-4">
            CLIENTS WE WORKED WITH
        </h2>
        <div className="flex flex-col items-center md:items-center lg:flex-row align-center w-full justify-between">
            <Image className="" src={tnw} alt="tnw" width={100} height={100} />
            <Image className="" src={google} alt="google" width={100} height={100} />
            <Image className="" src={nike} alt="nike" width={100} height={100} />
            <Image className="" src={airbnb} alt="airbnb" width={140} height={140} />
            <Image className="mt-6 md:mt-0" src={itNews} alt="airbnb" width={200} height={200} />
        </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row w-full  gap-8 z-10 relative">
            <InfoCard 
            title="Get in touch with us"
            description="Maecenas sed diam eget risus varius blandit sit amet non magna."
            buttonText="Hire us"
            buttonLink="/"
            imageUrl=""
            />
            <InfoCard 
            title="Our Projects"
            description="Maecenas sed diam eget risus varius blandit sit amet non magna."
            buttonText="See Projects"
            buttonLink="/"
            imageUrl={bcndImage}
            />
            </div>
            <div
            className="absolute bottom-0 left-0 w-full bg-Gris-oscuro h-14 text-red"
            style={{ zIndex: 1 }}
        ></div>
        
        </div>
    );
    };

export default Clients;
