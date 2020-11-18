import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Templete/header';
import Footer from './Templete/footer';
import Banner from './Templete/banner';
import About from './Templete/about';
import Skill from './Templete/skill';
import Contact from './Templete/contact';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
