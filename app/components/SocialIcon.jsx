import Image from "next/image";

const SocialIcon = ({ icon, name }) => {
    return (
        <Image
        className=""
        src={icon}
        alt={name}
        width={20}
        height={20}
      />
    );
  };

export default SocialIcon;