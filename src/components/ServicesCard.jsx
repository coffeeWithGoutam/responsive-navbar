import { RiGraduationCapFill } from "react-icons/ri";

const ServicesCard = () => {
  return (
    <div className="text-center w-[16rem] h-[14rem] bg-white shadow-sm flex flex-col items-center justify-center">
      <RiGraduationCapFill color="#1D7EB9" size="40px" />
      <p className="mt-2 text-sm">School App</p>
    </div>
  );
};

export default ServicesCard;