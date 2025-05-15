import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import MediaCard from "../components/MovieCard";
import { useMovieContext } from "../contex/MovieContext"; // adjust if needed
import ViewMoreButton from "../components/ViewMoreButton";

function TVSeriousSection() {
 const { movies } = useMovieContext();
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const displayedMovies = showAll ? movies : movies.slice(0, 10);

  return (
    <div className="p-0 sm:p-4">
      {movies.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {displayedMovies.map((movie) => (
              <MediaCard
                key={movie.id}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.original_title}
                description={movie.overview}
                onClick={() => navigate(`/moviedetail/${movie.id}`)}
              />
            ))}
          </div>

          {!showAll && movies.length > 10 && (
            <ViewMoreButton path="movies"/>
          )}
        </>
      )}
    </div>
  );
}

export default TVSeriousSection