import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    incrementCount = () =>{
        this.setState(prevState => {
            return {
                count: prevState.count + 1}
        })
    }   
    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }
    componentDidUpdate(prevProps, prevState){
      
        if(prevState.count !== this.state.count){
            console.log('Updating document title')
            document.title = `Clicked ${this.state.count} times`
        }
        
    }
    render() {
        return (
            <div>
                <input 
                  type="text"
                  value={this.state.name}
                  onChange={e => {
                      this.setState({ name: e.target.value})
                  }} />
                <button onClick={() => this.setState({ count: this.state.count + 1})}> Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
