import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import './card.css'

const Card = ({ movie }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="inline-block relative rounded-lg overflow-hidden m-[0.19rem] cursor-pointer min-w-[200px] h-[300px] z-0 border border-gray-400">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={1} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          className=" card-container inline-block relative rounded-lg overflow-hidden m-[0.19rem] cursor-pointer min-w-[200px] h-[300px] z-0 border border-gray-400 transition-transform duration-200 hover:scale-110 hover:z-[1000]  hover:shadow-[0px_54px_55px_rgba(0,0,0,0.25),_0px_-12px_30px_rgba(0,0,0,0.12),_0px_4px_6px_rgba(0,0,0,0.12),_0px_12px_13px_rgba(0,0,0,0.17),_0px_-3px_5px_rgba(0,0,0,0.09)] text-white no-underline"
        >
          <div className="relative">
            <img
              className="h-[300px] w-full object-cover"
              src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
              alt={movie ? movie.original_title : ""}
            />
            <div className=" card-overlay absolute bottom-0 w-[100%] p-4 flex flex-col justify-end bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-200">
              <div className="font-black text-lg mb-1">{movie ? movie.original_title : ""}</div>
              <div className="text-sm mb-1 flex justify-between items-center w-full">
                {movie ? movie.release_date : ""}
                <span className="ml-4 flex items-center">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star text-yellow-500 ml-1" />
                </span>
              </div>
              <div className="italic text-sm mb-1 truncate">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
