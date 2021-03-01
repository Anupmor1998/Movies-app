import React from "react";
import { SimpleGrid, Image } from "@chakra-ui/react";
import Card from "../Card/Card";
import nodata from "./nodata.svg";
import loading from "./loading1.svg";
import "./LayOut.css";

function Layout(props) {
  if (props.loader) {
    return (
      <SimpleGrid className="layout" height="100vh">
        <Image src={loading} boxSize="md" margin="auto" />
      </SimpleGrid>
    );
  }
  return (
    <>
      {props.movie.Search ? (
        <SimpleGrid className="layout" columns={[1, 2, 3, 4]} spacingY="20px">
          {props.movie.Search.map((m, index) => (
            <Card
              key={m.imdbID + index}
              poster={m.Poster}
              year={m.Year}
              title={m.Title}
              search={props.search}
            />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid className="layout" height="100vh">
          <Image src={nodata} boxSize="md" margin="auto" />
        </SimpleGrid>
      )}
    </>
  );
}

export default Layout;
