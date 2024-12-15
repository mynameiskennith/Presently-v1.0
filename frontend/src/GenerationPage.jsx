import { useState } from "react";
import './index.css'; // Import the CSS file

const GenerationPage = () => {
    const [formData, setFormData] = useState({
        topic: "",
        audienceType: "",
        numberOfSlides: 1,
        slideTitles: "",
        slideContent: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            topic: formData.topic,
            audienceType: formData.audienceType,
            numberOfSlides: formData.numberOfSlides,
            // slideTitles: formData.slideTitles ? formData.slideTitles.split(',') : [],
            slideContent: formData.slideContent ? formData.slideContent.split(',') : [],
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/generate-presentation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData), // Properly stringifying the data
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            // Create a download link and trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.download = `${formData.topic}_presentation.pptx`;
            link.click();

            // Clean up the URL after the download
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error generating presentation:', error);
            alert('Failed to generate the presentation. Please try again.');
        }
    };

    return (
        <div className="mcontent">
            <div className="mheading">
                <h3 className="mtagline">Generates slides instantly</h3>

                <div>
                    <h2>Generate Your Presentation</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Topic/Title Input */}
                        <div>
                            <label htmlFor="topic">Topic/Title for Presentation:</label>
                            <input
                                type="text"
                                id="topic"
                                name="topic"
                                value={formData.topic}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Audience Type Dropdown */}
                        <div>
                            <label htmlFor="audienceType">Audience Type:</label>
                            <select
                                id="audienceType"
                                name="audienceType"
                                value={formData.audienceType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Audience Type</option>
                                <option value="Business">Business</option>
                                <option value="Education">Education</option>
                                <option value="General">General</option>
                                <option value="Technical">Technical</option>
                            </select>
                        </div>

                        {/* Number of Slides Input */}
                        <div>
                            <label htmlFor="numberOfSlides">Number of Slides:</label>
                            <input
                                type="number"
                                id="numberOfSlides"
                                name="numberOfSlides"
                                value={formData.numberOfSlides}
                                onChange={handleChange}
                                min="1"
                                required
                            />
                        </div>

                        {/* Slide Titles Input */}
                        {/* {<div>
                            <label htmlFor="slideTitles">Slide Titles (Optional):</label>
                            <textarea
                                id="slideTitles"
                                name="slideTitles"
                                value={formData.slideTitles}
                                onChange={handleChange}
                                placeholder="Enter slide titles, separated by commas"
                            ></textarea>
                        </div>} */}

                        {/* Slide Content Input */}
                        <div>
                            <label htmlFor="slideContent">Detailed Prompt (Optional):</label>
                            <textarea
                                id="slideContent"
                                name="slideContent"
                                value={formData.slideContent}
                                onChange={handleChange}
                                placeholder="Enter slide content, separated by commas"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit">
                            Generate Presentation
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GenerationPage;
