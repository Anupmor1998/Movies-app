import { ChakraProvider, Box } from "@chakra-ui/react";
import Movie from "./components/Movie/Movie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieDesc from "./components/MovieDesc/MovieDesc";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Movie} />
          <Route path="/movie/:title" exact component={MovieDesc} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
