import React from 'react'
import Mainimg from '../assets/heroimg.svg'

const Hero = () => {
    return (
        <div className="bg-indigo-900 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className='w-full md:w-1/2 my-4'>
                        <h1 className="text-white font-bold text-4xl lg:text-5xl">Best App Development Company for Startups and Brands
                        </h1>
                        <button onClick={() => console.log("Button clicked")} className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-700 mt-9"
                        >
                            Talk to Our Expert
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 my-4">
                        <img src={Mainimg} alt="Logo" className=" w-full md:w-3/4 md:mx-auto" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Hero;