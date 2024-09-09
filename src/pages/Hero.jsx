import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div>
            <section className="text-white h-screen w-screen bg-black">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        Quisquam necessita vel
                        <span className="text-violet-600">
                            laborum doloribus
                        </span>
                        delectus
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">
                        Cupiditate minima voluptate temporibus quia? Architecto
                        beatae esse ab amet vero eaque explicabo!
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/create">
                            <button className="px-8 py-3 m-2 text-lg border font-semibold rounded dark:bg-violet-600 dark:text-gray-50">
                                Get started
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
