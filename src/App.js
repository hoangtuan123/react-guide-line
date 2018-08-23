import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

    let btnClass = '';

    if(this.state.showPerson){
      persons = (
        <div>
            {this.state.persons.map((person, index) =>{
              return <ErrorBoundary key={index}><Person name={person.name} 
                                    age={person.age} 
                                    click={() => this.deletePerson(index)}
                                    changed={(event) => { this.changeHanlder(event, person.id) }}/></ErrorBoundary>
            })}
        </div>
      )
      btnClass = classes.Red;
    }

    const assignClassed = [];

    if(this.state.persons.length <= 2)
      assignClassed.push(classes.red);
    if(this.state.persons.length <= 1)
      assignClassed.push(classes.bold);

    return (
        <div className={classes.App}>
          <p className={assignClassed.join(' ')}>hello Reactjs</p>
          <button className={btnClass} onClick={() => this.toggle()}>Click Change Name</button>
          {persons}
        </div>
    );
  }
}

export default App;
