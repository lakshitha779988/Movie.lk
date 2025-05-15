import fetchMovieImages from "./fetchMovieImages";

const fetchTrendingMovies = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkMzU3MDNiZTdkODE2NWVkY2RhMDc1MmZhODAyMyIsIm5iZiI6MTc0Njg0ODc4Ni4yNjcsInN1YiI6IjY4MWVjYzEyYmY2YzIwNTQ4MTdlNzEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLxB6e_IR7ktHIGpYrv38FBBBrLEuTCN7uPTq9SvH9w'
    }
  };

  const response = await fetch(url, options);
  const data = await response.json();
  const movies = data.results;

  // For each movie, fetch and attach its images
  const moviesWithImages = await Promise.all(
    movies.map(async (movie) => {
      const images = await fetchMovieImages(movie.id); // assumes fetchMovieImages takes movie ID
      return {
        ...movie,
        images,
      };
    })
  );

  return moviesWithImages;
};

export default fetchTrendingMovies;
