import React, { useState } from 'react'

interface Props{
    setPage: Function
}

export default function Navigation({setPage}: Props) {
    const [active, setActive] = useState('home')
    
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <p className="navbar-brand">
            <img id="logo" className="logo-nav" alt='logo' src="img/FM-logo.png" />
        </p>
        <button className="navbar-toggler collapsed btn-lg" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav white mx-auto right">
                <li onClick={() => {
                    setPage(0)
                    setActive('home')
                    }} className="nav-item">
                    <p id="home" className={`nav-link ${active === 'home' ? 'active' : ''}`}>
                        HOME
                    </p>
                </li>
                <li onClick={() => {
                    setPage(1)
                    setActive('about')
                    }} className="nav-item">
                    <p id="about" className={`nav-link ${active === 'about' ? 'active' : ''}`}>
                        ABOUT
                    </p>
                </li>
                <li onClick={() => {
                    setPage(2)
                    setActive('work')
                    }} className="nav-item">
                    <p id="work" className={`nav-link ${active === 'work' ? 'active' : ''}`}>
                        WORK
                    </p>
                </li>
                <li onClick={() => {
                    setPage(3)
                    setActive('contact')
                    }} className="nav-item">
                    <p id="contact" className={`nav-link ${active === 'contact' ? 'active' : ''}`}>
                        CONTACT
                    </p>
                </li>
            </ul>
        </div>
    </nav>
  )
}
