import Banner from "../components/Banner";
import BannerImage from "../assets/banner-about.png";
import "./About.css";


function About(){
    return (
        <div className="About">
            <Banner image = {BannerImage} />

        </div>
    );
}
export default About