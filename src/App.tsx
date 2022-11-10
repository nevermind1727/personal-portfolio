import React from 'react';
import "./App.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDescription from './pages/ProjectDescription';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDescription />} />
          <Route path="/Education" element={<Education />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
