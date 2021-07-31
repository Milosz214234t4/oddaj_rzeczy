import React from "react";
import Decoration from "./assets/Decoration.svg";
import IconOne from "./assets/IconOne.svg";
import IconTwo from "./assets/IconTwo.svg";
import IconThree from "./assets/IconThree.svg";
import IconFour from "./assets/IconFour.svg";
import Login from "./Login";
import {Route, Switch, Link} from "react-router-dom";
const SimpleSteps = () => {

    return (
        <div className="simple-steps-main" id = "SimpleSteps">
            <h1 className="main-header">Oddaj zapomniane rzeczy w niechciane ręce!</h1>
            <img src={Decoration} className="img decoration" />
        <div className="simple-steps-grid">
            <div className="simple-steps-one">
                <img src={IconOne} className="img decoration" />
                <h2 className="three-columns-h2">Wybierz rzeczy</h2>
                <h2 className="three-columns-h2">Ubrania, zabawki, sprzęt i inne</h2>
            </div>
            <div className="simple-steps-two">
                <img src={IconTwo} className="img decoration" />
                <h2 className="three-columns-h2">Spakuj je</h2>
                <h2 className="three-columns-h2">Skorzystaj z worków na śmieci</h2>
            </div>
            <div className="simple-steps-three">
                <img src={IconThree} className="img decoration" />
                <h2 className="three-columns-h2">Zdecyduj komu chcesz pomóc</h2>
                <h2 className="three-columns-h2">Wybierz zaufane miejsce</h2>
            </div>
            <div className="simple-steps-four">
                <img src={IconFour} className="img decoration" />
                <h2 className="three-columns-h2">Zamow kuriera</h2>
                <h2 className="three-columns-h2">Kurier przyjedzie w dogodnym terminie</h2>

        </div>
        </div>
            <button className="main-button button-center" >
                <Link to="/Userpage">Zoorganizuj zbiórkę</Link>
                </button>
        </div>



    )
}





export default SimpleSteps;