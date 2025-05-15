// src/hooks/useFetchMovieFullDetail.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useMovieContext } from '../contex/MovieContext';

const useFetchMovieFullDetail = (movieId) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const { setLoading } = useMovieContext();
  const [error, setError] = useState(null);

  const API_URL = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const HEADERS = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkMzU3MDNiZTdkODE2NWVkY2RhMDc1MmZhODAyMyIsIm5iZiI6MTc0Njg0ODc4Ni4yNjcsInN1YiI6IjY4MWVjYzEyYmY2YzIwNTQ4MTdlNzEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLxB6e_IR7ktHIGpYrv38FBBBrLEuTCN7uPTq9SvH9w'
  };

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetail = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL, { headers: HEADERS });
  
        setMovieDetail(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch full movie detail:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  return { movieDetail, error };
};

export default useFetchMovieFullDetail;
