import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "./Rating.css";

// Register necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const RatingPage = () => {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCheckButtonClick = () => {
    if (!file) {
      alert('Please upload a presentation first!');
      return;
    }
    // Mock Score generation logic
    const newScore = Math.floor(Math.random() * 100) + 1;
    setScore(newScore);
  };

  const data = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ['#EF6C00', '#f3f3f3'],
        borderColor: ['#EF6C00', '#f3f3f3'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  return (
    <div className="rating-page">
      <h1 className="catchy-heading"> {"How good is your presentation?".split("").map((char, index) => (
                        <span 
                            key={index} 
                            className="letter" 
                            style={{ "--delay": `${index * 0.1}s` }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
       </h1>
      <p>Unleash the Power of Your Presentation: Get Your Score Now!</p>
      <div className="file-upload">
        <input
          type="file"
          accept=".pptx, .ppt, .pdf"
          onChange={handleFileChange}
          id="fileInput"
        />
      </div>
      <button onClick={handleCheckButtonClick} className="check-button">
        Check
      </button>

      {score && (
        <div className="score-result">
          <h2>Your Presentation Score: {score}</h2>
          <Pie data={data} options={options} />
        </div>
      )}
    </div>
  );
};

export default RatingPage;
