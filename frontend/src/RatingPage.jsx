import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import "./Rating.css";

// Register necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const RatingPage = () => {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCheckButtonClick = async () => {
    if (!file) {
      alert('Please upload a presentation first!');
      return;
    }

    setLoading(true);
    setError(null);

    // Prepare form data for API call
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:8000/rate-presentation/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to rate presentation");
      }

      const result = await response.json();
      setScore(result.score); // Assuming backend returns a JSON object with 'score' key
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred while rating the presentation");
    } finally {
      setLoading(false);
    }
  };

  const data = {
    labels: ['Score', 'Remaining'],
    datasets: [
      {
        data: [score || 0, 100 - (score || 0)],
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
      <h1 className="catchy-heading">
        {"How good is your presentation?".split("").map((char, index) => (
          <span
            key={index}
            className="letter"
            style={{ "--delay": `${index * 0.1}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
      <p>Unleash the Power of Your Presentation: Get Your Score Now!</p>
      <div className="file-upload">
        <input
          type="file"
          accept=".pptx"
          onChange={handleFileChange}
          id="fileInput"
        />
      </div>
      <button
        onClick={handleCheckButtonClick}
        className="check-button"
        disabled={loading}
      >
        {loading ? "Checking..." : "Check"}
      </button>

      {error && <p className="error-message">{error}</p>}

      {score !== null && !loading && (
        <div className="score-result">
          <h2>Your Presentation Score: {score}</h2>
          <Pie data={data} options={options} />
        </div>
      )}
    </div>
  );
};

export default RatingPage;
