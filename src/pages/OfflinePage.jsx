// import React, { useState } from "react";

// const OfflinePage = () => {
//     const [score, setScore] = useState(0);
//     const [showGame, setShowGame] = useState(false);
//     const [gameResult, setGameResult] = useState("");

//     const handleStartGame = () => {
//         setShowGame(true);
//     };

//     const handleRockClick = () => {
//         const choices = ["rock", "paper", "scissors"];
//         const computerChoice =
//             choices[Math.floor(Math.random() * choices.length)];
//         if (computerChoice === "rock") {
//             setGameResult("It's a tie!");
//         } else if (computerChoice === "paper") {
//             setGameResult("Paper covers rock, you lose!");
//         } else {
//             setGameResult("Rock crushes scissors, you win!");
//             setScore(score + 1);
//         }
//     };

//     const handlePaperClick = () => {
//         const choices = ["rock", "paper", "scissors"];
//         const computerChoice =
//             choices[Math.floor(Math.random() * choices.length)];
//         if (computerChoice === "paper") {
//             setGameResult("It's a tie!");
//         } else if (computerChoice === "scissors") {
//             setGameResult("Scissors cut paper, you lose!");
//         } else {
//             setGameResult("Paper covers rock, you win!");
//             setScore(score + 1);
//         }
//     };

//     const handleScissorsClick = () => {
//         const choices = ["rock", "paper", "scissors"];
//         const computerChoice =
//             choices[Math.floor(Math.random() * choices.length)];
//         if (computerChoice === "scissors") {
//             setGameResult("It's a tie!");
//         } else if (computerChoice === "rock") {
//             setGameResult("Rock crushes scissors, you lose!");
//         } else {
//             setGameResult("Scissors cut paper, you win!");
//             setScore(score + 1);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//             <h1 className="text-5xl font-bold text-blue-500 mb-8">
//                 Oops! Looks like you are offline
//             </h1>
//             <p className="text-2xl text-gray-600 mb-8">
//                 Why not play a game while you wait for your connection to come
//                 back?
//             </p>
//             <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg mb-8"
//                 onClick={handleStartGame}
//             >
//                 Start Game
//             </button>
//             {showGame && (
//                 <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8">
//                     <h2 className="text-4xl font-bold text-blue-500 mb-4">
//                         Rock, Paper, Scissors
//                     </h2>
//                     <p className="text-2xl text-gray-600 mb-4">
//                         Score: {score}
//                     </p>
//                     <div className="flex justify-center mb-4">
//                         <button
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
//                             onClick={handleRockClick}
//                         >
//                             Rock
//                         </button>
//                         <button
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
//                             onClick={handlePaperClick}
//                         >
//                             Paper
//                         </button>
//                         <button
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
//                             onClick={handleScissorsClick}
//                         >
//                             Scissors
//                         </button>
//                     </div>
//                     <p className="text-2xl text-gray-600">{gameResult}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default OfflinePage;

// import React, { useState } from "react";

// const OfflinePage = () => {
//     const [score, setScore] = useState(0);
//     const [showGame, setShowGame] = useState(false);
//     const [gameResult, setGameResult] = useState("");

//     const handleStartGame = () => {
//         setShowGame(true);
//     };

//     const handleRockClick = () => {
//         const choices = ["rock", "paper", "scissors"];
//         const computerChoice =
//             choices[Math.floor(Math.random() * choices.length)];
//         if (computerChoice === "rock") {
//             setGameResult("It's a tie!");
//         } else if (computerChoice === "paper") {
//             setGameResult("Paper covers rock, you lose!");
//         } else {
//             setGameResult("Rock crushes scissors, you win!");
//             setScore(score + 1);
//         }
//     };

//     const handlePaperClick = () => {
//         const choices = ["rock", "paper", "scissors"];
//         const computerChoice =
//             choices[Math.floor(Math.random() * choices.length)];
//         if (computerChoice === "paper") {
//             setGameResult("It's a tie!");
//         } else if (computerChoice === "scissors") {
//             setGameResult("Scissors cut paper, you lose!");
//         } else {
//             setGameResult("Paper covers rock, you win!");
//             setScore(score + 1);
//         }
//     };

