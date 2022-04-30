import React from 'react'
import './styles.css'
export default function Button({ onClick, name }) {
    return (
        <button onClick={onClick}>{name}</button>
    )
}