import React from 'react'
import './styles.css'
import logo from '../../assets/logo.png'

export default function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <img src={logo} className='logo'></img>
            </div>
        </div>
    )
}
