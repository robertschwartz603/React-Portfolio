import React from "react";
// Import hooks from React Router
import { Button, Form } from "react-bootstrap";

const emailState = {
  email: '',
  error: ''
}

const Contact = () => {

  
    // emailValidation(){
    //     const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //     if(!this.state.email ||  === false){
    //             error: "Email is not valid"

    // };

  return (
    <div class="bg-light p-5 rounded-lg m-3">
      <h1 class="display-4">Let's Talk...</h1>
      <p class="lead">Use the form below, I'll be in touch.</p>
      <hr class="my-4"></hr>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="string" placeholder="Jane Doe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>What can I do for you?</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
