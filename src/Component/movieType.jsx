import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./card";
import axios from "axios";

const MovieType = () => {
  const [movies, setMovies] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]); 

  const getData = () => {
    axios.get(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((ress) => {
        console.log("Fetched data:", ress); 
        setMovies(ress.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); 
      });
  };

  return (
    <div className="px-12 pb-12">
      <h2 className="text-3xl font-semibold my-10 text-center">
        {(type ? type : "POPULAR").toUpperCase()}
      </h2>
      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieType;
