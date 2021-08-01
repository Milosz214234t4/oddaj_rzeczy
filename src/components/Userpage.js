import React from "react";
import {Link} from "react-router-dom";
import app from "../components/firebase/base"
import "../scss/main.scss";
import "../scss/NavHeader.scss";

import HomeHeroImage from "../assets/HomeHeroImage.jpg"
import Decoration from "../assets/Decoration.svg"
import Navigation from "./Navigation";

function Userpage() {
    return (<>
            <h2>Userpage</h2>
            <button
                                className="select-login"
                                onClick={() => app.auth().signOut()}>Sign out</button>
            </>
    );
}
export default Userpage;