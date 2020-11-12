import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Mehwish' 
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
            name:'Mehwish'
            })
        }, 2000)
       
    }
    render() {
        console.log('Parent comp')
        return (
            <div>
                Parent Component
                <MemoComp  name={this.state.name}/>
                {/*<PureComp name={this.state.name}></PureComp>
                <RegComp name={this.state.name}></RegComp>*/}

            </div>
        )
    }
}

export default ParentComp

