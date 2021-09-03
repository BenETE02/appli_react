import React from 'react';
import './service.css';
import France from "../images/france";
import Usa from "../images/usa";
import Espagne from "../images/espagne";
import All from '../images/all';
import Arabie from "../images/arabie";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUserPlus, faList} from '@fortawesome/free-solid-svg-icons';

const Utilisateur = () => {
    return (
        <>
            <div className="sidebar1">
                <nav className="nav">
                    <ul>
                        <li className="active"><a href="/utilisateur"><FontAwesomeIcon icon={faHome}/> Accueil</a></li>
                        <li className="active"><a href="/utilisateur/ajoutUser"><FontAwesomeIcon icon={faUserPlus}/> Ajout d'utilisateur</a></li>
                        <li className="active"><a href="/utilisateur/listUser"><FontAwesomeIcon icon={faList}/> Liste d'utilisateurs</a></li>
                    </ul>
                </nav>
            </div>

            <div className="content">
                <div style={{marginTop:'200px', marginLeft:'250px'}}>
                    <center>
                        <h1 style={{color:'red'}}><Usa/>Welcome users !</h1>
                        <h1 style={{color:'blue'}}><France/>Bienvenue aux utilisateurs !</h1>
                        <h1 style={{color:'green'}}> <Arabie/> نرحب بالمستخدمين !</h1>
                        <h1 style={{color:'orange'}}><Espagne/>Usuarios de bienvenida !</h1>
                        <h1 style={{color:'black'}}><All/>Willkommen Benutzer !</h1>
                    </center>
                </div>
            </div>
        </>
    )
}

export default Utilisateur
