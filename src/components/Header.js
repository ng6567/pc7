import { Link } from "react-router-dom"; //Importation "route de mise en page" : composant partagé qui insère le menu de navigation sur toutes les pages
import "./Header.css" //Importation du style
import logo from '../assets/logo.png' //Importation du logo

/*   Le composant Link utilise des props pour décrire l’emplacement vers lequel le lien doit naviguer.
    Le principal moyen de permettre aux utilisateurs de naviguer dans votre application. 
    Composant Header / Création barre de navigation  (logo, navigation liens pages : accueil, A propos)
    Après avoir importé Link, nous devons mettre à jour notre barre de navigation. 
    Au lieu d'utiliser a et href, React Router utilise Link et to pour pouvoir basculer entre les pages sans recharger la page.
    Ajouter deux nouveaux itinéraires About et Contact pour pouvoir basculer entre les pages.
    Ajout deux itinéraires Accueil et A propos pour pouvoir basculer entre les pages.
    Fournit une navigation déclarative et accessible autour de l'application.
*/
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