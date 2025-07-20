import React from 'react';
import error from '../../assets/images/error/error.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
            <img
                src={error}
                alt="404 Not Found"
                className="w-full max-w-xl mb-8"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page not found</h1>
            <p className="text-gray-500 mb-6">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn bg-[#FF3811] text-white hover:bg-[#e2340f]">
                Go back Home
            </Link>
        </div>
    );
};

export default Error;