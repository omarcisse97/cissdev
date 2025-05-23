import { useState } from "react";
import Nav from "./Nav";
const Portfolio = () => {
    const [lang, setLang] = useState(localStorage.getItem('lang'));

    const updateLang = (newLang) => {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };
    return (
        <>
            <title>CodeByCisse - Portfolio</title>
            <div className="portfolio-page">
                <Nav active="Portfolio" updateLang={updateLang} />
                <main className="main">
                    <div className="page-title" data-aos="fade">
                        <div className="heading">
                            <div className="container">
                                <div className="row d-flex justify-content-center text-center">
                                    <div className="col-lg-8">
                                        <h1>Portfolio</h1>
                                        <p className="mb-0">{lang === "English" ? <>Coming soon 🚀</> : <>Bientôt disponible 🚀</>}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </main>
            </div>
        </>
    )
};
export default Portfolio;