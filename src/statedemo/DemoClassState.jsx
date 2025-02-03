import React, { Component } from 'react';

class DemoClassState extends Component {

    constructor(){
        super()
        this.state = {id:420,name:"Krishna",gender:"Male"}

    }
        // setState is used to modify the state object
        change = () =>
        {
             this.setState({id:1212,name:"Peace",gender:"MALE"})
        }

    render() {
        return (
            <div>
                <h3>State Demo In class Component</h3>
                <p>ID:{this.state.id}</p>
                <p>Name:{this.state.name}</p> 
                <p>Gender:{this.state.gender}</p>
            <button onClick={this.change}>Change</button>

            </div>
        );
    }
}

export default DemoClassState;