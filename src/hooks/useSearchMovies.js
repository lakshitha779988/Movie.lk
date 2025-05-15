import { useState, useEffect } from 'react';
import { useMovieContext } from '../contex/MovieContext';

const useSearchMovies = (query) => {
  const { setMovies,setLoading } = useMovieContext();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return; // Don't fetch if no query

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=1&language=en-US`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkMzU3MDNiZTdkODE2NWVkY2RhMDc1MmZhODAyMyIsIm5iZiI6MTc0Njg0ODc4Ni4yNjcsInN1YiI6IjY4MWVjYzEyYmY2YzIwNTQ4MTdlNzEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLxB6e_IR7ktHIGpYrv38FBBBrLEuTCN7uPTq9SvH9w'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]); // Runs when query changes

  return {error };
};

export default useSearchMovies;
