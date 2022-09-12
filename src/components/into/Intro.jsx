import React from 'react'
import './Intro.scss'
import Me from '../../images/avatar.png';
function Intro() {
    return (
        <div className="intro">
            <div className="left">
                <div className="left-wrapper">
                    <h2 className='address'>Hello I am,</h2>
                    <h2 className='name'>SHIVAM</h2>
                    <div className="job-titles">
                        <div className="title-wrapper">
                            <div className="title">Software Developer</div>
                            <div className="title">YouTuber</div>
                            <div className="title">Technical Enthusiast</div>
                            <div className="title">Content Creater</div>
                        </div>
                    </div>
                    <div className="desc">
                        I write code, i develop softwares and also create content on
                        YouTube. I love technology and the way software and hardware
                        works together
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="bg">

                </div>
                <div className="img">
                    <img className='avatar' src={Me} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Intro