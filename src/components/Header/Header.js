import React from 'react'
import './styles.css'
import logo from '../../assets/logo.webp'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <Link to='/'>
                    <img src={logo} className='logo' alt='logo'></img>
                </Link>
            </div>
        </div>
    )
}
