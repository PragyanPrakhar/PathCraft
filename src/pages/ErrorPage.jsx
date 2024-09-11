import { useState } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    const [showInfo, setShowInfo] = useState(false);

    const handleToggleInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* Image with hover effect */}
            <img
                src="https://www.freecodecamp.org/static/freeCodeCamp-404-986b65460a39b608aac138e7a1b1d177.svg"
                alt="404 Error"
                className="w-1/2 md:w-1/3 lg:w-1/4 mb-8 transform transition-transform duration-300 hover:scale-110"
            />
            {/* Title with shadow */}
            <h2 className="text-3xl font-bold text-gray-600 mb-4 shadow-md transition-shadow duration-300 hover:shadow-xl hover:text-gray-700">
                Page Not Found
            </h2>
            {/* Description */}
            <p className="text-lg text-gray-500 mb-8 text-center px-4">
                It looks like the page you're looking for doesn't exist. Try
                going back to the homepage or searching for what you're looking
                for.
            </p>

            {/* Toggle Info Button */}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 transition-transform duration-300 hover:scale-105"
                onClick={handleToggleInfo}
            >
                {showInfo ? "Hide Info" : "More Info"}
            </button>

            {/* Additional Info Section with slide effect */}
            {showInfo && (
                <div className="bg-gray-200 p-6 rounded mb-8 w-11/12 md:w-3/4 lg:w-2/3 transform transition-all duration-500 ease-in-out">
                    <h3 className="text-lg font-bold text-gray-600 mb-2">
                        What happened?
                    </h3>
                    <p className="text-lg text-gray-500 mb-4">
                        The page you're looking for might have been moved,
                        deleted, or never existed in the first place.
                    </p>
                    <h3 className="text-lg font-bold text-gray-600 mb-2">
                        What can I do?
                    </h3>
                    <p className="text-lg text-gray-500 mb-4">
                        You can try going back to the homepage, searching for
                        what you're looking for, or contacting us for help.
                    </p>
                </div>
            )}

            {/* Homepage Link with smooth scaling */}
            <Link
                to="/"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transform transition-transform duration-300 hover:scale-105"
            >
                Go Back to Homepage
            </Link>
        </div>
    );
};

export default ErrorPage;
