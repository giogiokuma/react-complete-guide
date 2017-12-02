import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p>I'm {this.props.name} and I am {this.props.age}</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} />
      </div>
    )

  }
}


export default Person;