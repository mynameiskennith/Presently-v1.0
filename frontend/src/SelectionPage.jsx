import { Link } from 'react-router-dom';

const SelectionPage = () => {
  return (
    <>
      {/* Assuming there's a nav bar component before this */}
      <div className="bg-black text-white font-quicksand min-h-screen">
        {/* Start Your Creative Journey heading */}
        <div className="text-center pt-20">
        <h3 className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
  <span className="block">Start Your Creative Journey With Presently</span>
</h3>
  </div>

        {/* Choose Your Path heading */}
        <div className="mt-10 text-center">
          <span className="block text-white text-3xl">Choose Your Path:</span>
        </div>

        {/* Cards Section */}
        <div className="flex justify-center gap-20 mt-12">
          <Link to="/generate">
            <div className="w-80 h-80 p-5 border-4 border-transparent rounded-lg shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#f6f6fd', borderImage: 'linear-gradient(to right, #ec4899, #a855f7, #6366f1) 1', borderImageSlice: 1 }}>
              <h3 className="text-3xl mb-6 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Presentation Generation</h3>
              <p className="font-serif text-xl mt-24">Create slides from basic prompts, making presentation design easy.</p>
            </div>
          </Link>
          <Link to="/rating">
            <div className="w-80 h-80 p-5 border-4 border-transparent rounded-lg shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#f6f6fd', borderImage: 'linear-gradient(to right, #ec4899, #a855f7, #6366f1) 1', borderImageSlice: 1 }}>
              <h3 className="text-3xl mb-6 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Presentation Rating</h3>
              <p className="font-serif text-xl mt-24">Get feedback on your slides to improve clarity and impact.</p>
            </div>
          </Link>
          <Link to="/training">
            <div className="w-80 h-80 p-5 border-4 border-transparent rounded-lg shadow-lg transition-transform transform hover:translate-y-1 hover:shadow-xl" style={{ backgroundColor: '#f6f6fd', borderImage: 'linear-gradient(to right, #ec4899, #a855f7, #6366f1) 1', borderImageSlice: 1 }}>
              <h3 className="text-3xl mb-6 font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Presentation Training</h3>
              <p className="font-serif text-xl mt-24">Practice your delivery with tips to boost confidence.</p>
            </div>
          </Link>
        </div>

        {/* End tagline */}
        <div className="text-center text-3xl italic mt-20 font-bold">
          "Master Every Stage of Your Presentation Journey"
        </div>
      </div>
    </>
  );
};

export default SelectionPage;
