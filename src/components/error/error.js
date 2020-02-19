import React from "react";
import "./error.css";

const Error = ({ error }) => {
  return (
    <div className="person-details card">
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <h2 className="term">УуупсАринУпса</h2>
        </li>
        <li className="list-group-item">
          <span>{error}</span>
        </li>
      </ul>
    </div>
  );
};

export default Error;
