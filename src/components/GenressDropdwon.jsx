import React from 'react';
import { useMovieContext } from '../contex/MovieContext';
import useFetchGenres from '../hooks/useFetchGenres';
import { fetchMoviesByGenre } from '../api/fetchMoviesByGenre';
import Loading from './Loading';

function GenressDropdown() {
  const { genres , setMovies , movies ,loading} = useMovieContext(); 
  const { error } = useFetchGenres();

 const handleGenreChange = async (e) => {
  const selectedGenreId = e.target.value;
  if (selectedGenreId) {
    const fetchedMovies = await fetchMoviesByGenre(selectedGenreId);
    setMovies(fetchedMovies); 
  }
};

  return (
    <div>
     
      {loading ? (
        <Loading/>
      ) : (
        <select id="genre-select" name="genre" onChange={handleGenreChange}>
          <option value="">Choose a Genre</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default GenressDropdown;
