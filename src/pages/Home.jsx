import React from 'react'
import Hero2 from '../components/Hero2'
import Logo from "../components/Logo";
import Card from "../components/Card";
import HomeProfileCard from "../components/HomeProfileCard";
import HomeLogo from "../components/HomeLogo";
import Ui from "../components/Ui";
import app from "../assets/app.svg";
import app1 from "../assets/app1.svg";
import ImageCard from "../components/ImageCard";
import ServicesCard from "../components/ServicesCard";

const Home = () => {
  return (
    <>
      <Hero2 />
      <Logo />
      <div className="h-[18rem] mt-8 mb-[15rem] w-screen bg-[#E9FEFF] text-center">
        <h1 className="text-[#2F3045] text-[2rem] pt-6 font-semibold">
          We are creating App Startups, not just Apps.
          <br />
          You are our Partner not just a Client!
        </h1>
        <p className="text-base">
          HASfit App rated 4.8/5 by more than 10 K reviewers while being used by
          4 million users.
        </p>
        <div className="flex flex-wrap justify-center space-x-6 items-center mt-8">
          <HomeProfileCard />
          <HomeProfileCard />
          <HomeProfileCard />
        </div>
      </div>
      <div className="text-center mt-[20rem]">
        <h1 className="text-[2rem] font-semibold">Recognised by the best</h1>
        <HomeLogo />
      </div>
      <Ui />
      <div className="">
        <h1 className="mt-10 text-center text-2xl font-semibold">
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
      {/* Image Card */}
      <div className="mt-10">
        <h1 className="text-[#2F3045] text-[2rem] font-semibold text-center">
          Project We Work for Clients
        </h1>
        <div className="flex justify-center items-center space-x-8 mt-10">
          <div>
            <ImageCard imageUrl={app} altText="" />
            <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
            <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">
              Fitnesso Health Care App
            </h1>
          </div>
          <div>
            <ImageCard imageUrl={app1} altText="" />
            <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
            <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">
              Fitnesso Health Care App
            </h1>
          </div>
        </div>
        <div className="flex justify-center m-8 space-x-7 items-center">
          <div>
            <ImageCard imageUrl={app} altText="Description of the image" />
            <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
            <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">
              Fitnesso Health Care App
            </h1>
          </div>
          <div>
            <ImageCard imageUrl={app1} altText="Description of the image" />
            <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
            <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">
              Fitnesso Health Care App
            </h1>
          </div>
        </div>
      </div>
      {/* School Card Section */}
      <div className="mt-20 w-screen bg-[#E9FEFF] h-[40rem] justify-center items-center text-center">
        <p className="pt-10 text-[#1D7EB9] font-semibold">SERVICES</p>
        <h1 className="text-2xl font-semibold">What we can do for you?</h1>
        <div className="flex justify-center items-center mt-6 space-x-6">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
        <div className="flex justify-center items-center mt-6 space-x-6">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
      {/* School Card Section end*/}

      {/* Business Card Section */}
      <h1 className="text-2xl font-semibold text-center text-[#2F3045] mt-8">
        Recent Blogs
      </h1>
      <div className="flex p-8 justify-evenly items-center">
        <Card />
        <Card />
        <Card />
      </div>
      {/* Business Card Section end*/}
    </>



  )
}

export default Home;