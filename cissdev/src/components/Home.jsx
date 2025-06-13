import { useState, useEffect } from "react";
import Nav from "./Nav";
import AnimatedHeroBackground from "./AnimatedHeroBackground";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLoading } from "../contexts/LoadingContext";
import { PageLoader } from "./LoaderComponents";

const Home = () => {
  const [lang, setLang] = useState(null);
  const { globalLoading, setLoading, setComponentLoading, loadingStates } = useLoading();
  const [ready, setReady] = useState(false);
  const updateLang = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };
  console.log('Loading State is -> ', globalLoading);

  useEffect(() => {
    setLoading(true);
    setComponentLoading('page', true);
    setLang(localStorage.getItem('lang'));
  }, []);

  useEffect(() => {
    if (lang) {
      setComponentLoading('page', false);
      setLoading(false);
    }
  }, [lang]);

  useEffect(() => {
    

    if (loadingStates && loadingStates['page'] !== null && loadingStates['page'] === false) {
      setLoading(false);
      const timer = setTimeout(() => {
        setReady(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loadingStates]);

  
  return (
    <>
      <title>CodeByCisse - Home</title>
      <div className="index-page">
        
        <Nav active="Home" updateLang={updateLang} />
        {!ready && <PageLoader />}
        {ready && <main className="main">
          <section id="hero" className="hero section">
            {/* Animated Background */}
            <AnimatedHeroBackground />

            {/* Hero Content */}
            <div className="container" data-aos="zoom-out" data-aos-delay="100">
              <h2>Omar Cisse</h2>
              <p>
                <span>{lang === 'English' ? "Software Developer" : "Développeur Logiciel"}</span>
              </p>
              <div className="social-links">
                <Link to="/about" title={lang === 'English' ? "About Me" : "À propos"}>
                  <FontAwesomeIcon icon={faUser} size="2x" />
                </Link>
                <Link to="/resume" title={lang === 'English' ? "My Resume" : "Mon CV"}>
                  <FontAwesomeIcon icon={faFileAlt} size="2x" />
                </Link>
                <Link to="/portfolio" title={lang === 'English' ? "My Work" : "Mon Travail"}>
                  <FontAwesomeIcon icon={faBriefcase} size="2x" />
                </Link>
                <Link to="/contact" title={lang === 'English' ? "Contact Me" : "Contactez-moi"}>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </Link>
              </div>
            </div>
          </section>
        </main>}
      </div>
    </>
  );
};

export default Home;