import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { getHostVans } from "../../../api";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [vans, setVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    getHostVans()
      .then((data) => setVans(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div className={styles.single} key={van.id}>
        <img
          src={van.imageUrl}
          alt={`Photo of ${van.name}`}
          className={styles.singleImg}
        />
        <div className={styles.info}>
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <Link to={`vans/${van.id}`} className={styles.link}>
          View
        </Link>
      </div>
    ));

    return (
      <div className={styles.list}>
        <section className={styles.vans}>{hostVansEls}</section>
      </div>
    );
  }

  // if (loading) {
  //     return <h1>Loading...</h1>
  // }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <section className={styles.earnings}>
        <div className={styles.info}>
          <h1>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
          <h2>$2,260</h2>
        </div>
        <Link to="income" className={styles.link}>
          Details
        </Link>
      </section>
      <section className={styles.reviews}>
        <h2>Review score</h2>

        <BsStarFill className={styles.star} />

        <p>
          <span>5.0</span>/5
        </p>
        <Link to="reviews" className={styles.link}>
          Details
        </Link>
      </section>
      <section className={styles.vans}>
        <div className={styles.top}>
          <h2>Your listed vans</h2>
          <Link to="vans" className={styles.link}>
            View all
          </Link>
        </div>
        {loading && !vans ? (
          <h1>Loading...</h1>
        ) : (
          <>{renderVanElements(vans)}</>
        )}
        {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>*/}
      </section>
    </>
  );
}
