import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './TrendingSection.css';

const TrendingSection = () => {
  const [trendingNews, setTrendingNews] = useState([]);

  useEffect(() => {
    // Fetch trending news data
    fetch('http://localhost:3002/trending-news')
      .then(response => response.json())
      .then(data => setTrendingNews(data))
      .catch(error => console.error('Error fetching trending news:', error));
  }, []);

  return (
    <div className="trending-section">
      <div className="trending-news">
        <h2>Trending News Articles</h2>
        {trendingNews.map((item) => (
          <div className="trending-news-item" key={item.id}>
            <img src={item.content_picture} alt={'news'} />
            <Link to={`/newsDetail/${item.id}`}>
              <p>{item.title}</p>
            </Link>
          </div>
        ))}
        <a href="#" className="more-link">More »</a>
      </div>
    </div>
  );
};

export default TrendingSection;
