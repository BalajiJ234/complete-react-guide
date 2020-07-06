import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

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
    userInput: "",
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

  //UserInput
  userInputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  characterDeleteHandler = (index) => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ userInput: updatedText });
  };

  render() {
    //working with inline styles
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    // };

    let persons = null;

    const classes = [];
    console.log(this.state.persons.length);
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }

    if (this.state.persons.length <= 1) {
      classes.push("italic");
    }

    const charList = this.state.userInput.split("").map((char, index) => {
      return (
        <Char
          character={char}
          key={index}
          clicked={() => this.characterDeleteHandler(index)}
        />
      );
    });

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
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      // style.backgroundColor = "red";
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }
    console.log(classes.join(" "));
    return (
      <div className="App">
        <h1 className={classes.join(" ")}>Hi, I am a React App! </h1>
        {/* <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button> */}
        <button className="button" onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}

        <hr />
        <input
          type="text"
          onChange={this.userInputChangeHandler}
          value={this.state.userInput}
        />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
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
