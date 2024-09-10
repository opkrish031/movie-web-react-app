import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import axios from "axios";
import MovieType from "../Component/movieType";
// import MovieList from "../../components/movieList/movieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then((ress) => setPopularMovies(ress.data.results));
  }, []);

  return (
    <>
      <div className="relative w-full">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              className="relative block text-white no-underline"
            >
              <div className="posterImage h-[600px] relative">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-20 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                <div className="text-4xl font-bold mb-2 text-left">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="text-2xl text-left mb-4">
                  {movie ? movie.release_date : ""}
                  <span className="ml-12">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star ml-2"></i>
                  </span>
                </div>
                <div className="italic text-sm mb-1 w-1/2 text-left">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieType />
      </div>
    </>
  );
};

export default Home;
