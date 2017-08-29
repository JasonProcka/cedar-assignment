import React, { Component } from 'react'
import './Nav.css'
import CedarLogo from '../../images/logo-orng.png'

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <img width="40px" height="40px" className="cedar-logo" src={CedarLogo} alt="logo" />
      </div>
    )
  }
}

export default Nav
