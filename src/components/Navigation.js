import React from "react";
import "../scss/main.scss";
import "../scss/navigation.scss"

  import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navigation = () => {

    return (
            <nav className="navigation">

                    <Link
                    className = "link-nav" 
                    to="NavHeader"
                          // spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                    >Start
                    </Link>
                    <Link 
                    className = "link-nav"
                    to="ThreeColumns"
                    // spy={true}
                    smooth={true}
                    offset={50}
                    duration={500} 

                    >O co chodzi?
                    </Link>
                    <Link
                    className = "link-nav" 
                    to="AboutUs"
                    // spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
 
                    >O nas
                    </Link>

                    <Link
                    className = "link-nav" 
                    to="Whowehelp"
                    // spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                   
                    >Fundacja i organizacja
                    </Link>
                    <Link
                    className = "link-nav" 
                    to="ContactForm"
                    // spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    
                    >Kontakt
                    </Link>
               


            </nav>
    )
}





export default Navigation;
