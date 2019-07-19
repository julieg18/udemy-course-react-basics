import React from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = styles.Red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>It's working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle List
      </button>
    </div>
  );
};

export default cockpit;
