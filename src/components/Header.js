import { Link } from "react-router-dom"; //Importation "route de mise en page" : composant partagé qui insère le menu de navigation sur toutes les pages
import "./Header.css" //Importation du style
import logo from '../assets/logo.png' //Importation du logo

//Fonction navigation déclarative et accessible autour de l'application - React router /link (basculer entre les pages sans recharger)

function Header(){ // HTML du composant
    return (
        <div className="Header">

            <nav className="Nav">
                <img src={logo} alt='logo' className='logo'/>
                <ul className="Accueil">
                    
                    <li>
                        <Link className='Nav-link' to = '/'>Accueil</Link> 
                    </li>
                    <li>
                        <Link className='Nav-link' to = '/A-propos'>A propos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header