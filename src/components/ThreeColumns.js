import React from "react";
import "../scss/main.scss";
import "../scss/ThreeColumns.scss"
function ThreeColumns() {
    return (
        <div className="flex" id = "ThreeColumns">
           <div>
                <h1>10</h1>
                <h2>ODDANYCH WORKÓW</h2>
                <h4 className="three-columns-h3">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</h4>
            </div>
            <div>                
                <h1>5</h1>
                <h2>WSPARTYCH ORGANIZACJI</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</h3>
            </div>
            <div>
                <h1>10</h1>
                <h2>ZORGANIZOWANY ZBIÓREK</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</h3>
            </div>

        </div>

    );
}

export default ThreeColumns;