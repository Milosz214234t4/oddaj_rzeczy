import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import app from "./firebase/base";

import "../scss/Login.scss";
import "../scss/ContactForm.scss"
import Decoration from "../assets/Decoration.svg";
import Navigation from "./Navigation";

const CreateAccount = ({ history }) => {
    const [password, setPassword] = useState("")
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password, passwordconfim } = event.target.elements;
        if (!(event.target.password.value === event.target.passwordconfim.value) ){
            alert("Hasła muszą być jednakowe, zawierać co najmniej 8 znaków, jedną wielką literę, jedną małą oraz znak specjalny");
            return false;
        }
        
       
        else if(validatePassword(event.target.password.value) ){
        await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
    history.push("/Userpage");
    console.log(email);
    console.log(password);
        }

      
    }, [history]);
   

    function validatePassword(password) {
       
        let arr = [];
        var re1 = /[a-z]/;
        var re2 = /[A-Z]/;
        var re3 = /[$@$!%*?&]/;
        // console.log(passwordconfim)
        // console.log(re1.test(password));
        // console.log(re2.test(password));
        // console.log(re3.test(password));



        if (re1.test(password) && re2.test(password) && re3.test(password)){
            return true
        }

       else {
           // alert("Hasło musi zawierać co najmniej 8 znaków, jedną wielką literę, jedną małą oraz znak specjalny i cyfrę")
       return false
       }



}

    return (<>
    <div className = "right">
        <Navigation/>
        </div>
        <div className = "grid"
        style ={{width: "100%"}}
        >
            
            <h1>Załóż konto</h1>
            <img src={Decoration} className="img decoration" />

                <form onSubmit={handleSignUp}
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
               
                <input name="password"
                                   className="label-contact-form border-bottom"
                                   type="password"
                                    placeholder="Password" />
                   <label>
                Powtórz hasło
                </label>
                <input name="passwordconfim"
                                   className="label-contact-form border-bottom"
                                   type="password"
                                   placeholder="passwordconfim" />
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

export default withRouter(CreateAccount);