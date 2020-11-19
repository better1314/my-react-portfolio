import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Templete/header';
import Footer from './Templete/footer';
import Banner from './Templete/banner';
import About from './Templete/about';
import Skill from './Templete/skill';
import Contact from './Templete/contact';
import $ from 'jquery'; 

class App extends React.Component{
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }

    componentWillUnmount() { 
      window.removeEventListener('load', this.handleLoad)  
    }

    handleLoad() {
      $(".loader-wrapper").fadeOut("slow");
    }

    render(){
      return (
        <div>
          <div className="bgImg">
          <Header />
          <Banner />
          </div>
          <About />
          <Skill />
          <Contact />
          <Footer />
          <div className="loader-wrapper">
            <span className="loader"><span className="loader-inner"></span></span>
          </div>
        </div>
      );
    }
  
}

export default App;
