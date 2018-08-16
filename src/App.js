import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [{
        name: "Tuan",
        age: "10"
      },
      {
        name: "Tuan Nguyen",
        age: "11"
      },
      {
        name: "Tuan Hoang",
        age: "12"
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

  changeHanlder = (event) =>{
    this.setState({
      persons:  [{
        name: "newName",
        age: "50"
      },
      {
        name: event.target.value,
        age: "50"
      },
      {
        name: "Tuan Hoang",
        age: "50"
      }
    ]
    })
  }

  toggle(){
    const showPerson = this.state.showPerson;
    this.setState({showPerson: !showPerson});
  }

  render() {
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
            {this.state.persons.map(person =>{
              return <Person name={person.name} 
                              age={person.age} />
            })}
        </div>
      )
    }


    return (
      <div className="App">
        <button onClick={() => this.toggle()}>Click Change Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
