import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMovieContext } from "../contex/MovieContext";
import fetchTrendingMovies from "../api/fetchTrendingMovies";
import Loading from "./Loading";
import { FaPlay } from "react-icons/fa";
import { MdInfo } from "react-icons/md";

const HeroBanner = () => {
  const { trandingMovie, setTrendingMovie, setLoading, loading } = useMovieContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const handleTrendingClick = async () => {
      try {
        setLoading(true);
        const movies = await fetchTrendingMovies();
        setTrendingMovie(movies);
        setMovieList(movies);
      } catch (err) {
        console.error("Failed to fetch trending movies:", err);
      } finally {
        setLoading(false);
      }
    };

    handleTrendingClick();
  }, []);

  useEffect(() => {
    if (movieList.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movieList.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [movieList]);

  if (!movieList || movieList.length === 0 || loading) return <Loading />;

  const currentMovie = movieList[currentIndex];
  const releaseYear = new Date(currentMovie.release_date).getFullYear();
  const title = currentMovie.original_title || "";

  const getStyledTitle = (text) => {
    const third = Math.floor(text.length / 3);
    return (
      <motion.h1
        className="text-[42px] font-bold mb-2 text-white drop-shadow-[2px_2px_2px_black] flex flex-wrap"
        variants={textStagger}
      >
        <motion.span variants={fadeIn}>{text.slice(0, third)}</motion.span>
        <motion.span
          className="text-transparent"
          style={{ WebkitTextStroke: "1px white" }}
          variants={fadeIn}
        >
          {text.slice(third, 2 * third)}
        </motion.span>
        <motion.span variants={fadeIn}>{text.slice(2 * third)}</motion.span>
      </motion.h1>
    );
  };

  // Variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textStagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  const imageSlide = {
    hidden: { x: "-100%" },
    show: {
      x: "0%",
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.5 } },
  };

  const yearFade = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.8 },
    },
  };

  return (
    <div className="w-full px-0 sm:px-[5%] mt-20">
      <div className="relative h-[500px] w-full rounded-none sm:rounded-2xl overflow-hidden shadow-lg">

        <AnimatePresence mode="wait">
          <motion.img
            key={currentMovie.id}
            src={`https://image.tmdb.org/t/p/w500${currentMovie.images?.[0]?.file_path}`}
            alt={title}
            variants={imageSlide}
            initial="hidden"
            animate="show"
            exit="exit"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10" />

        {/* Animated Release Year */}
        <motion.div
          variants={yearFade}
          initial="hidden"
          animate="show"
          className="absolute top-5 right-5 bg-red-600 text-white font-bold px-4 py-1 text-[22px] rounded-md z-20"
        >
          {releaseYear}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentMovie.id}`}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="absolute bottom-20 left-10 text-white z-20 max-w-xl"
          >
            {getStyledTitle(title)}

            <motion.div variants={fadeIn} className="text-yellow-400 font-semibold text-lg">
              ⭐ {currentMovie.vote_average}
            </motion.div>

            <motion.p variants={fadeIn} className="text-lg mt-2 text-white">
              {currentMovie.overview}
            </motion.p>

            <motion.div variants={fadeIn} className="mt-4 flex gap-3">
              <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                <MdInfo className="text-lg" />
                More Details
              </button>
              <button className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-md hover:bg-gray-100 transition">
                <FaPlay className="text-lg" />
                Play
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroBanner;
