import React, { useEffect, useState } from "react";
import Layout from "../LayOut/LayOut";
import NavBar from "../NavBar/NavBar";
import { SimpleGrid, Image, Box } from "@chakra-ui/react";
function Movie(props) {
  const [search, setSearch] = useState("avengers");
  const [movie, setMovie] = useState("");
  const [loader, setLoader] = useState(true);
  // const [setter, setSetter] = useState(props.location.state || null);

  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const url = `https://omdbapi.com/?s=${search}&apikey=c3a3abad`;
    const response = await fetch(url);
    const resJson = await response.json();
    if (props.location.state) {
      setMovie(props.location.state);
      window.history.replaceState(null, "");
      // setSetter(null);
      // console.log(setter);
    } else {
      setMovie(resJson);
    }
    setLoader(false);
  };

  return (
    <>
      <NavBar setSearch={setSearch} fetchApi={fetchApi} disabled={true} />

      <Box bg="#f7c59f">
        <Layout movie={movie} loader={loader} search={search} />
      </Box>
    </>
  );
}

export default Movie;
