import React, {useState, useEffect} from 'react';
import HomePage from "./pages/home"
import GlobalFonts from "./fonts/fonts";
import {GlobalStyle} from "./styles/universal-styles";
import Footer from './componets/footer';

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <GlobalStyle />
      <HomePage></HomePage>
      <Footer/>
     
    </div>
  );
}

export default App;
