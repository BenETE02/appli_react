import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import './ServiceTable.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStepBackward, faHome, faPlus, faList} from '@fortawesome/free-solid-svg-icons';



const View = () => {
    const [ user, setUser] = useState({
        nomService:"",
        codeService:"",
        lieuService:"",  
        emailService:""
    });

    const {id} = useParams();

    useEffect(() => {
        loadNames();
    }, []);

    const loadNames = async () => {
        const resultat = await axios.get(`http://localhost:5000/serviceDonnes/${id}`);
        setUser(resultat.data);
    }

    return(
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
            <div className="view">
                <center>
                    <h3>INFORMATIONS DU SERVICE</h3>
                        <ul className="list-group w-50">
                            <p>ID service : {user.id}</p>
                            <p>Nom du service : {user.nomService}</p>
                            <p>Code du service : {user.codeService}</p>
                            <p>Localisation du service : {user.lieuService}</p>
                            <p>Mail du service : {user.emailService}</p>
                        </ul>
                    <Link className ="btn btn-primary" to="/service/listService"><FontAwesomeIcon icon={faStepBackward} size="md"/> Retour</Link>
                </center>        
            </div>
        </>
    );
};


export default View;