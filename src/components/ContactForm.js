import React from "react";
import results from "./firebase/results";
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
        erroremail: "",
        errormessage: ""
    }


    
    postDataHandler = (e) => {
        e.preventDefault()
        const Data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,

        }
        function validateEmail(email)
        {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
        if (validateEmail(this.state.email) && (this.state.name.length > 10)){
        results.post('/marks.json', Data).then(response => {
            console.log(response);
            // console.log(validateEmail (this.state.email));
            // console.log(this.state.name.length > 10);
            // console.log(this.state.message.length > 10);


        })
        this.setState({name: " ", email: " ", message:" ", succesmessage: "Wiadomość wysłana, wkrótce się skontaktujemy"});

         }
         else{
             console.log("error");
             console.log(this.state.name.length);
             
             switch (true)
{
    case(!(validateEmail(this.state.email))):
    {
        this.setState((erroremail) => ({
            erroremail: "zly adres email",
           

        }));
        // break



    }

    case(!(this.state.name.length > 10)):{
        this.setState((errorname) => ({
            errorname: "zbyt krótka nazwa użytkownika"

        }));
        // break
    }
    case(!(this.state.message.length > 50)):{
        this.setState((errormessage) => ({
            errormessage: "wiadomość powinna zawierać ponad 50 znaków"

        }));
        // break
    }
    default:{
        console.log("Wystąpił błąd, spróbuj ponownie");
        break;
    }
    
}
         }
    }


render() {



    return (
        <>
        <div className="container-contact-form" id = "ContactForm">
            <div className = "right grid">
            <h1>Skontaktuj się z nami</h1>
            <span style={{color: "green"}} className="succes" >{this.state.succesmessage} </span>

            <img src={Decoration} className="decoration" />
            <form onSubmit={this.postDataHandler}>
                <section className = "section-ContactForm">
                <label htmlFor="input-name" className="label-contact-form">Wpisz swoje imie</label>
                <span style={{color: "red"}}>{this.state.errorname} </span>

                <input type="text"
                           className="label-contact-form"
                           placeholder="name"
                           value = {this.state.name}
                           onChange={(e) => this.setState({name: e.target.value, error: " ",  errormessage: " ", erroremail: " ", errorname: "", succesmessage:""})}/>
                </section>
                <section className = "section-ContactForm">

                <label htmlFor="input-name" className="label-contact-form">Wpisz swoj email</label>
                <span style={{color: "red"}}>{this.state.erroremail} </span>

                <input type="text"
                           className="label-contact-form"
                           placeholder="email"
                           value = {this.state.email}
                           onChange={(e) => this.setState({email: e.target.value, error: " ",  errormessage: " ", erroremail: " ", errorname: "", succesmessage:""})}/>

           </section>
           <section className = "section-ContactForm section-textarea">
           <label htmlFor="input-name" className="label-contact-form">Wpisz swoją wiadomość</label>
           <span style={{color: "red"}} >{this.state.errormessage} </span>

           <textarea className="label-contact-form textarea"
                              placeholder="Remember, be nice!"
                              cols="30" rows="5"
                              value = {this.state.message}
                              onChange={(e) => this.setState({message: e.target.value, errormessage: " ", erroremail: " ", errorname: "", succesmessage: ""})}/>
            </section>
            <button type="submit" className="button-submit-contactForm" value="Subtmit">Wyslij</button>

            </form>
            </div>
            </div>
            
          </> 
    );
}}
export default ContactForm;