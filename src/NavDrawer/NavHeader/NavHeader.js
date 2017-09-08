import React from 'react'
import CedarLogo from '../../images/logo.png'

const NavHeader = () => (
  <div className="NavHeader" style={navHeadStyle}>
  	<img src={CedarLogo} style={{width: 40}}/>
  </div>
)

var navHeadStyle = {
	background: '#32325d',
	textAlign: 'center',
	marginBottom: 20,
	boxSizing: 'border-box',
	paddingTop: 30,
	paddingBottom: 30
}

export default NavHeader