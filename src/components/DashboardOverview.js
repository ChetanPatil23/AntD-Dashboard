import React from "react";
import "./DashboardOverview.css";
import OverviewCard from "./OverviewCard";

const DashboardOverview = () => {
  return (
    <div className="overview">
      <div className="left flex">
        <div>
          <OverviewCard title={"Total Groups Inventive"} value={12} />
          <OverviewCard title={"Total Groups"} value={123} />
        </div>
        <div>
          <OverviewCard title={"Total Inactive Vendors Counts"} value={10} />
          <OverviewCard title={"Total Groups"} value={91} />
        </div>
      </div>
      <div className="center flex">
        <div>
          <OverviewCard title={"Total Groups"} value={51} />
          <OverviewCard title={"Total Groups"} value={21} />
        </div>
        <div>
          <OverviewCard title={"Total Groups"} value={111} />
          <OverviewCard title={"Total Groups"} value={231} />
        </div>
      </div>
      <div className="right flex">
        <div>
          <OverviewCard title={"Total Groups"} value={901} />
          <OverviewCard title={"Total Groups"} value={111} />
        </div>
        <div>
          <OverviewCard title={"Total Groups"} value={21} />
          <OverviewCard title={"Total Groups"} value={81} />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
