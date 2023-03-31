import { useEffect, useState } from "react"; //Importer useEffect et useState
import { useNavigate, useParams } from "react-router-dom";
import "./AnnonceDetails.css";


import Annonces from "../data.json"; //Importation des données annonces
import VectorLeft from '../assets/VectorLeft.png'//Importation image création bouton gauche
import VectorRight from '../assets/VectorRight.png'//Importation image création bouton droit
/*Use state : Utilisateur peuvent agir interagir avec les données.
              Agir sur les applications : entrer des informations et modifier les données affichées et garder ses données entrées
              Hook qui permet d’ajouter le state local React à des composants fonctions.
  Création states: décompostion []
              renvoie une paire de valeurs dans un tableau de 2 éléments récupérer dans les variables annonce/setAnnonce - CurrentImage/setCurrentImage
              Le premier élément est la valeur actuelle, et le deuxième est une fonction qui permet de la modifier.
              Etats initials définis
  UseParams : Hook pour récupérer les paramètres de routage dans le composant 
              Elle renvoie un objet.
              Les clés d’objet sont les noms de paramètres déclarés dans la chaîne de chemin d’accès dans la définition de gamme, 
              les valeurs sont le segment d’URL correspondant à partir de l’URL correspondante
  UseNavigate : renvoie une méthode impérative que utilisée pour changer d’emplacement.
   la méthode "useNavigate" pour récupérer un objet qui peut modifier l'historique du navigateur. 
*/
/*Création du carrousel
ans cet événement, nous avons appelé fonctions, une fonction p et une autre fonction pour fonction. 
Pour cette fonctions, nous avons ajouté un hook d’état, dans lequel nous avons ajouté 0 comme valeur par défaut, 
et nous pouvons faire défiler les images lorsque les vecteurs sont cliquées
Vérification de la condition lorsque l'index de l'image actuelle supérieur à 0, si oui on décrémente.
Si index de l'image actuelle lenght -1 (décrémenter le nombre de fois en fonction de l'image) on décrémente de nouveau la série d'image
Vérification de la condition lorsque ndex de l'image actuelle lenght -1 (décrémenter le nombre de fois en fonction de l'image), on incrémente de nouveau la série d'image
Sinon on passe à la suivante 
*/
function AnnonceDetails() {
  const [annonce, setAnnonce] = useState({}); //Constantes création states - décomposition - Changement d'etat
  const [currentImage, setCurrentImage] = useState(0);
  const navParams = useParams(); // Constante Hook récupération params
  const navigate = useNavigate(); //Constant méthode changement d'emplacement
  useEffect(() => {
    const annonceFound = Annonces.find((item) => item.id === navParams.id);// 
    if (annonceFound) { // si l'annonce est trouvée
      setAnnonce(annonceFound); //Afficher annonce 
    } else {
      navigate("/non-trouve"); //Sinon redirection router : Ajout et remplacement URL non trouvé
    }
  }, [navParams.id]); //récupérer les paramètres d’itinéraire à partir du composant fonctionnel rendu par l’itinéraire id
  const navPrev = () => { //Navigation pour un retour image antérieure
    if (currentImage > 0) { // L'image actuelle n'est pas la première
      setCurrentImage(currentImage - 1); //Modification de l'image active : décrémente pour arriver à l'image antérieure
    } else {
      setCurrentImage(annonce.pictures.length - 1); // appelée un certain nombre de fois en fonction du nombre d'image du Carrousel.
    }
  };
  const navNext = () => { //Navigation pour passer à l'image suivante
    if (currentImage < annonce.pictures.length - 1) { //Appel d'un certain nombre de fois en fonction du du nombre d'image du Carrousel.
      setCurrentImage(currentImage + 1);// Image actuelle incrémenter sur l'image suivante
    } else {
      setCurrentImage(0);// Retour image initiale pour nouvelle incrémentation
    }
  };
  return ( //  HTML du composant /Création des boutons / ajout un écouteur d’événement sur bouton pour l’événement onClick
    <div className="AnnonceDetails">
      {annonce.pictures && (
        <div className="Annonces-carrousel">
          <img className="Carrousel-img" src={annonce.pictures[currentImage]} alt={annonce.title} />
          {annonce.pictures.length>1 && <nav>
            <button className='VectorLeft' onClick={navPrev}><img  src={VectorLeft} alt='VectorLeft'/></button> 
            <button className='VectorRight' onClick={navNext}><img src={VectorRight} alt='VectorRight'/></button>
          </nav>}
        </div>
      )}
      
      <h1 className="Carrousel-title" >{annonce.title}</h1>
    </div>
  );
}
export default AnnonceDetails;
