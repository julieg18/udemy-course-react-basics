import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      {
        name: 'Max',
        age: 24,
      },
      {
        name: 'Philis',
        age: 16,
      },
      {
        name: 'John',
        age: 55,
      },
    ],
    otherState: 'state',
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log('clicked!');
    // DONT DO THIS: this.state.persons[0].name = 'Matthew'
    this.setState({
      persons: [
        {
          name: 'Max',
          age: 24,
        },
        {
          name: newName,
          age: 16,
        },
        {
          name: 'John',
          age: 50,
        },
      ],
    });
  };

  nameChangedHandler = (e) => {
    this.setState({
      persons: [
        {
          name: 'Max',
          age: 24,
        },
        {
          name: e.target.value,
          age: 16,
        },
        {
          name: 'John',
          age: 50,
        },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    // scoped to component or element you actually added to
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Crochet
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle List
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
