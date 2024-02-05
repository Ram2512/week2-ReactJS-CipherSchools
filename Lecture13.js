import React, { Component } from "react";
class Name extends Component {
    State = { name: "Ram Sharma"};
    setName(e) {
        this.setState({ ...this.state, name: "Amrit"});
    };
    allUsers = [
        { name: "John",
          email: "john@gmail.com",
          phoneNumber: "7583256727",
        }
    ];
    render() {
        return (
            <div>
                <Test name = {this.state.name} setName = {this.setName} />
                <UserDetails keys = {index} user = {user} />
                {this.allUsers.map(User, index) => (
                )}
            </div>
        );
    }
}
export default allUserList;
___________________________________________________________________________________________

import React, { Component } from "react";
class SumNumbers extends Component {
    State = {
        firstNumber: 0,
        secondNumber: 0
    }
    
    render () {
        return (
            <div>
                <input type = "number" onChange = {this.setState({ ... this.State})} />
            </div>
            <input
                type = "number"
                placeholder="Enter First Name"
                onChange={(e) => {
                  this.setState ({ 
                    ... this.state,
                    firstNumber: parseInt(e.target.value),
                });
            }} />
            <input
                type = "number"
                placeholder="Enter Second Name"
                onChange={(e) => {
                  this.setState ({ 
                    ... this.state,
                    secondNumber: parseInt(e.target.value),
                });
            }} />
            </div>
        );
    }
}
