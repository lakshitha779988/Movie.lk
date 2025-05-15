import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useMovieContext } from '../contex/MovieContext';

function Searchbar() {
  const [query, setQuery] = useState('');
  const { setMovies } = useMovieContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=1&language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjdkMzU3MDNiZTdkODE2NWVkY2RhMDc1MmZhODAyMyIsIm5iZiI6MTc0Njg0ODc4Ni4yNjcsInN1YiI6IjY4MWVjYzEyYmY2YzIwNTQ4MTdlNzEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QLxB6e_IR7ktHIGpYrv38FBBBrLEuTCN7uPTq9SvH9w'
      }
    };

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (err) {
      console.error('Search failed', err);
      setError(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 w-full max-w-md">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="submit"
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full transition-all duration-200 cursor-pointer "
      >
        {loading ? (
          <span className="animate-pulse">Searching...</span>
        ) : (
          <>
            <FaSearch />
            <span className="hidden sm:inline">Search</span>
          </>
        )}
      </button>
      {error && (
        <p className="text-red-600 text-sm ml-2">Search failed: {error.message}</p>
      )}
    </form>
  );
}

export default Searchbar;
