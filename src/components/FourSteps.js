import React from "react";
import { Link } from "react-router-dom";
import "../scss/main.scss";
import "../scss/NavHeader.scss";
import IconOne from "../assets/IconOne.svg";
import IconTwo from "../assets/IconTwo.svg";
import IconThree from "../assets/IconThree.svg";
import IconFour from "../assets/IconFour.svg";
import Decoration from "../assets/Decoration.svg"


function FourSteps() {
    return (<>
            <div className = "grid" id ="FourSteps">
            <h1>Wystarczą 4 proste kroki</h1>
            <img src={Decoration} className="decoration" />
            </div>
            <div className = "flex"
            style = {{background: '#F0F1F1'}}>
            <div className = "grid">
                <img src={IconOne} className="decoration" />
                <h2>Wybierz rzeczy</h2>
                <h2>Ubrania, zabawki, sprzęt i inne</h2>
            </div>
            <div className = "grid">
                <img src={IconTwo} className="decoration" />
                <h2>Spakuj je</h2>
                <h2>Skorzystaj z worków na śmieci</h2>
            </div>
            <div className = "grid">
                <img src={IconThree} className="decoration" />
                <h2>Zdecyduj, komu chcesz oddać</h2>
                <h2>Wybierz zaufane miejsce</h2>
            </div>
            <div className = "grid">
                <img src={IconFour} className="decoration" />
                <h2>Zamów kuriera</h2>
                <h2>Kurier przyjedzie w dogodnym terminie</h2>
            </div>
            
                    
            </div>
            <div className = "flex">
            <button className="button-NavHeader"><Link to="/Login">ODDAJ RZECZY</Link></button>
            </div>
            </>
    );
}
export default FourSteps;

