import styles from "./notFound.module.css";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/" className={styles.btn}>
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;
