import React from 'react'
const Hello = () => {
    return React.createElement(
        'div',
        {id:'hello', className: 'name'},
        React.createElement('h1', null, 'Hello Mehwish')
    ) 
    
}
export default Hello