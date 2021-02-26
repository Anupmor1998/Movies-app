import React, { useState } from "react";
import "./NavBar.css";
import imdb from "../NavBar/video-player.png";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
} from "reactstrap";
import SearchBar from "../SearchBar/SearchBar";

function NavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: "#f7c59f" }} expand="md" fixed="top">
        <NavbarBrand href="/">
          <img src={imdb} width="60" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar color="danger">
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Movies</DropdownItem>
                <DropdownItem>TV Series</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <NavbarText>
            <SearchBar setSearch={props.setSearch} fetchApi={props.fetchApi} />
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
