import React from 'react';
// Import hooks from React Router

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
      <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="https://www.linkedin.com/in/bobby-schwartz-design/" target="_blank" rel="noreferrer">LinkedIn</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/robertschwartz603" target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://bobbyschwartz.art" target="_blank" rel="noreferrer">Art/Design Portfolio</a>
                </li>
        </ul>
        <p>Powered by React 👾 &copy; 2022 Bobby Schwartz | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
