import { useState, useEffect } from "react";
import { useLoading } from "../contexts/LoadingContext";
import { PageLoader } from "./LoaderComponents";
import { useParams } from "react-router"
import Nav from "./Nav";
import CodeByCisseHomePage from '../assets/codebycisse-commerce/homePage.png';
import CartDrawer from '../assets/codebycisse-commerce/cartDrawer.png'
import CartPage from '../assets/codebycisse-commerce/cartPage.png'
import DarkModeSettings from '../assets/codebycisse-commerce/darkModeSettings.png'
import ProductDetails from '../assets/codebycisse-commerce/productDetails.png'
import ProfileSettings from '../assets/codebycisse-commerce/ProfileSettings.png'
import SearchModel from '../assets/codebycisse-commerce/searchModal.png'
import SearchPage from '../assets/codebycisse-commerce/searchPage.png'
import Carousel from 'react-bootstrap/Carousel';

const getProject = (handle) => {
    const projects = [
        {
            id: 'codebycisse-commerce',
            title: 'CodeByCisse Commerce',
            description: {
                english:
                    "CodeByCisse-Commerce is a full-stack e-commerce web application built using React and Medusa.js, following the MVC architectural pattern.The application contains includes featuring product filtering, authentication modals, responsive UI, and much more. Powered by Medusa.js, the application manages product data, customer accounts, region-based pricing, and order processing through clean REST API.The project emphasizes separation of concerns, modular design, and scalable architecture — ideal for modern commerce platforms",
                french:
                    "CodeByCisse-Commerce est une application web e-commerce full-stack développée avec React et Medusa.js, en suivant le modèle architectural MVC.L’application comprend notamment le filtrage des produits, des modales d’authentification, une interface responsive, et bien plus encore. Propulsée par Medusa.js, elle gère les données produits, les comptes clients, la tarification par région, ainsi que le traitement des commandes via une API REST propre et bien structurée. Le projet met l’accent sur la séparation des responsabilités, une conception modulaire et une architecture scalable, parfaitement adaptée aux plateformes de commerce modernes."
            },
            images: [
                CodeByCisseHomePage,
                SearchModel,
                SearchPage,
                CartDrawer,
                CartPage,
                ProductDetails,
                ProfileSettings,
                DarkModeSettings
            ],
            technologies: ['React', 'MedusaJS', 'Stripe'],
            category: 'Full-Stack',
            status: 'Completed',
            links: {
                demo: 'https://codebycisse-commerce-client-production.up.railway.app/',
                github: '#',
                details: '/portfolio/details/codebycisse-commerce'
            },
            conclusion: {
                title: {
                    english: 'Building Scalable Commerce with Clean Code & Modern Tools',
                    french: 'Allier Code Propre et Performance pour un Commerce Web Moderne'
                },
                text: {
                    english:'CodeByCisse-Commerce demonstrates the power of combining clean architecture, modern frameworks, and thoughtful UI/UX to deliver a scalable eCommerce experience. It showcases full-stack development with a strong focus on maintainability, responsiveness, and real-world commerce logic — making it a solid example of practical, production-ready code', 
                    french:'CodeByCisse-Commerce illustre la puissance d’une architecture propre alliée à des frameworks modernes et une UX soignée pour créer une expérience e-commerce évolutive. Ce projet met en valeur un développement full-stack axé sur la maintenabilité, la réactivité et la logique métier réelle — un exemple concret de code prêt pour la production'
                }
            }
        }
        // Add more projects here
    ];
    return projects.find(p => p.id === handle) || null;
};

