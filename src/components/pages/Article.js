import React from "react";
import "../../css/article.css";
import test from "../../images/hotdogs.jpg";
import { Link } from "react-router-dom";
function Article() {
  return (
    <div className="container card mb-3 mt-3">
      <img
        className="card-img-top mt-2"
        src={test}
        alt=""
        height="300"
        style={{ objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title">
          Newest iPhone SE is Apple's most affordable phone but doesn't feel
          cheap - CNET
        </h5>
        <p className="card-text">
          Commentary: Apple wisely designed the new SE to have the same appeal
          as the original from 2016.
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
        <Link to="/details">
          <button className="btn btn-lg btn-primary">Read More</button>
        </Link>
      </div>
    </div>
  );
}
export default Article;
