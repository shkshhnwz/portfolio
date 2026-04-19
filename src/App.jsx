import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      
      <Navbar />
      
      <main className="container">
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
