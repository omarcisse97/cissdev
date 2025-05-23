import { useState } from "react";
import Nav from "./Nav";

const Resume = () => {
    const [lang, setLang] = useState(localStorage.getItem('lang'));

    const updateLang = (newLang) => {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };
    return (
        <>
            <title>CodeByCisse - Resume</title>
            <div className="resume-page">
                <Nav active="Resume" updateLang={updateLang} />
                <main className="main">

                    <div className="page-title" data-aos="fade">
                        <div className="heading">
                            <div className="container">
                                <div className="row d-flex justify-content-center text-center">
                                    <div className="col-lg-8">
                                        <h1>{lang === "English" ? "Resume" : "CV"}</h1>
                                        <p className="mb-0">
                                            {lang === "English" ?
                                                "Detail-oriented and solutions-driven Software Developer with a Bachelor's in Computer Science and Engineering and hands-on experience in full-stack development, cloud infrastructure, and enterprise application support. Proven ability to build scalable applications, automate processes, and optimize system performance. Skilled in a wide range of technologies including React, PHP, Java, SQL, and cloud platforms like AWS and Azure. Passionate about continuous learning, collaboration, and delivering reliable solutions in fast-paced environments."
                                                : "Développeur logiciel rigoureux et orienté solutions, titulaire d’une licence en informatique et génie informatique, avec une expérience pratique en développement full-stack, infrastructure cloud et support d’applications d’entreprise. Capable de concevoir des applications évolutives, d’automatiser des processus et d’optimiser les performances systèmes. Compétent dans un large éventail de technologies telles que React, PHP, Java, SQL, ainsi que sur des plateformes cloud comme AWS et Azure. Passionné par l’apprentissage continu, la collaboration et la livraison de solutions fiables dans des environnements dynamiques."
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <section id="resume" className="resume section">

                        <div className="container">

                            <div className="row">

                                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                    <h3 className="resume-title">{lang === "English" ? "Summary" : "Résumé"}</h3>

                                    <div className="resume-item pb-0">
                                        <h4>Omar Cisse</h4>
                                        <p><em>{
                                            lang === "English" ?
                                                "Innovative and deadline-driven Software Developer with over 5 years of coding experience and professional expertise since November 2022. Skilled in designing and building scalable full-stack applications, transforming complex problems into clean, efficient code across cloud platforms and enterprise systems. Passionate about crafting user-focused solutions from initial concept to polished product delivery, thriving in fast-paced, collaborative environments."
                                                : "Développeur logiciel innovant et respectueux des délais, avec plus de 5 ans d’expérience en codage et une expertise professionnelle depuis novembre 2022. Compétent dans la conception et la réalisation d’applications full-stack évolutives, transformant des problèmes complexes en code propre et efficace, notamment sur des plateformes cloud et des systèmes d’entreprise. Passionné par la création de solutions centrées utilisateur, du concept initial à la livraison finale, et épanoui dans des environnements collaboratifs et dynamiques."
                                        }</em></p>
                                        <ul>
                                            <li>Orlando, FL</li>
                                            <li>+1(321)387-9002 (US)</li>
                                            <li>omarcisse802@gmail.com</li>
                                        </ul>
                                    </div>

                                    <h3 className="resume-title">Education</h3>
                                    <div className="resume-item">
                                        <h4>{lang === "English"
                                            ? "Bachelor Degree of Computer Science and Engineering - Information Technology"
                                            : "Bachelor en Informatique et Génie Informatique - Technologies de l’Information"}
                                        </h4>
                                        <h5>2017 - 2022</h5>
                                        <p><em>University of Central Florida, United States</em></p>
                                    </div>
                                    <h3 className="resume-title">{lang === "English" ? "Internships" : "Stage"}</h3>
                                    <div className="resume-item">
                                        <h4>{lang === "English"
                                            ? "Web Page Manager Intern"
                                            : "Stagiaire Gestionnaire de Page Web"}
                                        </h4>
                                        <h5>2020 - 2021</h5>
                                        <p><em>{lang === "English"
                                            ? "United Nations Association, United States"
                                            : "Association des Nations Unies, États-Unis"}</em></p>
                                        <ul>
                                            <li>
                                                {lang === "English"
                                                    ? "Internship: Internship at the United Nations. Designed and managed a page while uploading new content every week during the whole internship. Research and discussions about adversities faced by diverse communities."
                                                    : "Stage : Stage aux Nations Unies. Conception et gestion d'une page web avec mise en ligne hebdomadaire de nouveaux contenus durant toute la durée du stage. Recherche et discussions sur les difficultés rencontrées par diverses communautés."}
                                            </li>
                                        </ul>

                                    </div>


                                </div>

                                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                    <h3 className="resume-title">{lang === "English" ? "Professional Experience" : "Expérience professionnelle"}</h3>
                                    <div className="resume-item">
                                        <h4>{lang === "English"
                                            ? "Solutions Analyst"
                                            : "Analyste en Solutions"}
                                        </h4>
                                        <h5>{lang === "English" ? "2023 - Present" : "2023 - Présent"}
                                        </h5>
                                        <p><em>{lang === "English"
                                            ? "Deloitte, United States"
                                            : "Deloitte, États-Unis"}
                                        </em></p>
                                        <ul>
                                            <li>
                                                {lang === "English"
                                                    ? "Enterprise System Development: Develop and maintain enterprise-level applications for government clients, utilizing cloud-based solutions and industry-standard technologies for financial planning, reporting, and data integration."
                                                    : "Développement de systèmes d'entreprise : Développer et maintenir des applications au niveau entreprise pour des clients gouvernementaux, en utilisant des solutions cloud et des technologies standards pour la planification financière, les rapports et l'intégration des données."}
                                            </li>
                                            <li>
                                                {lang === "English"
                                                    ? "Data Management and Transformation: Build and maintain complex data pipelines and integration systems, ensuring accurate and efficient data flows for government operations."
                                                    : "Gestion et transformation des données : Construire et maintenir des pipelines de données complexes et des systèmes d'intégration, garantissant des flux de données précis et efficaces pour les opérations gouvernementales."}
                                            </li>
                                            <li>
                                                {lang === "English"
                                                    ? "Automation and Process Optimization: Automate system processes, including data validation and testing, to improve system reliability and reduce manual intervention, resulting in greater efficiency."
                                                    : "Automatisation et optimisation des processus : Automatiser les processus système, y compris la validation des données et les tests, pour améliorer la fiabilité du système et réduire l'intervention manuelle, augmentant ainsi l'efficacité."}
                                            </li>
                                            <li>
                                                {lang === "English"
                                                    ? "System Support and Maintenance: Provide ongoing troubleshooting and support for client-facing applications, ensuring smooth and error-free operations, while responding to and resolving technical issues promptly."
                                                    : "Support et maintenance du système : Fournir un dépannage continu et un support pour les applications destinées aux clients, assurant des opérations fluides et sans erreur, tout en répondant rapidement aux problèmes techniques."}
                                            </li>
                                            <li>
                                                {lang === "English"
                                                    ? "Agile Collaboration: Work within cross-functional agile teams to deliver enhancements, support system updates, and ensure compliance with project requirements and deadlines."
                                                    : "Collaboration Agile : Travailler au sein d'équipes agiles transversales pour livrer des améliorations, soutenir les mises à jour du système, et garantir la conformité aux exigences et délais du projet."}
                                            </li>
                                        </ul>

                                    </div>

                                    <div className="resume-item">
                                        <h4>{lang === "English"
                                            ? "Developer (Full Stack)"
                                            : "Développeur (Full Stack)"}
                                        </h4>
                                        <h5>2022 - 2023</h5>
                                        <p><em>{lang === "English"
                                            ? "Supply America, United States"
                                            : "Supply America, États-Unis"}
                                        </em></p>
                                        <ul>
                                            <li>
                                                {lang === "English"
                                                    ? "Development: Utilized PHP and Magento to develop and test code improvements prior to implementation. Implemented new web functions and features to enhance user experience."
                                                    : "Développement : Utilisation de PHP et Magento pour développer et tester des améliorations de code avant leur mise en œuvre. Mise en place de nouvelles fonctions et fonctionnalités web pour améliorer l'expérience utilisateur."}
                                            </li>
                                            <li>
                                                {lang === "English"
                                                    ? "Troubleshoot: Investigated and resolved customer issues on the web portal, including bug fixes and functionality improvements."
                                                    : "Dépannage : Investigation et résolution des problèmes clients sur le portail web, y compris correction de bugs et améliorations fonctionnelles."}
                                            </li>
                                            <li>
                                                {lang === "English"
                                                    ? "Configuration and Database Management: Managed configuration and database import for web portal, ensuring accurate data and system functionality."
                                                    : "Gestion de la configuration et des bases de données : Gestion de la configuration et de l'importation de la base de données pour le portail web, assurant l'exactitude des données et le bon fonctionnement du système."}
                                            </li>
                                            <li>
                                                {lang === "English"
                                                    ? "Testing: Conducted testing for new features and functionality, documenting results and collaborating with team members to refine development processes."
                                                    : "Tests : Réalisation de tests pour les nouvelles fonctionnalités, documentation des résultats et collaboration avec les membres de l'équipe pour affiner les processus de développement."}
                                            </li>
                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>
                </main>
            </div>
        </>
    );
};
export default Resume;