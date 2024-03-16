import MovieList from "../components/MovieList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const movies = [];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trending Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
