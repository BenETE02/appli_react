import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faStop, faHome, faUserPlus, faList} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {useHistory} from 'react-router-dom';
import './Creation1.css';

const AjoutUsers = () => {
    let history = useHistory();
    const [ user, setUser] = useState({
        nom:"",
        prenom:"",
        sexe:"",
        date:"",
        lieu:"",  
        email:""
    });

    const onInputChange = e =>{
        setUser({...user, [e.target.name] : e.target.value})
    }

    const confirmation = async e => {
        e.preventDefault();
        await axios.post("http://localhost:5000/utilisateursDonnes", user);
        history.push("/utilisateur/listUser")
    }

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
            <center>
                <form onSubmit={e => confirmation(e)} className="form2" style={{}}>
                    <h4>AJOUTER UN UTILISATEUR</h4>
                    <div className="contact-form">
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder="Votre nom..." 
                                name="nom" 
                                required="true" 
                                value={useState.nom} 
                                onChange={e => onInputChange(e)}/>    
                        </div>
                        <div className="input-field">
                            <input 
                                type="text"
                                placeholder="Votre prenom..."
                                name="prenom" 
                                required="true" 
                                value={useState.prenom}
                                onChange={e => onInputChange(e)}/>
                        </div>  
                        <div className="input-field">
                            <select type="text" name="sexe" required="true" value={useState.sexe} onChange={e => onInputChange(e)}>    
                                <option>Votre sexe...</option>
                                <option>Masculin</option>
                                <option>Féminin</option>                       
                            </select>
                        </div> 
                        <div className="input-field">
                            <input 
                                type="date"
                                name="date" 
                                min = "1960-01-01"
                                required="true"
                                value={useState.date}
                                onChange={e => onInputChange(e)}/>
                        </div> 
                        <div className="input-field">
                            <input 
                                type="text"  
                                name="lieu" 
                                placeholder="Votre lieu de naissance..." 
                                required="true"
                                value={useState.lieu}
                                onChange={e => onInputChange(e)}/>
                        </div> 
                        <div className="input-field">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Votre email..." 
                                required="true" 
                                value={useState.email}
                                onChange={e => onInputChange(e)}/>
                        </div>           
                    </div>
                    <button className="btn btn-success" type="submit"><FontAwesomeIcon icon={faCheck} size="md" position="center"/><b> Valider</b></button> &nbsp; &nbsp; 
                    <button className="btn btn-danger" type="reset"><FontAwesomeIcon icon={faStop} size="md" position="center"/><b> Annuler</b></button>
                </form>
            </center>       
        </>
    )
}

export default AjoutUsers
