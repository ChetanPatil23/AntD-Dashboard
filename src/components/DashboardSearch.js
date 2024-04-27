import React from "react";
import "./DashboardSearch.css";

const DashboardSearch = () => {
  return (
    <div className="dashboard-search">
      <span>
        <b style={{ fontSize: "16px" }}>Client Group / Legal Entity</b>
      </span>
      <input type="text" className="dashboard-input" placeholder="Search All" />
      <button className="dashboard-btn">Search</button>
      <div className="dashboard-pagination">
        <div>
          <span>Showing 1 to 2 of 2 entries</span>
          <span>|</span>
          <span>Show</span>
          <select className="paginate-select">
            <option>10</option>
            <option>20</option>
          </select>
          <span>entries</span>
        </div>
        <div className="paginate-btnList">
          <button>First</button>
          <button>Previous</button>
          <button>1</button>
          <button>Next</button>
          <button>Last</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSearch;
