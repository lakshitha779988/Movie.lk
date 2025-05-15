import axios from "axios";
import { useMovieContext } from "../contex/MovieContext";

export const fetchMoviesByGenre = async (genreId) => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`;

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkMzU3MDNiZTdkODE2NWVkY2RhMDc1MmZhODAyMyIsIm5iZiI6MTc0Njg0ODc4Ni4yNjcsInN1YiI6IjY4MWVjYzEyYmY2YzIwNTQ4MTdlNzEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLxB6e_IR7ktHIGpYrv38FBBBrLEuTCN7uPTq9SvH9w",
    },
  };

  try {
    const response = await axios.get(url, options);
    console.log("Fetched Movies:", response.data.results);
    return response.data.results || [];
  } catch (err) {
    console.error("Error fetching movies by genre:", err);
    return [];
  }
};
