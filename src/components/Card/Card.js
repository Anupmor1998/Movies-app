import React from "react";
import { Box, Image } from "@chakra-ui/react";
import "./Card.css";
import noImage from "../Card/no-image.png";
function Card({ poster, year }) {
  return (
    <div>
      <Box className="card" borderRadius="3xl" backgroundColor="#e9c46a">
        <Image
          className="card-img"
          src={poster}
          // alt={props.movie.Title}
          style={{ borderRadius: "10px" }}
          fallbackSrc={noImage}
        />
        <div className="movie-year">{year}</div>
      </Box>
    </div>
  );
}

export default Card;
