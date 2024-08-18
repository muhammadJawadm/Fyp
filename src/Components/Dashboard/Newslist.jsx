import React, { useEffect, useState } from 'react';
import './NewsItem.css';

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=09da65e4a33d4cf5be56e5a804142581');
        const data = await response.json();
        
        setNewsData(Array.isArray(data.articles) ? data.articles.slice(0, 20) : []);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  const NewsItem = ({ news }) => {
    return (
      <div className="news-item">
        <img src={news.urlToImage || 'https://via.placeholder.com/150'} alt="news" className="news-image" />
        <div className="news-content">
          <h3 className="news-title">{news.title}</h3>
          <p className="news-description">{news.description}</p>
          <p className="news-meta">By {news.source.name} &bull; {new Date(news.publishedAt).toLocaleTimeString()}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="news-container">
      <h2 className="news-heading">Stock Market News</h2>
      {newsData.map((news, index) => (
        <NewsItem key={index} news={news} />
      ))}
    </div>
  );
};

export default NewsList;
