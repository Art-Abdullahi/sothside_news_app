import React from "react";
import "../../css/article.css";

const Article = ({ article }) => {
  return (
    <div className="container card mb-3 mt-3">
      <img
        className="card-img-top mt-2"
        src={article.urlToImage}
        alt=""
        height="300"
        style={{ objectFit: "cover" }}
      />

      <div className="card-body">
        <h3 className="card-title">{article.title}</h3>
        <h6>Author: {article.author}</h6>
        <p className="card-text">{article.description}</p>
        <p className="card-text">
          <small className="date">Last updated 3 mins ago</small>
        </p>

        <a href={article.url} className="btn btn-lg btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};
export default Article;
