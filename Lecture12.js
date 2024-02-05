import React from "react";
import AllUserList from "./components";
const App = () => {
    return (
        <div>
            <AllUserList/>
        </div>
    );
};
export default App;
______________________________________________________

import React, { Component } from "react";
class Name extends Component {
    State = { name: "Ram Sharma"};
    setName(e) {
        this.setState({ ...this.state, name: "Amrit"});
    };
    render () {
        return (
            <>
              <h1>
                The name is: {this.state.name}
              </h1>
            <button onClick = {this.stName}>Click Me!</button>
            </>
        );
    }
}
export default Name;
_______________________________________________________________________

import React, { Component } from "react";

class Name extends Component {
    State = { name: "Ram Sharma"};
    setName(e) {
        this.setState({ ...this.state, name: "Amrit"});
    };
    testHandler = () => {
        console.log("testHandler");
    }
    render () {
        return (
            <>
              <h1>
                The name is: {this.state.name}      
            </h1>     
            <button 
                 onClick = {() => {
                    this.setName("Amrit");
                    this.testHandler(;)
                 }}>
                Click Me!
            </button>
            </>
        );
    }
}
export default Name;
