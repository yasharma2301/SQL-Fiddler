import React from 'react'
import Button from '../Button/Button'
import './styles.css'
import artwork from '../../assets/artwork.webp'
import { useNavigate } from 'react-router-dom'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'

export default function Home() {
    const navigate = useNavigate();

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return (
        <>
            <div className='container'>
                <div className='home section'>
                    <div className='home-left'>
                        <h3>SQL Fiddler</h3>
                        <p>Run SQL qeries like never before<br />The fastest online SQL editor</p>
                        <div>Execute queries with our user-friendly tool.<br />Read tutorials, try examples, write queries and colaborate.</div>
                        <div className='home-actions'>
                            <Button name="Get Started" onClick={() => navigate('/editor')} />
                            <Button name="Github" onClick={() => openInNewTab('https://github.com/yasharma2301/SQL-Fiddler')}/>
                        </div>
                    </div>
                    <img src={artwork} alt='' className='artwork'></img>
                </div>
                <Features />

            </div>
            <Footer />
        </>
    )
}
