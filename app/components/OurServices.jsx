import React from "react";
import ServiceCard from "./ServiceCard";
import documents from "../../public/documents.svg";
import screens from "../../public/mobile-desktop.svg";
import ruler from "../../public/ruler-pencil.svg";

const OurServices = () => {
  return (
    <div className="text-center mt-20 md:mt-60 md:pl-40 md:pr-40 relative">
      <div className="w-1/2 mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-gray-500 mb-12 font-bold text-sm leading-relaxed">
          We feel very strong about our skills when it comes to planning,
          designing and coding applications. Here is what we love to do!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <ServiceCard
          icon={documents}
          title="Business & Product Concept"
          description="Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit."
        />
        <ServiceCard
          icon={screens}
          title="Web and Mobile Development"
          description="Plan, develop and test high-quality web-applications using AngularJs, NodeJs, JavaScript, TypeScript, HTML5 and SAAS/ CSS3 frameworks and native mobile languages."
        />
        <ServiceCard
          icon={ruler}
          title="UX & UI Design"
          description="Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good  and reliable user experience."
        />
      </div>
      <div
        className="absolute bottom-0 left-0 w-full bg-Azul h-14 "
        style={{ zIndex: -1 }}
      ></div>
    </div>
  );
};

export default OurServices;
