import { useState, useEffect } from "react";
import { useLoading } from "../contexts/LoadingContext";
import { PageLoader } from "./LoaderComponents";
import { useParams } from "react-router"
import Nav from "./Nav";
import { ImgProject } from "./DynamicImages";
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
                ...ImgProject().codeByCisseCommerce
            ],
            technologies: ['React', 'MedusaJS', 'Stripe'],
            category: 'Full-Stack',
            status: 'Completed',
            links: {
                demo: 'https://codebycisse-commerce-client-production.up.railway.app/',
                github: '',
                details: '/portfolio/details/codebycisse-commerce'
            },
            conclusion: {
                title: {
                    english: 'Building Scalable Commerce with Clean Code & Modern Tools',
                    french: 'Allier Code Propre et Performance pour un Commerce Web Moderne'
                },
                text: {
                    english: 'CodeByCisse-Commerce demonstrates the power of combining clean architecture, modern frameworks, and thoughtful UI/UX to deliver a scalable eCommerce experience. It showcases full-stack development with a strong focus on maintainability, responsiveness, and real-world commerce logic — making it a solid example of practical, production-ready code',
                    french: 'CodeByCisse-Commerce illustre la puissance d’une architecture propre alliée à des frameworks modernes et une UX soignée pour créer une expérience e-commerce évolutive. Ce projet met en valeur un développement full-stack axé sur la maintenabilité, la réactivité et la logique métier réelle — un exemple concret de code prêt pour la production'
                }
            }
        },
        {
            id: 'codebycisse-restapi-framework',
            title: 'Dynamic Modular Server',
            description: {
                english:
                    'Dynamic Modular Server is a Node.js backend framework designed to load and manage modular REST APIs with full CRUD, access control, and admin UI. The system uses PostgreSQL, supports dynamic route injection, session management, and clean API key handling for robust permission flows.',
                french:
                    'Dynamic Modular Server est un framework backend Node.js conçu pour charger et gérer dynamiquement des API REST modulaires avec des opérations CRUD complètes, un contrôle d\'accès et une interface d’administration. Le système utilise PostgreSQL, prend en charge l’injection dynamique de routes, la gestion de session, et une gestion rigoureuse des clés API pour des permissions sécurisées.'
            },
            images: [
                ...ImgProject().codeByCisseRestApiFramework
            ],
            technologies: ['Node.js', 'PostgreSQL', 'Express', 'Bootstrap'],
            category: 'Backend',
            status: 'In Progress',
            links: {
                demo: 'https://codebycisse-restapi-framework-production.up.railway.app/',
                github: 'https://github.com/omarcisse97/codebycisse-restapi-framework',
                details: '/portfolio/details/codebycisse-restapi-framework'
            },
            conclusion: {
                title: {
                    english: 'Scalable REST Framework with Modular Intelligence',
                    french: 'Un Framework REST Modulaire et Evolutif'
                },
                text: {
                    english:
                        'Dynamic Modular Server showcases a scalable, flexible backend structure with modular loading of business logic, making it an ideal starting point for fast, maintainable REST API development.',
                    french:
                        'Dynamic Modular Server met en avant une structure backend flexible et évolutive avec chargement modulaire de la logique métier, parfait pour un développement rapide et maintenable d’API REST.'
                }
            }
        },
        {
            id: 'codebycisse-social',
            title: 'YuConnect Social Platform',
            description: {
                english: 'YuConnect is a full-stack social media platform with headless backend architecture, featuring real-time messaging, user profiles, posts, and interactive social features. Built with React frontend and Node.js API server, it demonstrates modern web development practices with Socket.IO for real-time communication and PostgreSQL for robust data management.',
                french: 'YuConnect est une plateforme de médias sociaux complète avec architecture backend découplée, offrant messagerie en temps réel, profils d\'utilisateurs, publications et fonctionnalités sociales interactives. Construite avec React en frontend et serveur API Node.js, elle démontre les pratiques modernes de développement web avec Socket.IO pour la communication temps réel et PostgreSQL pour une gestion robuste des données.'
            },
            images: [
                ...ImgProject().codeByCisseSocial
            ],
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.IO', 'Express', 'Tailwind CSS'],
            category: 'Full Stack',
            status: 'In Progress',
            links: {
                demo: 'https://codebycisse-social-production.up.railway.app/',
                github: {
                    client: 'https://github.com/omarcisse97/codebycisse-social',
                    backend: 'https://github.com/omarcisse97/codebycisse-social-server'
                },
                details: '/portfolio/details/codebycisse-social'
            },
            conclusion: {
                title: {
                    english: 'Modern Social Platform with Real-Time Communication',
                    french: 'Plateforme Sociale Moderne avec Communication Temps Réel'
                },
                text: {
                    english: 'YuConnect demonstrates the implementation of a modern social media platform using headless architecture and real-time technologies. The project showcases full-stack development skills with emphasis on user experience, scalable backend design, and interactive social features.',
                    french: 'YuConnect démontre l\'implémentation d\'une plateforme de médias sociaux moderne utilisant une architecture découplée et des technologies temps réel. Le projet met en valeur les compétences de développement full-stack avec un accent sur l\'expérience utilisateur, la conception backend évolutive, et les fonctionnalités sociales interactives.'
                }
            }
        },
        {
            id: 'sopo',
            title: 'SOPO Classified Ads Platform',
            description: {
                english: 'SOPO is a full-stack classified ads marketplace with modern architecture, featuring advanced search and filtering, location-based listings, category management, and image upload capabilities. Built with Next.js 15 and TypeScript, it demonstrates modern web development practices with Neon Database for robust data management and Supabase for file storage.',
                french: 'SOPO est une plateforme de petites annonces complète avec architecture moderne, offrant recherche et filtrage avancés, annonces géolocalisées, gestion de catégories, et capacités de téléchargement d\'images. Construite avec Next.js 15 et TypeScript, elle démontre les pratiques modernes de développement web avec Neon Database pour une gestion robuste des données et Supabase pour le stockage de fichiers.'
            },
            images: [
                ...ImgProject().sopo
            ],
            technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Neon Database', 'Supabase Storage', 'Tailwind CSS 4', 'Vercel'],
            category: 'Full Stack',
            status: 'In Progress',
            links: {
                demo: 'https://sopo-lovat.vercel.app/',
                github: 'https://github.com/omarcisse97/sopo',
                details: '/portfolio/details/sopo'
            },
            conclusion: {
                title: {
                    english: 'Modern Classified Ads Platform with Advanced Features',
                    french: 'Plateforme de Petites Annonces Moderne avec Fonctionnalités Avancées'
                },
                text: {
                    english: 'SOPO demonstrates the implementation of a comprehensive classified ads marketplace using cutting-edge web technologies. The project showcases full-stack development expertise with emphasis on user experience, scalable database design, and advanced search capabilities for location-based content discovery.',
                    french: 'SOPO démontre l\'implémentation d\'une plateforme de petites annonces complète utilisant des technologies web de pointe. Le projet met en valeur l\'expertise de développement full-stack avec un accent sur l\'expérience utilisateur, la conception de base de données évolutive, et les capacités de recherche avancées pour la découverte de contenu géolocalisé.'
                }
            }
        }
    ];
    return projects.find(p => p.id === handle) || null;
};

const PortfolioDetails = () => {
    const [lang, setLang] = useState(null);
    const { setLoading, setComponentLoading, loadingStates } = useLoading();
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
                                            <h3>{lang === 'English' ? 'Project information' : 'Information sur le Projet'}</h3>
                                            <ul>
                                                <li><strong>{lang === 'English' ? 'Category' : 'Categorie'}</strong>: {project?.category}</li>
                                                <li><strong>{lang === 'English' ? 'Project URL' : 'Lien de Projet'}</strong>: <a href={project?.links?.demo} target="_blank">Click here</a></li>
                                                {project?.links?.github !== '' && typeof project?.links?.github === 'string' && <li><strong>GitHub</strong> : <a href={project?.links?.github}>Click here</a></li>}
                                                {project?.links?.github && typeof project?.links?.github === 'object' && Object.keys(project?.links?.github).map((key) => (
                                                    <li key={key}><strong>GitHub {key}</strong> : <a href={project?.links?.github[key]}>Click here</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                                            <h2>{lang === 'English' ? project?.conclusion?.title?.english : project?.conclusion?.title?.french}</h2>
                                            <p>
                                                {lang === 'English' ? project?.conclusion?.text?.english : project?.conclusion?.text?.french}
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