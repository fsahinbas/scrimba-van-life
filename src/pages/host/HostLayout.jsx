import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./hostLayout.module.css";

const HostLayout = () => {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <NavLink
          to="."
          end
          className={styles.link}
          style={({ isActive }) => (isActive ? styles.active : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={styles.link}
          style={({ isActive }) => (isActive ? styles.active : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={styles.link}
          style={({ isActive }) => (isActive ? styles.active : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={styles.link}
          style={({ isActive }) => (isActive ? styles.active : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </main>
  );
};

export default HostLayout;
