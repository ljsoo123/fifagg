import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./Profile";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/profile/:nickname" component={Profile} />
    </Router>
  );
};

export default App;
