import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import './ServiceTable.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStepBackward, faHome, faUserPlus, faList} from '@fortawesome/free-solid-svg-icons';


const ViewUsers = () => {
    const [ user, setUser] = useState({
        nom:"",
        prenom:"",
        sexe:"",
        date:"",
        lieu:"",  
        email:""
    });

    const {id} = useParams();

    useEffect(() => {
        loadNames();
    }, []);

    const loadNames = async () => {
        const resultat = await axios.get(`http://localhost:5000/utilisateursDonnes/${id}`);
        setUser(resultat.data);
    }

    return(
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
            <div className="view1">
                <center>
                    <h3>INFORMATIONS DE L'UTILISATEUR</h3>
                        <ul className="list-group w-50">
                            <p>ID : {user.id}</p>
                            <p>Nom : {user.nom}</p>
                            <p>Prénoms : {user.prenom}</p>
                            <p>Sexe : {user.sexe}</p>
                            <p>Date de naissance : {user.date}</p>
                            <p>Lieu de naissance : {user.lieu}</p>
                            <p>Email : {user.email}</p>
                        </ul>
                    <Link className ="btn btn-primary" to="/utilisateur/listUser"><FontAwesomeIcon icon={faStepBackward} size="md"/> Retour</Link>
                </center>        
            </div>
        </>
    );
}

export default ViewUsers
