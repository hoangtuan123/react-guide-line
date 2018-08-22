import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium'

class App extends Component {

  state = {
    persons: [{
        name: "Tuan",
        age: "10",
        id: '111'
      },
      {
        name: "Tuan Nguyen",
        age: "11",
        id: '112'
      },
      {
        name: "Tuan Hoang",
        age: "12",
        id: '113'
      }
    ],
    showPerson: false
  }

  switchName(newName){
    this.setState({
      persons:  [{
        name: newName,
        age: "50"
      },
      {
        name: "Tuan Nguyen",
        age: "50"
      },
      {
        name: "Tuan Hoang",
        age: "50"
      }
    ]
    })
  }

  changeHanlder = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  }

  deletePerson(index){
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons});
  }

  toggle(){
    const showPerson = this.state.showPerson;
    this.setState({showPerson: !showPerson});
  }

  render() {
    let persons = null;
    const style = {
      backgroundColor: "red",
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    if(this.state.showPerson){
      persons = (
        <div>
            {this.state.persons.map((person, index) =>{
              return <Person name={person.name} 
                              age={person.age} 
                              click={() => this.deletePerson(index)}
                              key={index}
                              changed={(event) => { this.changeHanlder(event, person.id) }}
                              />
            })}
        </div>
      )
      style.backgroundColor = "green";
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'white'
      }
    }

    const classes = [];

    if(this.state.persons.length <= 2)
      classes.push('red');
    if(this.state.persons.length <= 1)
      classes.push('bold');

    return (
      <StyleRoot>
        <div className="App">
          <p className={classes.join(' ')}>hello Reactjs</p>
          <button style={style} onClick={() => this.toggle()}>Click Change Name</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
