import React from "react";
import Project from "../components/Project";
// Import hooks from React Router

const Portfolio = () => {
  return (
    <div class="bg-light p-5 rounded-lg m-3">
        <h1 class="display-4">Projects</h1>
        <p class="lead">Explore select projects I've coded below:</p>
        <hr class="my-4"></hr>
        <Project/>
    </div> 
  );
};

export default Portfolio;
