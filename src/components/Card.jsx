// src/components/Card.js
import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-md overflow-hidden shadow-lg mb-4">
      <img
        className="w-40 h-44 object-cover"
        src="https://via.placeholder.com/400x200"
        alt="Card"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        
        {/* Circular Avatar */}
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src="https://via.placeholder.com/40"
            alt="Avatar"
          />
          <p className="text-gray-600">Author Name</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
