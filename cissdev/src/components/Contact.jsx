import { useState, useEffect } from "react";
import Nav from "./Nav";
import ContactForm from "./ContactForm";

const Contact = () => {
    const [lang, setLang] = useState(localStorage.getItem('lang'));

    const updateLang = (newLang) => {
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };
    return(
        <>
        <title>CodeByCisse - Contact</title>
            <div className="contact-page">
                <Nav active="Contact" updateLang={updateLang} />
                <main className="main">

    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8" style={{ marginBottom: "-200px"}}>
              <h1>Contact</h1>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <section id="contact" className="contact section" style={{ marginTop: "-80px"}}>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4" >

          <div className="col-md-6" style={{ marginLeft: "10px"}}>
            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
              <i className="icon bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>{lang === "English"? "Phone Number": "Numéro de téléphone"}</h3>
                <a href="tel:+13213879002">+1(321)387-9002</a>

              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
              <i className="icon bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>{lang === "English"? "Address Email": "Adresse e-mail"}</h3>
                <a href="mailto:omarcisse802@gmail.com">omarcisse802@gmail.com</a>
              </div>
            </div>
          </div>


        </div>

        <ContactForm lang={lang} />

      </div>

    </section>

                </main>
            </div>
        </>
    );
};
export default Contact;