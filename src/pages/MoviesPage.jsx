import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import MovieList from "../components/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: "5dcd8c9ad0243e8d0169b63510b06dad",
              language: "en-US",
              query: searchQuery,
              page: 1,
            },
          }
        );
        setMovies(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  useEffect(() => {
    const query = searchParams.get("query");
    if (query !== null) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    searchParams.set("query", event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {isLoading ? <div>Loading...</div> : <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
