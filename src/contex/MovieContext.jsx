import { createContext, useState, useContext } from 'react';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
   const [trendingMovie, setTrendingMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <MovieContext.Provider value={{ movies, setMovies, genres, setGenres, trendingMovie ,setTrendingMovie ,loading, setLoading}}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
