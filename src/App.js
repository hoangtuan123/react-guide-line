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
    return (
      <div className="App">
        <button onClick={() => this.toggle()}>Click Change Name</button>
        {
          this.state.showPerson ? 
          <div>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person click={this.switchName.bind(this, "newName!!!!!")} 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                changed={this.changeHanlder}
                />
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
          </div> : null
        }
        
      </div>
    );
  }
}

export default App;
