import React from 'react';

// Local imports
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Achievements from './components/achievements/Achievements';

function App() {
  return (
    <React.Fragment>
      {/* Header */}
      <Header/>
      {/* Main Content */}
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Qualification/>
        <Services/>
        <Projects/>
        <Achievements/>
      </main>
    </React.Fragment>
  );
}

export default App;
