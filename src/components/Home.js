import React from "react";
import "../scss/main.scss";
import NavHeader from "./NavHeader";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";


function Home() {
    return (
    <div className = "container-home">
        <NavHeader/>
        <ThreeColumns/>
        <FourSteps/>
        <AboutUs/>
        <WhoWeHelp/>
    </div>

    );
}

export default Home;