import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Searchbar from './Searchbar';
import fetchTrendingMovies from '../api/fetchTrendingMovies';
import { useMovieContext } from '../contex/MovieContext';
import useFetchGenres from '../hooks/useFetchGenres';
import GenressDropdown from './GenressDropdwon';
import { Link } from 'react-router-dom';


function Header() {
  const { setMovies } = useMovieContext();
  const { err } = useFetchGenres();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleTrendingClick = async () => {
    try {
      const movies = await fetchTrendingMovies();
      setMovies(movies);
    } catch (err) {
      console.error('Failed to fetch trending movies:', err);
      setMovies([]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:px-18">
        {/* Logo */}
       <Link to="/home" className="text-2xl font-extrabold cursor-pointer">
  <span className="text-red-600">Movie</span>
  <span className="text-black">.lk</span>
</Link>


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center gap-10 ml-40 flex-1">
          <Searchbar />
          <nav>
            <ul className="flex gap-6 text-sm font-medium text-gray-700">
              <li
                className="cursor-pointer hover:text-red-600 transition"
                onClick={handleTrendingClick}
              >
                Trending
              </li>
              <li className="cursor-pointer hover:text-red-600 transition">TV Series</li>
              <li className="cursor-pointer hover:text-red-600 transition">About Us</li>
              <li>
                <GenressDropdown />
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-black focus:outline-none"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md transition-all duration-300">
          <div className="mb-3">
            <Searchbar />
          </div>
          <ul className="flex flex-col gap-3 text-sm font-medium text-gray-700">
            <li
              className="cursor-pointer hover:text-red-600 transition"
              onClick={handleTrendingClick}
            >
              Trending
            </li>
            <li className="cursor-pointer hover:text-red-600 transition">TV Series</li>
            <li className="cursor-pointer hover:text-red-600 transition">About Us</li>
            <li>
              <GenressDropdown />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
