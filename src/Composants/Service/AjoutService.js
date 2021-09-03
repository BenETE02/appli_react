import React, {useState} from "react";
import './Creation1.css';
import './service.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck, faStop, faHome, faPlus, faList} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {useHistory} from 'react-router-dom'

const AjoutService = () => {
    let history = useHistory();
    const [ user, setUser] = useState({
        nomService:"",
        codeService:"",
        lieuService:"",  
        emailService:""
    });

    const onInputChange = e =>{
        setUser({...user, [e.target.name] : e.target.value})
    }

    const validationform = async e => {
        e.preventDefault();
        await axios.post("http://localhost:5000/serviceDonnes", user);
        history.push("/service/listService")
    }
    
    return(
        <>
            <div className="sidebar">
                <nav className="nav">
                    <ul>
                    <li className="active"><a href="/service"><FontAwesomeIcon icon={faHome}/> Accueil</a></li>
                            <li className="active"><a href="/service/AjoutService"><FontAwesomeIcon icon={faPlus}/> Ajouter service</a></li>
                            <li className="active"><a href="/service/listService"><FontAwesomeIcon icon={faList}/> Liste des services</a></li>
                    </ul>
                </nav>
            </div>
            <center>
                <form onSubmit={e => validationform(e)} className="form1">
                    <h4>AJOUTER UN SERVICE</h4>
                    <div className="contact-form">
                        <div className="input-fields">
                            <input 
                                type="text" 
                                placeholder="Nom du service..." 
                                name="nomService" 
                                required="true" 
                                value={useState.nomService} 
                                onChange={e => onInputChange(e)}/>    
                        </div>
                        <div className="input-fields">
                            <input 
                                type="text"
                                placeholder="Code du service..."
                                name="codeService" 
                                required="true" 
                                value={useState.codeService}
                                onChange={e => onInputChange(e)}/>
                        </div>  
                        <div className="input-fields">
                            <input 
                                type="text"  
                                name="lieuService" 
                                placeholder="Lieu du service..." 
                                required="true" 
                                value={useState.lieuService}
                                onChange={e => onInputChange(e)}/>
                        </div> 
                        <div className="input-fields">
                            <input 
                                type="email" 
                                name="emailService" 
                                placeholder="Mail du service..." 
                                required="true" 
                                value={useState.emailService}
                                onChange={e => onInputChange(e)}/>
                        </div>           
                    </div>
                    <button className="btn btn-success"><FontAwesomeIcon icon={faCheck} size="md" position="center"/><b> Valider</b></button> &nbsp; &nbsp; &nbsp;
                    <button className="btn btn-danger" type="reset"><FontAwesomeIcon icon={faStop} size="md" position="center"/><b> Annuler</b></button>
                </form>
            </center>
        </>
    )
}
    
export default AjoutService;