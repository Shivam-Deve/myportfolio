import React from 'react'
import './Contact.scss'
import { useRef } from 'react'
import Phone from '../../images/phone.png'
import Email from '../../images/email.png'
import Address from '../../images/address.png'
function Contact() {
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className="contact">
            <div className="bg"></div>
            <div className="wrapper">
                <div className="left">
                    <h1 className="title">Let's discuss your project</h1>
                    <div className="info">
                        <div className="info-item">
                            <img src={Phone} alt="" className="icon" />
                            +1 1234 556 75
                        </div>
                        <div className="info-item">
                            <img className="icon" src={Email} alt="" />
                            contact@lama.dev
                        </div>
                        <div className="info-item">
                            <img className="icon" src={Address} alt="" />
                            245 King Street, Touterie Victoria 8520 Australia
                        </div>
                    </div>
                </div>
                <div className="right">
                    <p className="desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={form} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact