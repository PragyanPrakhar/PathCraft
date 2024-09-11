import React from "react";
import { featuresData } from "../../utils/constants";
const Features = () => {
    return (
        <div>
            <section className=" bg-black text-white  ">
                <div className="container mx-auto p-4  space-y-2 text-center">
                    <h2 className="text-5xl font-bold">
                        Features We Providing You
                    </h2>
                    <p className="">craft your learning path</p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {featuresData.map((data, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4"
                        >
                            <p className="text-3xl">{data.logo}</p>
                            <h3 className=" text-3xl font-semibold hover:text-blue-500 transition-transform ease-in-out hover:scale-105">
                                {data.name}
                            </h3>
                            <div className="space-y-1 leading-tight flex flex-col justify-center items-center">
                                <p>{data.description[0]}</p>
                                <p>{data.description[1]}</p>
                                <p>{data.description[2]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Features;
