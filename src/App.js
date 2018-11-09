import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import router from './routes.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        {router}
      </div>
    );
  }
}

export default App;
