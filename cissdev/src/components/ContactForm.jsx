// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const SuccessMessage = () => {
  return (
    <div 
      className="d-flex justify-content-center align-items-center"
       // soft green background for extra yum
    >
      <div className="alert alert-success text-center shadow-lg p-4 rounded" role="alert" style={{ minWidth: '320px', maxWidth: '480px', backgroundColor: "black", border: "none", color: "white" }}>
  <h4 className="alert-heading">
    {localStorage.getItem('lang') === "English" ? "🎉 Message Sent!" : "🎉 Message envoyé !"}
  </h4>
  <p>
    {localStorage.getItem('lang') === "English"
      ? "Thanks for reaching out! 🌟"
      : "Merci de m'avoir contactés! 🌟"
    }
    <br />
    {localStorage.getItem('lang') === "English"
      ? "We’ll get back to you faster than you can say “Hello World”"
      : "Nous vous répondrons plus vite que vous ne pouvez dire « Hello World »."
    }
  </p>
  <hr />
  <p className="mb-0">
    {localStorage.getItem('lang') === "English"
      ? "In the meantime, feel free to grab a snack and chill 😎"
      : "En attendant, n’hésitez pas à prendre un encas et à vous détendre 😎"
    }
  </p>
</div>

    </div>
  );
};

const ContactForm = (props) => {
  const [state, handleSubmit] = useForm("xwpojrnj");
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honeyPot, setHoneyPot] = useState("");
 
  if (state.succeeded) {
    return <SuccessMessage />;
}

  const handleFullNameInput = (e) => {
    setFullName(e.target.value);
  }
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  }
  const handleSubjectInput = (e) => {
    setSubject(e.target.value);
  }
  const handleMessageInput = (e) => {
    setMessage(e.target.value);
  }
  const sendMessage = () => {
   if(fullName.length > 1 && isValidEmail(email) && subject.length > 1 && message.length > 1 && honeyPot === ""){
    return <button className="btn btn-success" type="submit">Send Message</button>;
   }
   return <button className="btn btn-success" type="submit" disabled>Send Message</button>
  }
  return (
    <form onSubmit={ (e) => {e.preventDefault();        // Stop the default page reload
      handleSubmit(e);}}>
      <div className="mb-1">
  <label htmlFor="fullname" className="form-label">{props.lang === "English"? "Full Name": "Nom Complet"}</label>
  <input 
    type="text" 
    className="form-control" 
    id="fullname" 
    placeholder={props.lang === "English"? "Enter full name" :"Entrez le nom complet" } 
    name="fullname"
    value={fullName}
    onChange={handleFullNameInput} required/>
    
</div>
      <div className="mb-3">
  <label htmlFor="email" className="form-label">{props.lang === "English" ? "Email Address" : "Adresse e-mail"}
  </label>
  <input 
    type="email" 
    className="form-control" 
    id="email" 
    placeholder={props.lang === "English" ? "Enter email address" : "Entrez l'adresse e-mail"}
    name="email"
    value={email}
    onChange={handleEmailInput} required />
</div>
<div className="mb-3">
  <label htmlFor="subject" className="form-label">{props.lang === "English" ? "Subject" : "Sujet"}
  </label>
  <input 
    type="text" 
    className="form-control" 
    id="subject" 
    placeholder={props.lang === "English" ? "Enter Subject" : "Entrez le sujet"}
    name="subject"
    value={subject}
    onChange={handleSubjectInput} required />
</div>
<div className="mb-3">
  <label htmlFor="message" className="form-label">Message</label>
  <textarea 
    className="form-control" 
    id="message" 
    rows="5"
    name="message"
    value={message}
    onChange={handleMessageInput} required >
  </textarea>
</div>
<input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" value={honeyPot} onChange={(e) => { setHoneyPot(e.target.value)}} />

<div className="mb-3" style={{ textAlign: "center"}}>
{sendMessage()}
</div>

    </form>

      
    
  );
}

export default ContactForm;
{/* <label htmlhtmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button> */}