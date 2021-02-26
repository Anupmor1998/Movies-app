import React, { useEffect, useState } from "react";
import Layout from "../LayOut/LayOut";
import NavBar from "../NavBar/NavBar";

function Movie() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);

  useEffect(async () => {
    const url = `https://omdbapi.com/?s=avengers&apikey=c3a3abad`;
    const response = await fetch(url);
    const resJson = await response.json();
    setMovie(resJson);
  }, []);
  const fetchApi = async () => {
    const url = `https://omdbapi.com/?s=${search}&apikey=c3a3abad`;
    const response = await fetch(url);
    const resJson = await response.json();
    setMovie(resJson);
  };
  return (
    <>
      <NavBar setSearch={setSearch} fetchApi={fetchApi} />
      <Layout movie={movie} />
    </>
  );
}

export default Movie;