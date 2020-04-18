import React, { useState, useEffect } from "react";
import Article from "./Article";
import "../../css/article.css";

const Business = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=794d5828fa2340809a8c2c36592ab198`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Business;
