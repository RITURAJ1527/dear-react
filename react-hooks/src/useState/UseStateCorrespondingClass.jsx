// import React, { Component } from 'react'

// export default class UseStateCorrespondingClass extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }


import React from "react";

export default class UseStateCorrespondingClass extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: "Raj",
            id: "",
            class: "",
            count: 0
        }
    }

    increment = ()=>{
        this.setState((prev)=>{
            console.log(prev);
            return {...this.state, count: this.state.count+1}
        })
    }

    render() {
        return (
            <>
                <h1>Hi {this.state.name}</h1>
                <h2>Count: {this.state.count}</h2>
                <button onClick={this.increment}>Add</button>
            </>
        )
    }
    
}
