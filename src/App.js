import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './globalStyles';
import NavbarTwo from './components/Navbar/NavbarTwo';
import {SliderData} from './Data/SliderData';
import  Slider from './components/Header/Slider';
import About from './components/About/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import BodySlider from './components/BodySlider/BodySlider';
import Form from './components/Form/Form';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <NavbarTwo />
      <Slider slides={SliderData} />
      <About />
      <BodySlider />
      <Features />
      <Form/>
      <Footer />
    </Router>
  );
}

export default App;
