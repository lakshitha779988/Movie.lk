import { useEffect, useState } from "react";
import { useMovieContext } from "../contex/MovieContext";

const useFetchTrendingMovies = () => {
  const { setMovies ,setTrendingMovie } = useMovieContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrending = async () => {
      setLoading(true);
      setError(null);

      const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkMzU3MDNiZTdkODE2NWVkY2RhMDc1MmZhODAyMyIsIm5iZiI6MTc0Njg0ODc4Ni4yNjcsInN1YiI6IjY4MWVjYzEyYmY2YzIwNTQ4MTdlNzEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLxB6e_IR7ktHIGpYrv38FBBBrLEuTCN7uPTq9SvH9w'
        }
      };

      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setMovies(data.results || []);
        setTrendingMovie(data.results || []);
      } catch (err) {
        console.error("Failed to fetch trending movies", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, [setMovies]);

  return { loading, error };
};

export default useFetchTrendingMovies;
