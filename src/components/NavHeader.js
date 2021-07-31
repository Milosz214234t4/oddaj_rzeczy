import React from "react";
import {Link} from "react-router-dom";
import "../scss/main.scss";
import "../scss/NavHeader.scss";

import HomeHeroImage from "../assets/HomeHeroImage.jpg"
import Decoration from "../assets/Decoration.svg"
import Navigation from "./Navigation";

function NavHeader() {
    return (<>
            <div className="left">
            <img src={HomeHeroImage} className="img-NavHeader" />

            </div>
            <div className="right grid">
                <Navigation/>
                <h1>Zacznij pomagać!</h1>
                <h1>Oddaj zapomniane rzeczy w niechciane ręce!</h1>
               <>
                <img src={Decoration} className="decoration" />
                </>
                    <div className = "flex">
                    <button className="button-NavHeader"><Link to="/Login">ODDAJ RZECZY</Link></button>
                    <button className="button-NavHeader"><Link to="/CreateAccount">ZOORGANIZUJ ZBIÓRKĘ</Link></button>
                    </div>
            </div>
            </>
    );
}
export default NavHeader

