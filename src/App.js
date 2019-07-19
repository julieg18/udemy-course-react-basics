import React from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

  nameChangedHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex((p) => p === id);

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
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
    let persons = null;
    let btnClass = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass = styles.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>It's working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle List
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
