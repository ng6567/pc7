import Banner from "../components/Banner";
import BannerImage from "../assets/banner-about.png";
import "./About.css";

/* Composant page About
    Importation attribut du composant banner
*/

function About(){ //  HTML du composant
    return (
        <div className="About">
            <Banner image = {BannerImage} />

        </div>
    );
}
export default About