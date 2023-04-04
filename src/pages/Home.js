import Annonces from "../data.json"; //Importation des données - détails des annonces
import { Link } from "react-router-dom"; // Importation "route de mise en page"
import Banner from "../components/Banner"; //Importation composant banner
import BannerImage from "../assets/IMG.png"; //Importation image
import "./Home.css"; //Imporation fichier css
import Footer from "../components/Footer";
import LogoFooter from "../assets/LogoFooter.png";

/* Composant page home 
    Importation des attributs du composant banner
*/
function Home() {
  // HTML du composant
  console.log(Annonces);
  return (
    //HTML du composant

    <div className="Home">
      <Banner title="Chez vous, partout et ailleurs" image={BannerImage} />
      <div className="Annonces-list">
        {Annonces.map(
          (
            annonce // Prendre la liste des données annonces et transformation en liste de composants
          ) => (
            // Clef annonce.id : associer la donnée au composant du Dom virtuel qui permettra de générer les composants
            
            <Link
              className="Annonce-link"
              to={`/Annonce/${annonce.id}`}
              key={annonce.id}
            >
              <img
                className="Annonce-img"
                src={annonce.cover}
                alt={annonce.title}
              />

              <div className="Annonce-content">
                <h3 className="Annonce-title">{annonce.title}</h3>
                <p className="Annonce-text">{annonce.location}</p>
              </div>
            </Link>
          )
        )}
      </div>
      <Footer image={LogoFooter} />
    </div>
  );
}
export default Home;
