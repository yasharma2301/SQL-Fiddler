import React from 'react'
import './styles.css'

export default function Input({placeholder, onChange}) {
  return (
    <input onChange={onChange} placeholder={placeholder}/>
  )
}
