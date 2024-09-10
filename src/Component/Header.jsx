import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container sticky top-0 z-[1000] bg-[#000]  mx-auto">
      <div className="middle w-[90%] p-2 items-center flex gap-10 bg-transparent  mx-auto ">
        <div className="">
          <Link to="/">
            <h2 className="font-display font-bold text-2xl text-black underline bg-[#ccc] p-2 rounded">
              MovieApp
            </h2>
          </Link>
        </div>
        <div className=" flex justify-evenly w-[50%]">
          <Link to="/movies/popular" className="text-lg text-sm-sm font-semibold">Popular</Link>
          <Link to="/movies/top_rated" className="text-lg font-semibold">Top Rated</Link>
          <Link to="/movies/upcoming" className="text-lg font-semibold">Upcoming</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
