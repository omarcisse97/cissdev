import {  Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Nav = (props) => {
    localStorage.setItem("lang", "English");
    const [lang, setLang] = useState(localStorage.getItem("lang"));

    
    
    
    return(
        <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <Link to="/" className="logo d-flex align-items-center">
        {/* <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.webp" alt=""> --> */}
        <h1 className="sitename">CissDev</h1>
      </Link>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link  to="/" className={props.active === "Home"?"active customLinks": "customLinks"}>{lang === "English"? "Home": "Accueil"}</Link></li>
          <li><a href="about.html">{lang === "English"? "About": "À propos"}</a></li>
          <li><a href="resume.html">{lang === "English"? "Resume": "CV"}</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li className="dropdown"><span>{lang}</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
            <ul>
              <li><button 
                className="customLinks active" 
                style={{ 
                    backgroundColor: "rgba(33, 37, 41, 0.1)", 
                    border: "none", 
                    color: lang === "English"? "var(--nav-dropdown-hover-color)": "" }}
                onClick={() => { 
                    if(lang !== "English"){
                        setLang("English");
                        localStorage.setItem("lang", "English");
                    } 
                }}
                >English</button></li>
              <li><button 
                className="customLinks"
                style={{ 
                    backgroundColor: "rgba(33, 37, 41, 0.1)", 
                    border: "none",
                    color: lang === "Français"? "var(--nav-dropdown-hover-color)": ""}}
                onClick={() => { 
                    if(lang !== "Français"){
                        setLang("Français");
                        localStorage.setItem("lang", "Français")
                    } 
                }}
                >Français</button></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

    </div>
  </header>
    )
};
export default Nav;