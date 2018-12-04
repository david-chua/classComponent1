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

const myArr = [];

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

const MessageRenderer = props => {
  return <h1>{props.propsMessage}</h1>;
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello from the App State"
    };
  }

  render() {
    return (
      <div>
        <MessageRenderer propsMessage={this.state.message} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
