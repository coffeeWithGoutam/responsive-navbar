import React from 'react';
import List from "../components/List";
import Hero from "../assets/hero.svg";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly items-center bg-[#2F3045] h-50v w-screen">
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
        <div className="overflow-hidden p-5">
          <img src={Hero} alt="Logo" className="h-72 rounded" />
        </div>
      </div>
    </div>
  )
}

export default Hero