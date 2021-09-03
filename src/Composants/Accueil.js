import React, { Component } from "react";
import France from "./images/france";
import Usa from "./images/usa";
import Espagne from "./images/espagne";
import All from "./images/all";
import Arabie from "./images/arabie";

class Accueil extends Component{



    render(){
        return(
            <div className="container" style={{marginTop:'200px'}}>
                <center>
                    <h1 style={{color:'red'}}><Usa/>Welcome !</h1>      
                    <h1 style={{color:'blue'}}><France/>Bienvenue !</h1>
                    <h1 style={{color:'green'}}><Arabie/> مرحبا بكم !</h1>
                    <h1 style={{color:'orange'}}><Espagne/>Bienvenidos !</h1>
                    <h1 style={{color:'black'}}><All/>Willkommen !</h1>
                </center>   
            </div>
        );
    } 
}
    
export default Accueil