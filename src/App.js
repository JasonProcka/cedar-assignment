 import React, { Component } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import NavDrawer from './NavDrawer/NavDrawer';
import Main from './Main.js';
// Activities
import WriteMedium from './components/WriteMedium/WriteMedium'
import MultipleChoice from './components/MultipleChoice/MultipleChoice'

class App extends Component {
  render() {
    return (
      <div>
        <NavDrawer />
        <div className="app-container">
          <Nav />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
