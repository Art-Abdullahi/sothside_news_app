import React, { useState, useEffect } from "react";
import Article from "./Article";

import Example from "../layouts/Spinner";
const Sports = () => {
  const [articles, setArticles] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetch(
      `http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=794d5828fa2340809a8c2c36592ab198`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      {IsLoading ? (
        <div className="row">
          <div className="col">
            {articles.map((article, index) => (
              <Article key={index} article={article} />
            ))}
          </div>
        </div>
      ) : (
        <Example />
      )}
    </div>
  );
};
export default Sports;
