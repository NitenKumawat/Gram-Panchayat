import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ id, image, title, excerpt, date }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full mb-2">
      <img src={image} alt={title} className="w-full h-48 object-cover flex-shrink-0" />
      <div className="p-4 flex flex-col flex-grow min-h-[180px]">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 flex-grow overflow-hidden">{excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <span>{new Date(date).toLocaleDateString()}</span>
          <Link
            to={`/news/${id}`}
            className="text-blue-600 hover:underline"
          >
            View Full News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
