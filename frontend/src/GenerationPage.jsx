import { useState } from "react";
import './index.css'; // Import the CSS file
import { FaDownload, FaFile } from "react-icons/fa"; // Import icons from react-icons

const GenerationPage = () => {
    const [formData, setFormData] = useState({
        topic: "",
        audienceType: "",
        numberOfSlides: 1,
        slideContent: "",
    });
    const [isGenerating, setIsGenerating] = useState(false); // Loading state
    const [isGenerationForm, setGenrationForm] = useState(true);
    const [pptFileUrl, setPptFileUrl] = useState(null); // Store generated PPT file URL

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsGenerating(true); // Set loading state to true

        const requestData = {
            topic: formData.topic,
            audienceType: formData.audienceType,
            numberOfSlides: formData.numberOfSlides,
            slideContent: formData.slideContent ? formData.slideContent.split(',') : [],
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/generate-presentation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);

            // Store the file URL for download
            setPptFileUrl(url);
            setGenrationForm(false)

        } catch (error) {
            console.error('Error generating presentation:', error);
            alert('Failed to generate the presentation. Please try again.');
        } finally {
            setIsGenerating(false); // Reset loading state
        }
    };

    return (
        <div className={`mcontent ${isGenerating ? "fade-background" : ""}`}>
            {isGenerating && (
                <div className="loading-overlay">
                    <h2>Generating...</h2>
                </div>
            )}

            {isGenerationForm?<div className="mheading">
                <h3 className="mtagline">Generates slides instantly</h3>
                <form onSubmit={handleSubmit}>
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
                    <div>
                        <label htmlFor="audienceType">Presentation Type:</label>
                        <select
                            id="audienceType"
                            name="audienceType"
                            value={formData.audienceType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Presentation Type</option>
                            <option value="Business">Business</option>
                            <option value="Educational">Educational</option>
                            <option value="General">General</option>
                            <option value="Technical">Technical</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="numberOfSlides">Number of Content Slides:</label>
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
                    <button type="submit" disabled={isGenerating}>
                        Generate Presentation
                    </button>
                </form>

                {/* Render icons after PPT is generated */}
                
            </div>:
            
                    <div className="icon-container">
                        {/* File Icon */}
                        <div className="file-icon">
                            <img src="./ppticon.png" alt="No logo found" />
                            <h3>Your presentation is Ready</h3>
                        </div>
                        {/* Download Icon */}
                        <button 
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = pptFileUrl;
                                link.download = `${formData.topic}_presentation.pptx`;
                                link.click();
                            }} 
                            className="download-button"
                        >
                            <span>Download</span>
                        </button>
                    </div>
                
                    }
        </div>
    );
};

export default GenerationPage;
