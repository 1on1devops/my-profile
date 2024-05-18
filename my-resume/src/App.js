import React from 'react';
import './App.css';
import Header from './components/Header';
import CareerObjective from './components/CareerObjective';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CareerObjective />
      <Experience />
      <Education />
      <Projects />
      <TechnicalSkills />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;

