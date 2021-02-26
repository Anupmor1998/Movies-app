import React from "react";
import { Box, Image } from "@chakra-ui/react";
import "./Card.css";
import noImage from "../Card/no-image.png";
function Card({ poster, year }) {
  return (
    <div>
      <Box className="card" borderRadius="3xl" backgroundColor="#ffb703">
        <Image
          className="card-img"
          src={poster}
          // alt={props.movie.Title}
          style={{ borderRadius: "10px" }}
          fallbackSrc={noImage}
        />
        <div className="movie-title">{year}</div>
      </Box>
    </div>
  );
}

export default Card;
