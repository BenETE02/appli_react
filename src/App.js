import './App.css';
import AjoutService from './Composants/Service/AjoutService';
import Menu from './Composants/Menu';
import Accueil from './Composants/Accueil';
import Edit from './Composants/Service/EditService';
import View from './Composants/Service/viewService';
import Service from './Composants/Service/service';
import Utilisateur from './Composants/Users/utilisateur';
import AjoutUsers from './Composants/Users/AjoutUsers';
import React from 'react';
import AfficheUsers from './Composants/Users/AfficheUsers';
import EditUser from './Composants/Users/EditUser';
import ViewUsers from './Composants/Users/ViewUsers';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Affiche from './Composants/Service/Affiche';



function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Accueil}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/service/ajoutService" component={AjoutService}/>
        <Route exact path="/service/listService" component={Affiche}/>
        <Route exact path="/service/edit/:id" component={Edit}/>
        <Route exact path="/service/view/:id" component={View}/>
        <Route exact path="/utilisateur" component={Utilisateur} ></Route>
        <Route exact path="/utilisateur/ajoutUser" component={AjoutUsers} ></Route>
        <Route exact path="/utilisateur/listUser" component={AfficheUsers} ></Route>
        <Route exact path="/utilisateur/edit/:id" component={EditUser}></Route>
        <Route exact path="/utilisateur/view/:id" component={ViewUsers}></Route>
      </Switch>
    </BrowserRouter>
    
  )
}

export default App;
