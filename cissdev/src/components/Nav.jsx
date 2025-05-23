import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';



const Nav = (props) => {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "English");
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  // Toggle mobile nav open/close
  const toggleMobileNav = () => {
    setMobileNavActive(prev => !prev);
  };

  // Close mobile nav if a nav link is clicked (for better UX)
  const handleLinkClick = () => {
    if (mobileNavActive) setMobileNavActive(false);
  };

  // Toggle dropdown for language menu on mobile
  const toggleDropdown = () => {
    setDropdownActive(prev => !prev);
  };

  // Add/remove class to body to disable scroll when nav open
  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add('mobile-nav-active');
    } else {
      document.body.classList.remove('mobile-nav-active');
      setDropdownActive(false); // close dropdown when nav closes
    }
  }, [mobileNavActive]);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you want an image logo */}
          {/* <img src="assets/img/logo.webp" alt="Logo" /> */}
          <h1 className="sitename">CodeByCisse</h1>
        </Link>

        <nav id="navmenu" className={`navmenu ${mobileNavActive ? 'mobile-nav-active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={handleLinkClick} className={props.active === "Home" ? "active customLinks" : "customLinks"}>{lang === "English" ? "Home" : "Accueil"}</Link></li>
            <li><Link to="/about" onClick={handleLinkClick} className={props.active === "About" ? "active customLinks" : "customLinks"}>{lang === "English" ? "About" : "À propos"}</Link></li>
            <li><Link to="/resume" onClick={handleLinkClick} className={props.active === "Resume" ? "active customLinks" : "customLinks"}>{lang === "English" ? "Resume" : "CV"}</Link></li>
            <li><Link to="/portfolio" onClick={handleLinkClick} className={props.active === "Portfolio" ? "active customLinks" : "customLinks"}>{lang === "English" ? "Portfolio" : "Portfolio"}</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick} className={props.active === "Contact" ? "active customLinks" : "customLinks"}>{lang === "English" ? "Contact" : "Contact"}</Link></li>

            <li className={`dropdown ${dropdownActive ? 'active' : ''}`}>
              <span style={{ fontSize: "20px", cursor: 'pointer' }} onClick={toggleDropdown}>
                {lang} <FontAwesomeIcon icon={faChevronDown} />
              </span>
              <ul className={`dropdown-menu ${dropdownActive ? 'dropdown-active' : ''}`}>
                <li>
                  <button
                    className="customLinks"
                    style={{
                      backgroundColor: lang === "English" ? "rgba(33, 37, 41, 0.1)" : "transparent",
                      border: "none",
                      color: lang === "English" ? "var(--nav-dropdown-hover-color)" : ""
                    }}
                    onClick={() => {
                      if (lang !== "English") {
                        setLang("English");
                        props.updateLang("English");
                      }
                      toggleDropdown(); // close dropdown after selection
                    }}
                  >
                    English
                  </button>
                </li>
                <li>
                  <button
                    className="customLinks"
                    style={{
                      backgroundColor: lang === "Français" ? "rgba(33, 37, 41, 0.1)" : "transparent",
                      border: "none",
                      color: lang === "Français" ? "var(--nav-dropdown-hover-color)" : ""
                    }}
                    onClick={() => {
                      if (lang !== "Français") {
                        setLang("Français");
                        props.updateLang("Français");
                      }
                      toggleDropdown();
                    }}
                  >
                    Français
                  </button>
                </li>
              </ul>
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
    </header>
  );
};

export default Nav;
