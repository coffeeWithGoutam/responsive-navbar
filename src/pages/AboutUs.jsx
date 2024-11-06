import Hero from "../assets/hero.svg";
import Logo from "../components/Logo";
import HomeLogo from "../components/HomeLogo";
import Ui from "../components/Ui";

const About = () => {
  return (
    <div className="">
      <div className="text-center mt-5">
        <h1 className="font-bold text-[#1D7EB9] text-base">Home-About Us</h1>
        <h1 className="font-semibold text-4xl mb-6">About Us</h1>
      </div>
      <div className="flex justify-evenly items-center h-50v w-screen">
        <div className="">
          <h1 className="font-bold text-4xl">
            <span className="text-[#1D7EB9] text-xl">Work with a Leading</span>
            <br />
            Mobile App Company
          </h1>
          <p className="mt-6">
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
            className="bg-[#1D7EB9] text-white px-4 py-1.5 rounded hover:bg-blue-700 mt-9"
          >
            Talk to Our Expert
          </button>
        </div>
        <div className="overflow-hidden p-5">
          <img src={Hero} alt="Logo" className="h-72 rounded" />
        </div>
      </div>
      <div className="flex justify-center mt-20 flex-col items-center">
        <h1 className="text-[#2F3045] text-4xl font-semibold mb-8">Our Clients</h1>
        <Logo/>
      </div>
      <div className="text-center mt-[6rem]">
        <h1 className="text-[2rem] font-semibold">Recognised by the best</h1>
        <HomeLogo />
      </div>
      <div className="flex mt-20 justify-center items-center h-50v w-screen">
        <div className="">
          <h1 className="font-bold text-4xl">
          Our Mission
          </h1>
          <p className="mt-6">
            We design and develop web and mobile applications for our clients
            worldwide,<br/> focusing on outstanding user experience. We design and
            develop web and<br/> mobile applications for our clients worldwide,
            focusing on outstanding user<br/> experience. We design and develop web
            and mobile applications for our clients<br/> worldwide, focusing on
            outstanding user experience. We design and develop<br/> web and mobile
            applications for our clients.
          </p>
        </div>
        <div className="overflow-hidden p-5">
          <img src={Hero} alt="Logo" className="h-72 rounded" />
        </div>
      </div>
      <Ui />
      <div className="flex mt-20 justify-center items-center h-50v w-screen">
      <div className="overflow-hidden p-5">
          <img src={Hero} alt="Logo" className="h-72 rounded" />
        </div>
        <div className="">
          <h1 className="font-bold text-4xl">
          Our Vision
          </h1>
          <p className="mt-6">
            We design and develop web and mobile applications for our clients
            worldwide,<br/> focusing on outstanding user experience. We design and
            develop web and<br/> mobile applications for our clients worldwide,
            focusing on outstanding user<br/> experience. We design and develop web
            and mobile applications for our clients<br/> worldwide, focusing on
            outstanding user experience. We design and develop<br/> web and mobile
            applications for our clients.
          </p>
        </div>
      </div>
      <div className="">
        <h1 className="mt-10 text-center text-4xl font-semibold">
          We are converting Apps ideas into reality,<br/> transforming business into
          Digital Powerhouses,<br/> and Scaling Products to millions of users!
        </h1>
        <div className="flex justify-center items-center mt-20 space-x-8">
        <div className="text-center w-[16rem] h-[10rem] bg-white shadow-lg flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-[#1D7EB9]">1000+</h1>
      <p className="mt-2 text-sm">Apps & Web Apps</p>
    </div>
    <div className="text-center w-[16rem] h-[10rem] bg-white shadow-lg flex flex-col mt-[-3rem] items-center justify-center">
      <h1 className="text-2xl font-bold text-[#1D7EB9]">1000+</h1>
      <p className="mt-2 text-sm">Apps & Web Apps</p>
    </div>
    <div className="text-center w-[16rem] h-[10rem] bg-white shadow-lg flex flex-col mt-[3rem] items-center justify-center">
      <h1 className="text-2xl font-bold text-[#1D7EB9]">1000+</h1>
      <p className="mt-2 text-sm">Apps & Web Apps</p>
    </div>
    <div className="text-center w-[16rem] h-[10rem] bg-white shadow-lg flex flex-col mt-[-3rem] items-center justify-center">
      <h1 className="text-2xl font-bold text-[#1D7EB9]">1000+</h1>
      <p className="mt-2 text-sm">Apps & Web Apps</p>
    </div>
        </div>
      </div>
    </div>
  );
};

export default About;
