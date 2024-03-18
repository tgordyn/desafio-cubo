import Image from "next/image";

const TechnologyIcon = ({ name, icon }) => {
    return (
      <div className="flex justify-center items-center w-full h-full">
      <Image
      className=""
      src={icon}
      alt={name}
      width={60}
      height={60}
    />
    </div>
    );
  };

  export default TechnologyIcon;