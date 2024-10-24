import React from "react";
import styles from "./vans.module.css";
import Card from "../../components/card/Card";
import { useSearchParams } from "react-router-dom";
import { getVans } from "../../api";

const Vans = () => {
  const [vans, setVans] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [searchParams, setSearhParams] = useSearchParams();

  const loadVans = async () => {
    setLoading(true);
    try {
      const data = await getVans();
      setVans(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadVans();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>There was an error: {error.message}</h2>;
  }
  const filteredVans = searchParams.get("type")
    ? vans.filter((van) => van.type === searchParams.get("type"))
    : vans;

  const renderVans =
    filteredVans && filteredVans.map((van) => <Card key={van.id} {...van} />);
  return (
    <>
      <h1 className={styles.title}>Explore our van options</h1>
      <div className={styles.filters}>
        <button
          className={`${styles.filter} ${styles.simple}`}
          onClick={() => setSearhParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className={`${styles.filter} ${styles.luxury}`}
          onClick={() => setSearhParams({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          className={`${styles.filter} ${styles.rugged}`}
          onClick={() => setSearhParams({ type: "rugged" })}
        >
          Rugged
        </button>
        {searchParams.get("type") && (
          <button onClick={() => setSearhParams({})} className={styles.clear}>
            Clear filters
          </button>
        )}
      </div>
      <div className={styles.vans}>{renderVans}</div>
    </>
  );
};

export default Vans;
