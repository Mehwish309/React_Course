import React from 'react'
import './appStyles.css'
import styles from './appStyles.module.css'
const heading = {
    fontSize: '72px',
    color: 'blue'
}
const a =
{
    fontSize: '100px',
    color: 'red'
}

function Inline() {
    return (
        <div>
            <h1 className='error'>Beautiful</h1>
        <h1 className={styles.success}>BumBum</h1>
            <h1 style={heading}>Silly</h1>
            <h4 style={a}>Maryam is study all the time</h4>
        </div>
    )
}
export default Inline