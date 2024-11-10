// Shimmer.js
import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex flex-col items-center">
      
      {/* Shimmering cards */}
      <div className="grid grid-cols-5 gap-2 w-full">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="relative w-60 h-64 my-3 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            <div className="absolute inset-0 bg-gray-300 opacity-60"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
