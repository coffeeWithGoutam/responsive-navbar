import { RiGraduationCapFill } from "react-icons/ri";

const ServicesCard = () => {
  return (
    <div className="w-full md:w-1/3  text-center px-4 mb-5">
      <div className="h-[14rem]  flex flex-col items-center justify-center bg-white shadow-sm ">
        <RiGraduationCapFill color="#1D7EB9" size="40px" />
        <p className="mt-2 text-sm">School App</p>
      </div>
    </div>
  );
};

export default ServicesCard;