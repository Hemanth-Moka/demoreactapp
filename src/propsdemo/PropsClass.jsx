import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
        <div>
             <h3><u>props in demo Class</u></h3>

             <div>
          
            <p>{this.props.name}</p>
            <p>{this.props.p}</p>
            <p>{this.props.student.sgender}</p>


           

    </div>

        </div>
       
    )
  }
}

