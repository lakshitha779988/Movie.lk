import React from "react";
import Header from "../components/Header";
import { useMovieContext } from "../contex/MovieContext";
import { useNavigate } from "react-router-dom"; 
import MediaCard from "../components/MovieCard";
import HeroBanner from "../components/HeroBanner";
 

function Movies() {
  const { movies, loading } = useMovieContext();
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <HeroBanner/>
     <div className="px-4 sm:px-5 lg:px-20">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
    {movies.map((movie) => (
      <MediaCard
        key={movie.id}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        title={movie.original_title}
        description={movie.overview}
        onClick={() => navigate(`/moviedetail/${movie.id}`)}
      />
    ))}
  </div>
</div>


    </div>
  );
}

export default Movies;
