import React, { Component } from "react";

import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

//Class Component
class App extends Component {
  state = {
    persons: [
      { id: "aoidads", name: "Balaji", age: 23 },
      { id: "aoidwer", name: "Raguram", age: 22 },
      { id: "aoide3f", name: "Dhanalakshmi", age: 49 },
    ],
    otherState: "Some other values",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    console.log("Was Clicked!");
    // this.state.persons[0].name = "Balaji Janarthanan"; //Don't do like this it's not recommended way to do this.
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Raguram Janarthanan", age: 22 },
        { name: "Dhanalakshmi", age: 49 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons =<Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler} />;
    }
    return (
      <div className={classes.App}>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
    // Why we are using React in header, We are using JSX to write the as HTML format but not HTML. The reason behind this is easier to understand the Code. It uppper return statement while compilation it turns into below return statement
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi I am a react app!")
    // );
  }
}

export default App;

//Functional Component
// const App = (props) => {
//   const [personsState, setPersonState] = useState({
//     persons: [
//       { name: "Balaji", age: 23 },
//       { name: "Raguram", age: 22 },
//       { name: "Dhanalakshmi", age: 49 },
//     ],
//   });

//   const [otherState, setOtherState] = useState("some other value");

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     console.log("Was Clicked!");
//     setPersonState({
//       persons: [
//         { name: "Balaji Janarthanan", age: 23 },
//         { name: "Raguram Janarthanan", age: 22 },
//         { name: "Dhanalakshmi", age: 49 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, I am a React App! </h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         His Hobbies: Mobile Gamming - PUBG
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };

// export default App;
