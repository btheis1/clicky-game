import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import ImageDisplay from "./components/ImageDisplay";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ImageDisplay />
      </>
  
    );
  }
}

export default App;
