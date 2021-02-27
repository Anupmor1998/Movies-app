import { ChakraProvider, Box } from "@chakra-ui/react";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <ChakraProvider>
      <Movie />
    </ChakraProvider>
  );
}

export default App;
