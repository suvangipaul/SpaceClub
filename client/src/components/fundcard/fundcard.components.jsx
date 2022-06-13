import React from "react";
import "./fundcard.styles.css";

const Fundcard = () => {
  return (
    <div className="fund-card">
      <div className="funding-details yellow">
        <h2>Total Donatation</h2>
        <div className="fund-number">
          <h1>$2,501,320</h1>
          <p>updated 1d ago</p>
        </div>
        <h3>+3.21 then last month</h3>
      </div>

      <div className="funding-details light">
        <h2>Total Donatation</h2>
        <div className="fund-number">
          <h1>$2,501,320</h1>
          <p>updated 1d ago</p>
        </div>
        <h3>+3.21 then last month</h3>
      </div>

      <div className="funding-details light">
        <h2>Total Donatation</h2>
        <div className="fund-number">
          <h1>$2,501,320</h1>
          <p>updated 1d ago</p>
        </div>
        <h3>+3.21 then last month</h3>
      </div>
    </div>
  );
};

export default Fundcard;
