import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import newsItems from '../Mock/news';

const NewsHighlight = ({ news, index }) => (
  <div
    key={news.id}
    className={`absolute inset-0 transition-opacity duration-1000 ${
      index === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
      <img
        src={news.image}
        alt={news.title}
        className="w-full md:w-1/2 h-64 object-cover"
      />
      <div className="p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">{news.title}</h3>
        <p className="text-gray-700 mb-4">{news.excerpt}</p>
        <span className="text-sm text-gray-500">{new Date(news.date).toLocaleDateString()}</span>
      </div>
    </div>
  </div>
);

const NewsAndUpdate = () => {
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const highlightedNews = newsItems[highlightIndex];
  const otherNews = newsItems.filter((_, i) => i !== highlightIndex);

  return (
    <section className="py-12 bg-gray-50 min-h-screen  mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest News & Updates</h2>

      {/* Highlighted news auto dropdown */}
      <div className="relative h-72 mb-12 hidden md:block">
        {newsItems.map((news, i) => (
          <NewsHighlight news={news} index={i === highlightIndex ? 0 : 1} key={news.id} />
        ))}
      </div>

      {/* Other news cards (non-swiper) grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherNews.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>
    </section>
  );
};

export default NewsAndUpdate;
