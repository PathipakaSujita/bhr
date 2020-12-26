import React, { Component } from 'react';
import NavComponent from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Careers from './components/Careers';
import ContactUs from './components/Contact';
import Footer from './components/Footer';

// import siteData from './siteData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <Header />
        <Services />
        <About />
        <Careers />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
