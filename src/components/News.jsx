import React, { useEffect, useState } from "react";
import techImg from "../assets/images/tech.jpg";
import worldImg from "../assets/images/world.jpg";
import sportsImg from "../assets/images/sports.jpg";
import scienceImg from "../assets/images/science.jpg";
import healthImg from "../assets/images/health.jpg";
import entertainmentImg from "../assets/images/entertainment.jpg";
import nationImg from "../assets/images/nation.jpg";
import noImg from "../assets/images/no-img.png";
import "./News.css";
import axios from "axios";
const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
  "nation",
];
const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    const fetchNews = async () => {
      
      const url =
        `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=26a5b47551e2fa5bd7e7f0a8ca5a90a9`;
      const response = await axios.get(url);
      const fetchedNews = response.data.articles;
      fetchedNews.forEach((article) => {
        if (!article.image) {
          article.image = noImg;
        }
      });
      setHeadline(fetchedNews[0]);
      setNews(fetchedNews.slice(1, 7));
      console.log(news);
    };
    fetchNews();
  }, [selectedCategory]);

  const handleCategoryClick = (e, category) => {
    console.log(category)
    e.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <div className="news-app">
      <div className="news-header">
        <h1 className="logo">News App</h1>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <h1 className="nav-heading">Categories</h1>
          <div className="categories">
            {categories.map((category) => (
              <a
                href="#"
                className="nav-link"
                key={category}
                onClick={(e) => handleCategoryClick(e, category)}
              >
               {category}
              </a>
            ))}

            {/* <a href="#" className="nav-link">
              World
            </a>
            <a href="#" className="nav-link">
              Business
            </a>
            <a href="#" className="nav-link">
              Technology
            </a>
            <a href="#" className="nav-link">
              Entertainment
            </a>
            <a href="#" className="nav-link">
              Sports
            </a>
            <a href="#" className="nav-link">
              Science
            </a> */}
            {/* <a href="#" className="nav-link">
              Health
            </a>
            <a href="#" className="nav-link">
              Nation
            </a> */}
          </div>
        </nav>
        <div className="news-section">
          {headline && (
            <div className="headline">
              <img src={headline.image || noImg} alt={headline.title} />
              <h2 className="headline-title">{headline.title}</h2>
            </div>
          )}

          <div className="news-grid">
            {news.map((article, index) => (
              <div className="news-grid-item" key={index}>
                <img src={article.image || noImg} alt={article.title} />
                <h3>{article.title}</h3>
              </div>
            ))}

            {/* <div className="news-grid-item">
              <img src={sportsImg} alt="News Img" />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <div className="news-grid-item">
              <img src={scienceImg} alt="News Img" />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <div className="news-grid-item">
              <img src={healthImg} alt="News Img" />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <div className="news-grid-item"> */}
            {/* <img src={entertainmentImg} alt="News Img" />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div>
            <div className="news-grid-item">
              <img src={nationImg} alt="News Img" />
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            </div> */}
          </div>
        </div>
      </div>
      <footer>
        <p className="copyright">
          <span>News App</span>
        </p>
        <p>&copy; All Rights Reserved.By Sweety</p>
      </footer>
    </div>
  );
};

export default News;
