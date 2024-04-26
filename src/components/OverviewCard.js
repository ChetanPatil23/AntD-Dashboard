import React from "react";
import "./OverviewCard.css";

const OverviewCard = (props) => {
  const { title, icon, value } = props;
  return (
    <div className="overview-card">
      <div className="overview-content">
        <div style={{ paddingTop: "5px" }}>
          <h4 style={{ height: "40px", width: "120px" }}>{title}</h4>
          <div>
            <span>Icon</span>
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
              {value}
            </span>
          </div>
        </div>
        <div style={{ background: "green", width: "10px" }}></div>
      </div>
    </div>
  );
};

export default OverviewCard;
