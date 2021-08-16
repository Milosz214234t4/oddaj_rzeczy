import React from "react";
import {Link} from "react-router-dom";
import app from "../components/firebase/base"
import "../scss/main.scss";
import ButtonsLogCreate from "./ButtonsLogCreate";



function Userpage() {
  
    // console.log(app.auth().currentUser.email);
    return (<>
    <ButtonsLogCreate/>
            
            <button
                                className="select-login"
                                onClick={() => app.auth().signOut()}>Wyloguj sie</button>
                                <Link to="/">Główna</Link>
            </>
    );
}
export default Userpage;