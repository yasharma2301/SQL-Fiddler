import React from 'react'
import './styles.css'

export default function Input({placeholder, onChange, value}) {
  return (
    <input onChange={onChange} placeholder={placeholder} value={value}/>
  )
}