//     const handleScissorsClick = () => {
//         const choices = ["rock", "paper", "scissors"];
//         const computerChoice =
//             choices[Math.floor(Math.random() * choices.length)];
//         if (computerChoice === "scissors") {
//             setGameResult("It's a tie!");
//         } else if (computerChoice === "rock") {
//             setGameResult("Rock crushes scissors, you lose!");
//         } else {
//             setGameResult("Scissors cut paper, you win!");
//             setScore(score + 1);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 transition-all duration-500">
//             {/* Main Heading with shadow */}
//             <h1 className="text-5xl font-bold text-blue-600 mb-8 drop-shadow-lg animate-bounce">
//                 Oops! Looks like you are offline
//             </h1>

//             {/* Description */}
//             <p className="text-2xl text-gray-700 mb-8 text-center animate-pulse">
//                 Why not play a game while you wait for your connection to come
//                 back?
//             </p>

//             {/* Start Game Button with transformation */}
//             <button
//                 className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg mb-8 transform transition-transform duration-300 hover:scale-110 hover:rotate-1 shadow-lg"
//                 onClick={handleStartGame}
//             >
//                 Start Game
//             </button>

//             {showGame && (
//                 <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-xl p-8 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
//                     <h2 className="text-4xl font-bold text-blue-600 mb-4">
//                         Rock, Paper, Scissors
//                     </h2>

//                     {/* Score with subtle animation */}
//                     <p className="text-2xl text-gray-700 mb-4 animate-pulse">
//                         Score: {score}
//                     </p>

//                     {/* Game Buttons with hover effect */}
//                     <div className="flex justify-center mb-4 space-x-4">
//                         <button
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
//                             onClick={handleRockClick}
//                         >
//                             Rock
//                         </button>
//                         <button
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
//                             onClick={handlePaperClick}
//                         >
//                             Paper
//                         </button>
//                         <button
//                             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
//                             onClick={handleScissorsClick}
//                         >
//                             Scissors
//                         </button>
//                     </div>

//                     {/* Game Result */}
//                     <p className="text-2xl text-gray-700 mt-4">
//                         {gameResult}
//                     </p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default OfflinePage;

import React, { useState } from "react";

const OfflinePage = () => {
    const [score, setScore] = useState(0);
    const [showGame, setShowGame] = useState(false);
    const [gameResult, setGameResult] = useState("");

    const handleStartGame = () => {
        setShowGame(true);
    };

    const handleRockClick = () => {
        playGame("rock");
    };

    const handlePaperClick = () => {
        playGame("paper");
    };

    const handleScissorsClick = () => {
        playGame("scissors");
    };

    const playGame = (userChoice) => {
        const choices = ["rock", "paper", "scissors"];
        const computerChoice =
            choices[Math.floor(Math.random() * choices.length)];

        if (computerChoice === userChoice) {
            setGameResult("It's a tie!");
        } else if (
            (computerChoice === "rock" && userChoice === "scissors") ||
            (computerChoice === "paper" && userChoice === "rock") ||
            (computerChoice === "scissors" && userChoice === "paper")
        ) {
            setGameResult(
                `${capitalize(computerChoice)} beats ${userChoice}, you lose!`
            );
        } else {
            setGameResult(
                `${capitalize(userChoice)} beats ${computerChoice}, you win!`
            );
            setScore(score + 1);
        }
    };

    const capitalize = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <h1 className="text-5xl font-bold text-white mb-8 animate-bounce">
                Oops! Looks like you are offline
            </h1>
            <p className="text-2xl text-gray-400 mb-8 animate-pulse">
                Why not play a game while you wait for your connection to come
                back?
            </p>
            <button
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg mb-8 transform transition-transform duration-300 hover:scale-110  shadow-lg"
                onClick={handleStartGame}
            >
                Start Game
            </button>
            {showGame && (
                <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg   shadow-xl p-8 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Rock, Paper, Scissors
                    </h2>
                    <p className="text-2xl text-gray-400 mb-4">
                        Score: {score}
                    </p>
                    <div className="flex justify-center mb-4">
                        <button
                            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mx-2 transition-transform transform hover:scale-105"
                            onClick={handleRockClick}
                        >
                            Rock
                        </button>
                        <button
                            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mx-2 transition-transform transform hover:scale-105"
                            onClick={handlePaperClick}
                        >
                            Paper
                        </button>
                        <button
                            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mx-2 transition-transform transform hover:scale-105"
                            onClick={handleScissorsClick}
                        >
                            Scissors
                        </button>
                    </div>
                    <p className="text-2xl text-gray-400">{gameResult}</p>
                </div>
            )}
        </div>
    );
};

export default OfflinePage;
