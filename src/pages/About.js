import Banner from "../components/Banner";
import BannerImage from "../assets/banner-about.png";
import "./About.css";
import Footer from "../components/Footer";
import LogoFooter from "../assets/LogoFooter.png";
import CollapseItem from "../components/CollapseItem";

/* Composant page About
    Importation attribut du composant banner
*/

function About({ text, title }) {
  //  HTML du composant
  return (
    <div>
      <div className="About">
        <Banner image={BannerImage} />
      </div>
      <div className="Fiabilité">
        <CollapseItem
          title="Fiabilité"
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
      </div>
      <div className="Respect">
        <CollapseItem
          title="Respect"
          text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
      </div>
      <div className="Service">
        <CollapseItem
          title="Service"
          text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
      </div>
      <div className="Sécurité">
        <CollapseItem
          title="Sécurité"
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer image={LogoFooter} />
    </div>
  );
}
export default About;
