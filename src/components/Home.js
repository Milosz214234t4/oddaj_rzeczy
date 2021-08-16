import React from "react";
import "../scss/main.scss";
import NavHeader from "./NavHeader";
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import WhoWeHelp from "./WhoWeHelp";
import ContactForm from "./ContactForm";
import ButtonsLogCreate from "./ButtonsLogCreate";


function Home() {
    return (<>
        <ButtonsLogCreate/>
    <div className = "container-home">
        <NavHeader/>
        <ThreeColumns/>
        <FourSteps/>
        <AboutUs/>
        <WhoWeHelp/>
        <ContactForm/>
    </div>
</>
    );
}

export default Home;