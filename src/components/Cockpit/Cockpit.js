import React from "react";

import classes from "./Cockpit.css"

const Cockpit = ( props ) => {
  const Assignedclasses = [];
  let btnClass = '';
  
  if(props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    Assignedclasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    Assignedclasses.push(classes.red);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={Assignedclasses.join(" ")}>This is really working! demo! hurray!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
