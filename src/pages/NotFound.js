import "./NotFound.css";
import { Link } from "react-router-dom";

//Composant Erreur - Redirection page introuvable url incorrecte/inexistante
//Lien retour page d'accueil

function NotFound(){ //HTML du composant
    return (
        <div className="NotFound">
            <h1 className="NumberError">404</h1>
            <p className="MessageError">Oups! La page que vous demandez n'existe pas.</p>
           
            <Link className='LinkAccueil' to = '/'>Retourner sur la page d'accueil</Link> 
            
        </div>
        
    );
}
export default NotFound