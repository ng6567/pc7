import Banner from "../components/Banner";
import BannerImage from "../assets/banner-about.png";
import "./About.css";
import Footer from "../components/Footer";
import LogoFooter from "../assets/LogoFooter.png";



/* Composant page About
    Importation attribut du composant banner
*/

function About(){ //  HTML du composant
    return (
    <div> 
        <div className="About">
            <Banner image = {BannerImage} />
           
        </div>
        <Footer image={LogoFooter}/>
    </div>
    );
    
}
export default About