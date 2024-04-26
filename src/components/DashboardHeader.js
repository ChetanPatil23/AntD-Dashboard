import React from "react";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header" style={{display:"flex",alignItems:"center",height:"100%"}}>
      <h1 style={{ flex: 1, color: "Orange", }}>SIMPLIANCE</h1>
      <h3 style={{ flex: 1, textAlign: "left", color:"white" }}>Service Provider Module</h3>
    </div>
  );
};

export default DashboardHeader;
