import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'; 


class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: '28' },
      { id: 'vasdf1', name: 'Manu', age: '29' },
      { id: 'asdf1', name: 'Stephanie', age: '26'}
    ],
    otherState: 'Some other value',
    showPersons:false
  }
　 

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
    

    this.setState({
      persons:[
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 28}
      ]
    })
  }
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const style= {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit', 
      border: '1px solid blue', 
      padding: '8px', 
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color:'black'
      }
    };
    let persons = null; 

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              onClick={()=> this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}  
              key={person.id}
              changed={(event)=> this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>

      );
      style.backgroundColor = 'red';

      style[':hover'] =  {
        backgroundColor: 'lightred',
        color: 'black'
      };
    }

    const classes = [''];
    if (this.state.persons.length <= 2) {
      classes.push('red'); 
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join('')}>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
         {persons}
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default Radium(App);
