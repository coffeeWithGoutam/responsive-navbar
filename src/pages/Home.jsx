import React from 'react'
import Hero from '../components/Hero2.jsx'
import Logo from "../components/Logo";
import Card from "../components/Card";
import HomeProfileCard from "../components/HomeProfileCard";
import HomeLogo from "../components/HomeLogo";
import Ui from "../components/Ui";
import app from "../assets/app.svg";
import app1 from "../assets/app1.svg";
import ImageCard from "../components/ImageCard";
import ServicesCard from "../components/ServicesCard";
import { RiH2 } from 'react-icons/ri';

const Home = () => {
  return (
    <>
      <Hero />
      <Logo />
      <div className="bg-[#E9FEFF]">
        <div className="container mx-auto px-4 my-5 py-12">
          <div className="text-center">
            <h1 className="text-[#2F3045] text-[2rem] font-semibold">We are creating App Startups, not just Apps. <br /> You are our Partner not just a Client!</h1>
            <p className="text-base">HASfit App rated 4.8/5 by more than 10 K reviewers while being used by 4 million users.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center mt-10 -mx-4 -mb-5">
            <HomeProfileCard />
            <HomeProfileCard />
            <HomeProfileCard />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center dark:text-white my-5">
          <h2 className="text-[2rem] font-semibold">Recognised by the best</h2>
        </div>
        <HomeLogo />
      </div>
      <Ui />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center dark:text-white">
          <h2 className="text-3xl font-semibold">We are converting Apps ideas into reality,<br /> transforming business into          Digital Powerhouses,<br /> and Scaling Products to millions of users! </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-20 -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-10 mb-5 md:mb-0">
            <div className="h-[10rem] bg-white shadow-lg flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-[#1D7EB9]">1000+</h1>
              <p className="mt-2 text-sm">Apps & Web Apps</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
            <div className="h-[10rem] bg-white shadow-lg flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-[#1D7EB9]">1000+</h1>
              <p className="mt-2 text-sm">Apps & Web Apps</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mt-10 mb-5 md:mb-0">
            <div className="h-[10rem] bg-white shadow-lg flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-[#1D7EB9]">1000+</h1>
              <p className="mt-2 text-sm">Apps & Web Apps</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
            <div className="h-[10rem] bg-white shadow-lg flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-[#1D7EB9]">1000+</h1>
              <p className="mt-2 text-sm">Apps & Web Apps</p>
            </div>
          </div>
        </div>
      </div>
      {/* Image Card */}
      <div className="container mx-auto px-4 ">
        <div className="text-center">
          <h1 className="text-[#2F3045] dark:text-white text-[2rem] font-semibold ">Project We Work for Clients</h1>
        </div>
        <div className="flex flex-wrap justify-center items-center -mx-4 mt-10">
          <div className='w-full md:w-1/2 px-4 mb-5'>
            <ImageCard imageUrl={app} altText="" />
            <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
            <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">
              Fitnesso Health Care App
            </h1>
          </div>
          <div className='w-full md:w-1/2 px-4 mb-5'>
            <ImageCard imageUrl={app1} altText="" />
            <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
            <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">
              Fitnesso Health Care App
            </h1>
          </div>
          <div className='w-full md:w-1/2 px-4 mb-5'>
            <ImageCard imageUrl={app} altText="Description of the image" />
            <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
            <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">
              Fitnesso Health Care App
            </h1>
          </div>
          <div className='w-full md:w-1/2 px-4 mb-5'>
            <ImageCard imageUrl={app1} altText="Description of the image" />
            <p className=" mt-4 ml-2 text-[#325968]">Fitness & Health</p>
            <h1 className="ml-2 text-[#2F3045] text-[1.5rem]">
              Fitnesso Health Care App
            </h1>
          </div>
        </div>
        </div>
        {/* School Card Section */}
        <div className="my-12 bg-[#E9FEFF]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="pt-10 text-[#1D7EB9] font-semibold">SERVICES</p>
              <h1 className="text-2xl font-semibold">What we can do for you?</h1>
            </div>
            <div className="flex flex-wrap -mx-4 -mb-5">
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
            </div>
          </div>
        </div>
        {/* School Card Section end*/}

        {/* Business Card Section */}


        <div className="container mx-auto px-4">
          <div className="text-center my-5">
            <h2 className="text-4xl font-semibold text-center text-[#2F3045] dark:text-white mt-8">Recent Blogs</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center -mx-4">
            <Card />
            <Card />
            <Card />
          </div>
        </div>


        {/* Business Card Section end*/}
      </>



      )
}

      export default Home;