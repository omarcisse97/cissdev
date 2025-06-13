import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faXmark } from '@fortawesome/free-solid-svg-icons';
import SettingsDropdown from './SettingsDropdown';

const Nav = (props) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "English");
  const [mobileNavActive, setMobileNavActive] = useState(false);

  // Toggle mobile nav open/close
  const toggleMobileNav = () => {
    setMobileNavActive(prev => !prev);
  };

  // Close mobile nav if a nav link is clicked (for better UX)
  const handleLinkClick = () => {
    if (mobileNavActive) setMobileNavActive(false);
  };

  // Update language state when props change
  useEffect(() => {
    setLang(localStorage.getItem("lang") || "English");
  }, []);

  // Add/remove class to body to disable scroll when nav open
  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
    }
  }, [mobileNavActive]);

  const updateLang = (newLang) => {
    setLang(newLang);
    props.updateLang(newLang);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center">
          <h1 className="sitename">CodeByCisse</h1>
        </Link>

        <div className="d-flex align-items-center">
          {/* Settings dropdown for desktop */}
          <SettingsDropdown 
            lang={lang} 
            updateLang={updateLang}
            className="d-none d-xl-block"
          />
          
          <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li>
                <Link 
                  to="/" 
                  onClick={handleLinkClick} 
                  className={props.active === "Home" ? "active customLinks" : "customLinks"}
                >
                  {lang === "English" ? "Home" : "Accueil"}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  onClick={handleLinkClick} 
                  className={props.active === "About" ? "active customLinks" : "customLinks"}
                >
                  {lang === "English" ? "About" : "À propos"}
                </Link>
              </li>
              <li>
                <Link 
                  to="/resume" 
                  onClick={handleLinkClick} 
                  className={props.active === "Resume" ? "active customLinks" : "customLinks"}
                >
                  {lang === "English" ? "Resume" : "CV"}
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  onClick={handleLinkClick} 
                  className={props.active === "Portfolio" ? "active customLinks" : "customLinks"}
                >
                  {lang === "English" ? "Portfolio" : "Portfolio"}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={handleLinkClick} 
                  className={props.active === "Contact" ? "active customLinks" : "customLinks"}
                >
                  {lang === "English" ? "Contact" : "Contact"}
                </Link>
              </li>

              {/* Settings dropdown for mobile */}
              <li className="d-xl-none">
                <SettingsDropdown 
                  lang={lang} 
                  updateLang={updateLang}
                />
              </li>
            </ul>

            {/* Mobile nav toggle button */}
            <button
              className="mobile-nav-toggle d-xl-none"
              onClick={toggleMobileNav}
              aria-label="Toggle mobile navigation"
              style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}
            >
              <FontAwesomeIcon icon={mobileNavActive ? faXmark : faList} />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;