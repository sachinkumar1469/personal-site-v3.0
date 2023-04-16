import React from 'react'

function SkillsItem({title, content, icon}) {
    const [toggle, setToggle] = React.useState(false);
    const toggleOpen = () => {
        setToggle(!toggle);
    }
    return (
        <div  className={`skills__content`}>
            <div className="skills__header" id="programming" onClick={toggleOpen}>
                {icon}
                <div>
                    <h1 className="skills__title">{title}</h1>
                    <span className="skills__subtitle">More than 1 year</span>
                </div>
                <svg className='skills__arrow' stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M8.5 10.644l-6.854-6.854 0.707-0.707 6.147 6.146 6.146-6.146 0.707 0.707-6.853 6.854zM8.5 14.074l-6.146-6.147-0.708 0.707 6.854 6.854 6.854-6.854-0.707-0.707-6.147 6.147z"></path></svg>
            </div>
            <div className={`skills__list grid ${toggle && 'skills__open'}`}>
                {content.map((skill, index) => {
                    return (
                        <div className="skills__data" key={index}>
                            <div className="skills__titles">
                                <h3 className="skills__name">{skill.name}</h3>
                                <span className="skills__number">{skill.percentage}%</span>
                            </div>
                            <div className="skills__bar">
                                <span className="skills__percentage" style={{width: `${skill.percentage}%`}}></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SkillsItem
