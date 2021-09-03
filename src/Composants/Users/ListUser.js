import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import './ServiceTable.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStreetView, faTrash, faEdit, faHome, faUserPlus, faList} from '@fortawesome/free-solid-svg-icons';

const ListUser = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadNames();
    }, []);

    const loadNames = async () => {
        const resultat = await axios.get("http://localhost:5000/utilisateursDonnes");
        setUser(resultat.data); 
    };

    const deleteUser = async id =>{
        const confirmation = alert("Voulez-vous vraiment supprimer cet utilisateur ?");
        if(!confirmation){
        }
        await axios.delete(`http://localhost:5000/utilisateursDonnes/${id}`);
        loadNames();
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
            <div className="container">
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Noms</th>
                        <th scope="col">Prénoms</th>
                        <th scope="col">Sexe</th>
                        <th scope="col">Date naissance</th>
                        <th scope="col">Lieu naissance</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>            
                        {users.map((user, index) => (
                        <tr ClassName="posts">
                            <td>{index + 1}</td>
                            <td>{user.nom}</td>
                            <td>{user.prenom}</td>
                            <td>{user.sexe}</td>
                            <td>{user.date}</td>
                            <td>{user.lieu}</td>
                            <td>{user.email}</td>
                            <td>
                                <div className="ml-auto">
                                    <Link className="btn btn-primary btn-xs" to={`/utilisateur/view/${user.id}`}><FontAwesomeIcon icon={faStreetView} size="md"/></Link> &nbsp; &nbsp;
                                    <Link className="btn btn-outline-primary btn-xs" to={`/utilisateur/edit/${user.id}`}><FontAwesomeIcon icon={faEdit} size="md"/></Link> &nbsp; &nbsp;
                                    <Link className="btn btn-danger" onClick={()=>deleteUser(user.id)}><FontAwesomeIcon icon={faTrash} size="md"/></Link>
                                </div>
                            </td>
                        </tr>               
                    ))}                  
                </tbody>
            </table> 
            </div>           
        </>
    )
}

export default ListUser
