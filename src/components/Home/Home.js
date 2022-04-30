import React from 'react'
import Button from '../Button/Button'
import './styles.css'
import artwork from '../../assets/artwork.png'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='home section'>
                <div className='home-left'>
                    <h3>SQL Fiddler</h3>
                    <p>Run SQL qeries like never before<br />The fastest online SQL editor</p>
                    <div>Learn to code with our beginner-friendly tutorials and examples.<br/>Read tutorials, try examples, write programs, and learn to code.</div>
                    <div className='home-actions'>
                        <Button name="Get Started" onClick={() => navigate('/editor')}/>
                        <Button name="Github" />
                    </div>
                </div>
                <img src={artwork} alt='' className='artwork'></img>
            </div>
        </div>
    )
}