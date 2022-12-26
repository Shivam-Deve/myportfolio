import React, { useState } from 'react'
import './Navbar.scss'
function Navbar() {
    const [darkBg, setDarkBg] = useState(false);
    const changeBg = () => {
        if (window.scrollY > 60) {
            setDarkBg(true);
        } else {
            setDarkBg(false)
        }
    }
    window.addEventListener('scroll', changeBg);
    return (
        <div className={darkBg ? "navbar active" : "navbar"}>
            <div className="logo">
                {
                    !darkBg ?
                        <div className="stamp">
                            <div className="dp">
                                <div className="pic">
                                    <img src="/imgs/dp.jpeg" alt="" srcset="" />
                                </div>
                            </div>
                            <div className="name">
                                Shivam
                            </div>
                        </div>
                        :
                        <div className="name">
                            <a href="#intro">Shivam</a>
                        </div>
                }
            </div>
            <div className="nav">
                <ul className='navList'>
                    <li className="links">
                        <a href="#products">Projects</a>
                    </li>
                    <li className="links">
                        Articles
                    </li>
                    <li className="links">
                        <a href="#about">About</a>
                    </li>
                    <li className="links">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar