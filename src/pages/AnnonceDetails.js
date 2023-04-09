import { useEffect, useState } from "react"; //Importer useEffect et useState
import { useNavigate, useParams } from "react-router-dom";
import "./AnnonceDetails.css";

import Annonces from "../data.json"; //Importation des données annonces
import VectorLeft from "../assets/VectorLeft.png"; //Importation image création bouton gauche
import VectorRight from "../assets/VectorRight.png"; //Importation image création bouton droit
import StarRating from "../components/StarRating"; //Importation composants étoiles
import CollapseItem from "../components/CollapseItem"; // Importation composants extensions ouvert/femé
import Footer from "../components/Footer"; //Importation composant footer
import LogoFooter from "../assets/LogoFooter.png"; //Importation logo footer

//Affichage annonce/id et Création navigation next/previous

function AnnonceDetails() {
  const [annonce, setAnnonce] = useState({
    pictures: [],
    host: {},
    tags: [],
    equipments: [],
  });
  const [currentImage, setCurrentImage] = useState(0);
  const navParams = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const annonceFound = Annonces.find((item) => item.id === navParams.id);
    if (annonceFound) {
      console.log(annonceFound);
      setAnnonce(annonceFound);
    } else {
      navigate("/non-trouve");
    }
  }, [navParams.id, navigate]);
  const navPrev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(annonce.pictures.length - 1);
    }
  };
  const navNext = () => {
    if (currentImage < annonce.pictures.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };

  return (
    /*  HTML du composant / Création du Carrousel
    Création des boutons navigation next et previous/ 
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
          {annonce.pictures.length > 1 &&(
            <div className="div-compteur">
              <p className="compteur-img">
                {currentImage +1}/{annonce.pictures.length}
              </p>
            </div>
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
