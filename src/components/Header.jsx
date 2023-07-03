import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function ContainerOutsideExample() {
  return (
    // <Container>
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#">AYA</Navbar.Brand>
      </Container>
    </Navbar>
    // </Container>
  );
}

export default ContainerOutsideExample;
