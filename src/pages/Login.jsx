// import React, { useState } from "react";

// const Login = () => {
//     const [isSignIn, setIsSignIn] = useState(false);
//     const toggleSign = () => {
//         setIsSignIn(!isSignIn);
//     };
//     return (
//         <div className="bg-black text-white h-screen w-screen p-8 pl-72">
//             <div className="w-[40vw] h-[70vh] border-2 border-white rounded-lg">
//                 <h1 className="text-xl pl-56 pt-2">
//                     {isSignIn ? "Sign In" : "Sign Up"}
//                 </h1>
//                 {!isSignIn && (
//                     <div className="pl-44 pt-6">
//                         <input
//                             type="text"
//                             placeholder="Enter your username"
//                             className="rounded-lg w-64"
//                         />
//                     </div>
//                 )}
//                 <div className="">
//                     <div className="pl-44 pt-6">
//                         <input
//                             type="text"
//                             placeholder="Enter your username"
//                             className="rounded-lg w-64"
//                         />
//                     </div>
//                     <div className="pl-44 mt-12">
//                         <input
//                             type="text"
//                             placeholder="Enter your username"
//                             className="rounded-lg w-64"
//                         />
//                     </div>
//                     <button className="border-2 border-white">{isSignIn ? "Sign In" : "Sign Up"}</button>
//                     <p className="cursor-pointer" onClick={toggleSign}>
//                         {isSignIn
//                             ? "New to Path.AI, SignUp now"
//                             : "Already Registered? Sign In Now."}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from "react";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const toggleSign = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white h-screen w-screen flex items-center justify-center">
            <div className="w-[40vw] h-[70vh] border-2 border-gray-700 rounded-xl shadow-xl p-10 bg-gray-900/80 relative transition-transform transform hover:scale-105">
                <h1 className="text-3xl font-semibold text-center mb-8 text-indigo-500 tracking-wider">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>

                {/* Username or Email Field */}
                {!isSignIn && (
                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full p-4 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 transition-all duration-300"
                        />
                    </div>
                )}

                {/* Email/Username */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full p-4 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 transition-all duration-300"
                    />
                </div>

                {/* Password Field */}
                <div className="mb-8">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-4 border-2 border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-4 focus:ring-indigo-500 placeholder-gray-500 transition-all duration-300"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mb-8">
                    <button className="w-48 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-indigo-500">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </button>
                </div>

                {/* Toggle Sign In/Sign Up */}
                <p
                    className="text-center text-indigo-400 cursor-pointer hover:underline transition-all duration-300"
                    onClick={toggleSign}
                >
                    {isSignIn
                        ? "New to Path.AI? Sign Up now"
                        : "Already Registered? Sign In Now."}
                </p>
            </div>
        </div>
    );
};

export default Login;
