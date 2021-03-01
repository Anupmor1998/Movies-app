import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./MovieDesc.css";
import noImage from "../Card/no-image.png";
import loadingImg from "../LayOut/loading1.svg";
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
  console.log(movieDesc);
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
  return (
    <>
      <NavBar disabled={false} />
      {movieDesc ? (
        <Box backgroundColor="#f7c59f" height="100vh">
          <Link className="go-back" to="/">
            <h1>Go Back</h1>
          </Link>
          <Box className="box">
            <Image
              className="img"
              src={movieDesc.Poster}
              fallbackSrc={noImage}
            />
            <div className="block">
              <div className="sub-block">Movie Title: {movieDesc.Title}</div>
              <div className="sub-block">
                Imdb Rating: ⭐{movieDesc.imdbRating}
              </div>
              <div className="sub-block">Released On: {movieDesc.Released}</div>
              <div className="sub-block">Director: {movieDesc.Director}</div>
              <div className="sub-block">Star Cast: {movieDesc.Actors}</div>
              <div className="sub-block">Country: {movieDesc.Country}</div>
              <div className="sub-block">
                Box Office Collection: {movieDesc.BoxOffice}
              </div>
              <div className="sub-block">Genre: {movieDesc.Genre}</div>
              <div className="sub-block">Language: {movieDesc.Language}</div>
              <div className="sub-block">
                Production: {movieDesc.Production}
              </div>
            </div>
          </Box>
          <div className="plot">Movie Plot: {movieDesc.Plot}</div>
        </Box>
      ) : (
        <Box paddingTop="100px">
          <h1>No Movie</h1>
        </Box>
      )}
    </>
  );
}

export default MovieDesc;
