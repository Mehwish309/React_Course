import React, { Component } from 'react'

function ChildComponent(props){
   
        return (
            <div>
                <button onClick={() => props.greetHandler('child','maryam')}>Greet Parent</button>
            </div>
        )
    }
 

export default ChildComponent