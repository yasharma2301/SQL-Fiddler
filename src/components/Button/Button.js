import React from 'react'
import './styles.css'

export default function Button({ onClick, name, icon, backgroundColor }) {
    return (
        <button onClick={onClick} style={{backgroundColor: backgroundColor}}>
            <div>{name}</div>
            <div className='icon'>{ icon }</div>
        </button>
    )
}