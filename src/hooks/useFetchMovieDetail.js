// useFetchMovieDetail.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMovieContext } from '../contex/MovieContext';

const useFetchMovieDetail = (movieId) => {
  const {setMovies,setLoading } = useMovieContext();
  const [error, setError] = useState(null);

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

const HEADERS = {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkMzU3MDNiZTdkODE2NWVkY2RhMDc1MmZhODAyMyIsIm5iZiI6MTc0Njg0ODc4Ni4yNjcsInN1YiI6IjY4MWVjYzEyYmY2YzIwNTQ4MTdlNzEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLxB6e_IR7ktHIGpYrv38FBBBrLEuTCN7uPTq9SvH9w'
};

   useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL, { headers: HEADERS });
        
        setMovies(response.data.results);
      } catch (err) {
        console.error('Failed to fetch popular movies:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { error };
};

export default useFetchMovieDetail;
