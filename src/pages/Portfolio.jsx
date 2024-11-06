// import ImageCard from "../components/ImageCard";
import app from '../assets/app.svg';
// import app1 from '../assets/app1.svg';

const Portfolio = () => {
  return (
    <div className="">
      <div className="text-center mt-5">
        <h1 className="font-bold text-[#1D7EB9] text-base">Home-Portfolio</h1>
        <h1 className="font-semibold text-4xl mb-6">Portfolio</h1>
      </div>
      {/* <div className="flex justify-center m-8 space-x-7 items-center">
      <div>
      <ImageCard imageUrl={app} altText="Description of the image"/>
      <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
      <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
      </div>
      <div>
      <ImageCard imageUrl={app1} altText="Description of the image"/>
      <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
      <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
      </div>
      </div> */}
      {/* <div className="flex justify-center m-8 space-x-7 items-center">
      <div>
      <ImageCard imageUrl={app} altText="Description of the image"/>
      <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
      <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
      </div>
      <div>
      <ImageCard imageUrl={app1} altText="Description of the image"/>
      <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
      <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
      </div>
      </div> */}
      {/* <div className="flex justify-center m-8 space-x-7 items-center">
      <div>
      <ImageCard imageUrl={app} altText="Description of the image"/>
      <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
      <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
      </div>
      <div>
      <ImageCard imageUrl={app1} altText="Description of the image"/>
      <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
      <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
      </div>
      </div> */}
      {/* <div className="flex justify-center mt-8 space-x-7 items-center">
      <div>
      <ImageCard imageUrl={app} altText="Description of the image"/>
      <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
      <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
      </div>
      <div>
      <ImageCard imageUrl={app1} altText="Description of the image"/>
      <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
      <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">Fitnesso Health Care App</h1>
      </div>
      </div> */}

      {/* New Section added */}
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
      {/* second card */}
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
      <div className="flex mt-10 justify-center items-center w-screen">
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
      {/* second card */}
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
      <div className="flex mt-10 justify-center items-center w-screen">
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
      <div className='flex mt-20 justify-center items-center'>
      <button
            onClick={() => console.log("Button clicked")}
            className="bg-[#1D7EB9] text-white px-4 py-1.5 rounded hover:bg-blue-700 mt-6"
          >
            Load More Work
          </button>
      </div>
    </div>
  )
}

export default Portfolio;