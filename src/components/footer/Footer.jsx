import React from 'react';
import {FaGithub,FaLinkedin,FaTwitter,FaInstagram} from 'react-icons/fa';

function Footer() {
  return (
    <section className="section footer">
        <div className="footer__container container grid">
            <div>
                <h1 className="footer__title">Sachin</h1>
                <span className="footer__subtitle">Web Developer</span>
            </div>
            <ul className="footer__links">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Portfolio</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/sachinkumar1469/" target='_blank' className="footer__social">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/sachinkumar1469" target='_blank' className="footer__social">
                    <FaGithub />
                </a>
                <a href="" className="footer__social">
                    <FaTwitter />
                </a>
            </div>
        </div>
        <p className="footer__copy">&#169; Sachin Yadav. All right reserved</p>
    </section>
  )
}

export default Footer
