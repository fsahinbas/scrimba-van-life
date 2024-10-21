import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./hostLayout.module.css";

const HostLayout = () => {
  const activeStyle = { fontWeight: "bold", textDecoration: "underline" };
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <NavLink
          to="."
          end
          className={styles.link}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={styles.link}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={styles.link}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={styles.link}
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </main>
  );
};

export default HostLayout;
