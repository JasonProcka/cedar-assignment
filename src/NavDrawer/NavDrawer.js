import React, { Component } from 'react'
import './NavDrawer.css'
import NavHeader from './NavHeader/NavHeader'
import Radium from 'radium'

class NavDrawer extends Component {
  render() {
    return (
      <div className="nav-custom shadow-light">
          <NavHeader />
          <div className="inner-nav">
            <ul className="upper-items">
              <li className="label" style={upperItems.label}>Navigation</li>
              <li className="link" style={upperItems.linkDiv}><a href="" className="waves-effect" style={upperItems.link}>Create Assignment</a></li>
              <li className="link" style={upperItems.linkDiv}><a href="" className="waves-effect" style={upperItems.link}>Find Room</a></li>
              <li className="link" style={upperItems.linkDiv}><a href="" className="waves-effect" style={upperItems.link}>Unlock Features</a></li>
            </ul>
          </div>
          <div className="nav-push-div"></div>
      </div>
    )
  }
}

NavDrawer = Radium(NavDrawer);

var upperItems = {
  label: {
    color: '#BDBDBD',
    textDecoration: 'none',
    padding: 0,
    marginBottom: 0,
    letterSpacing: 0.5,
    fontFamily: 'Lato , sans-serif',
    fontSize: 0.8 + 'em',
    paddingBottom: 7,
    fontWeight: 400,
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  linkDiv: {
    color: '#FFF',
    letterSpacing: .5 + 'px',
    borderRadius: 0,
    fontFamily: 'Lato, sans-serif',
    fontSize: 13 + 'px',
    fontWeight: 400
  },
  link: {
    color: '#BDBDBD',
    textDecoration: 'none',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 40 + 'px',
    display: 'block',
    verticalAlign: 'middle',
    '-o-transition': .3 + 's',
    msTransition: .3 + 's',
    '-moz-transition': .3 + 's',
    WebkitTransition: .3 + 's',
    transition: .3 + 's',
    position: 'relative',
  }
}

export default NavDrawer
