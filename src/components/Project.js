import React from "react";
// Import hooks from React Router

import { Card, Button } from "react-bootstrap";

const Project = () => {
  return (
    <div class="container">
      <div class="row">

        {/* PROJECT CARD */}
        <div class="col">
          <Card style={{ width: "32rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/robertschwartz603/BootCamp-Homework-Week2/blob/main/assets/images/CarryOn%20home-page.PNG?raw=true"/>
              {/* src="../../../assets/images/CarryOn-home-page.png"/> */}
            <Card.Body>
              <Card.Title>CarryOn</Card.Title>
              <Card.Text>
                CarryOn is a travel information website that allows a user to
                search a specified city's lodges, travel accommodations, and
                places of interest.
              </Card.Text>
              <Button href="https://robertschwartz603.github.io/CarryOn/"
                variant="primary">Explore Project</Button>
            </Card.Body>
          </Card>
        </div>

         {/* PROJECT CARD */}
         <div class="col">
          <Card style={{ width: "32rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/robertschwartz603/BootCamp-Homework-Week2/blob/main/assets/images/hotdog.jpg?raw=true"/>
            <Card.Body>
              <Card.Title>Hotdog</Card.Title>
              <Card.Text>
              This app is a platform to bring together hotdogs lovers to review and find the best delicious ones around them. Authentication/Login Individual user accounts hotdog profiles for reviews Profiles viewable by other users Showing currently reviews near you.
              </Card.Text>
              <Button href="https://radiant-tundra-47110.herokuapp.com/"
                variant="primary">Explore Project</Button>
            </Card.Body>
          </Card>
        </div>

         {/* PROJECT CARD */}
         <div class="col">
          <Card style={{ width: "32rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/robertschwartz603/BootCamp-Homework-Week2/blob/main/assets/images/notes.jpg?raw=true"/>
            <Card.Body>
              <Card.Title>Note Taker App</Card.Title>
              <Card.Text>
              This is an app that can write and save notes using back end integration with a from end UX. it uses Express.js for it's back end functionality and saves/reads notes as a JSON file.
              </Card.Text>
              <Button href="https://github.com/robertschwartz603/Note-Taker-App"
                variant="primary">Explore Project</Button>
            </Card.Body>
          </Card>
        </div>

        {/* PROJECT CARD */}
        <div class="col">
          <Card style={{ width: "32rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/robertschwartz603/BootCamp-Homework-Week2/blob/main/assets/images/profile.jpg?raw=true"/>
            <Card.Body>
              <Card.Title>Team Profile Generator</Card.Title>
              <Card.Text>
              This project required building a Node.js command-line app that takes input about employees on a dev team and generates an HTML webpage with info cards for each person. Testing exists using Jest. When prompted for team members and their information, then HTML is generated that displays a formatted team roster based on user input.
              </Card.Text>
              <Button href="https://github.com/robertschwartz603/Team-Profile-Generator"
                variant="primary">Explore Project</Button>
            </Card.Body>
          </Card>
        </div>

             {/* PROJECT CARD */}
             <div class="col">
          <Card style={{ width: "32rem" }}>
            <Card.Img
              variant="top"
              src="https://laravelnews.imgix.net/images/insomnia.png?ixlib=php-3.3.1"/>
            <Card.Body>
              <Card.Title>Social Network API</Card.Title>
              <Card.Text>
              an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This uses Express.js for routing, a MongoDB database, and the Mongoose ODM
              </Card.Text>
              <Button href="https://github.com/robertschwartz603/Social-API"
                variant="primary">Explore Project</Button>
            </Card.Body>
          </Card>
        </div>
        
             {/* PROJECT CARD */}
             <div class="col">
          <Card style={{ width: "32rem" }}>
            <Card.Img
              variant="top"
              src="https://github.com/robertschwartz603/Homework-Week5/raw/main/assets/scheduling-client-2.jpg"/>
            <Card.Body>
              <Card.Title>Work Day Scheduler</Card.Title>
              <Card.Text>
              A scheduling client that uses Jquery, and third party API's to style and initiate effects
              </Card.Text>
              <Button href="https://robertschwartz603.github.io/Homework-Week5/"
                variant="primary">Explore Project</Button>
            </Card.Body>
          </Card>
        </div>


      </div>
    </div>
  );
};

export default Project;
