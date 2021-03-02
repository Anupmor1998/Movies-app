import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./MovieDesc.css";
import noImage from "../Card/no-image.png";
import loadingImg from "../LayOut/loading1.svg";
import nodata from "../LayOut/nodata.svg";

function MovieDesc(props) {
  const [loading, setLoading] = useState(true);
  const [movieDesc, setMovieDesc] = useState(null);
  const { title } = useParams();

  useEffect(() => {
    const fetchMovieDesc = async () => {
      const url = `https://omdbapi.com/?t=${title}&apikey=c3a3abad`;
      const response = await fetch(url);
      const resJson = await response.json();
      setMovieDesc(resJson);
      setLoading(false);
    };
    fetchMovieDesc();
  }, []);

  if (loading) {
    return (
      <>
        <NavBar disabled={false} />
        <Box backgroundColor="#f7c59f" height="100vh">
          <Image
            paddingTop="100px"
            src={loadingImg}
            boxSize="md"
            margin="auto"
          />
        </Box>
      </>
    );
  }
  // console.log(props.location.state);
  return (
    <>
      <NavBar disabled={false} />
      {movieDesc ? (
        <Box backgroundColor="#f7c59f" height="100vh">
          <Link
            className="go-back"
            to={{
              pathname: "/",
              state: props.location.state,
            }}
          >
            <h1>Go Back</h1>
          </Link>
          <Box className="box">
            <Image
              className="img"
              src={movieDesc.Poster}
              fallbackSrc={noImage}
            />
            <div className="block">
              <div>Movie Title: {movieDesc.Title}</div>
              <div>Imdb Rating: ⭐{movieDesc.imdbRating}</div>
              <div>Released On: {movieDesc.Released}</div>
              <div className="sub-block">Director: {movieDesc.Director}</div>
              <div>Star Cast: {movieDesc.Actors}</div>
              <div>Country: {movieDesc.Country}</div>
              <div>Box Office Collection: {movieDesc.BoxOffice}</div>
              <div>Genre: {movieDesc.Genre}</div>
              <div>Language: {movieDesc.Language}</div>
              <div>Production: {movieDesc.Production}</div>
            </div>
          </Box>
          <div className="plot">Movie Plot: {movieDesc.Plot}</div>
        </Box>
      ) : (
        <Box paddingTop="100px" backgroundColor="#f7c59f" height="100vh">
          <Image src={nodata} boxSize="md" margin="auto" />
        </Box>
      )}
    </>
  );
}

export default MovieDesc;
