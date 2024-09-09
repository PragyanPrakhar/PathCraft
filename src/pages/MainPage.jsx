// import React from "react";
// import { useState } from "react";

// const MainPage = () => {
//     return (
//         <div className="bg-black h-screen w-screen text-white">
//             <div className="flex">
//                 <div className="w-[50vw]">
//                     <div className="p-2">
//                         <h1 className="p-2 text-2xl">
//                             Mention Your Skill Below !
//                         </h1>
//                         <div className="p-4">
//                             <input
//                                 type="text"
//                                 className="mt-4 ml-2 border-2 p-2 w-96 h-10 bg-black text-white rounded-lg"
//                             />
//                         </div>
//                     </div>
//                     <div className="mt-4 p-2">
//                         <h1 className="text-2xl">
//                             Enter Your Current Level :-
//                         </h1>
//                         <div className="flex p-4 mt-4">
//                             <button className="p-2 ml-2 border-2 rounded-lg w-28 h-16">
//                                 Begineer
//                             </button>
//                             <button className="p-2 ml-2 border-2 rounded-lg w-28 h-16">
//                                 Intermediate
//                             </button>
//                             <button className="p-2 ml-2 border-2 rounded-lg w-28 h-16">
//                                 Expert
//                             </button>
//                         </div>
//                     </div>
//                     <div className="mt-4 p-3">
//                         <h1 className="text-2xl">
//                             Enter the number of days :-
//                         </h1>
//                         <div className="mt-4">
//                             <input
//                                 type="text"
//                                 className="mt-4 ml-2 border-2 p-2 w-28 h-10 bg-black text-white rounded-lg"
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className=" mt-96">
//                     <button className="border-2 rounded-lg w-48 h-16">Generate</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MainPage;


// import React from "react";

// const MainPage = () => {
//     return (
//         <div className="bg-gradient-to-r from-gray-900 via-black to-gray-800 h-screen w-screen text-white flex justify-center items-center">
//             <div className="w-[60vw] p-8 rounded-xl shadow-lg bg-gray-900/80">
//                 {/* Skill Section */}
//                 <div className="mb-8">
//                     <h1 className="text-3xl font-bold mb-4 text-gray-200">
//                         Mention Your Skill Below!
//                     </h1>
//                     <input
//                         type="text"
//                         placeholder="Enter a skill"
//                         className="w-full p-3 border-2 border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
//                     />
//                 </div>

//                 {/* Level Section */}
//                 <div className="mb-8">
//                     <h1 className="text-2xl font-semibold mb-4 text-gray-200">
//                         Enter Your Current Level:
//                     </h1>
//                     <div className="flex space-x-4">
//                         <button className="w-32 p-3 border-2 border-gray-700 bg-gray-800 rounded-lg hover:bg-indigo-600 hover:shadow-lg transition-all">
//                             Beginner
//                         </button>
//                         <button className="w-32 p-3 border-2 border-gray-700 bg-gray-800 rounded-lg hover:bg-indigo-600 hover:shadow-lg transition-all">
//                             Intermediate
//                         </button>
//                         <button className="w-32 p-3 border-2 border-gray-700 bg-gray-800 rounded-lg hover:bg-indigo-600 hover:shadow-lg transition-all">
//                             Expert
//                         </button>
//                     </div>
//                 </div>

//                 {/* Days Section */}
//                 <div className="mb-8">
//                     <h1 className="text-2xl font-semibold mb-4 text-gray-200">
//                         Enter the number of days:
//                     </h1>
//                     <input
//                         type="text"
//                         placeholder="Days"
//                         className="w-32 p-3 border-2 border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
//                     />
//                 </div>

//                 {/* Generate Button */}
//                 <div className="flex justify-center">
//                     <button className="w-48 p-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 hover:shadow-xl transition-all text-white font-semibold">
//                         Generate
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MainPage;

import React from "react";

const MainPage = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 h-screen w-screen text-white flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-[80%] p-8 mx-auto rounded-xl shadow-lg bg-gray-900/90 animate-slide-in relative">
                {/* Skill Section */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-6 text-indigo-400 tracking-wide animate-fade-in">
                        Mention Your Skill Below!
                    </h1>
                    <input
                        type="text"
                        placeholder="Enter a skill"
                        className="w-full p-4 border-2 border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 transition-all duration-300 ease-in-out animate-fade-in-delayed"
                    />
                </div>

                {/* Level Section */}
                <div className="mb-12">
                    <h1 className="text-3xl font-semibold mb-6 text-indigo-400 tracking-wide animate-fade-in">
                        Enter Your Current Level:
                    </h1>
                    <div className="flex space-x-6 animate-slide-up">
                        <button className="w-36 p-4 border-2 border-gray-700 bg-gray-800 rounded-lg hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                            Beginner
                        </button>
                        <button className="w-36 p-4 border-2 border-gray-700 bg-gray-800 rounded-lg hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                            Intermediate
                        </button>
                        <button className="w-36 p-4 border-2 border-gray-700 bg-gray-800 rounded-lg hover:bg-indigo-600 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                            Expert
                        </button>
                    </div>
                </div>

                {/* Days Section */}
                <div className="mb-12">
                    <h1 className="text-3xl font-semibold mb-6 text-indigo-400 tracking-wide animate-fade-in">
                        Enter the number of days:
                    </h1>
                    <input
                        type="number"
                        placeholder="Days"
                        className="w-36 p-4 border-2 border-gray-700 bg-gray-800 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 transition-all duration-300 ease-in-out"
                    />
                </div>

                {/* Generate Button */}
                <div className="flex justify-center">
                    <button className="w-60 p-4 bg-indigo-600 rounded-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 text-white font-semibold animate-slide-up-delayed">
                        Generate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;


