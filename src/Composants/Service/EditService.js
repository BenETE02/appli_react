import React, {useEffect, useState} from "react";
import './Creation1.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faStop, faHome, faPlus, faList} from '@fortawesome/free-solid-svg-icons';
import {useHistory, useParams} from 'react-router-dom'
import axios from "axios";


const Edit = () => {
    let history = useHistory();
    const {id} = useParams();
    const [ user, setUser] = useState({
        nomService:"",
        codeService:"",
        lieuService:"",  
        emailService:""
    });
  
    const onInputChange = e =>{
        setUser({...user, [e.target.name] : e.target.value})
    }
    
    useEffect(() => {
        loadNames();
    },[])

    const validationform = async e => {
        const confirmation = alert("Voulez-vous vraiment apporter des modifications à ce service ?");
        if(!confirmation){
        }
        e.preventDefault();
        await axios.put(`http://localhost:5000/serviceDonnes/${id}`, user);
        history.push("/service/listService");
    }

    const loadNames = async () =>{
        const resultat = await axios.get(`http://localhost:5000/serviceDonnes/${id}`);
        //console.log(resultat);
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
                <center>
                <form onSubmit={validationform} className="form1">
                    <h4>MODIFICATION D'UN SERVICE</h4>
                    <div className="contact-form">
                        <div className="input-fields">
                            <input 
                                type="text" 
                                name="nomService" 
                                placeholder="Votre nom..." 
                                required="true" 
                                value={user.nomService} 
                                onChange={onInputChange}/>    
                        </div>
                        <div className="input-fields">
                            <input 
                                type ="text" 
                                name="codeService" 
                                placeholder="Votre prenom..." 
                                required="true" 
                                value={user.codeService} 
                                onChange={e => onInputChange(e)}/>
                        </div>  
                        <div className="input-fields">
                            <input 
                                type = "text" 
                                name="lieuService" 
                                placeholder="Votre lieu de naissance..."
                                required="true"
                                value={user.lieuService} 
                                onChange={e => onInputChange(e)}/>
                        </div> 
                        <div className="input-fields">
                            <input 
                                type="email" 
                                name="emailService" 
                                placeholder="Votre email..." 
                                required="true" 
                                value={user.emailService} 
                                onChange={e => onInputChange(e)}/>
                        </div>           
                    </div>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit} size="md"/><b> Modifier</b></button> &nbsp; &nbsp;
                    <Link to="/service/listService" className="btn btn-danger"><FontAwesomeIcon icon={faStop} size="md"/><b> Annuler</b></Link>
                </form>
            </center>
            </>
        )
}
    
export default Edit