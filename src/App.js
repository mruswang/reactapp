import React, { Component } from 'react';
import './App.css';
import MHeader from './components/m-header/m-header'

class App extends Component {
  render() {
    return (
      <div className="App">
          <MHeader></MHeader>
          <tab></tab>
          <player></player>
      </div>
    );
  }
}

export default App;
