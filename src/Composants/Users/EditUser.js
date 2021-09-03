import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faStop, faHome, faUserPlus, faList} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import {Link, useHistory, useParams} from 'react-router-dom'
import './Creation1.css';


const EditUser = () => {

    let history = useHistory();
    const {id} = useParams();
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

    useEffect(() => {
        loadNames();
    },[])

    const confirmation = async e => {
        const confirmation = alert("Voulez-vous vraiment apporter des modifications à cet utilisateur ?");
        if(!confirmation){
        }
        e.preventDefault();
        await axios.put(`http://localhost:5000/utilisateursDonnes/${id}`, user);
        history.push("/utilisateur/listUser")
    }

    const loadNames = async () =>{
        const res = await axios.get(`http://localhost:5000/utilisateursDonnes/${id}`);
        //console.log(resultat);
        setUser(res.data);
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
                <form onSubmit={e => confirmation(e)} className="form2" style={{boxShadow:"2px 3px 12px #c74343"}}>
                    <h4>MODIFIER UN UTILISATEUR</h4>
                    <div className="contact-form">
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder="Votre nom..." 
                                name="nom" 
                                required="true" 
                                value={user.nom} 
                                onChange={e => onInputChange(e)}/>    
                        </div>
                        <div className="input-field">
                            <input 
                                type="text"
                                placeholder="Votre prenom..."
                                name="prenom" 
                                required="true" 
                                value={user.prenom}
                                onChange={e => onInputChange(e)}/>
                        </div>  
                        <div className="input-field">
                            <select type="text" name="sexe" required="true" value={user.sexe} onChange={e => onInputChange(e)}>    
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
                                value={user.date}
                                onChange={e => onInputChange(e)}/>
                        </div> 
                        <div className="input-field">
                            <input 
                                type="text"  
                                name="lieu" 
                                placeholder="Votre lieu de naissance..." 
                                required="true"
                                value={user.lieu}
                                onChange={e => onInputChange(e)}/>
                        </div> 
                        <div className="input-field">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Votre email..." 
                                required="true" 
                                value={user.email}
                                onChange={e => onInputChange(e)}/>
                        </div>           
                    </div>
                    <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit} size="md"/><b> Modifier</b></button> &nbsp; &nbsp; 
                    <Link className="btn btn-danger" to="/utilisateur/listUser"><FontAwesomeIcon icon={faStop} size="md" position="center"/><b> Annuler</b></Link>
                </form>
            </center>       
        </>
    )
}

export default EditUser
