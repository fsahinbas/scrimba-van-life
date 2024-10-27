import React from "react";
import styles from "./head.module.css";
import { Link, NavLink } from "react-router-dom";
import About from "../../pages/about/About";
import Vans from "../../pages/vans/Vans";
import Dashboard from "../../pages/host/dashboard/Dashboard";
import avatar from "/assets/images/avatar.png";
const Head = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        #VANLIFE
      </Link>
      <nav className={styles.nav}>
        <NavLink
          to="/host"
          element={<Dashboard />}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          element={<About />}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          element={<Vans />}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Vans
        </NavLink>
        <NavLink to={"/login"}>
          <img src={avatar} alt="avatar" className={styles.avatar} />
        </NavLink>
      </nav>
    </header>
  );
};

export default Head;
