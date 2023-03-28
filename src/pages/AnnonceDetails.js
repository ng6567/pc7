import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AnnonceDetails.css";

import Annonces from "../data.json";
import VectorLeft from '../assets/VectorLeft.png'
import VectorRight from '../assets/VectorRight.png'

function AnnonceDetails() {
  const [annonce, setAnnonce] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const navParams = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const annonceFound = Annonces.find((item) => item.id === navParams.id);
    if (annonceFound) {
      setAnnonce(annonceFound);
    } else {
      navigate("/non-trouve");
    }
  }, [navParams.id]);
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
