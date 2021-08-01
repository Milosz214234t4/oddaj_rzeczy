import React from "react";
import Decoration from "../assets/Decoration.svg";
import "../scss/main.scss";
import "../scss/ContactForm.scss";

class ContactForm extends React.Component{
    state = {
        name: " ",
        email: " ",
        message: " ",
        error: " ",
        errorname: " ",
        errormessage: " ",
        succesmessage: " ",
    }



render() {



    return (
        <>
        <div className="container-contact-form" id = "ContactForm">
            <div className = "right grid">
            <h1>Skontaktuj się z nami</h1>
            <img src={Decoration} className="decoration" />
            <form>
                <section className = "section-ContactForm">
                <label htmlFor="input-name" className="label-contact-form">Wpisz swoje imie</label>
                <input type="text"
                           className="label-contact-form"
                           placeholder="name"
                           value = {this.state.name}
                           onChange={(e) => this.setState({name: e.target.value, error: " ", succesmessage:" "})}/>
                </section>
                <section className = "section-ContactForm">

                <label htmlFor="input-name" className="label-contact-form">Wpisz swoj email</label>
                <input type="text"
                           className="label-contact-form"
                           placeholder="email"
                           value = {this.state.email}
                           onChange={(e) => this.setState({email: e.target.value, error: " ", succesmessage:" "})}/>
           </section>
           <section className = "section-ContactForm section-textarea">
           <label htmlFor="input-name" className="label-contact-form">Wpisz swoją wiadomość</label>

           <textarea className="label-contact-form textarea"
                              placeholder="Remember, be nice!"
                              cols="30" rows="5"
                              value = {this.state.message}
                              onChange={(e) => this.setState({message: e.target.value, errormessage: " ", succesmessage: " "})}/>
            </section>
            <button type="submit" className="button-submit-contactForm" value="Subtmit">Wyslij</button>

            </form>
            </div>
            </div>
            
          </> 
    );
}}
export default ContactForm;