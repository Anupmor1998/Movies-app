import React from "react";
import { SimpleGrid, Image } from "@chakra-ui/react";
import Card from "../Card/Card";
import nodata from "./nodata.svg";
import loading from "./loading1.svg";

function Layout(props) {
  if (props.loader) {
    return (
      <SimpleGrid paddingTop="100px" height="100vh">
        <Image src={loading} boxSize="md" margin="auto" />
      </SimpleGrid>
    );
  }
  return (
    <>
      {props.movie.Search ? (
        <SimpleGrid columns={[1, 2, 3, 4]} spacingY="20px" paddingTop="100px">
          {props.movie.Search.map((m, index) => (
            <Card
              key={m.imdbID + index}
              poster={m.Poster}
              year={m.Year}
              title={m.Title}
            />
          ))}
        </SimpleGrid>
      ) : (
        <SimpleGrid paddingTop="100px" height="100vh">
          <Image src={nodata} boxSize="md" margin="auto" />
        </SimpleGrid>
      )}
    </>
  );
}

export default Layout;
