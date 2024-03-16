import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>404 - Page Not Found</h2>
    <p>The page you are looking for does not exist.</p>
    <Link to="/" className={styles.link}>
      Go back to Home
    </Link>
  </div>
);

export default NotFoundPage;
