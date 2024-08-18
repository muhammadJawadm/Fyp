import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Stocknews.css';

const Stocksnews = () => {
  const [trendingNewsData, setTrendingNewsData] = useState([]);

  useEffect(() => {
    const fetchTrendingNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=09da65e4a33d4cf5be56e5a804142581');
        const data = await response.json();
        
        // Only set the first 8 articles
        setTrendingNewsData(Array.isArray(data.articles) ? data.articles.slice(0, 8) : []);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchTrendingNews();
  }, []);

  return (
    <div className="Card card-round">
      <div className="trending-analysis">
        <h2>Trending Analysis</h2>
        {trendingNewsData.map((item, index) => (
          <div className="trending-item" key={index}>
            <img src={item.urlToImage} alt="Trending" />
            <Link to="/newsDetail" state={{ heading: item.title, image: item.urlToImage, text: item.description }}>
              <p>{item.title}</p>
            </Link>
          </div>
        ))}
        <Link to="/Newslist">See More</Link>
      </div>
    </div>
  );
};

export default Stocksnews;
