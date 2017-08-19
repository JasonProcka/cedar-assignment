import React, { Component } from 'react'
import './MultipleChoice.css'

class MultipleChoice extends Component {
  render() {
    return (
      <div className="MultipleChoice">
        <div className="assignment-activity">
          <div className="number">{this.props.number}</div>
          <div className="activity-content">
            <div className="activity-header">{this.props.activityheader}</div>
            <div className="multiple-choice-option">
              <input type="radio" id="activity-option" name="activity-option" />
              <label for="activity-option"><span></span>{this.props.options[0]}</label>
            </div>
            <div className="multiple-choice-option">
              <input type="radio" id="activity-option" name="activity-option" />
              <label for="activity-option"><span></span>{this.props.options[1]}</label>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MultipleChoice
