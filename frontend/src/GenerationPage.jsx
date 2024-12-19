import { useState } from "react";

const GenerationPage = () => {
    const [formData, setFormData] = useState({
        topic: "",
        audienceType: "",
        numberOfSlides: 1,
        slideContent: "",
    });
    const [isGenerating, setIsGenerating] = useState(false);
    const [isGenerationForm, setGenrationForm] = useState(true);
    const [pptFileUrl, setPptFileUrl] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsGenerating(true);

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
            setGenrationForm(false);

        } catch (error) {
            console.error('Error generating presentation:', error);
            alert('Failed to generate the presentation. Please try again.');
        } finally {
            setIsGenerating(false); // Reset loading state
        }
    };

    return (
        <div className={`flex flex-col items-center ${isGenerating ? "bg-gray-900" : ""} p-5 min-h-screen `}>
            {isGenerating && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <h2 className="text-3xl text-white font-bold">Generating...</h2>
                </div>
            )}

            {isGenerationForm ? (
                <div id="generateform" className="w-full max-w-lg p-5 shadow-lg rounded-lg border-8 border-transparent bg-clip-padding mt-24" 
                style={{ borderImage: 'linear-gradient(to right, #ec4899, #a855f7, #6366f1) 1', borderImageSlice: 1 }}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Generates Slides Instantly</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="topic" className="block text-lg font-medium text-gray-900">Topic/Title for Presentation:</label>
                            <input
                                type="text"
                                id="topic"
                                name="topic"
                                value={formData.topic}
                                onChange={handleChange}
                                required
                                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="audienceType" className="block text-lg font-medium text-gray-900">Presentation Type:</label>
                            <select
                                id="audienceType"
                                name="audienceType"
                                value={formData.audienceType}
                                onChange={handleChange}
                                required
                                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                            >
                                <option value="">Select Presentation Type</option>
                                <option value="Business">Business</option>
                                <option value="Educational">Educational</option>
                                <option value="General">General</option>
                                <option value="Technical">Technical</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="numberOfSlides" className="block text-lg font-medium text-gray-900">Number of Content Slides:</label>
                            <input
                                type="number"
                                id="numberOfSlides"
                                name="numberOfSlides"
                                value={formData.numberOfSlides}
                                onChange={handleChange}
                                min="1"
                                required
                                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="slideContent" className="block text-lg font-medium text-gray-900">Detailed Prompt (Optional):</label>
                            <textarea
                                id="slideContent"
                                name="slideContent"
                                value={formData.slideContent}
                                onChange={handleChange}
                                placeholder="Enter slide content, separated by commas"
                                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 resize-none h-32"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isGenerating}
                            className="w-full bg-black text-white py-3 px-6 rounded-lg shadow-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition duration-300 font-bold"
                        >
                            Generate Presentation
                        </button>
                    </form>
                </div>
            ) : (
                <div id="generatedbox" className="flex flex-col items-center justify-center mt-10 p-10 shadow-lg rounded-lg mt-20"
                style={{
                    border: '8px solid white', 
                    borderImage: 'linear-gradient(to right, #ec4899, #a855f7, #6366f1) 1', 
                    borderImageSlice: 1,
                    padding: '20px',  // Add padding to ensure content does not overlap the border
                  }}>
                    <h1 className="font-GeistSans text-3xl font-bold text-gray-800 mb-6">Here is your generated Presentation</h1>
                    <div className="flex flex-col items-center mb-6">
                        <img src="./ppticon.png" alt="Presentation Icon" className="w-28 mb-6" />
                        <h3 className="text-xl font-bold text-gray-700">Your Presentation is Ready</h3>
                </div>
                    <button
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = pptFileUrl;
                            link.download = `${formData.topic}_presentation.pptx`;
                            link.click();
                        }}
                        className="w-[300px] bg-black text-white py-3 px-3 mt-5 rounded-lg shadow-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition duration-300 font-bold"
                    >
                        Download
                    </button>
                    <button
                        onClick={() => setGenrationForm(true)} // Set to true to go back to the form
                        className="w-[300px] bg-black text-white py-3 px-3 mt-5 rounded-lg shadow-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition duration-300 font-bold"
                    >
                        Generate New Presentation
                    </button>
                </div>
            )}
        </div>
    );
};

export default GenerationPage;
