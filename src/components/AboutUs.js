import React from "react";
import "../scss/main.scss";
import "../scss/AboutUs.scss"
import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";
import People from "../assets/People.jpg"

// import "../scss/ThreeColumns.scss"
function AboutUs() {
    return (
     <div className = "flex">
     <div className = "left"
                 style = {{background: '#F0F1F1'}}>

     
     <h1>O nas!</h1>
     <div className="flex"
     
     >
        <img src={Decoration} className="decoration" />
       </div>
        <h1 className="about-us">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</h1>
       <div className = "signature">
        <img src={Signature}/>
        </div>
     </div>
     <div className = "right">
     <img src={People} className="people" />

     </div>
     </div>

    );
}

export default AboutUs;