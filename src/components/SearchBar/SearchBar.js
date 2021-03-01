import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import "./SearchBar.css";
function SearchBar(props) {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search Movie"
        onChange={(e) => props.setSearch(e.target.value)}
      />

      <Search2Icon
        onClick={props.fetchApi}
        fontSize="20px"
        style={{
          position: "relative",
          right: "2rem",
          bottom: "0.18rem",
        }}
        _hover={{ color: "#f7c59f" }}
      />
    </div>
  );
}

export default SearchBar;
