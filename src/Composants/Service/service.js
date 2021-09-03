import React from 'react';
import './service.css';
import France from "../images/france";
import Usa from "../images/usa";
import Espagne from "../images/espagne";
import All from '../images/all';
import Arabie from "../images/arabie";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faPlus, faList} from '@fortawesome/free-solid-svg-icons';

const Service = () => {
    return (
        <>
            <div className="sidebar">
                <nav className="nav">
                    <ul>
                        <li className="active"><a href="/service"><FontAwesomeIcon icon={faHome}/> Accueil</a></li>
                        <li className="active"><a href="/service/ajoutService"><FontAwesomeIcon icon={faPlus}/> Ajouter service</a></li>
                        <li className="active"><a href="/service/listService"><FontAwesomeIcon icon={faList}/> Liste des services</a></li>
                    </ul>
                </nav>
            </div>

            <div className="content">
                <div style={{marginTop:'200px', marginLeft:'250px'}}>
                    <center>
                        <h1 style={{color:'red'}}><Usa/>Welcome to Service !</h1>
                        <h1 style={{color:'blue'}}><France/>Bienvenue au service !</h1>
                        <h1 style={{color:'green'}}> <Arabie/>مرحبا بكم في الخدمة !</h1>
                        <h1 style={{color:'orange'}}><Espagne/>Bienvenido al servicio !</h1>
                        <h1 style={{color:'black'}}><All/>Willkommen im Service !</h1>
                    </center>
                </div>
            </div>
        </>
    )
}

export default Service
