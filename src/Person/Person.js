import React from 'react';
import './Person.css';
const person = (props) => {
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