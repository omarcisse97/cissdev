import { useState } from "react";
import Nav from "./Nav";
import SkillsStats from "./SkillsStats";
const About = () => {
    const [lang, setLang] = useState(localStorage.getItem('lang'));

    const updateLang = (newLang) => {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };
    return(
        <>
        <title>CodeByCisse - About</title>
        <div className="about-page">
        <Nav active="About" updateLang={updateLang} />
        <main className="main">
        <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8" style={{marginBottom: "-500px"}}>
              <h1>{lang === "English"? "About" : "À propos"}</h1>
              <div className="about-desc">
              <p className="mb-0 ">{
                lang === 'English'? 
                "Hey, I’m Omar! I build cool apps and fix bugs while having fun with code. Always up for a new challenge and making things work smoothly. Let’s make something awesome!"
                :"Salut, moi c’est Cisspack ! Je crée des applis sympas et je corrige des bugs tout en m’amusant avec le code. Toujours partant pour un nouveau défi et faire en sorte que tout tourne comme il faut. On construit quelque chose de génial ensemble ?"
                }
             </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    
    </div>
        <section id="about" className="about section" style={{marginTop: "-50px"}}>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img 
            src="https://sandbox.habbo.com/habbo-imaging/avatarimage?size=l&figure=hd-3101-5-0.ha-0-0-0.he-1604-0-0.ea-0-0-0.ch-5561-0-0.hr-125-61-0.&gesture=nrm&action=wav&direction=2&head_direction=2&headonly=0&gender=M" 
            className="img-fluid avatar-about"  
            alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>{lang === "English"? "Software Developer & Solutions Analyst.": "Développeur Logiciel & Analyste de Solutions."}</h2>
            <p className="fst-italic py-3">
              {lang === "English"? "Passionate developer and solutions analyst turning ideas into high-performing applications.": "Développeur passionné et analyste de solutions, je transforme les idées en applications performantes."}
            </p>
            <div className="row">
              <div className="col-lg-6">
              <ul>
  <li>
    <i className="bi bi-chevron-right"></i>{" "}
    <strong>{lang === "English" ? "Birthday:" : "Date de naissance :"}</strong>{" "}
    <span>{lang === "English" ? "17 June 1997" : "17 Juin 1997"}</span>
  </li>
  <li>
    <i className="bi bi-chevron-right"></i>{" "}
    <strong>{lang === "English" ? "Website:" : "Site web :"}</strong>{" "}
    <span>www.codebycisse.com</span>
  </li>
  <li>
    <i className="bi bi-chevron-right"></i>{" "}
    <strong>{lang === "English" ? "Phone:" : "Téléphone :"}</strong>{" "}
    <span>+1(321)387-9002</span>
  </li>
  <li>
    <i className="bi bi-chevron-right"></i>{" "}
    <strong>{lang === "English" ? "City:" : "Ville :"}</strong>{" "}
    <span>Orlando FL, USA</span>
  </li>
</ul>
</div>
<div className="col-lg-6">
<ul>
  <li>
    <i className="bi bi-chevron-right"></i>{" "}
    <strong>{lang === "English" ? "Degree:" : "Diplôme :"}</strong>{" "}
    <span>{lang === "English" ? "Bachelor (University of Central Florida)" : "Licence (Université de Central Florida)"}</span>
  </li>
  <li>
    <i className="bi bi-chevron-right"></i>{" "}
    <strong>{lang === "English" ? "Email:" : "Email :"}</strong>{" "}
    <span>omarcisse802@gmail.com</span>
  </li>
  <li>
    <i className="bi bi-chevron-right"></i>{" "}
    <strong>{lang === "English" ? "Freelance:" : "Freelance :"}</strong>{" "}
    <span>{lang === "English" ? "Available" : "Disponible"}</span>
  </li>
</ul>

              </div>
            </div>
            <p className="py-3">
              {
              lang === "English"?
              "I’m a globally-minded software developer and solutions analyst who builds clean, scalable apps that solve real problems. I focus on crafting efficient, user-friendly experiences and love working with clients anywhere in the world. Always eager to tackle new challenges and create meaningful digital solutions."
              : "Je suis un développeur logiciel et analyste de solutions, avec une vision globale, spécialisé dans la création d’applications propres et évolutives qui répondent à de vrais besoins. Je m’efforce de concevoir des expériences efficaces et conviviales, en travaillant avec des clients partout dans le monde. Toujours prêt à relever de nouveaux défis et à créer des solutions digitales porteuses de sens."
            }
            </p>
          </div>
        </div>

      </div>

    </section>
            <SkillsStats lang={lang} />
        </main>
        
        </div>

        </>
    )
};
export default About;