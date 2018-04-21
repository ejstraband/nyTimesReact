  import React from "react";
import Navbar from "./components/navbar";
import Query from "./components/query";
import Results from "./components/results";
import Search from "./components/Search";
import Welcome from "./components/welcome";

const App = () => (
  <div>
    <Navbar />
    <Welcome />
    <Query />
    <Results />
    <Navbar />
  </div>
);

export default App;