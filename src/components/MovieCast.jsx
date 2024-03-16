import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MovieCast.module.css";

const MovieCast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGNkOGM5YWQwMjQzZThkMDE2OWI2MzUxMGIwNmRhZCIsInN1",
            },
          }
        );
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {cast.map((actor) => (
        <li key={actor.id} className={styles.item}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
            className={styles.image}
          />
          <p className={styles.name}>{actor.name}</p>
          <p className={styles.character}>as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

MovieCast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCast;
