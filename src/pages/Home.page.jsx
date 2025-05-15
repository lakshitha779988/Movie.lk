import React from "react";
import useFetchMovieDetail from "../hooks/useFetchMovieDetail";
import MediaCard from "../components/MovieCard";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../contex/MovieContext";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Loading from "../components/Loading";
import SectionTitle from "../components/SectionTitle";
import MovieSection from "../sections/MovieSection";
import TVSeriousSection from "../sections/TVSeriousSection";
import TvSeriousHeroBanner from "../components/TvSeriousHeroBanner";
import NewReleaseHeroBanner from "../components/NewReleaseHeroBanner";
import Footer from "../components/Footer";

function Home() {
  const { movies, loading } = useMovieContext();
  const { error } = useFetchMovieDetail();
  const navigate = useNavigate();

  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;
  if (loading) return <Loading />;

  return (
    <>
      <Header />
      <HeroBanner />
      <SectionTitle title="Explore Movie World"/>
      <Box sx={{ flexGrow: 1, mx: "auto", px: 2, maxWidth: "1400px", mt:4 }}>
        <MovieSection/>
      </Box>
      <TvSeriousHeroBanner/>
      <SectionTitle title="Explore Tv Series World"/>
      <Box sx={{ flexGrow: 1, mx: "auto", px: 2, maxWidth: "1400px", mt:4 }}>
        <TVSeriousSection/>
      </Box>
       <SectionTitle title="New Realease"/>
       <NewReleaseHeroBanner/>

       <Footer/>
    </>
  );
}

export default Home;
