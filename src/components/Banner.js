import "./Banner.css" //Importation du style

/*Fonction composant : argument props (propriétés) pour banner
    Utilisation de la destructuration
    Extraction des sections de données d’objets qui seront affecter à de nouvelles variables 
*/
function Banner(props){
    return (
        <div className="Banner">
            <img className='Banner-img' src={props.image} alt= 'Banner'/>
            {props.title && <h1 className="Banner-title">{props.title}</h1>}
        </div>
    );
}
export default Banner