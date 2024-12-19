import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div 
        id="signupform" 
        className="bg-white w-full max-w-lg p-5 shadow-lg rounded-lg border-8 border-transparent bg-clip-padding mt-24"
        style={{ borderImage: 'linear-gradient(to right, #ec4899, #a855f7, #6366f1) 1', borderImageSlice: 1 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Your Account</h3>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-900">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-900">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-900">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-900">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              className="mr-2"
              required
            />
            <label htmlFor="agreeTerms" className="text-lg font-medium text-gray-900">I agree to the terms and conditions</label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-lg shadow-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition duration-300 font-bold"
          >
            Sign Up
          </button>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">Already have an account? 
              <a href="/login" className="text-violet-500 hover:text-violet-700"> Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
