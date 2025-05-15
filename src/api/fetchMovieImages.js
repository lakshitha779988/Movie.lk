import axios from 'axios';

const fetchMovieImages = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/images`;

  try {
    const response = await axios.get(url, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkMzU3MDNiZTdkODE2NWVkY2RhMDc1MmZhODAyMyIsIm5iZiI6MTc0Njg0ODc4Ni4yNjcsInN1YiI6IjY4MWVjYzEyYmY2YzIwNTQ4MTdlNzEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLxB6e_IR7ktHIGpYrv38FBBBrLEuTCN7uPTq9SvH9w',
      },
    });

    // You will get { backdrops: [...], posters: [...], etc. }
    return response.data.backdrops; 
  } catch (error) {
    console.error('Failed to fetch movie images:', error);
    return [];
  }
};

export default fetchMovieImages;
