import React from 'react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import ProjectItem from './ProjectItem';

function ProjectItems() {
    const params = {
        pagination: {
          clickable: true,
          type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000,
        },
        spaceBetween: 30,
      };
      
      return (
        <div className='swiper'>
          <div className='swiper-wrapper'>
            <ProjectItem 
                image={project1} 
                title={"Your-Visit"} 
                description={"Location sharing social media application."}
                listItems={[
                    "Your-Visit is a social media application where users can post images with live locations of any place.", 
                    "Google Map API is used for location sharing.", 
                    "MongoDB Atlas is used as the database server.",
                    "Rest APIs are built using ExpressJs and NodeJs.",
                    "JWT package is used for authentication, BcryptJs for password Hashing, and Multer for File Upload.",
                    "ReactJs library is used to build the front end.",
                    "Custom Hooks and in-built react Hooks are used like useState, useEffect, useRef, useReducer, etc."
                ]}
                />
          </div>
        </div>
      );
}

export default ProjectItems



