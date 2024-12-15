import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    const handleButtonClick = () => {
        // window.location.href = "/login";
        window.location.href = "/select";

      };

    return ( 
        <div className="body">
            <div className="main-head">
                <h1 className="animated-heading">
                    {"Welcome to Presently.".split("").map((char, index) => (
                        <span 
                            key={index} 
                            className="letter" 
                            style={{ "--delay": `${index * 0.1}s` }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </h1>
                <br />
                <div className="sub-head">
                    <h2>"Present Yourself, Train Yourself"</h2>
                    <br />
                    <div className='button'>
                    <button onClick={handleButtonClick}>Get Started</button> 
                   </div>
                   <br />
                    <div className="description">
                        <h3>Transform the way you create and deliver presentations with Presently – your AI-powered companion for crafting stunning slides, engaging quizzes, and refining public speaking skills effortlessly!</h3>
                    </div>
                </div>
                <br />
                
            </div>
        </div>
    );
}
export default LandingPage;
