import React from 'react'
import './Navbar.scss'
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">Shivam</div>
            <div className="nav">
                <ul className='navList'>
                    <li className="links">Menu</li>
                    <li className="links">Contact</li>
                    <li className="links">Profile</li>
                    <li className="links">About</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar