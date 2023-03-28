import Annonces from "../data.json"
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import BannerImage from "../assets/IMG.png"
import "./Home.css";


function Home(){
    console.log(Annonces)
    return (
        
        <div className="Home">
            <Banner title= 'Chez vous, partout et ailleurs' image ={BannerImage}/>
            <div className="Annonces-list"> 
                
                {Annonces.map((annonce)=>(
                    <Link className='Annonce-link' to = {`/Annonce/${annonce.id}`} key = {annonce.id}>
                        <img className='Annonce-img' src={annonce.cover} alt={annonce.title}/>
                    <div className="Annonce-content"> 
                        <h3 className="Annonce-title">
                            {annonce.title}
                        </h3>
                        <p>
                            {annonce.location}
                        </p>
                    </div>
                    </Link>
                   
                ))}
                
            </div>
        </div>
    );
}
export default Home