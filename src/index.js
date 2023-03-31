import React from 'react'; //Importation react
import ReactDOM from 'react-dom/client'; //Importation reactDom
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; //Imporation React Router Dom (bibliothèque react-router-dom )

/*- API ReactDOM est utilisé pour restituer les composants React dans le DOM. 
  API pour la manipulation DOM et un moyen d’accéder aux nœuds et éléments DOM.
  Rendre les composants React dans l'arborescence DOM HTML
  application des attributs spécifiques à React et des mises à jour aux éléments DOM lorsque les données changent.

  - Méthode createRoot : facilite la création de l'application qui peut être incorporée dans une structure DOM existante
  paramètre conteneur, qui est un élément DOM HTML et retourne un composant ReactDOM racine.
  utilisé avec ReactDOM.render() pour restituer les composants React dans le DOM.

  - Méthode render : utilisée pour rendre les composants React dans une arborescence DOM HTML
  Apelé avec l’élément racine de l’application, puis il est utilisé pour restituer tous les autres composants dans le DOM. 
  Moyen de contrôler la façon dont les composants sont affichés et mis à jour dans le navigateur.
  Lorsque le composant est rendu, React se charge également du montage et du démontage du composant. 

  - StrictMode : outil de développement React, principalement utilisé pour identifier les problèmes potentiels dans une application Web. 
  Affiche les failles potentielles de l’application.
  Développer des programmes plus compréhensibles et sécurisés.

  - React Router est une bibliothèque standard pour le routage dans React. 
  Il permet la navigation entre les vues de différents composants dans une application React
  Permet de modifier l’URL du navigateur et maintient l’interface utilisateur synchronisée avec l’URL.
  
  - BrowserRoute/Routeur Navigateur : Il s’agit du composant parent utilisé pour stocker tous les autres composants.
  Ajout BrowserRouter aliasé en tant que routeur au fichier .js application pour encapsuler tous les autres composants. 
  BrowserRouter est un composant parent et ne peut avoir qu’un seul enfant.
*/

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
