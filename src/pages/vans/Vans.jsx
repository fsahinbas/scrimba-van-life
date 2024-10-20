import React from "react";
import styles from "./vans.module.css";
import Card from "../../components/card/Card";

const Vans = () => {
  const [vans, setVans] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const renderVans = vans && vans.map((van) => <Card key={van.id} {...van} />);
  return (
    <>
      <h1 className={styles.title}>Explore our van options</h1>
      <div className={styles.filters}>
        <div className={styles.filter}>Simple</div>
        <div className={styles.filter}>Luxury</div>
        <div className={styles.filter}>Rugged</div>
        <a href="#">Clear filters</a>
      </div>
      <div className={styles.vans}>{renderVans}</div>
    </>
  );
};

export default Vans;
