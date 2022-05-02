import React from 'react'
import LoadingSpin from "react-loading-spin";
import './styles.css'

export default function Loader() {
  return (
    <div className='loader'>
        <LoadingSpin size="40px" secondaryColor="#2026D2" primaryColor="lightblue"/>
        <div>Loading Please wait...</div>
    </div>
  )
}
