import React from "react";

const navbar = () => (
    <div>
        <nav id="navbar-example2" className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/home">NYT-React</a>
        <ul className="nav nav-pills">
            <li className="nav-item">
            <a className="nav-link" href="#search">Search</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#savedArticles">Saved Articles</a>
            </li>
        </ul>
        </nav>
    </div>
  );
  
  export default navbar;
  