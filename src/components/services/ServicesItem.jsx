import React from 'react'

function ServicesItem({icon,title,description}) {
    const [modal, setModal] = React.useState(false);
    const handleModal = (e) => {
        e.stopPropagation();
        setModal(prev => {
            return !prev;
        });
    }
    return (
    <div className="services__content" onClick={handleModal}>
        <div>
            {icon}
            <h3 className="services__title">{title}</h3>
        </div>
        <span onClick={handleModal} className="button button--small button--link button--flex services__button">
            View More
            <svg className='button__icon' width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.92 6.61994C11.8724 6.49719 11.801 6.38505 11.71 6.28994L6.71 1.28994C6.61676 1.1967 6.50607 1.12274 6.38425 1.07228C6.26243 1.02182 6.13186 0.99585 6 0.99585C5.7337 0.99585 5.4783 1.10164 5.29 1.28994C5.19676 1.38318 5.1228 1.49387 5.07234 1.61569C5.02188 1.73751 4.99591 1.86808 4.99591 1.99994C4.99591 2.26624 5.1017 2.52164 5.29 2.70994L8.59 5.99994H1C0.734784 5.99994 0.48043 6.1053 0.292893 6.29283C0.105357 6.48037 0 6.73472 0 6.99994C0 7.26516 0.105357 7.51951 0.292893 7.70705C0.48043 7.89458 0.734784 7.99994 1 7.99994H8.59L5.29 11.2899C5.19627 11.3829 5.12188 11.4935 5.07111 11.6154C5.02034 11.7372 4.9942 11.8679 4.9942 11.9999C4.9942 12.132 5.02034 12.2627 5.07111 12.3845C5.12188 12.5064 5.19627 12.617 5.29 12.7099C5.38296 12.8037 5.49356 12.8781 5.61542 12.9288C5.73728 12.9796 5.86799 13.0057 6 13.0057C6.13201 13.0057 6.26272 12.9796 6.38458 12.9288C6.50644 12.8781 6.61704 12.8037 6.71 12.7099L11.71 7.70994C11.801 7.61484 11.8724 7.50269 11.92 7.37994C12.02 7.13648 12.02 6.8634 11.92 6.61994Z" fill="#6C55E0"/></svg>
        </span>
        {modal && <div className="services__modal">
            <div className="services__modal-content">
                <h4 className="services__modal-title">{title}</h4>
                <svg onClick={handleModal} className='services__modal-close' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path></svg>
                <ul className="services__modal-services grid">
                    {description.map((desc, i) => (
                    <li key={i} className="services__modal-service" >
                        <svg className='services__modal-icon' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M4.035 15.479A3.976 3.976 0 0 0 4 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16c0-.173-.012-.347-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479C19.988 8.347 20 8.173 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8c0 .173.012.347.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479zm1.442-5.403 1.102-.293-.434-1.053A1.932 1.932 0 0 1 6 8c0-1.103.897-2 2-2 .247 0 .499.05.73.145l1.054.434.293-1.102a1.99 1.99 0 0 1 3.846 0l.293 1.102 1.054-.434C15.501 6.05 15.753 6 16 6c1.103 0 2 .897 2 2 0 .247-.05.5-.145.73l-.434 1.053 1.102.293a1.993 1.993 0 0 1 0 3.848l-1.102.293.434 1.053c.095.23.145.483.145.73 0 1.103-.897 2-2 2-.247 0-.499-.05-.73-.145l-1.054-.434-.293 1.102a1.99 1.99 0 0 1-3.846 0l-.293-1.102-1.054.434A1.935 1.935 0 0 1 8 18c-1.103 0-2-.897-2-2 0-.247.05-.5.145-.73l.434-1.053-1.102-.293a1.993 1.993 0 0 1 0-3.848z"></path><path d="m15.742 10.71-1.408-1.42-3.331 3.299-1.296-1.296-1.414 1.414 2.704 2.704z"></path></svg>
                        <p dangerouslySetInnerHTML={{__html: desc}}></p>
                    </li>
                    ))}
                </ul>
            </div>
        </div>}
    </div>
    )
}

export default ServicesItem