const PortfolioDetails = () => {
    const [lang, setLang] = useState(null);
    const { globalLoading, setLoading, setComponentLoading, loadingStates } = useLoading();
    const [ready, setReady] = useState(false);
    const [project, setProject] = useState(null);
    const [imageSelected, setImageSelected] = useState(-1);
    let params = useParams();
    useEffect(() => {
        setLoading(true);
        setComponentLoading('page', true);
        setLang(localStorage.getItem('lang'));
        setProject(getProject(params?.handle));
    }, []);

    useEffect(() => {
        if (lang) {
            setComponentLoading('page', false);
            setLoading(false);
        }
    }, [lang]);
    console.log('Found project -> ', project);
    useEffect(() => {


        if (loadingStates && loadingStates['page'] !== null && loadingStates['page'] === false && project !== null) {
            setLoading(false);
            setImageSelected(0);
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
    const handleSelect = (newImageIndex) => {
        setImageSelected(newImageIndex)
    }
    console.log('Selected image index -> ', imageSelected);
    console.log('URL => ', project?.images[imageSelected]);
    return (
        <>
            <title>{!ready ? 'CodeByCisse - Portfolio - Details' : `${lang === 'English' ? 'Project' : 'Projet'} : ${project?.title}`}</title>
            <div className="portfolio-page">
                <Nav active="Portfolio" updateLang={updateLang} />
                {!ready && <PageLoader />}
                {ready &&
                    <main className="main">


                        <div className="page-title" data-aos="fade">
                            <div className="heading">
                                <div className="container">
                                    <div className="row d-flex justify-content-center text-center">
                                        <div className="col-lg-8">
                                            <h1>{project?.title}</h1>
                                            <p className="mb-0">{lang === 'English' ? project?.description?.english : project?.description?.french}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section id="portfolio-details" className="portfolio-details section">

                            <div className="container" data-aos="fade-up" data-aos-delay="100">

                                <div className="row gy-4">

                                    <div className="col-lg-8">
                                        <div className="portfolio-details-slider swiper init-swiper">


                                            <div className="swiper-wrapper align-items-center">
                                                {
                                                    project &&
                                                    project?.images &&
                                                    Array.isArray(project?.images) &&
                                                    imageSelected >= 0 &&
                                                    // project?.images?.map((value, index) => (
                                                    //     <div key={index} className="swiper-slide">
                                                    //         <img src={value} alt={`img - ${index}`} />
                                                    //     </div>
                                                    // ))}
                                                    <Carousel
                                                        activeIndex={imageSelected}
                                                        onSelect={handleSelect}
                                                        data-bs-theme={"dark"}
                                                        prevIcon={
                                                            <span
                                                                aria-hidden="true"
                                                                style={{
                                                                    fontSize: '10rem',
                                                                    color: 'white',
                                                                    textShadow: '0 0 5px black',
                                                                }}
                                                            >
                                                                ‹
                                                            </span>
                                                        }
                                                        nextIcon={
                                                            <span
                                                                aria-hidden="true"
                                                                style={{
                                                                    fontSize: '10rem',
                                                                    color: 'white',
                                                                    textShadow: '0 0 5px black',
                                                                }}
                                                            >
                                                                ›
                                                            </span>
                                                        }
                                                    >
                                                        {project?.images?.map((value, index) => (
                                                            <Carousel.Item key={index}>
                                                                <div className="swiper-slide">
                                                                    <img src={value} alt={`img - ${index}`} />
                                                                </div>
                                                            </Carousel.Item>
                                                        ))}
                                                    </Carousel>
                                                }
                                            </div>
                                            <div className="swiper-pagination"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                                            <h3>{lang === 'English'? 'Project information' : 'Information sur le Projet'}</h3>
                                            <ul>
                                                <li><strong>{lang === 'English'? 'Category' : 'Categorie'}</strong>: {project?.category}</li>
                                                <li><strong>{lang === 'English'? 'Project URL': 'Lien de Projet'}</strong>: <a href={project?.links?.demo} target="_blank">{project?.links?.demo}</a></li>
                                            </ul>
                                        </div>
                                        <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                                            <h2>{lang === 'English'? project?.conclusion?.title?.english : project?.conclusion?.title?.english }</h2>
                                            <p>
                                               {lang === 'English'? project?.conclusion?.text?.english : project?.conclusion?.text?.english }
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </section>

                    </main>
                }
            </div>
        </>
    )
};
export default PortfolioDetails;