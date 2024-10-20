import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./hostLayout.module.css";

const HostLayout = () => {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/host" className={styles.link}>
          Dashboard
        </Link>
        <Link to="/host/income" className={styles.link}>
          Income
        </Link>
        <Link to="/host/reviews" className={styles.link}>
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
