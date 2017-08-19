import React, { Component } from 'react'
import './WriteMedium.css'

class WriteMedium extends Component {
  render() {
    return (
      <div className="WriteMedium">
        <div className="assignment-activity">
          <div className="number">{this.props.number}</div>
          <div className="activity-content">
            <div className="activity-header">{this.props.activityheader}</div>
            <input className="activity-text-input" type="text/css" placeholder="Answer..." />
          </div>
        </div>
      </div>
    )
  }
}

export default WriteMedium
