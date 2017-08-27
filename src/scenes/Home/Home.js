import React, { Component } from 'react';
import './Home.css';
import Nav from '../../components/Nav/Nav';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <h1>Create Dynamic Assignments with Machine Learning</h1>
        <button className="btn">Get Started</button>
      </div>
    )
  }
}

export default Home;
