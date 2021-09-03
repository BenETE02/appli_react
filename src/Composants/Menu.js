import React from "react";
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers, faCogs, faSkullCrossbones} from '@fortawesome/free-solid-svg-icons';


function Menu() {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{paddingLeft:"50px"}}>
            <a className="navbar-brand" href="/"><FontAwesomeIcon icon={faSkullCrossbones}/> Ben_ReactJS_APP</a>          
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"1100px"}}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/service"><FontAwesomeIcon icon={faCogs}/> SERVICES</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/utilisateur"><FontAwesomeIcon icon={faUsers} size="md"/> UTILISATEURS</NavLink>
                    </li>
                </ul> 
            </div>
        </nav>

        /*<form className="form-inline my-2 my-lg-0">
                <div className="row">
                    <div className="col-md-6">
                        <input className="form-control mr-sm-2" type="search" placeholder="Recherche" aria-label="Search"/>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Recherche</button>
                    </div>
                </div>
            </form>*/
    );
}
    
export default Menu