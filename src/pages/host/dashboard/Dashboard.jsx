import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <div>
        Dashboard
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
