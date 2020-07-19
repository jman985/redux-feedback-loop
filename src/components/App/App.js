import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <br/>
        <button>Begin</button>
      </div>
    );
  }
}

export default App;
