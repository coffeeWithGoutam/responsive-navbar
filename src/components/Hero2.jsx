import React from 'react';
import List from "../components/List";
import HeroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className='bg-[#2f3045]'>
      <div className="container mx-auto px-4 py-5 ">
        <div className='flex flex-wrap justify-evenly items-center'>
          <div>
            <h1 className="text-white font-bold text-4xl">
              Best App Development Company
              <br />
              for Startups & Brands
            </h1>
            <List />
            <button
              onClick={() => console.log("Button clicked")}
              className="bg-[#1D7EB9] text-white px-4 py-1.5 rounded hover:bg-blue-700 mt-9"
            >
              Talk to Our Expert
            </button>
          </div>
          <div className="p-5">
            <img src={HeroImg} alt="Logo" className="h-72 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero