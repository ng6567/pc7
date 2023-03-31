import "./NotFound.css";

//Composant Erreur - Redirection page introuvable url incorrecte/inexistante

function NotFound(){ //HTML du composant
    return (
        <div className="NotFound">
            <h1 className="NumberError">404</h1>
            <p className="MessageError">Oups! La page que vous demandez n'existe pas.</p>
        </div>
    );
}
export default NotFound