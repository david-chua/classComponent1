import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.stae = {};
//   }
//   // class component
//   // stateful component
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//     );
//   }
// }

// const App1 = () => {
//   // functional component
//   // stateless component
//   // Presentational component
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// };

// CCR - "class", "constructor", "render"
// Declare class, define constructor, don't forget to define render method

// class SomeAwesomeClassComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       someValue: "David"
//     };
//   }

//   render() {
//     return <div> Hello from my classy component </div>;
//   }
// }

const friendData = [
  {
    id: 1,
    first_name: "Klarika",
    last_name: "Decort"
  },
  {
    id: 2,
    first_name: "Sibley",
    last_name: "Dabling"
  },
  {
    id: 3,
    first_name: "Shelli",
    last_name: "Pywell"
  }
  // {
  //   id: 4,
  //   first_name: "Westbrook",
  //   last_name: "Jarrell"
  // },
  // {
  //   id: 5,
  //   first_name: "Deeanne",
  //   last_name: "Daid"
  // },
  // {
  //   id: 6,
  //   first_name: "Dare",
  //   last_name: "Chapelle"
  // },
  // {
  //   id: 7,
  //   first_name: "Elly",
  //   last_name: "Belli"
  // },
  // {
  //   id: 8,
  //   first_name: "Josy",
  //   last_name: "MacMychem"
  // },
  // {
  //   id: 9,
  //   first_name: "Xaviera",
  //   last_name: "Ledgeway"
  // },
  // {
  //   id: 10,
  //   first_name: "Bryon",
  //   last_name: "Zupo"
  // },
  // {
  //   id: 11,
  //   first_name: "Junette",
  //   last_name: "Titheridge"
  // },
  // {
  //   id: 12,
  //   first_name: "Merrie",
  //   last_name: "Pusey"
  // },
  // {
  //   id: 13,
  //   first_name: "Amelia",
  //   last_name: "Stother"
  // },
  // {
  //   id: 14,
  //   first_name: "Rollo",
  //   last_name: "Gamblin"
  // },
  // {
  //   id: 15,
  //   first_name: "Pavlov",
  //   last_name: "Blunsom"
  // },
  // {
  //   id: 16,
  //   first_name: "Raddie",
  //   last_name: "Cockerill"
  // },
  // {
  //   id: 17,
  //   first_name: "Bobbie",
  //   last_name: "Randales"
  // },
  // {
  //   id: 18,
  //   first_name: "Dorette",
  //   last_name: "Duffet"
  // },
  // {
  //   id: 19,
  //   first_name: "Tanitansy",
  //   last_name: "A'field"
  // },
  // {
  //   id: 20,
  //   first_name: "Elvera",
  //   last_name: "Anthoin"
  // },
  // {
  //   id: 21,
  //   first_name: "Ginger",
  //   last_name: "Kopf"
  // },
  // {
  //   id: 22,
  //   first_name: "Aila",
  //   last_name: "Killcross"
  // },
  // {
  //   id: 23,
  //   first_name: "Mycah",
  //   last_name: "Paris"
  // },
  // {
  //   id: 24,
  //   first_name: "Patti",
  //   last_name: "Quickenden"
  // },
  // {
  //   id: 25,
  //   first_name: "Cirillo",
  //   last_name: "Rollings"
  // },
  // {
  //   id: 26,
  //   first_name: "Alameda",
  //   last_name: "Kitcher"
  // },
  // {
  //   id: 27,
  //   first_name: "Mitzi",
  //   last_name: "Pullin"
  // },
  // {
  //   id: 28,
  //   first_name: "Davide",
  //   last_name: "Joust"
  // },
  // {
  //   id: 29,
  //   first_name: "Olenolin",
  //   last_name: "Lean"
  // },
  // {
  //   id: 30,
  //   first_name: "Clarance",
  //   last_name: "Clear"
  // }
];

const MessageRenderer = props => {
  return <p>{props.propsMessage}</p>;
};

const Friend = props => {
  const name = props.name;
  const id = props.id;
  return (
    <div>
      <h4> ID: {id} </h4>
      <p> {name}</p>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello world ",
      friends: friendData
    };
  }

  handleUpdateState = () => {
    const friends = this.state.friends.slice();
    friends.push({
      id: 31,
      first_name: "David",
      last_name: "Chua"
    });
    // push our new friend into the friends array
    this.setState({ friends: friends });
    // FROM REACT API the only way to change state;
  };

  render() {
    console.log("STATE: ", this.state);
    return (
      <div>
        {this.state.message !== "" ? (
          <MessageRenderer propsMessage={this.state.message} />
        ) : null}
        {this.state.friends.map(friend => (
          <Friend
            id={friend.id}
            name={friend.first_name + " " + friend.last_name}
          />
        ))}
        <button onClick={this.handleUpdateState}>
          {" "}
          Click to Add a Friend{" "}
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
