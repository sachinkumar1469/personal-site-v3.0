import React from 'react';

// Local imports
import aboutImg from "../../assets/images/about.jpg";

function About() {
  return (
    <section className="section about" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src={aboutImg} alt="" className="about__img" />
            <div className="about__data">
                <p className="about__description">HELLO! Nice to meet you, I am Sachin Kumar, an undergraduate Computer Science student from India, currently studying in Greater Noida. I am a Full Stack Web Developer using MERN/MEAN stack, and Android Developer getting on cross-platform development using React Native. I also like to experiment with UI/UX. I like to work in a fast-paced environment where I can have the opportunity to learn many things at once.</p>
            
                <div className="about__info">
                    <div>
                        <span className="about__info-title">6+</span>
                        <span className="about__info-name">Months internship <br /> experience</span>
                    </div>
                    <div>
                        <span className="about__info-title">15+</span>
                        <span className="about__info-name">Projects <br /> completed</span>
                    </div>
                    <div>
                        <span className="about__info-title">2+</span>
                        <span className="about__info-name">Compaines <br /> worked</span>
                    </div>
                </div>
                <div className="about__buttons">
                    <a download href='#' className='button button--flex'>
                        Download CV <svg style={{marginLeft:'0.3rem'}} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
