import React from 'react'; //Importation react - API qui permettra de gérer les composants.
import ReactDOM from 'react-dom/client'; //Importation reactDom - API qui est responsable de générer les composants dans le DOM.
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; //Imporation React Router Dom (bibliothèque react-router-dom ) -
                                                  //permet la navigation React par programmation en gérant les itinéraires dans une application Web.


//ReactDOM pour attacher à notre HTML.
//createRoot permet de créer une racine pour afficher les composants React à l’intérieur du nœud 'root' du DOM de navigateur.
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( //Rendu de l'élément APP
  //StrictMode est un outil pour détecter les problèmes potentiels d’une application.
  //BrowserRouter composant parent utilisé pour stocker tous les autres composants.
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter> 
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
