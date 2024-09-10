import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      );
      setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <div className=" mt-5 flex flex-col items-center w-full relative">
      <div className="w-4/5">
        <img
          className="w-full h-[500px] object-cover object-[0_35%]"
          src={`https://image.tmdb.org/t/p/original${currentMovieDetail?.backdrop_path || ""}`}
          alt="movie backdrop"
        />
      </div>
      <div className="flex items-center w-3/4 relative bottom-56">
        <div className="mr-8">
          <img
            className="w-[500px] rounded-lg shadow-lg"
            src={`https://image.tmdb.org/t/p/original${currentMovieDetail?.poster_path || ""}`}
            alt="movie poster"
          />
        </div>
        <div className="text-white flex flex-col justify-between h-[450px]">
          <div className="mb-2 space-y-2">
            <div className="text-4xl font-semibold">{currentMovieDetail?.original_title || ""}</div>
            <div className="italic">{currentMovieDetail?.tagline || ""}</div>
            <div className="flex items-center">
              {currentMovieDetail?.vote_average || ""} <i className="fas fa-star ml-2" />
              <span className="ml-4">({currentMovieDetail?.vote_count || ""} votes)</span>
            </div>
            <div>{currentMovieDetail?.runtime ? `${currentMovieDetail.runtime} mins` : ""}</div>
            <div>{currentMovieDetail?.release_date ? `Release date: ${currentMovieDetail.release_date}` : ""}</div>
            <div className="flex space-x-4 mt-4">
              {currentMovieDetail?.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="px-2 py-1 border-2 border-white rounded-full"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-xl font-semibold">Synopsis</div>
            <div>{currentMovieDetail?.overview || ""}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-3/4 relative bottom-32">
        <div className="text-3xl">Useful Links</div>
        <div className="flex space-x-4">
          {currentMovieDetail?.homepage && (
            <a
              href={currentMovieDetail.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold bg-red-600 px-4 py-2 rounded-full"
            >
              Homepage <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          )}
          {currentMovieDetail?.imdb_id && (
            <a
              href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold bg-yellow-400 px-4 py-2 rounded-full"
            >
              IMDb <i className="fas fa-external-link-alt ml-2"></i>
            </a>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Movie;
