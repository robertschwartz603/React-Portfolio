import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<About />} 
              />
              <Route 
                path="/contact" 
                element={<Contact />}   
              />
              <Route 
                path="/portfolio" 
                element={<Portfolio />} 
              />
              <Route 
                path="/resume" 
                element={<Resume />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
