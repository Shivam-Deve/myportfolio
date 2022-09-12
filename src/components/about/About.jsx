import React from 'react'
import './About.scss'
function About() {
    return (
        <div className='about'>
            <div className="left">
                <div className="card bg">

                </div>
                <div className="card">
                    <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="img" />
                </div>
            </div>
            <div className="right">
                <h1 className="title">About Me</h1>
                <p className="sub">
                    It is a long established fact that a reader will be distracted by the
                    readable content.
                </p>
                <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
            </div>
        </div>
    )
}

export default About