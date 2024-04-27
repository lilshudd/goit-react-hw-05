import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import MovieCast from "../components/MovieCast";
import MovieReviews from "../components/MovieReviews";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const previousPageRef = useRef(location.state ? location.state.from : "/");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: {
              api_key: "5dcd8c9ad0243e8d0169b63510b06dad",
              language: "en-US",
            },
          }
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  useEffect(() => {
    if (location.state && location.state.from) {
      previousPageRef.current = location.state.from;
    }
  }, [location.state]);

  const handleToggleCast = () => {
    setShowCast(!showCast);
    setShowReviews(false);
  };

  const handleToggleReviews = () => {
    setShowReviews(!showReviews);
    setShowCast(false);
  };

  const handleGoBack = () => {
    navigate(previousPageRef.current);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleGoBack}>Go back</button>
      {movieDetails ? (
        <>
          <h2 className={styles.title}>{movieDetails.title}</h2>
          <div className={styles.details}>
            {movieDetails.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
                className={styles.poster}
              />
            )}
            <p>User Score: {movieDetails.vote_average}</p>
            <p>Overview: {movieDetails.overview}</p>
            <p>
              Genres:{" "}
              {movieDetails.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div className={styles.cast}>
            <h3 onClick={handleToggleCast}>Cast</h3>
            {showCast && <MovieCast movieId={parseInt(movieId)} />}
          </div>
          <div className={styles.reviews}>
            <h3 onClick={handleToggleReviews}>Reviews</h3>
            {showReviews && <MovieReviews movieId={parseInt(movieId)} />}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MovieDetailsPage;
