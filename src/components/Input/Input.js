import React from 'react'
import './styles.css'

export default function Input({placeholder, onChange, value, aria_label}) {
  return (
    <input onChange={onChange} placeholder={placeholder} value={value} aria-label={aria_label}/>
  )
}
