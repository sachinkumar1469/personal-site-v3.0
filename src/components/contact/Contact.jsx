import React from 'react';
import {BiPhoneCall} from 'react-icons/bi';
import {MdOutlineMail} from 'react-icons/md';
import {SlLocationPin} from 'react-icons/sl';
import {AiOutlineSend} from 'react-icons/ai';

function Contact() {
  return (
    <section className="section contact" id='contact'>
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>
        <div className="contact__container container grid">
            <div>
                <div className="contact__information">
                    <BiPhoneCall className="contact__icon" />
                    <div>
                        <h3 className="contact__title">Call Me</h3>
                        <span className="contact__subtitle">+91 1234567890</span>
                    </div>
                </div>
                <div className="contact__information">
                    <MdOutlineMail className="contact__icon" />
                    <div>
                        <h3 className="contact__title">Email</h3>
                        <span className="contact__subtitle">
                            <a href="mailto:sachinyadav1469@gmail.com">
                                sachinyadav1469@gmail.com
                            </a>
                        </span>
                    </div>
                </div>
                <div className="contact__information">
                    <SlLocationPin className="contact__icon" />
                    <div>
                        <h3 className="contact__title">Location</h3>
                        <span className="contact__subtitle">India</span>
                    </div>
                </div>
            </div>
            <form action="" className="contact__form">
                <div className="contact__inputs grid">
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Name</label>
                        <input type="text" className="contact__input"/>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Email</label>
                        <input type="email" className="contact__input"/>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Phone</label>
                        <input type="text" className="contact__input"/>
                    </div>
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Message</label>
                        <input type="text" className="contact__input"/>
                    </div>
                    <div className="contact__button">
                        <a type="submit" className="button  button--flex">
                            Send Message
                            <AiOutlineSend className='button__icon'/>
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
