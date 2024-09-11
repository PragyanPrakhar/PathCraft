import React, { useState } from "react";
import Header from "./Header"
import Features from "@/components/ui/Features";
import { Link } from "react-router-dom";
// import { Toaster } from "@/components/ui/sonner";
const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="overflow-hidden">
            <Header/>
            <div className="bg-gray-100">
            <section className="bg-black h-screen w-screen text-white">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                            Craft Your
                            <span className="text-red-500 ml-4">Career</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            A platform to boost your career
                            <br className="hidden md:inline lg:hidden" />
                            with your preferred skills
                        </p>
                        <div className="w-48 flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start border border-white p-4 rounded-md hover:bg-red-500 hover:text-white transition duration-300"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{ backgroundColor: isHovered ? 'rgb(239 68 68)' : 'transparent' }}
                        >
                            <Link to="/create"><button className="text-lg font-bold cursor-pointer">Explore Now</button></Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img
                            src="https://mambaui.com/assets/svg/Business_SVG.svg"
                            alt=""
                            className="h-96 w-96 mr-32"
                        />
                    </div>
                </div>
            </section>
        </div>
        <Features/>
        {/* <Toaster/> */}
        </div>
        
    );
};

export default Hero;