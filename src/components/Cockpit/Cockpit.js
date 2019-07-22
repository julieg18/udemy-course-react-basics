import React, { useEffect, useRef, useContext } from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http requests...
    // setTimeout(() => {
    //   alert('SAVED DATA TO CLOUD');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer)
      console.log('[Cockpit.js] cleanup work');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockput.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = styles.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>It's working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle List
      </button>
      {/* <AuthContext.Consumer>
        {(context) => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);
