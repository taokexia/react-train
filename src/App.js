import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentApp from './component-v2/CommentApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentApp />
      </div>
    );
  }
}

export default App;
