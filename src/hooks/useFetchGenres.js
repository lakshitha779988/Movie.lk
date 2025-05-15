import { useEffect, useState } from "react";
import axios from "axios";
import { useMovieContext } from "../contex/MovieContext";

const useFetchGenres = () => {
  const { setGenres ,setLoading } = useMovieContext();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      setLoading(true);
      setError(null);

      const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
      const options = {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkMzU3MDNiZTdkODE2NWVkY2RhMDc1MmZhODAyMyIsIm5iZiI6MTc0Njg0ODc4Ni4yNjcsInN1YiI6IjY4MWVjYzEyYmY2YzIwNTQ4MTdlNzEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLxB6e_IR7ktHIGpYrv38FBBBrLEuTCN7uPTq9SvH9w'
        }
      };

      try {
        const response = await axios.get(url, options);
        console.log(response.data.genres);      
        setGenres(response.data.genres);         
      } catch (err) {
        console.error("Error fetching genres:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return {  error };
};

export default useFetchGenres;
