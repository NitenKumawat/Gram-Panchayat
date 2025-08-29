import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import GalleryPage from './pages/GalleryPage';
import NewsDetailPage from './pages/NewsDetailPage';
import NewsAndUpdate from './pages/NewsAndUpdate';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app-layout min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto">
          <div className="page-container bg-white rounded">
            <div className="px-2 md:px-20">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/news" element={<NewsAndUpdate/>} />
                <Route path="/news/:id" element={<NewsDetailPage />} />
                <Route
                  path="/settings"
                  element={<div className="page-content text-gray-700 text-lg">Settings Page</div>}
                />
                <Route
                  path="/profile"
                  element={<div className="page-content text-gray-700 text-lg">Profile Page</div>}
                />
              </Routes>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
