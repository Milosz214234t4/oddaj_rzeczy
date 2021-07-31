import React, { useState }  from "react";
import "../scss/main.scss";
import "../scss/WhoWeHelp.scss"
import Decoration from "../assets/Decoration.svg";
// import Signature from "../assets/Signature.svg";
// import People from "../assets/People.jpg"

// import "../scss/ThreeColumns.scss"
function WhoWeHelp() {
    const [buttonone, setButtonone] = useState(false);
    const [buttontwo, setButtontwo] = useState(false);
    const [buttonthree, setButtonthree] = useState(false);
    const [firstinfo, setFirstinfo] = useState(["Fundacja “Dbam o Zdrowie”", "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "Fundacja “Bez domu”", ,"ubrania, jedzenie, sprzęt AGD, meble, zabawki"]);
    const [secondinfo, setSecondinfo] = useState(["Fundacja “Dla dzieci”", "Cel i misja: Pomoc dzieciom z ubogich rodzin.", "ubrania, meble, zabawki"]);
    const [thirdinfo, setThirdinfo] = useState(["Fundacja “Bez domu”","Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.", "ubrania, jedzenie, ciepłe koce"])
   
    const [datadisplay, setDatadisplay] = useState({
        name: ["Fundacja “Dbam o Zdrowie”", "Fundacja “Dla dzieci”","Fundacja “Bez domu”" ],
        misson: ["Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.","Cel i misja: Pomoc dzieciom z ubogich rodzin.", "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."],
        gifts: ["ubrania, jedzenie, sprzęt AGD, meble, zabawki","ubrania, meble, zabawki", "ubrania, jedzenie, ciepłe koce"]
      });

    const [infofirst, setInfofirst] = useState({
        name: ["Fundacja “Dbam o Zdrowie”", "Fundacja “Dla dzieci”","Fundacja “Bez domu”" ],
        misson: ["Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.","Cel i misja: Pomoc dzieciom z ubogich rodzin.", "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."],
        gifts: ["ubrania, jedzenie, sprzęt AGD, meble, zabawki","ubrania, meble, zabawki", "ubrania, jedzenie, ciepłe koce"]
      });
      const [infosecond, seInfosecond] = useState({
        name: ["Ogranizacja “Dbam o Zdrowie”", "Organizacja “Dla dzieci”","Organizacja “Bez domu”" ],
        misson: ["Cel i misja: Pomoc dzieciom z ubogich rodzin.", "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.", "Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania."],
        gifts: ["ubrania, meble, zabawki", "ubrania, jedzenie, ciepłe koce", "ubrania, jedzenie, sprzęt AGD, meble, zabawki"]
      });
      const [infothird, seInfothird] = useState({
        name: ["Zbiórka “Dbam o Zdrowie”", "Zbiórka “Dla dzieci”","Zbiórka “Bez domu”" ],
        misson: ["Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania." ,"Cel i misja: Pomoc dzieciom z ubogich rodzin.", "Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej."],
        gifts: [ "ubrania, jedzenie, ciepłe koce", "ubrania, jedzenie, sprzęt AGD, meble, zabawki", "ubrania, meble, zabawki"]
      });

      const handleChangebuttonfirst = () => {
        setDatadisplay(prevState => {
          return {
            ...prevState,
            name: infofirst.name,
            misson: infofirst.misson,
            gifts: infofirst.gifts
          }
        });
      };

     const handleChangebuttonsecond = () => {
        setDatadisplay(prevState => {
          return {
            ...prevState,
            name: infosecond.name,
            misson: infosecond.misson,
            gifts: infosecond.gifts
          }
        });
      };
      const handleChangebuttonthird = () => {
        setDatadisplay(prevState => {
          return {
            ...prevState,
            name: infothird.name,
            misson: infothird.misson,
            gifts: infothird.gifts
          }
        });
      };

    let allbuttons = document.querySelectorAll(".button-whowehelp");
    
    if(buttonone){
        allbuttons[0].classList.add("borders"); 
        if(allbuttons[1].classList.contains("borders")){
            allbuttons[1].classList.remove("borders"); 
        }
        if(allbuttons[2].classList.contains("borders")){
            allbuttons[2].classList.remove("borders"); 
        }
       }
       if(buttontwo){
        allbuttons[1].classList.add("borders"); 
        if(allbuttons[0].classList.contains("borders")){
            allbuttons[0].classList.remove("borders"); 
        }
        if(allbuttons[2].classList.contains("borders")){
            allbuttons[2].classList.remove("borders"); 
        }
       }
       if(buttonthree){
        allbuttons[2].classList.add("borders"); 
        if(allbuttons[0].classList.contains("borders")){
            allbuttons[0].classList.remove("borders"); 
        }
        if(allbuttons[1].classList.contains("borders")){
            allbuttons[1].classList.remove("borders"); 
        }
       }
   

   
    return (
     <div className = "grid">
            <h1>Komu pomagamy?</h1>
            <img src={Decoration} className="decoration" />
            <div className="flex buttons-whowehelp">
                <button
               
                onClick = {() => {
                    handleChangebuttonfirst();
                    setButtonone(true);
                    setButtontwo(false);
                    setButtonthree(false);

                  }}
                className = "button-whowehelp borders"
                >Fundacjom</button>
                <button  onClick = {() => {
                    handleChangebuttonsecond();
                    setButtonone(false);
                    setButtontwo(true);
                    setButtonthree(false);
                    
                  }}

                className = "button-whowehelp"
                >Organizacjom pozarządowym</button>
                <button
                  onClick = {() => {
                    handleChangebuttonthird();
                    setButtonone(false);
                    setButtontwo(false);
                    setButtonthree(true);
                  }}

                className = "button-whowehelp"

                >Lokalnym zbiórkom</button>
            </div>
            <h1 className ="whowehelp whowehelp-header">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują</h1>
            <div className = "flex cont-whowehelp">
                <div className = "left">
            <h3 className="whowehelp firstinfo">{datadisplay.name[0]}</h3>
            <h3 className="whowehelp secondinfo">{datadisplay.misson[0]}</h3>
                </div>
                <div className = "right">
                <h3 className="whowehelp lastinfo">{datadisplay.gifts[0]}</h3>

                </div>
                
            </div>
            <div className = "flex cont-whowehelp">
                <div className = "left">
            <h3 className="whowehelp firstinfo">{datadisplay.name[1]}</h3>
            <h3 className="whowehelp secondinfo">{datadisplay.misson[1]}</h3>
                </div>
                <div className = "right">
                <h3 className="whowehelp lastinfo">{datadisplay.gifts[1]}</h3>

                </div>
                
            </div>
            <div className = "flex cont-whowehelp">
                <div className = "left">
            <h3 className="whowehelp firstinfo">{datadisplay.name[2]}</h3>
            <h3 className="whowehelp secondinfo">{datadisplay.misson[2]}</h3>
                </div>
                <div className = "right">
                <h3 className="whowehelp lastinfo">{datadisplay.gifts[2]}</h3>

                </div>
                
            </div>
           
            </div>

    );
}

export default WhoWeHelp;