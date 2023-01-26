import React from 'react'
import './About.scss'
function About() {
    return (
        <div className='about' id='about'>
            <div className="left">
                <div className="card bg">

                </div>
                <div className="card">
                    <div className='title'>
                        Skills
                    </div>
                    <div className="skill">
                        <span>Javascript</span>
                        <span>MySql</span>
                        <span>Mongodb</span>
                        <span>Java</span>
                        <span>C++</span>
                        <span>TypeScript</span>
                        <span>Node</span>
                        <span>Express</span>
                        <span>Css</span>
                        <span>Bootstrap</span>
                        <span>Tailwind</span>
                        <span>MaterialUi</span>
                        <span>React</span>
                        <span>Redux</span>
                        <span>ReactNative</span>
                        <span>AWS</span>
                        <span>Docker</span>
                        <span>Git</span>
                        <span>Linux</span>
                    </div>
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