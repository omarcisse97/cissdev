// ============================================
// FIXED IMPORTS FOR PORTFOLIO COMPONENT
// ============================================

import { useState, useEffect } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import CodeByCisseHomePage from '../assets/codebycisse-commerce/homePage.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../contexts/ThemeContext";

// ✅ CORRECT IMPORTS - Better icon variety
import { 
    faEye,           // For "View Details" 
    faRocket,        // For "Live Demo"
    faCode,          // For category
    faCodeBranch     // Alternative for GitHub (from solid icons)
} from "@fortawesome/free-solid-svg-icons";

// GitHub icon is in the brands package
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useLoading } from "../contexts/LoadingContext";
import { PageLoader, ImageLoader } from "./LoaderComponents";


// ✅ IMPROVED VERSION WITH CORRECT IMPORTS
const PortfolioImproved = () => {
    const [lang, setLang] = useState(localStorage.getItem('lang'));
    const { globalLoading, setLoading, setComponentLoading, loadingStates } = useLoading();
    const [ready, setReady] = useState(false);
    const { isDarkMode } = useTheme();
    // Sample projects data (you can expand this)
    const projects = [
        {
            id: 'codebycisse-commerce',
            title: 'CodeByCisse Commerce',
            description: {
                english: 'Full-Stack E-Commerce application with modern tech stack featuring user authentication, payment processing, and admin dashboard.',
                french: 'Application E-Commerce Full-Stack avec une pile technologique moderne incluant authentification utilisateur, traitement des paiements et tableau de bord admin.'
            },
            image: CodeByCisseHomePage,
            technologies: ['React', 'MedusaJS', 'Stripe'],
            category: 'Full-Stack',
            status: 'Completed',
            links: {
                demo: 'https://codebycisse-commerce-client-production.up.railway.app/',
                github: '#',
                details: '/portfolio/details/codebycisse-commerce'
            }
        }
        // Add more projects here
    ];

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

    const updateLang = (newLang) => {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <>
            <title>CodeByCisse - Portfolio</title>
            <div className="portfolio-page">
                <Nav active="Portfolio" updateLang={updateLang} />
                {!ready && <PageLoader />}
                {ready && (
                    <main className="main">
                        {/* Enhanced Page Title */}
                        <div className="page-title" data-aos="fade">
                            <div className="heading">
                                <div className="container">
                                    <div className="row d-flex justify-content-center text-center">
                                        <div className="col-lg-8">
                                            <h1>Portfolio</h1>
                                            <p className="portfolio-subtitle">
                                                {lang === "English" 
                                                    ? "Showcasing my latest projects and technical expertise"
                                                    : "Présentation de mes derniers projets et de mon expertise technique"
                                                }
                                            </p>
                                            <div className="portfolio-stats">
                                                <span className="stat-item">
                                                    <strong>{lang === "English" ? "Unlimited" : "Illimité"}</strong> {lang === "English" ? "Project" : "Projet"}
                                                </span>
                                                <span className="stat-divider">•</span>
                                                <span className="stat-item">
                                                    <strong>{lang === "English" ? "Modern" : "Moderne"}</strong> {lang === "English" ? "Technologies" : "Technologies"}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Portfolio Section */}
                        <section id="portfolio" className="portfolio section">
                            <div className="container">
                                <div className="row gy-4">
                                    {projects.map((project, index) => (
                                        <div key={project.id} className="col-lg-6 col-md-6 portfolio-item" data-aos="fade-up" data-aos-delay={index * 100}>
                                            <div className="portfolio-content-enhanced h-100">
                                                {/* Image with Loading */}
                                                <div className="portfolio-image-container">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="img-fluid portfolio-image"
                                                    />
                                                    <div className="portfolio-overlay">
                                                        <div className="portfolio-links">
                                                            <Link 
                                                                to={project.links.details} 
                                                                title={lang === "English" ? "View Details" : "Voir Détails"}
                                                                className="portfolio-link details-link"
                                                            >
                                                                <FontAwesomeIcon icon={faEye} style={{color: !isDarkMode? 'black': ''}} />
                                                            </Link>
                                                            <a 
                                                                href={project.links.demo} 
                                                                title={lang === "English" ? "Live Demo" : "Démo Live"}
                                                                className="portfolio-link demo-link"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <FontAwesomeIcon icon={faRocket} style={{color: !isDarkMode? 'black': ''}} />
                                                            </a>
                                                           
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Enhanced Content */}
                                                <div className="portfolio-content-body">
                                                    <div className="portfolio-header">
                                                        <div className="portfolio-category">
                                                            <FontAwesomeIcon icon={faCode} />
                                                            <span>{project.category}</span>
                                                        </div>
                                                        {/* <div className="portfolio-status">
                                                            <span className={`status-badge ${project.status.toLowerCase()}`}>
                                                                {project.status}
                                                            </span>
                                                        </div> */}
                                                    </div>

                                                    <h4 className="portfolio-title">{project.title}</h4>
                                                    
                                                    <p className="portfolio-description">
                                                        {lang === 'English' 
                                                            ? project.description.english 
                                                            : project.description.french
                                                        }
                                                    </p>

                                                    <div className="portfolio-technologies">
                                                        {project.technologies.map((tech, i) => (
                                                            <span key={i} className="tech-tag">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Action Links */}
                                                    <div className="portfolio-actions">
                                                        <Link 
                                                            to={project.links.details}
                                                            className="action-btn details-btn"
                                                        >
                                                            <FontAwesomeIcon icon={faEye} />
                                                            <span>{lang === "English" ? "View Details" : "Voir Détails"}</span>
                                                        </Link>
                                                        <a 
                                                            href={project.links.demo}
                                                            className="action-btn demo-btn"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <FontAwesomeIcon icon={faRocket} />
                                                            <span>{lang === "English" ? "Live Demo" : "Démo Live"}</span>
                                                        </a>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Coming Soon Card */}
                                <div className="row gy-4 mt-4">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="portfolio-content-enhanced coming-soon h-100" data-aos="fade-up">
                                            <div className="coming-soon-content">
                                                <div className="coming-soon-icon">
                                                    🚀
                                                </div>
                                                <h4>{lang === "English" ? "More Projects Coming Soon" : "Plus de Projets Bientôt"}</h4>
                                                <p>
                                                    {lang === "English" 
                                                        ? "I'm constantly working on new projects. Check back soon for more exciting work!"
                                                        : "Je travaille constamment sur de nouveaux projets. Revenez bientôt pour plus de travaux passionnants!"
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                )}
            </div>
        </>
    );
};

export default PortfolioImproved;