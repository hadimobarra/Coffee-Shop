import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from './globalStyles';
import NavbarTwo from './components/Navbar/NavbarTwo';
import {SliderData} from './Data/SliderData';
import  Slider from './components/Header/Slider';
import About from './components/About/About';
import Products from './components/Products/Products';
import {ProductsData, ProductsDataTwo} from './Data/ProductsData';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <NavbarTwo />
      <Slider slides={SliderData} />
      <About />
      <Products heading='کافی شاپ انلاین' data={ProductsData} />
      <Features />
      <Products heading='فست فود انلاین' data={ProductsDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
