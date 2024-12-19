import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div 
        id="loginform" 
        className="bg-white w-full max-w-lg p-5 shadow-lg rounded-lg border-8 border-transparent bg-clip-padding mt-24"
        style={{ borderImage: 'linear-gradient(to right, #ec4899, #a855f7, #6366f1) 1', borderImageSlice: 1 }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login to Your Account</h3>
        <form className="space-y-6">
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
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-lg font-medium text-gray-900">Remember me</label>
            </div>
            <a href="#" className="text-sm text-violet-500 hover:text-violet-700">Forgot Password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-lg shadow-md hover:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition duration-300 font-bold"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">Don't have an account? 
              <Link to="/signup" className="text-violet-500 hover:text-violet-700"> Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
