import React, { Component } from 'react'
import './NavDrawer.css'

class NavDrawer extends Component {
  render() {
    return (
      <div className="nav-custom shadow-light">
          <div classNameName="nav-header">
              <a className="btn btn-floating btn-flat waves-effect cedar-user"><i className="material-icons">account_circle</i></a>
              <a className="cedar-logo" href="cedar.co"><img src="https://s-media-cache-ak0.pinimg.com/originals/00/6c/61/006c61b35e5d1a6e7c4c907c9836fb83.png" style="width: 40px;" /></a>
              <a className="btn btn-floating btn-flat waves-effect app-drawer"><i className="material-icons">apps</i></a>
          </div>
          <!--
          <div className="cedar-app-drawer">
              <a className="btn-floating waves-effect waves-light"><i className="material-icons">apps</i></a>
          </div> -->
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
          <!--
          <ul className="upper-items">
              <li className="label">APPS</li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">filter_drama</i> Hubs</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">free_breakfast</i> Tea Calls</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">weekend</i> Lounge Chats</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">fingerprint</i> Blueprints</a></li>
          </ul> -->
          <!-- <ul className="upper-items">
              <li className="label">PERSONAL</li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">home</i> Dashboard<div className="ripple-container"></div></a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">build</i> Creations</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">notifications</i> <span className="mdl-badge" data-badge="2">Notifications</span></a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">account_box</i> Account</a></li>
          </ul> -->
          <!-- <a className="show-hubs smooth btn btn-lg txt-center txt-white bg-blue no-border display-block" href="" role="button">Show More</a>
          -->
          <!-- <ul className="upper-items">
              <li className="label">RESOURCES</li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">add</i> cedar Plus</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">info</i> About</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">contact_phone</i> Contact</a></li>
              <li className="link"><a href="" className="waves-effect"><i className="material-icons">import_contacts</i> Blog</a></li>
          </ul> -->
          </div>
          <div className="nav-push-div"></div>
      </div>
    )
  }
}

export default NavDrawer
