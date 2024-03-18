import LearnBtn from "./LearnBtn";
import Image from "next/image";


const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="max-w-xs bg-white rounded-sm overflow-hidden shadow-lg pt-10 pb-10 pl-8 pr-8 text-center flex flex-col">
      <div className="h-1/3">
        <div className="flex justify-center">
          <div className="bg-Azul rounded-full h-16 w-16 flex items-center justify-center">
            <Image src={icon} alt="service icon" width={24} height={24} />
          </div>
        </div>
        <h3 className="text-md font-medium mb-2 mt-2">{title}</h3>
      </div>
      <p className="text-Gris-claro text-sm mb-6 leading-loose">
        {description}
      </p>
      <div className="mt-auto">
        <LearnBtn />
      </div>
    </div>
  );
};

export default ServiceCard;
