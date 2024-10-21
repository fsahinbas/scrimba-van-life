import React from "react";
import styles from "./hostVans.module.css";
import HostCard from "../../../components/hostCard/HostCard";

const HostVans = () => {
  const [vans, setVans] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  });
  const renderVans =
    vans && vans.map((van) => <HostCard key={van.id} {...van} />);
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Your listed vans</h1>
      {renderVans}
    </main>
  );
};

export default HostVans;
