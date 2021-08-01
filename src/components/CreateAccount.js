import React from "react";
import { Link } from "react-router-dom";
import "../scss/Login.scss";
import "../scss/ContactForm.scss"
import Decoration from "../assets/Decoration.svg";
import Navigation from "./Navigation";

function CreateAccount() {
    return (<>
    <div className = "right">
        <Navigation/>
        </div>
        <div className = "grid"
        style ={{width: "100%"}}
        >
            
            <h1>Załóż konto</h1>
            <img src={Decoration} className="img decoration" />

                <form
                className="grid form-login"
                >
                <section className = "background-login grid">
                <label>
                Email
                </label>
                <input
                className="label-contact-form border-bottom"
                name="email"
                type="email"
                placeholder="Email" />
                 <label>
                Hasło
                </label>
                <input
                className="label-contact-form border-bottom"
                name="passowrd"
                type="password"
                placeholder="Passowrd" />
                   <label>
                Powtórz hasło
                </label>
                <input
                className="label-contact-form border-bottom"
                name="passowrdconfirm"
                type="password"
                placeholder="Password confirm" />
                </section>
                <section className = "section-login">
                <button
                    className="button-submit-contactForm button-login"
                    type="submit" >Zaloguj się</button>
                     <button
                    className="button-submit-contactForm button-login"
                    type="submit" ><Link to="/">Powróć na główną</Link></button>

                </section>
            </form>

     </div>
        </>
    );
}

export default CreateAccount;