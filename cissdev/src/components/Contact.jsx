import { useState, useEffect } from "react";
import Nav from "./Nav";
import { useLoading } from "../contexts/LoadingContext";
import { PageLoader } from "./LoaderComponents";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [lang, setLang] = useState(localStorage.getItem('lang'));
  const { globalLoading, setLoading, setComponentLoading, loadingStates } = useLoading();
  const [ready, setReady] = useState(false);
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
      <title>CodeByCisse - Contact</title>
      <div className="contact-page">
        <Nav active="Contact" updateLang={updateLang} />
        {!ready && <PageLoader />}
        {ready && <main className="main">
  {/* Clean Page Title */}
  <div className="page-title" data-aos="fade">
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1>Contact</h1>
            <p className="contact-subtitle">
              {lang === "English" 
                ? "Let's connect and discuss your next project"
                : "Connectons-nous et discutons de votre prochain projet"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Contact Section */}
  <section id="contact" className="contact section">
    <div className="container" data-aos="fade-up" data-aos-delay="100">
      
      {/* Contact Info Cards */}
      <div className="row gy-4 justify-content-center mb-5">
        <div className="col-lg-5 col-md-6">
          <div className="contact-info-card" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-icon">
              📞
            </div>
            <div className="contact-details">
              <h3>{lang === "English" ? "Phone Number" : "Numéro de téléphone"}</h3>
              <a href="tel:+13213879002" className="contact-link">
                +1 (321) 387-9002
              </a>
              <p className="contact-note">
                {lang === "English" 
                  ? "Available Mon-Fri, 9AM-6PM EST"
                  : "Disponible Lun-Ven, 9h-18h EST"
                }
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-md-6">
          <div className="contact-info-card" data-aos="fade-up" data-aos-delay="300">
            <div className="contact-icon">
              📧
            </div>
            <div className="contact-details">
              <h3>{lang === "English" ? "Email Address" : "Adresse e-mail"}</h3>
              <a href="mailto:omarcisse802@gmail.com" className="contact-link">
                omarcisse802@gmail.com
              </a>
              <p className="contact-note">
                {lang === "English" 
                  ? "I'll respond within 24 hours"
                  : "Je réponds dans les 24 heures"
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="contact-form-wrapper" data-aos="fade-up" data-aos-delay="400">
            <div className="form-header">
              <h2>
                {lang === "English" 
                  ? "Send me a message"
                  : "Envoyez-moi un message"
                }
              </h2>
              <p>
                {lang === "English" 
                  ? "Have a project in mind? I'd love to hear about it and discuss how we can work together."
                  : "Vous avez un projet en tête ? J'aimerais en entendre parler et discuter de la façon dont nous pouvons travailler ensemble."
                }
              </p>
            </div>
            <ContactForm lang={lang} />
          </div>
        </div>
      </div>

      {/* Optional: Quick Contact Methods */}
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 text-center">
          <div className="quick-contact" data-aos="fade-up" data-aos-delay="500">
            <h3>
              {lang === "English" 
                ? "Prefer other ways to connect?"
                : "Vous préférez d'autres moyens de vous connecter ?"
              }
            </h3>
            <div className="quick-contact-buttons">
              <a href="tel:+13213879002" className="quick-btn phone-btn">
                📞 {lang === "English" ? "Call Now" : "Appeler"}
              </a>
              <a href="mailto:omarcisse802@gmail.com" className="quick-btn email-btn">
                📧 {lang === "English" ? "Send Email" : "Envoyer Email"}
              </a>
              <a href="https://wa.me/13213879002" className="quick-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</main>}

      </div>
    </>
  );
};
export default Contact;