import React from "react";
import { useParams, Outlet, Link, NavLink } from "react-router-dom";
import styles from "./hostVanDetails.module.css";
const HostVanDetails = () => {
  const { id } = useParams();
  const [van, setVan] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/host/vans/" + id)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);
  if (!van) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <header className={styles.header}>
        <img src="../../assets/images/arrow.png" />
        <Link to=".." relative="path" className={styles.back}>
          Back to all vans
        </Link>
      </header>
      <div className={styles.container}>
        <img src={van.imageUrl} alt={van.name} className={styles.image} />
        <div className={styles.content}>
          <div className={`${styles.badge} ${van.type}`}>{van.type}</div>
          <h1 className={styles.title}>{van.name}</h1>
          <p className={styles.price}>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </div>
      <nav className={styles.nav}>
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Details
        </NavLink>
        <NavLink
          to="pricing"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Pricing
        </NavLink>
        <NavLink
          to="photos"
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          Photos
        </NavLink>
      </nav>
      <Outlet context={{ van }} />
    </>
  );
};

export default HostVanDetails;
