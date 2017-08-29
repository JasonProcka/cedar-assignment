import React, { Component } from 'react';
import './Assignment.css';
import Nav from '../../components/Nav/Nav';
// Activities
import WriteMedium from '../../components/WriteMedium/WriteMedium'
import MultipleChoice from '../../components/MultipleChoice/MultipleChoice'



class Assignment extends Component {
  render() {
    console.log(this.props);


    let assignments = this.props.assignment.activities;
    assignments = assignments.map((assignment, index) => {

      if(assignment.type == "MultipleChoice"){
        return (  <MultipleChoice key={index} activityheader={assignment.head} options={assignment.options}/>)
      }else if(assignment.type == "WriteMedium"){
        return (   <WriteMedium key={index} activityheader={assignment.head}/>)
      }

    })
    console.log(assignments);
    return (
      <div className="Assignment">
        <Nav />
        <div className="assignment-wrapper">
          <div className="assignment-header">
            <h2>{this.props.assignment.name}</h2>
            <p>Calm down kids, it's an easy assignment!</p>
          </div>
          <div className="assignment-body">

               {assignments}

              {/* <WriteMedium number="1" activityheader="Explain the difference between atomic mass (amu) and molar mass (g)."/>
              <WriteMedium number="2" activityheader="Which has more mass, a mole of potassium or a mole of sodium? Explain your answer." />
              <WriteMedium number="3" activityheader="Explain how you would convert from number of atoms of a specific element to its mass." />
              <WriteMedium number="4" activityheader="Barbed wire is often made of steel, which is primarily iron, and coated with zinc. Compare the number of particles and the mass of 1 mol of each." />
              <MultipleChoice number="5" activityheader="Calculate the mass of each element." options={['5.22 mol of He', 'Random', 'Thanks']}/> */}
            <div className="assignment-controls">
              <a className="assignment-finish" href="">Finish</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Assignment;
