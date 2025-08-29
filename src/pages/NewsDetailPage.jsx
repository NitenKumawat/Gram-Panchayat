import React from 'react';
import { useParams, Link } from 'react-router-dom';
import newsItems from '../Mock/news';


const NewsDetailPage = () => {
  const { id } = useParams();
  const news = newsItems.find((item) => item.id === id);

  if (!news) {
    return <div className="p-8 text-center text-gray-700">News not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/news" className="text-blue-600 hover:underline">&larr; Back to News</Link>
      <h1 className="text-4xl font-bold my-6">{news.title}</h1>
      <img src={news.image} alt={news.title} className="w-full h-64 object-cover rounded mb-6" />
      <p className="text-gray-700 mb-4">{news.content}</p>
      <p className="text-sm text-gray-500">Published on {new Date(news.date).toLocaleDateString()}</p>
    </div>
  );
};

export default NewsDetailPage;
