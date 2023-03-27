import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AnnonceDetails.css";
import Annonces from '../data.json'



function AnnonceDetails(){
    const [annonce, setAnnonce ] = useState({})
    const navParams = useParams()
    useEffect(() => {
        setAnnonce(Annonces.find(item => item.id === navParams.id))
    }, [navParams.id] )
    return (
        <div className="AnnonceDetails">
            <h1>{annonce.title}</h1>
        </div>
    );
}
export default AnnonceDetails