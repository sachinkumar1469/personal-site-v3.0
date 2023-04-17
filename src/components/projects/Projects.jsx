import React from 'react';

import ProjectItem from './ProjectItem';
import project1 from '../../assets/images/project1.png';
import project2 from '../../assets/images/project2.png';
import project3 from '../../assets/images/project3.png';
import project4 from '../../assets/images/project4.png';
import project5 from '../../assets/images/project5.png';
import project6 from '../../assets/images/project6.png';

function Projects() {
  return (
    <section className="section projects" id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most recent work</span>

        <div className="project__container container">
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
          <ProjectItem
              image={project2} 
              title={"SanSocial"} 
              description={"Twitter like social media application."}
              listItems={[
                  "This social media app is a web-based platform designed for social and interactive engagement.", 
                  "The app allows users to sign up and sign in using either their email and password or Google account.", 
                  "Once logged in, users can create posts similar to Twitter, as well as like and comment on other users' posts.",
                  "Users can view the profiles of other users and add them as friends to expand their social network.",
                  "The app includes a one-to-one chat feature for private, real-time conversations between users.",
                  "The app is built using Node.js, MongoDB, jQuery, AJAX, and EJS technologies to provide a seamless and intuitive user experience."
              ]}
              />
          <ProjectItem
              image={project3} 
              title={"Text-It"} 
              description={"Real-Time chat application useing ReactJs and Firebase."}
              listItems={[
                  "Messaging application which is built using ReactJs.",
                  "Firebase Firestore is used as NoSQL Database.",
                  "Firebase Authentication is used for user authentication.",
                  "Firebase Storage is used for storing images.",
                  "Context API and useReducer are used for global State Management.",
                  "React Router is used for routing.",
                  "React Hooks are used like useState, useEffect, useRef, useReducer, etc.",
                  "The phone number is used as a unique username."
              ]}
              />
        </div>
    </section>
  )
}

export default Projects;
