import PropTypes from "prop-types";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.item}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className={styles.image}
          />
          <p className={styles.title}>{movie.title}</p>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
