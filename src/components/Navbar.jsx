import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-white text-black shadow-xl relative z-50 sticky top-0">
      <div className="container mx-auto px-4 md:px-20 flex items-center justify-between h-16">
        
        <div className="text-xl font-bold">
          Gram Panchayat Jobner
        </div>

        {/* Hamburger button (shown on small screens) */}
        <button 
          className="md:hidden flex flex-col justify-between w-6 h-6 focus:outline-none" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 bg-black rounded transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 bg-black rounded transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block h-0.5 bg-black rounded transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Nav links */}
        <ul className={`flex flex-col md:flex-row md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-transform transform md:translate-x-0 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}>
          <li className="border-b md:border-none border-gray-200">
            <Link 
              to="/" 
              onClick={closeMenu} 
              className="block px-4 py-2 md:py-0 hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li className="border-b md:border-none border-gray-200">
            <Link 
              to="/about" 
              onClick={closeMenu} 
              className="block px-4 py-2 md:py-0 hover:text-blue-600"
            >
              About
            </Link>
          </li>
          <li className="border-b md:border-none border-gray-200">
            <Link 
              to="/gallery" 
              onClick={closeMenu} 
              className="block px-4 py-2 md:py-0 hover:text-blue-600"
            >
              Gallery
            </Link>
          </li>
          <li className="border-b md:border-none border-gray-200">
            <Link 
              to="/news" 
              onClick={closeMenu} 
              className="block px-4 py-2 md:py-0 hover:text-blue-600"
            >
              News & Updates
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
