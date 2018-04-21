import React from "react";

const query = () => (
    <div>
        <form>
            <p>Topic</p>
            <input type="text" id="searchTerm"></input>
            <p>Start Year</p>
            <input type="text" id="searchTerm"></input>
            <p>End Year</p>
            <input type="text" id="searchTerm"></input>
            <button type="submit" className="btn btn-primary">Search</button>
        </form>        
    </div>
);
  
export default query;