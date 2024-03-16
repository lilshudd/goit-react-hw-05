import { useParams } from "react-router-dom";
import MovieCast from "../components/MovieCast";
import MovieReviews from "../components/MovieReviews";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const movieDetails = {};

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{movieDetails.title}</h2>
      <div className={styles.content}>
        <div className={styles.details}>
          <p>{movieDetails.overview}</p>
          <p>Release date: {movieDetails.release_date}</p>
        </div>
        <div className={styles.cast}>
          <h3>Cast</h3>
          <MovieCast movieId={movieId} />
        </div>
        <div className={styles.reviews}>
          <h3>Reviews</h3>
          <MovieReviews movieId={movieId} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
