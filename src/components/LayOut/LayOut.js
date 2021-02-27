import React from "react";
import "../LayOut/LayOut.css";
import { SimpleGrid, Image } from "@chakra-ui/react";
import Card from "../Card/Card";
import nodata from "./nodata.svg";
import loading from "./loading.svg";

function Layout(props) {
  if (props.loader) {
    return (
      <SimpleGrid marginTop="100px">
        <Image src={loading} boxSize="md" margin="auto" />
      </SimpleGrid>
    );
  }
  return (
    <>
      {props.movie.Search ? (
        <SimpleGrid
          columns={[2, 3, 4]}
          spacingX="20px"
          spacingY="20px"
          marginTop="100px"
        >
          {props.movie.Search.map((m, index) => (
            <Card key={m.imdbID + index} poster={m.Poster} year={m.Year} />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid marginTop="100px">
          {/* <div className="no-data">No Movie found</div> */}
          <Image src={nodata} boxSize="md" margin="auto" />
        </SimpleGrid>
      )}
    </>
  );
}

export default Layout;
