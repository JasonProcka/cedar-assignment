import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Main from './Main.js';
// Activities
import WriteMedium from './components/WriteMedium/WriteMedium'
import MultipleChoice from './components/MultipleChoice/MultipleChoice'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
