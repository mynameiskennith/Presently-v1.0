import React from 'react';
// import { Link } from 'react-router-dom';

const LandingPage = () => {

    const handleButtonClick = () => {
        // window.location.href = "/login";
        window.location.href = "/select";
    };

    return ( 
        <div className="bg-black text-white min-h-screen flex items-center justify-center overflow-y-auto">
            <div className="flex flex-col items-center justify-center min-h-[75vh] text-center">
            <h1 className="text-7xl font-extrabold text-center text-white mb-4">
  {"Welcome to Presently.".split("").map((char, index) => (
    <span 
      key={index} 
      className="letter"
      style={{ 
        "--delay": `${index * 0.1}s`, 
        background: "linear-gradient(to right, #ec4899, #a855f7, #6366f1)",
        backgroundClip: "text",
        color: "transparent" 
      }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h1>
                <br />
                <div className="sub-head mb-6">
                    <h2 className="text-4xl italic font-bold text-white mb-6">"Present Yourself, Train Yourself"</h2>
                    <br />
                    <div className="mt-6">
                        <button 
                            onClick={handleButtonClick} 
                            className="bg-white text-black py-2 px-6 rounded-full text-xl font-semibold hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                            Get Started
                        </button> 
                    </div>
                    <br />
                    <div className="description max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-20"
                    style={{
                        border: '8px solid white', 
                        borderImage: 'linear-gradient(to right, #ec4899, #a855f7, #6366f1) 1', 
                        borderImageSlice: 1,
                        padding: '20px',  // Add padding to ensure content does not overlap the border
                      }}>
                        <h3 className="text-xl font-bold text-black leading-relaxed">
                            Transform the way you create and deliver presentations with Presently – your AI-powered companion for crafting stunning slides, engaging quizzes, and refining public speaking skills effortlessly!
                        </h3>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}

export default LandingPage;
