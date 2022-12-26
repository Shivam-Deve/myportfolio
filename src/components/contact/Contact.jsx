import React from 'react'
import './Contact.scss'
import { useRef } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className="contact" id='contact'>
            <div className="bg"></div>
            <div className="wrapper">
                <div className="left">
                    <h1 className="title">Let's discuss your project</h1>
                    <div className="info">
                        <div className="info-item">
                            <EmailIcon style={{ color: 'darkslategray' }} /> <span>mishivamm@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <GitHubIcon style={{ color: 'darkslategray' }} /> mishivamm@gmail.com
                        </div>
                        <div className="info-item">
                            <LinkedInIcon style={{ color: 'darkslategray' }} /> mishivamm@gmail.com
                        </div>
                        <div className="info-item">
                            <YouTubeIcon style={{ color: 'darkslategray' }} /> mishivamm@gmail.com
                        </div>
                        <div className="info-item">

                            <InstagramIcon style={{ color: 'darkslategray' }} /> mishivamm@gmail.com

                        </div>

                    </div>
                </div>
                <div className="right">
                    <p className="desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <div className="form">
                        <span>Email Me</span>
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="form-control">
                                    <label htmlFor="user_name">Name</label>
                                    <input type="text" placeholder="Name" id="user_name" name="user_name" />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" placeholder="Subject" id='subject' name="user_subject" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-control">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" placeholder="Email" id='email' name="user_email" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-control">
                                    <label htmlFor="message">Message</label>
                                    <textarea rows="5" id='message' placeholder="Message" name="message" />
                                </div>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact