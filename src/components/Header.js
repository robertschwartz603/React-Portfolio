import React from "react";
import Navigation from "./Navigation";
// Import React Router Link component for internal hyperlinks
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      
          <Navigation/>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

// return (
//   <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
//     <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
//       {/* Use Link component to create a link that returns to the homepage on click */}
//       <Link className="text-dark" to="/">
//         <h1 className="m-0" style={{ fontSize: '3rem' }}>
//           Tech Friends
//         </h1>
//       </Link>
//       <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
//         Meet your new programming pals.
//       </p>
//     </div>
//   </header>
// );
