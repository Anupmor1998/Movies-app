import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Card.css";
import noImage from "../Card/no-image.png";
function Card({ poster, year, title }) {
  return (
    <div>
      <Link to={`/movie/${title}`} style={{ textDecoration: "none" }}>
        <Box className="card" borderRadius="3xl" backgroundColor="#e9c46a">
          <Image
            className="card-img"
            src={poster}
            style={{ borderRadius: "10px" }}
            fallbackSrc={noImage}
          />
          <div className="movie-year">{year}</div>
        </Box>
      </Link>
    </div>
  );
}

export default Card;
