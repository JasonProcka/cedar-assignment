import React, { Component } from 'react'
import './NavDrawer.css'

class NavDrawer extends Component {
  render() {
    return (
      <div className="nav-custom shadow-light">
          <div className="nav-header">
              <a className="btn btn-floating btn-flat waves-effect cedar-user"><i className="material-icons">account_circle</i></a>
              <a className="cedar-logo" href="cedar.co"><img src="https://s-media-cache-ak0.pinimg.com/originals/00/6c/61/006c61b35e5d1a6e7c4c907c9836fb83.png" style="width: 40px;" /></a>
              <a className="btn btn-floating btn-flat waves-effect app-drawer"><i className="material-icons">apps</i></a>
          </div>
          <div className="inner-nav">
          <ul className="upper-items">
              <li className="label">ACTIONS</li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">add</i> Create Room</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">search</i> Find Room</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">star</i> Unlock Features</a></li>
          </ul>
          <ul className="upper-items">
              <li className="label">PERSONAL</li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">fingerprint</i> My Rooms</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">notifications</i> Notifications</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">history</i> Room History</a></li>
          </ul>
          <ul className="upper-items">
              <li className="label">PINNED ROOMS</li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">room</i> Jason's Board</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">room</i> procka</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">room</i> random-board</a></li>
          </ul>
          </div>
          <div className="nav-push-div"></div>
      </div>
    )
  }
}

export default NavDrawer
