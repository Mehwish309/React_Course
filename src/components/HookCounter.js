import React, { useState, useEffect } from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect - Updating document title')
      document.title = `you clicked ${count} times`
    }, [count])

    return (
        <div>
            Example 1:
            <button onClick={() => setCount(count + 1)}> Count {count} times</button>
        </div>
    )
}

export default HookCounter