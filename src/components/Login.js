import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import app from "./firebase/base";


import "../scss/Login.scss";
import "../scss/ContactForm.scss"
import Decoration from "../assets/Decoration.svg";
import Navigation from "./Navigation";

const Login = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        
        if(validatePassword(event.target.password.value) ) {
            await app
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);

            history.push("/Userpage");
        } else {
            // console.log("error");
            alert("Podano złe dane do logowania");
        }
    }, [history]);

    function validatePassword(password) {
        if(password.length > 8) {
         
                return true
        }

            else {
                return false
            }

        }
        // console.log(re4);
        // return re.test(password);

        // console.log(Boolean(password.value.match(/[a-z]/)));
        // console.log(Boolean(password.value.match(/[A-Z]/)));
        // console.log(Boolean(password.value.length > 9));
        // console.log(Boolean(password.value.match(/[$@$!%*?&]/)));
  
    
    return (<>
    <div className = "right">
        <Navigation/>
        </div>
        <div className = "grid"
        style ={{width: "100%"}}
        >
            
            <h1>Zaloguj sie</h1>
            <img src={Decoration} className="img decoration" />

                <form 
                onSubmit={handleSignUp}
                className="grid form-login"
                >
                <section className = "background-login grid">
                <label>
                Email
                </label>
                <input className="label-contact-form border-bottom"
                        name="email"
                        type="email"
                        placeholder="Email" />
                 <label>
                Hasło
                </label>
                <input name="password"
                           className="label-contact-form border-bottom"
                           type="password"
                            placeholder="Password" />
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

export default withRouter(Login);