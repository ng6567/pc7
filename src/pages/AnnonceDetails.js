import { useEffect, useState } from "react"; //Importer useEffect et useState
import { useNavigate, useParams } from "react-router-dom";
import "./AnnonceDetails.css";

import Annonces from "../data.json"; //Importation des données annonces
import VectorLeft from "../assets/VectorLeft.png"; //Importation image création bouton gauche
import VectorRight from "../assets/VectorRight.png"; //Importation image création bouton droit
import StarRating from "../components/StarRating";
import CollapseItem from "../components/CollapseItem";
import Footer from "../components/Footer";
import LogoFooter from "../assets/LogoFooter.png";

function AnnonceDetails() {
  const [annonce, setAnnonce] = useState({
    pictures: [],
    host: {},
    tags: [],
    equipments: [],
  }); //Constantes création states - décomposition - Changement d'etat
  const [currentImage, setCurrentImage] = useState(0);
  const navParams = useParams(); // Constante Hook récupération params
  const navigate = useNavigate(); //Constant méthode changement d'emplacement
  useEffect(() => {
    const annonceFound = Annonces.find((item) => item.id === navParams.id); // annonce correspondant selon son id
    if (annonceFound) {
      // si l'annonce est trouvée
      console.log(annonceFound);
      setAnnonce(annonceFound); //Afficher annonce
    } else {
      navigate("/non-trouve"); //Sinon redirection router : Ajout et remplacement URL non trouvé
    }
  }, [navParams.id, navigate]); //récupérer les paramètres d’itinéraire à partir du composant fonctionnel rendu par l’itinéraire id
  const navPrev = () => {
    //Navigation pour un retour image antérieure
    if (currentImage > 0) {
      // L'image actuelle n'est pas la première
      setCurrentImage(currentImage - 1); //Modification de l'image active : décrémente pour arriver à l'image antérieure
    } else {
      setCurrentImage(annonce.pictures.length - 1); //Sinon décrémentation vers dernière image
    }
  };
  const navNext = () => {
    //Navigation pour passer à l'image suivante
    if (currentImage < annonce.pictures.length - 1) {
      setCurrentImage(currentImage + 1); // Image actuelle incrémenter sur l'image suivante
    } else {
      setCurrentImage(0); // Sinon incrémentation vers deuxième image
    }
  };

  return (
    /*  HTML du composant / Création du Carrousel
    Création des boutons / ajout un écouteur d’événement sur bouton pour l’événement onClick
    Html composant : Ajout composant StarRating /Ajout composant Footer
    */
    <div className="AnnonceDetails">
      {annonce.pictures && (
        <div className="Annonces-carrousel">
          <img
            className="Carrousel-img"
            src={annonce.pictures[currentImage]}
            alt={annonce.title}
          />
          {annonce.pictures.length > 1 && (
            <nav>
              <button className="VectorLeft" onClick={navPrev}>
                <img src={VectorLeft} alt="VectorLeft" />
              </button>
              <button className="VectorRight" onClick={navNext}>
                <img src={VectorRight} alt="VectorRight" />
              </button>
            </nav>
          )}
        </div>
      )}
      <div className="AllComposantAnnonce">
        <div className="titleAndPseudo">
          <div className="titleDetails">
            <h1 className="Carrousel-title">{annonce.title}</h1>
            <p className="Location">{annonce.location}</p>
          </div>
          <div className="hostInfos">
            <img
              className="hostImage"
              src={annonce.host.picture}
              alt={annonce.host.name}
            />
            <p className="hostName">{annonce.host.name}</p>
          </div>
        </div>
        <div className="tagsAndRating">
          <div className="tags">
            {annonce.tags.map((tag, index) => (
              <div className="allTags" key={index}>
                {tag}
              </div>
            ))}
          </div>
          <div className="rating">
            <StarRating rating={annonce.rating} />
          </div>
        </div>
      </div>
      <div className="CollapseAll">
      <div className="CollapseDescription">
        <CollapseItem title="Description" text={annonce.description} />
        </div>
        <div className="CollapseEquipments">
        <CollapseItem
          title="Equipments"
          text={annonce.equipments.join("<br/>")}
        />
      </div>
      </div>
      <Footer image={LogoFooter} />
      
    </div>
  );
}
export default AnnonceDetails;
