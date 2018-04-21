import React from "react";

const results = () => (
    <div>
      <h2>Results</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Save</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Article 1</td>
            <td><button>Save</button></td>
          </tr>
          <tr>
          <th scope="row">2</th>
            <td>Article 1</td>
            <td><button>Save</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Article 3</td>
            <td><button>Save</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  export default results;