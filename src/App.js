import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import TopHeadlines from "./components/pages/TopHeadlines";
import Tech from "./components/pages/Tech";
import Business from "./components/pages/Business";
import Sports from "./components/pages/Sports";
import Science from "./components/pages/Science";
import Health from "./components/pages/Health";
import Details from "./components/pages/Details";
import Article from "./components/pages/Article";
import Entertainment from "./components/pages/Entertainment";
import NotFound from "./components/pages/NotFound";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={TopHeadlines} />
        <Route path="/technology" component={Tech} />
        <Route path="/business" component={Business} />
        <Route path="/sports" component={Sports} />
        <Route path="/health" component={Health} />
        <Route path="/science" component={Science} />
        <Route path="/entertainment" component={Entertainment} />
        <Route path="/details" component={Details} />
        <Route path="/article" component={Article} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
