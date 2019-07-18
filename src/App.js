import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
  state = {
    persons: [
      {
        id: 'j48',
        name: 'Max',
        age: 24,
      },
      {
        id: 'd24',
        name: 'Philis',
        age: 16,
      },
      {
        id: 'jo2',
        name: 'John',
        age: 55,
      },
    ],
    otherState: 'state',
    showPersons: false,
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
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
