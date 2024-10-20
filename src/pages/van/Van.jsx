import React from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./van.module.css";
const Van = () => {
  const [van, setVan] = React.useState(null);
  const { id } = useParams();
  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [van]);

  const renderVan = van && (
    <div className={styles.van}>
      <header className={styles.header}>
        <img src="../../assets/images/arrow.png" />
        <Link to="/vans" className={styles.back}>
          Back to all vans
        </Link>
      </header>
      <img src={van.imageUrl} alt={van.name} />
      <div className={`${styles.badge} ${van.type}`}>{van.type}</div>
      <h1 className={styles.title}>{van.name}</h1>
      <p className={styles.price}>
        ${van.price}
        <span>/day</span>
      </p>
      <p>{van.description}</p>
      <div className={styles.btn}>Rent this van</div>
    </div>
  );
  return <div>{van ? renderVan : <h2>Loading...</h2>}</div>;
};

export default Van;
