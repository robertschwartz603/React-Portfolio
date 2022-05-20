import React from "react";

import { Nav } from 'react-bootstrap';

function Navigaton(props) {
  //const { currentTab, setCurrentTab } = props;

  return (
    <Nav className="me-auto">
      <Nav.Link href="/">About</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/resume">Resume</Nav.Link>
    </Nav>
  );
}

export default Navigaton;
