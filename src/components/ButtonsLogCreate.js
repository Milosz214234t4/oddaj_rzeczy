import React from "react";
import { Link } from "react-router-dom";
import "../scss/main.scss";
import app from "../components/firebase/base"
import "../scss/ButtonsLogCreate.scss";



function ButtonsLogCreate() {
    // console.log(app.auth);
    // console.log(app.auth().currentUser);
    
    if(!app.auth().currentUser){
    return (<div className="container-home container-buttons-logcreate">
            <button className><Link to="/Login">Zaloguj</Link></button>
           <button><Link to="/CreateAccount">Załóż konto</Link> </button>     
            </div>
    );
    }
    else{
        return(<div className="container-home container-buttons-logcreate">
            <h2>Witaj {app.auth().currentUser.email}</h2>
            
            <button
            onClick={() => app.auth().signOut()}>Wyloguj się</button>
            </div>
        )
    }
}
export default ButtonsLogCreate;

