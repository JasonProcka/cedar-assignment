import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div id="Home">
        <h1>Create Dynamic Assignments with Machine Learning</h1>
        <Link to="/assignment"><button className="btn">Get Started</button></Link>
      </div>
    )
  }
}

export default Home;
