import React from 'react'
import Modal from './ProjectModal';

function ProjectItem({title, description, image, demo, github, tags, url,listItems}) {
    const [modal, setModal] = React.useState(false);
    const closeModal = (e) => {
        setModal(false);
    }
    const openModal = (e) => {
        setModal(true);
    }
    return (
        <div className="project__content">
            <div className='project__image_wrapper'>
                <img src={image} alt="project image" className="project__img" />
            </div>
            <div className="project__data">
                <h3 className="project__title">{title}</h3>
                <p className="project__description">{description}</p>
                <div onClick={openModal} style={{marginBottom:'0.5rem',cursor:'pointer'}}  className="button button--small button--link button--flex project__button-more">
                    View More
                    <svg className='button__icon' width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.92 6.61994C11.8724 6.49719 11.801 6.38505 11.71 6.28994L6.71 1.28994C6.61676 1.1967 6.50607 1.12274 6.38425 1.07228C6.26243 1.02182 6.13186 0.99585 6 0.99585C5.7337 0.99585 5.4783 1.10164 5.29 1.28994C5.19676 1.38318 5.1228 1.49387 5.07234 1.61569C5.02188 1.73751 4.99591 1.86808 4.99591 1.99994C4.99591 2.26624 5.1017 2.52164 5.29 2.70994L8.59 5.99994H1C0.734784 5.99994 0.48043 6.1053 0.292893 6.29283C0.105357 6.48037 0 6.73472 0 6.99994C0 7.26516 0.105357 7.51951 0.292893 7.70705C0.48043 7.89458 0.734784 7.99994 1 7.99994H8.59L5.29 11.2899C5.19627 11.3829 5.12188 11.4935 5.07111 11.6154C5.02034 11.7372 4.9942 11.8679 4.9942 11.9999C4.9942 12.132 5.02034 12.2627 5.07111 12.3845C5.12188 12.5064 5.19627 12.617 5.29 12.7099C5.38296 12.8037 5.49356 12.8781 5.61542 12.9288C5.73728 12.9796 5.86799 13.0057 6 13.0057C6.13201 13.0057 6.26272 12.9796 6.38458 12.9288C6.50644 12.8781 6.61704 12.8037 6.71 12.7099L11.71 7.70994C11.801 7.61484 11.8724 7.50269 11.92 7.37994C12.02 7.13648 12.02 6.8634 11.92 6.61994Z" fill="#6C55E0"/></svg>
                </div>
                <div>
                    <a href="#" className="button button--flex button--small project__button">
                        Demo
                        {/* <svg className='button__icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.92 11.6199C17.8724 11.4972 17.801 11.385 17.71 11.2899L12.71 6.28994C12.6168 6.1967 12.5061 6.12274 12.3842 6.07228C12.2624 6.02182 12.1319 5.99585 12 5.99585C11.7337 5.99585 11.4783 6.10164 11.29 6.28994C11.1968 6.38318 11.1228 6.49387 11.0723 6.61569C11.0219 6.73751 10.9959 6.86808 10.9959 6.99994C10.9959 7.26624 11.1017 7.52164 11.29 7.70994L14.59 10.9999H7C6.73478 10.9999 6.48043 11.1053 6.29289 11.2928C6.10536 11.4804 6 11.7347 6 11.9999C6 12.2652 6.10536 12.5195 6.29289 12.707C6.48043 12.8946 6.73478 12.9999 7 12.9999H14.59L11.29 16.2899C11.1963 16.3829 11.1219 16.4935 11.0711 16.6154C11.0203 16.7372 10.9942 16.8679 10.9942 16.9999C10.9942 17.132 11.0203 17.2627 11.0711 17.3845C11.1219 17.5064 11.1963 17.617 11.29 17.7099C11.383 17.8037 11.4936 17.8781 11.6154 17.9288C11.7373 17.9796 11.868 18.0057 12 18.0057C12.132 18.0057 12.2627 17.9796 12.3846 17.9288C12.5064 17.8781 12.617 17.8037 12.71 17.7099L17.71 12.7099C17.801 12.6148 17.8724 12.5027 17.92 12.3799C18.02 12.1365 18.02 11.8634 17.92 11.6199Z" fill="white"/></svg> */}
                    </a>
                </div>
            </div>
            {modal &&  <Modal  closeModal={closeModal} openModal={openModal} title={title} description={description} listItems={listItems}/>}
        </div>
    )
}

export default ProjectItem
