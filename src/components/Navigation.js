import React from "react";
import "../scss/main.scss";
import "../scss/navigation.scss"
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
  } from "react-router-dom";
const Navigation = () => {

    return (
            <nav className="navigation">

                    <Link
                    className = "link-nav" 
                    >Start
                    </Link>
                    <Link 
                    className = "link-nav" 

                    >O co chodzi?
                    </Link>
                    <Link
                    className = "link-nav" 
 
                    >O nas
                    </Link>

                    <Link
                    className = "link-nav" 

                   
                    >Fundacja i organizacja
                    </Link>
                    <Link
                    className = "link-nav" 

                    
                    >Kontakt
                    </Link>
               


            </nav>
    )
}





export default Navigation;
