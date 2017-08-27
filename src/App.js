import React, { Component } from 'react';


import "./App.css";

// Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


// Activities
import WriteMedium from './components/WriteMedium/WriteMedium'
import MultipleChoice from './components/MultipleChoice/MultipleChoice'

import Home from './scenes/Home/Home';
import Assignment from './scenes/Assignment/Assignment';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="App">
           <Route exact path="/assignment" component={Assignment}/>
           <Route exact path="/" component={Home}/>
        </div>
      </Router>
    )
  }
}
export default App;
