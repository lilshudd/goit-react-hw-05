import MovieList from "../components/MovieList";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const movies = [];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Search Results</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
