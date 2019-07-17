import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
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
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('clicked!');
    // DONT DO THIS: personsState.persons[0].name = 'Matthew'
    setPersonsState({
      persons: [
        {
          name: 'Matthew',
          age: 24,
        },
        {
          name: 'Philis',
          age: 16,
        },
        {
          name: 'John',
          age: 50,
        },
      ],
    });
  };

  return (
    <div className="App">
      <h1>I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Crochet
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default App;
