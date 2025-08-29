import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
        
        <div className="text-lg font-semibold">
          Gram Panchayat Jobner
        </div>

        <form className="flex w-full max-w-sm md:max-w-md" role="search" onSubmit={e => e.preventDefault()}>
          <input 
            type="search" 
            placeholder="Search..." 
            aria-label="Search"
            className="flex-grow px-3 py-2 rounded-l-md border border-gray-600 bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-md transition-colors"
          >
            Go
          </button>
        </form>

        <div className="flex space-x-6 text-sm md:text-base">
          <a href="https://facebook.com/GramPanchayatJobner" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">Facebook</a>
          <a href="https://twitter.com/GramJobner" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
          <a href="https://instagram.com/GramPanchayatJobner" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">Instagram</a>
          <a href="https://youtube.com/GramPanchayatJobner" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">YouTube</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
