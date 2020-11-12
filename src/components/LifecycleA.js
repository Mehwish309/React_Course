import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
class LifecycleA extends Component {
constructor(props) {
    super(props)

    this.state = {
         name: 'Mehwish'
    }
    console.log('LifecycleA constructor')
}
static getDerivedStateFromProps(props, state)
{
console.log('LifecycleA getDerivedStateFromProps')
return null
}
componentDidMount(){
    console.log('LiLifecycleA componentDidMount')
}
shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate')
    return true
}
getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifeCycleA getSnapshotBeforeUpdate')
    return null
}
componentDidUpdate(){
    console.log('LifeCycleA componentDidUpdate')
}
changeState = () => {
    this.setState({
        name: 'Mehwish'
    })
}
    render() {
        console.log('LifecycleA render')
        return (
            <div>
            <div>Lifecycle A</div>
            <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
