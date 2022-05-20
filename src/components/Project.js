import React from "react";
// Import hooks from React Router

import { Card, Button } from 'react-bootstrap';

const Project = () => {
  return (
    <div>
        {/* PROJECT CARD ONE */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />v
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

       {/* PROJECT CARD TWO */}
       <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />v
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      {/* PROJECT CARD TWO */}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />v
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </div>
  );
};

export default Project;
