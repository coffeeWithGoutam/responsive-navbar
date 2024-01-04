import { useState } from "react";
import { RiGraduationCapFill } from "react-icons/ri";

const SchoolAppCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="text-center w-[18rem] h-[18rem] hover:bg-[#1D7EB9] hover:text-white cursor-pointer bg-white shadow-md flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <RiGraduationCapFill color={isHovered ? "white" : "#1D7EB9"} size="40px" />
      <p className="mt-2 text-xl font-semibold">School App</p>
      <p className="text-sm mt-3">
        We design and develop web and mobile applications for our clients worldwide, focusing on outstanding user experience. We design and develop web and mobile applications for
      </p>
    </div>
  );
};

export default SchoolAppCard;
