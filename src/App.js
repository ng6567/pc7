//Importation fichier React router dom
import { Route, Routes } from 'react-router-dom';

//Importation des pages/fichiers
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import AnnonceDetails from './pages/AnnonceDetails';
import Header from './components/Header';
import "./App.css";



/* Agencement de notre application et traitement du routing
- Route : un itinéraire est un composant affiché conditionnellement qui fournit une interface utilisateur lorsque son chemin correspond à l’URL actuelle.
  Au lieu de traverser en séquence, les itinéraires sont sélectionnés en fonction de la meilleure correspondance.
  Le composant route nous aidera à établir le lien entre l’interface utilisateur du composant et l’URL.
- pathname : chaîne représentant le chemin à lier.
  Chemin spécifie un nom de chemin que nous affectons à notre composant.
- Element fait référence au composant qui sera rendu si le chemin d’accès correspond.
- Itinéraires : pour lire un seul composant, encapsulez tous les itinéraires à l’intérieur du composant Itinéraires.
- Nom de base : chaîne / URL de base de tous les emplacements. 
- Page contenu introuvable Création un chemin générique avec un astérisque('*')
*/
function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element = {<Home/>}></Route> 
      <Route path='/A-propos' element = {<About/>}></Route>
      <Route path='*' element = {<NotFound/>}></Route>
      <Route path='/Annonce/:id'  element = {<AnnonceDetails/>}></Route>
     </Routes>
    </div>
  );
}

export default App; //Importation fichier package webpack : lie les fichiers entre eux : interprétation des navigateurs
