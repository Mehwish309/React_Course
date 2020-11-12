import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Mehwsih'
             
             
        }
        this.greetParent = this.greetParent.bind(this)

    }
    greetParent(childName, childName1){
        alert(`Hello ${this.state.parentName} from ${childName} ${childName1}`)
    }
    render() {
        return (
            <div>
              <ChildComponent greetHandler={this.greetParent}/>  
            </div>
        )
    }
}
export default ParentComponent