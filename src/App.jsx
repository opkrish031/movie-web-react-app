import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./pages/home";
import MovieType from "./Component/movieType";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<MovieDetail /> } ></Route>
          <Route path="movies/:type" element={ <MovieType />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
