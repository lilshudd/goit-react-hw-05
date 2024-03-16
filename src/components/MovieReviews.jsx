import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MovieReviews.module.css";

const MovieReviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZGNkOGM5YWQwMjQzZThkMDE2OWI2MzUxMGIwNmRhZCIsInN1",
            },
          }
        );
        setReviews(response.data.results);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {reviews.map((review) => (
        <li key={review.id} className={styles.item}>
          <h4 className={styles.author}>Author: {review.author}</h4>
          <p className={styles.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

MovieReviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieReviews;
