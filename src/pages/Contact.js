import React from "react";
// Import hooks from React Router
import { Button, Form } from 'react-bootstrap';

const About = () => {
  return (
    <div class="bg-light p-5 rounded-lg m-3">
      <h1 class="display-4">Contact Me!</h1>
      <p class="lead">Use the form below, I'll be in touch.</p>
      <hr class="my-4"></hr>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default About;
