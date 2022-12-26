import React from 'react'
import './About.scss'
function About() {
    return (
        <div className='about' id='about'>
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
                    I am a computer science student. Loves exploring new technology
                    and the way hardware and software works together.
                </p>
                <p className="desc">
                    Also talks about tech at youtube and article section of the portfolio.
                </p>
            </div>
        </div>
    )
}

export default About