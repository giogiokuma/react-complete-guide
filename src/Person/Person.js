import React from 'react';
import './Person.css';
import Radium from 'radium';
const person = (props) => {
  const style = {
    '@media (min-width: 500px)' : {
      width: '450px'
    }
  }
  return (
    <div className="Person">
      <p>I'm {props.name} and I am {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} />
    </div>
  )
  //return <p>I'm a Person and I'm {Math.floor(Math.random() * 30)} years old!</p>
}

export default person;