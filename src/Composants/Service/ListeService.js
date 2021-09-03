import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import './ServiceTable.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStreetView, faTrash, faEdit, faHome, faPlus, faList} from '@fortawesome/free-solid-svg-icons';

const ListService = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadNames();
    }, []);

    const loadNames = async () => {
        const resultat = await axios.get("http://localhost:5000/serviceDonnes");
        setUser(resultat.data); 
    };

    const deleteUser = async id =>{
        const confirmation = alert("Voulez-vous vraiment supprimer cet service ?");
        if(!confirmation){
        }
        await axios.delete(`http://localhost:5000/serviceDonnes/${id}`);
        loadNames();
    }

    return(
        <>
            <div>
                <div className="sidebar">
                    <nav className="nav">
                        <ul>
                            <li className="active"><a href="/service"><FontAwesomeIcon icon={faHome}/> Accueil</a></li>
                            <li className="active"><a href="/service/AjoutService"><FontAwesomeIcon icon={faPlus}/> Ajouter service</a></li>
                            <li className="active"><a href="/service/listService"><FontAwesomeIcon icon={faList}/> Liste des services</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="container">
                    <h3 style={{marginLeft:"650px"}}>Liste des services</h3>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID du service</th>
                            <th>Nom de service</th>
                            <th>Code de service</th>
                            <th>Lieu du service</th>
                            <th>Mail du service</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>            
                        {users.map((user, index) => (
                        <tr ClassName="posts">
                            <td>{index + 1}</td>
                            <td className="col-lg-2">{user.nomService}</td>
                            <td className="col-lg-2">{user.codeService}</td>
                            <td className="col-lg-2">{user.lieuService}</td>
                            <td className="col-lg-2">{user.emailService}</td>
                            <td>
                                <div className="ml-auto">
                                    <Link className="btn btn-primary btn-xs" to={`/service/view/${user.id}`}><FontAwesomeIcon icon={faStreetView} size="md"/></Link> &nbsp; &nbsp;
                                    <Link className="btn btn-outline-primary btn-xs" to={`/service/edit/${user.id}`}><FontAwesomeIcon icon={faEdit} size="md"/></Link> &nbsp; &nbsp;
                                    <Link className="btn btn-danger" onClick={()=>deleteUser(user.id)}><FontAwesomeIcon icon={faTrash} size="md"/></Link>
                                </div>
                            </td>
                        </tr>               
                    ))}                  
                </tbody>
                </table>
                </div>
            </div>    
        </>
    );
    
};
    
export default ListService