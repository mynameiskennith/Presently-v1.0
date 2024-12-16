// import React, { useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import './Rating.css';

// // Register necessary chart components
// ChartJS.register(ArcElement, Tooltip, Legend);

// const RatingPage = () => {
//   const [file, setFile] = useState(null);
//   const [scores, setScores] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleCheckButtonClick = async () => {
//     if (!file) {
//       alert('Please upload a presentation first!');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     // Prepare form data for API call
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("http://localhost:8000/rate-presentation/", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Failed to rate presentation");
//       }

//       const result = await response.json();
//       setScores(result); // Backend returns all scores
//     } catch (err) {
//       console.error(err);
//       setError(err.message || "An error occurred while rating the presentation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const data = {
//     labels: ['Score', 'Remaining'],
//     datasets: [
//       {
//         data: [scores?.overall_rating || 0, 100 - (scores?.overall_rating || 0)],
//         backgroundColor: ['#EF6C00', '#f3f3f3'],
//         borderColor: ['#EF6C00', '#f3f3f3'],
//         borderWidth: 2,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: (tooltipItem) => {
//             return `${tooltipItem.label}: ${tooltipItem.raw}%`;
//           },
//         },
//       },
//     },
//     animation: {
//       animateScale: true,
//       animateRotate: true,
//     },
//   };

//   return (
//     <div className="rating-page">
//       <h1 className="catchy-heading">How good is your presentation?</h1>
//       <p>Unleash the Power of Your Presentation: Get Your Score Now!</p>
//       <div className="file-upload">
//         <input
//           type="file"
//           accept=".pptx"
//           onChange={handleFileChange}
//           id="fileInput"
//         />
//       </div>
//       <button
//         onClick={handleCheckButtonClick}
//         className="check-button"
//         disabled={loading}
//       >
//         {loading ? "Checking..." : "Check"}
//       </button>

//       {error && <p className="error-message">{error}</p>}

//       {scores && !loading && (
//         <div className="score-result">
//         <h2>Your Presentation Score: {scores.overall_rating}</h2>

//         <div className="score-container">
//           <div className="left-half">
//             <Pie data={data} options={options} />
//           </div>
//           <div className="right-half">
//             <p>Slide Number Rating: {scores.slide_number_rating}</p>
//             <p>Bullet Point Rating: {scores.bullet_point_rating}</p>
//             <p>Total Slides: {scores.total_slides}</p>
//           </div>
//         </div>
//       </div>
//       )}
//     </div>
//   );
// };

// export default RatingPage;




// import React, { useState } from 'react';
// import './Rating.css';

// const RatingPage = () => {
//   const [file, setFile] = useState(null);
//   const [scores, setScores] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleCheckButtonClick = async () => {
//     if (!file) {
//       alert('Please upload a presentation first!');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     // Prepare form data for API call
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch("http://localhost:8000/rate-presentation/", {
//         method: "POST",
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.detail || "Failed to rate presentation");
//       }

//       const result = await response.json();
//       setScores(result); // Backend returns all scores
//     } catch (err) {
//       console.error(err);
//       setError(err.message || "An error occurred while rating the presentation");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="rating-page">
//       <h1 className="catchy-heading">How good is your presentation?</h1>
//       <p>Unleash the Power of Your Presentation: Get Your Score Now!</p>
//       <div className="file-upload">
//         <input
//           type="file"
//           accept=".pptx"
//           onChange={handleFileChange}
//           id="fileInput"
//         />
//       </div>
//       <button
//         onClick={handleCheckButtonClick}
//         className="check-button"
//         disabled={loading}
//       >
//         {loading ? "Checking..." : "Check"}
//       </button>

//       {error && <p className="error-message">{error}</p>}

//       {scores && !loading && (
//         <div className="score-result">
//           <h2>Your Presentation Ratings</h2>

//           <div className="details-container">
//             <p><strong>Number of Points:</strong> {scores.noOfPoints}</p>
//             <p><strong>Number of Images:</strong> {scores.noOfImages}</p>
//             <p><strong>Readability:</strong> {scores.Readability}</p>
//             <p><strong>Consistency:</strong> {scores.Consistency}</p>
//             <p><strong>Content Quality:</strong> {scores.Quality}</p>
//             <p><strong>Total Slides:</strong> {scores.noOfSlides}</p>
//             <p><strong>Overall Score:</strong> {scores.overAllScore}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RatingPage;

import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Rating.css';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RatingPage = () => {
  const [file, setFile] = useState(null);
  const [scores, setScores] = useState(null);
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
      setScores(result); // Backend returns all scores
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred while rating the presentation");
    } finally {
      setLoading(false);
    }
  };

  const barChartData = scores && {
    labels: [
      'Number of Points',
      'Number of Images',
      'Readability',
      'Consistency',
      'Content Quality',
      'Total Slides',
      'Overall Score',
    ],
    datasets: [
      {
        label: 'Presentation Ratings',
        data: [
          scores.noOfPoints,
          scores.noOfImages,
          scores.Readability,
          scores.Consistency,
          scores.Quality,
          scores.noOfSlides,
          scores.overAllScore,
        ],
        backgroundColor: [
          '#EF6C00', '#FFCA28', '#66BB6A', '#42A5F5', '#AB47BC', '#8D6E63', '#29B6F6'
        ],
        borderColor: [
          '#EF6C00', '#FFCA28', '#66BB6A', '#42A5F5', '#AB47BC', '#8D6E63', '#29B6F6'
        ],
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Presentation Rating Metrics',
      },
    },
  };

  return (
    <div className="rating-page">
      <h1 className="catchy-heading">How good is your presentation?</h1>
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

      {scores && !loading && (
        <div className="score-result">
          <h2>Your Presentation Ratings</h2>

          <div className="chart-container">
            <Bar data={barChartData} options={barChartOptions} />
          </div>

          <div className="details-container">
            <p><strong>Number of Points:</strong> {scores.noOfPoints}</p>
            <p><strong>Number of Images:</strong> {scores.noOfImages}</p>
            <p><strong>Readability:</strong> {scores.Readability}</p>
            <p><strong>Consistency:</strong> {scores.Consistency}</p>
            <p><strong>Content Quality:</strong> {scores.Quality}</p>
            <p><strong>Total Slides:</strong> {scores.noOfSlides}</p>
            <p><strong>Overall Score:</strong> {scores.overAllScore}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingPage;
