import { useState, useEffect } from "react";
import Nav from "./Nav";
import heroHomeBg3 from '../assets/heroHomeBg3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
    const [lang, setLang] = useState(localStorage.getItem('lang'));

    const updateLang = (newLang) => {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };
    return (
        <>
            <title>CodeByCisse - Home</title>
            <div className="index-page">
                <Nav active="Home" updateLang={updateLang} />
                <main className="main">

    <section id="hero" className="hero section dark-background">

      <img src={heroHomeBg3} alt="" data-aos="fade-in" />

      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <h2>Omar Cisse</h2>
        <p>{lang === 'English'? "Software Developer": "Développeur Logiciel"}</p>
        <div className="social-links">
          <Link to="/about"><FontAwesomeIcon icon={faUser} size="2x" /></Link>
          <Link to="/resume"><FontAwesomeIcon icon={faFileAlt} size="2x" /></Link>
          <Link to="/portfolio"><FontAwesomeIcon icon={faBriefcase} size="2x" /></Link>
          <Link to="/contact"><FontAwesomeIcon icon={faEnvelope} size="2x" /></Link>
        </div>
      </div>

    </section>

  </main>
            </div>
            
        </>
    );
};
export default Home;