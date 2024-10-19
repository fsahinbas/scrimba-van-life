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

  const renderVans = vans && vans.map((van) => <Card key={van.id} />);
  return <div className={styles.vans}>{renderVans}</div>;
};

export default Vans;
