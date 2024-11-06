import SchoolAppCard from "../components/SchoolAppCard";
import Mobile from "../assets/mobile.svg";
import app from '../assets/app.svg';
import ServicesLogo from "../components/ServicesLogo";
import ParagraphList from "../components/ParagraphList";

const Services = () => {
  return (
    <div className="">
      <div className="text-center mt-5">
        <h1 className="font-bold text-[#1D7EB9] text-base">Home-Services</h1>
        <h1 className="font-semibold text-4xl mb-6">Services</h1>
      </div>
      <div className="flex justify-center mt-24 items-center space-x-16">
        <SchoolAppCard />
        <SchoolAppCard />
        <SchoolAppCard />
      </div>
      <div className="flex justify-center mt-10 items-center space-x-16">
        <SchoolAppCard />
        <SchoolAppCard />
        <SchoolAppCard />
      </div>
      <div className="flex justify-center mt-10 items-center space-x-16">
        <SchoolAppCard />
        <SchoolAppCard />
        <SchoolAppCard />
      </div>
      {/* New Section */}
      <div className="text-center mt-20">
        <h1 className="font-semibold text-4xl mb-6">Services Details</h1>
      </div>
      <div className="flex mt-10 space-x-5 justify-center items-center w-screen">
        <div className="">
          <h1 className="text-[#2F3045] text-[1.5rem]">
            Mobile App Development Company in India
          </h1>
          <p className="mt-5">
            We design and develop web and mobile applications for our clients
            worldwide, focusing on
            <br /> outstanding user experience. We design and develop web and
            mobile applications for We
            <br /> design and develop web and mobile applications for our
            clients worldwide, focusing on
            <br />
            outstanding user experience. We design and develop web and mobile
            applications forWe
            <br /> design and develop web and mobile
          </p>
          <div className="space-x-5">
            <button
              onClick={() => console.log("Button clicked")}
              className="bg-[#1D7EB9] text-white px-4 py-1.5 rounded hover:bg-blue-700 mt-6"
            >
              Talk to Our Expert
            </button>
            <button
              onClick={() => console.log("Button clicked")}
              className="border border-solid border-[#1D7EB9] text-[#1D7EB9] px-4 py-1.5 rounded hover:bg-blue-700 mt-6 hover:text-white"
            >
              Check Our Rate
            </button>
          </div>
        </div>
        <div className="overflow-hidden p-5">
          <img src={Mobile} alt="Logo" className="h-[21rem] rounded" />
        </div>
      </div>
      <div className="mt-6">
      <ServicesLogo/>
      </div>
      <div className="mt-16 pl-5">
        <h1 className="text-[#2F3045] mb-6 font-semibold text-xl">Our App Development Life Circle</h1>
      <ParagraphList/>
      </div>
      <div className="">
        <h1 className="text-[#2F3045] mb-6 pl-5 mt-16 font-semibold text-xl">Some of Our App Development Projects</h1>
        <div className="flex justify-center items-center w-screen">
      <div className="overflow-hidden p-5">
          <img src={app} alt="Logo" className="h-[21rem] rounded" />
        </div>
        <div className="">
        <p className="text-[#325968]">Fitness & Health</p>
      <h1 className="text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
          <p className="mt-5">
            We design and develop web and mobile applications for our clients
            worldwide,<br/> focusing on outstanding user experience. We design and
            develop web and<br/> mobile applications for our clients worldwide,
            focusing on outstanding user<br/> experience. We design and develop web
            and mobile applications for our clients<br/> worldwide, focusing on
            outstanding user experience. We design and develop<br/> web and mobile
            applications for our clients.
          </p>
          <button
            onClick={() => console.log("Button clicked")}
            className="bg-[#1D7EB9] text-white px-4 py-1.5 rounded hover:bg-blue-700 mt-6"
          >
            View Full Case Study
          </button>
        </div>
      </div>
      <div className="flex mt-10 justify-center items-center w-screen">
        <div className="">
        <p className="text-[#325968]">Fitness & Health</p>
      <h1 className="text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
          <p className="mt-5">
            We design and develop web and mobile applications for our clients
            worldwide,<br/> focusing on outstanding user experience. We design and
            develop web and<br/> mobile applications for our clients worldwide,
            focusing on outstanding user<br/> experience. We design and develop web
            and mobile applications for our clients<br/> worldwide, focusing on
            outstanding user experience. We design and develop<br/> web and mobile
            applications for our clients.
          </p>
          <button
            onClick={() => console.log("Button clicked")}
            className="bg-[#1D7EB9] text-white px-4 py-1.5 rounded hover:bg-blue-700 mt-6"
          >
            View Full Case Study
          </button>
        </div>
        <div className="overflow-hidden p-5">
          <img src={app} alt="Logo" className="h-[21rem] rounded" />
        </div>
      </div>
      <div className="flex justify-center items-center w-screen">
      <div className="overflow-hidden p-5">
          <img src={app} alt="Logo" className="h-[21rem] rounded" />
        </div>
        <div className="">
        <p className="text-[#325968]">Fitness & Health</p>
      <h1 className="text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
          <p className="mt-5">
            We design and develop web and mobile applications for our clients
            worldwide,<br/> focusing on outstanding user experience. We design and
            develop web and<br/> mobile applications for our clients worldwide,
            focusing on outstanding user<br/> experience. We design and develop web
            and mobile applications for our clients<br/> worldwide, focusing on
            outstanding user experience. We design and develop<br/> web and mobile
            applications for our clients.
          </p>
          <button
            onClick={() => console.log("Button clicked")}
            className="bg-[#1D7EB9] text-white px-4 py-1.5 rounded hover:bg-blue-700 mt-6"
          >
            View Full Case Study
          </button>
        </div>
      </div>
      <div className="flex mt-10 justify-center items-center w-screen">
        <div className="">
        <p className="text-[#325968]">Fitness & Health</p>
      <h1 className="text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
          <p className="mt-5">
            We design and develop web and mobile applications for our clients
            worldwide,<br/> focusing on outstanding user experience. We design and
            develop web and<br/> mobile applications for our clients worldwide,
            focusing on outstanding user<br/> experience. We design and develop web
            and mobile applications for our clients<br/> worldwide, focusing on
            outstanding user experience. We design and develop<br/> web and mobile
            applications for our clients.
          </p>
          <button
            onClick={() => console.log("Button clicked")}
            className="bg-[#1D7EB9] text-white px-4 py-1.5 rounded hover:bg-blue-700 mt-6"
          >
            View Full Case Study
          </button>
        </div>
        <div className="overflow-hidden p-5">
          <img src={app} alt="Logo" className="h-[21rem] rounded" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Services;
