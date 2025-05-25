import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Hobbies />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}

export default App;