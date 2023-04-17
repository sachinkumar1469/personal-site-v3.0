import React, { useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

// Local imports
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Achievements from './components/achievements/Achievements';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const topBtnRef = React.useRef();
  useEffect(()=>{
    let sectionElements = document.querySelectorAll('section[id]');
    let navLinks = document.querySelectorAll('nav ul li a');
    let navLinksArray = Array.from(navLinks);
    let sectionElementsArray = Array.from(sectionElements);
    let lastId;
    let cur = 'home';
    window.addEventListener('scroll',()=>{
      let fromTop = window.scrollY;
      fromTop > 300 ? topBtnRef.current.classList.add('active') : topBtnRef.current.classList.remove('active');
      sectionElementsArray.forEach((section)=>{
        if(section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight - 50) > fromTop){
          cur = section.getAttribute('id');
        }
      });
      if(lastId !== cur){
        lastId = cur;
        navLinksArray.forEach((link)=>{
          link.classList.remove('active');
          if(link.classList.contains(cur)){
            link.classList.add('active');
          }
        });
      }
    }
    );
    return ()=>{
      window.removeEventListener('scroll',()=>{});
    }
  },[])
  return (
    <React.Fragment>
      {/* Header */}
      <Header/>
      {/* Main Content */}
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Qualification/>
        <Services/>
        <Projects/>
        <Achievements/>
        <Contact/>
      </main>
      <Footer/>
      <a ref={topBtnRef} href='#' className="scroll-up-btn">
        <FaArrowUp/>
      </a>
    </React.Fragment>
  );
}

export default App;
