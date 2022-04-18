import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Film not found</h2>
      <Link to="/films">← Go back to films</Link>
      <img
        src="https://elcomercio.pe/resizer/-gvBmvD4BKqDQifZhF05U873bBU=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/6QM6JEO7SZBI7JEWK423MBCTJM.jpg"
        alt="Not Found"
      />
    </div>
  );
};

export default NotFound;