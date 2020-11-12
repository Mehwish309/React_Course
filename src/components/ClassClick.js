import React, { Component } from 'react'

export default class ClassClick extends Component {
    
    clickHandler(){
    console.log('clicked the button')
}
render() {
        return (
            <div>
               <button onClick={this.clickHandler}>Click me</button> 
            </div>
        )
    }
}
