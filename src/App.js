import React, { Component } from 'react';

import NavDrawer from './NavDrawer/NavDrawer';
import Nav from './components/Nav/Nav';
import Main from './Main';

import "./App.css";

// Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AssignmentOrder from './model/assignment';

// Activities
import WriteMedium from './components/WriteMedium/WriteMedium'
import MultipleChoice from './components/MultipleChoice/MultipleChoice'

import Home from './scenes/Home/Home';
import Assignment from './scenes/Assignment/Assignment';

class App extends Component {
  render() {
    return (
      <div>
        <NavDrawer />
        <div className="app-content" style={{marginLeft: 260}}>
          <Nav />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
